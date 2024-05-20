import css from "./ListButtonsItem.module.css";
export const ListButtonsItem = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};
