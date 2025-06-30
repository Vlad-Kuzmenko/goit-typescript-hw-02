import { ScaleLoader } from "react-spinners";
import s from "./Loader.module.css";

const override: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <ScaleLoader cssOverride={override} color="#36d7b7" />
    </div>
  );
};
