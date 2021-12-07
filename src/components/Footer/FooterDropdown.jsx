import Button from "../Elements/Button";

const formClassname = "table__footer-dropdown";
const textClassName = "table__dropdown-title";
const deleteButtonClass =
  "table__dropdown-button table__dropdown-button_transparent";
const cancelButtonClass = "table__dropdown-button";

export const FooterDropdown = ({
  ordersCount,
  deleteHandler,
  cancelHandler,
}) => {
  return (
    <form className={formClassname}>
      <span className={textClassName}>Удалить {ordersCount} записей?</span>
      <Button className={deleteButtonClass} onClick={deleteHandler}>
        Удалить
      </Button>
      <Button className={cancelButtonClass} onClick={cancelHandler}>
        Отмена
      </Button>
    </form>
  );
};
