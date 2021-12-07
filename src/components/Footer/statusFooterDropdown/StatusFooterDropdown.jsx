import dropdown from "./status-dropdown.module.css";

const DROPDOWN_STATUSES = ["Новый", "Расчет", "Отложен", "Выполнен", "Отменен"];

export const StatusFooterDropdown = ({
  className = dropdown._,
  isVisible,
  id = "footer-dropdown",
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
          />
          <span className={dropdown.title}>{element}</span>
        </li>
      </label>
    );
  });

  return (
    <form
      className={dropdownClass}
      id={id}
      onChange={onChange}
      onMouseLeave={onMouseLeave}
    >
      <ul className={dropdown.list}>{dropdownStatusRender}</ul>
    </form>
  );
};
