import Dropdown from "./styles/Dropdown.module.css";
import Button from "../Elements/Button";

const submitButtonClass = Dropdown.button + " " + Dropdown.transparent;
const cancelButtonClass = Dropdown.button;

const FooterDropdown = ({ isOpen = true, handleResetButton, handleButton }) => {
  const blockClass = isOpen
    ? Dropdown._
    : Dropdown._ + [Dropdown._, Dropdown.hidden].join(" ");

  return (
    <form className={blockClass}>
      <span className={Dropdown.title}>Есть несохраненные изменения</span>
      <Button
        className={submitButtonClass}
        textClassName={Dropdown.text}
        iconClassName={Dropdown.icon}
        onClick={handleResetButton}
      >
        Сбросить
      </Button>
      <Button
        className={cancelButtonClass}
        textClassName={Dropdown.text}
        iconClassName={Dropdown.icon}
        onClick={handleButton}
      >
        Остаться
      </Button>
    </form>
  );
};

export default FooterDropdown;
