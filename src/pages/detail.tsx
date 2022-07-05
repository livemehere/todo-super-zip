import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Spinner from "../components/spinner";

export default function Detail() {
  const { id } = useParams();
  //TODO: Redux 에서 id 에 해당하는 todo 받아와서, 내용 뿌리기
  return <div>Detail {id}</div>;
}
