import { SpinnerBackground, SpinnerOuter } from "./style";

export default function Spinner() {
  return (
    <SpinnerBackground>
      <SpinnerOuter>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerOuter>
    </SpinnerBackground>
  );
}
