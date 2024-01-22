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
import { useState } from "react";

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
  const [phase, setPhase] = useState(1);

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
    <S.ModalWrapper>
      {phase === 1 && (
        <>
          <h1>Antes de qualquer coisa</h1>
          <p>
            O propósito desse aplicativo é te ajudar a diminuir a frequência de
            hábitos ruins durante o ano.
          </p>
          <p>
            Há habitos que são tão prejudiciais que a ideia seria acabar com ele
            de fato.
          </p>
          <p>
            Então caso o experimento tenha sucesso nesse ano, no próximo tente
            não usar mais esse app, mas sim eliminar o que te prejudica de vez
          </p>
          <Button
            type="button"
            text="entendi"
            className="w-full"
            onClick={() => setPhase(2)}
          />
        </>
      )}
      {phase === 2 && (
        <form onSubmit={onSubmit}>
          <h1>Seja bem vindo!</h1>
          <p>Para continuar, precisamos de algumas informações básicas</p>
          <section>
            <InputText
              label="Nome"
              error={errors?.name}
              {...register("name")}
            />
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
        </form>
      )}
    </S.ModalWrapper>
  );
};
