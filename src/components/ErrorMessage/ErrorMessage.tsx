import s from "./ErrorMessage.module.css";

type ErorProps = {
  error: string;
};

const ErrorMessage = ({ error }: ErorProps) => {
  return <p className={s.error}>Whoops, {error}! Please try different one.</p>;
};

export default ErrorMessage;
