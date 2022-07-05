import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Spinner from "../components/spinner";

export default function Detail() {
  const { id } = useParams();
  return <div>Detail {id}</div>;
}
