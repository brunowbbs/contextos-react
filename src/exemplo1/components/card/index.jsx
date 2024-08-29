import { useContext } from "react";
import Box from "../box";
import { AppContext } from "../../contexts/app-context";

export default function Card(props) {
  const { count, incrementar } = useContext(AppContext);

  return (
    <div>
      <h1>Hello Card - {count}</h1>
      <Box title={props.title} />

      <button onClick={incrementar}>INCREMENTAR</button>
    </div>
  );
}
