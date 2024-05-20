import { ListButtonsItem } from "..";
import css from "./ListButtons.module.css";

export const ListButtons = ({
  listNumbers,
  listOperations,
  onClick,
  onResult,
}) => {
  const handleClick = (event) => {
    onClick(event.target.value);
  };
  const handleEqual = () => {
    onResult();
  };

  return (
    <ul className={css.list}>
      {listNumbers.map((number) => (
        <ListButtonsItem key={number.toString()}>
          <button className={css.button} value={number} onClick={handleClick}>
            {number}
          </button>
        </ListButtonsItem>
      ))}
      {listOperations.map((operation) => (
        <ListButtonsItem key={operation}>
          <button
            className={css.button_operation}
            value={operation}
            onClick={handleClick}
          >
            {operation}
          </button>
        </ListButtonsItem>
      ))}
      <ListButtonsItem>
        <button className={css.button_operation} onClick={handleEqual}>
          =
        </button>
      </ListButtonsItem>
    </ul>
  );
};
