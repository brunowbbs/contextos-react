import { useContext } from "react";
import { AppContext } from "../../contexts/app-context";

export default function Box(props) {
  const { count } = useContext(AppContext);

  return <div>{count}</div>;
}
