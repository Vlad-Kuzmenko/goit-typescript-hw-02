import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();

    if (value === "") {
      return toast.error("Write the request");
    }

    onSearch(value);
    e.target.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          <IoSearch className={s.icon} size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
