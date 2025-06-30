import s from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={s.btn} onClick={onClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
