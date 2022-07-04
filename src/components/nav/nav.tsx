import { ColorMode } from "../../App";

interface Props {
  mode: ColorMode;
  setMode: (value: ColorMode) => void;
}

export default function Nav({ mode, setMode }: Props) {
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <nav>
      <button onClick={handleMode}>
        {mode === "dark" ? "라이트모드" : "다크모드"}
      </button>
    </nav>
  );
}
