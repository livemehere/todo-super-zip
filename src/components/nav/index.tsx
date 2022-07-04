import { ColorMode } from "../../App";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { ColorButton, NavContainer } from "./style";
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
    <NavContainer>
      <h1>Kong's Awesome Todo</h1>
      <ColorButton onClick={handleMode}>
        {mode === "dark" ? (
          <BsBrightnessHigh size={30} />
        ) : (
          <MdDarkMode size={30} />
        )}
      </ColorButton>
    </NavContainer>
  );
}
