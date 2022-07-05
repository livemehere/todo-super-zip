import { ProgressBar, ProgressInner } from "./style";

interface Props {
  mount: number;
}

export default function Progress({ mount }: Props) {
  return (
    <ProgressBar>
      <ProgressInner mount={mount}>{mount.toFixed(0)}%</ProgressInner>
    </ProgressBar>
  );
}
