import { Addict } from "../store/addict-store";
import { feedMonthAddict } from "./feed-month-addict";

const arr: Addict[] = [
  {
    id: "4db5ee24-0408-4088-9300-29fab64aafd9",
    owner_id: "f9d32c6b-12f6-4124-9367-5bc39898ded9",
    created_at: "2024-01-10T19:31:05.286Z",
    deleted_at: null,
  },
  {
    id: "88d95591-ad50-42e6-a0ab-fd7db9932355",
    owner_id: "f9d32c6b-12f6-4124-9367-5bc39898ded9",
    created_at: "2024-01-15T19:31:05.286Z",
    deleted_at: null,
  },
];

describe("Sorting Addicts", () => {
  beforeEach(() => {
    vi.useFakeTimers({
      now: new Date("2024-01-20T01:00:00.286Z"),
    });
  });

  test("should show correct arr", () => {
    const sorted = feedMonthAddict(arr);

    expect(sorted.length).toBe(0);
  });

  test("should show only this month arr", () => {
    const newArr = [...arr];
    newArr[0].deleted_at = "2023-01-22T19:31:05.286Z";
    newArr[1].deleted_at = "2024-01-22T19:31:05.286Z";

    const sorted = feedMonthAddict(newArr);

    expect(sorted.length).toBe(1);
  });
});

test("should show recent first", () => {
  const newArr = [...arr];
  newArr[0].id = "FIRST";
  newArr[0].deleted_at = "2024-01-15T19:31:05.286Z";

  newArr[1].id = "SECOND";
  newArr[1].deleted_at = "2024-01-19T19:31:05.286Z";

  const sorted = feedMonthAddict(newArr);

  expect(sorted[0].id).toBe("SECOND");
});
