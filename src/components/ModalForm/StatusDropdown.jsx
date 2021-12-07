import dropdown from "./styles/status-dropdown.module.css";

const DROPDOWN_STATUSES = ["Новый", "Расчет", "Отложен", "Выполнен", "Отменен"];

const StatusDropdown = ({
  className = dropdown._,
  isVisible,
  id = "status-dropdown",
  onChange,
  onMouseLeave,
  checkedValue,
}) => {
  const dropdownClass = isVisible
    ? className
    : [className, dropdown.hidden].join(" ");

  const dropdownStatusRender = DROPDOWN_STATUSES.map((element) => {
    return (
      <label className={dropdown.control} key={element}>
        <li className={dropdown.item}>
          <input
            className={dropdown.radio}
            type="radio"
            name="status"
            value={element}
            defaultChecked={checkedValue === element ? "checked" : false}
          />
          <span className={dropdown.title}>{element}</span>
        </li>
      </label>
    );
  });

  return (
    <form className={dropdownClass} id={id} onChange={onChange}>
      <ul className={dropdown.list} onMouseLeave={onMouseLeave}>
        {dropdownStatusRender}
      </ul>
    </form>
  );
};

export default StatusDropdown;
