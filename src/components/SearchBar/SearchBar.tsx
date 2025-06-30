import { FormEvent } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (
      e.currentTarget.elements.namedItem("search") as HTMLInputElement
    ).value.trim();

    if (value === "") {
      return toast.error("Write the request");
    }

    onSearch(value);
    (e.target as HTMLFormElement).reset();
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
