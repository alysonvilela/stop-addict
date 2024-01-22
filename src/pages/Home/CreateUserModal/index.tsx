import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import * as S from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputNumber } from "../../../components/InputNumber";
import { useAddictStore } from "../../../store/addict-store";
import { useUserStore } from "../../../store/user-store";
import { useNavigate } from "react-router-dom";

const createUserSchema = z.object({
  name: z.string().min(2, "Adicione um valor válido"),
  addict_name: z.string().min(2, "Adicione um valor válido"),
  yearQuantity: z.coerce
    .number()
    .nonnegative("O número não pode ser negativo")
    .min(1, "Adicione um número palpável"),
});

type FormValues = z.infer<typeof createUserSchema>;

export const CreateUserModal = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      addict_name: "",
      name: "",
      yearQuantity: 0,
    },
    resolver: zodResolver(createUserSchema),
  });
  const navigate = useNavigate();
  const makeUser = useUserStore((state) => state.set);
  const setAddict = useAddictStore((state) => state.setAddict);

  const onSubmit = handleSubmit((data) => {
    setAddict(data.addict_name, data.yearQuantity);
    makeUser(data.name);
    navigate("/feed");
  });

  return (
    <form onSubmit={onSubmit}>
      <S.ModalWrapper>
        <h1>Seja bem vindo!</h1>
        <p>Para continuar, precisamos de algumas informações básicas</p>
        <section>
          <InputText label="Nome" error={errors?.name} {...register("name")} />
          <InputText
            label="O que você gostaria de diminuir a frequencia"
            error={errors?.addict_name}
            {...register("addict_name")}
          />
          <InputNumber
            control={control}
            label={`Quantidade maxima nesse ano`}
            suffix="/ano"
            {...register("yearQuantity")}
          />
        </section>
        <div className="buttons">
          <Button type="submit" text="confirmar" className="w-full" />
        </div>
      </S.ModalWrapper>
    </form>
  );
};
