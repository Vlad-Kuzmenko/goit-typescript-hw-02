import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return (
    <p className={s.error}>
      Whoops, something went wrong! Please try different one.
    </p>
  );
};

export default ErrorMessage;
