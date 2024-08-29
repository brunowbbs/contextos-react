import { useContext } from "react";
import { AppContext } from "../../contexts/app-context";
import Card from "../../components/card";

export default function Home() {
  const { count } = useContext(AppContext);

  return (
    <div>
      <h1>COUNT: {count}</h1>
      <Card title="TITULO DO BOX" />
    </div>
  );
}
