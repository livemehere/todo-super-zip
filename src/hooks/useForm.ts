import { ChangeEvent, useState } from "react";

interface StateType {
  [key: string]: any;
}

export default function useForm<T = StateType>(
  initialValue: T
): [T, (e: ChangeEvent<HTMLInputElement>, key: any) => void, () => void] {
  const [form, setForm] = useState<T>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const reset = () => {
    setForm(initialValue);
  };

  return [form, handleChange, reset];
}
