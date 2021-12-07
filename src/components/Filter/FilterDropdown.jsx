import Checkbox from "../Elements/Checkbox";
import dropdown from "./styles/filter-dropdown.module.css";
import { capitalize } from "../../additional_elements/FormatFunctions";

const DROPDOWN_STATUSES = [
  "новый",
  "расчет",
  "подтвержден",
  "отложен",
  "выполнен",
  "отменен",
];

export const FilterDropdown = ({
  className = dropdown._,
  isVisible,
  DropdownStatuses = DROPDOWN_STATUSES,
  onChange,
  onMouseLeave,
}) => {
  const dropdownClass = isVisible
    ? className
    : [className, dropdown.hidden].join(" ");

  const dropdownStatusRender = DropdownStatuses.map((element) => {
    return (
      <label className={dropdown.control} key={element}>
        <div className={dropdown.item}>
          <Checkbox onChange={onChange} name={capitalize(element)} />
          <span className={dropdown.title}>{capitalize(element)}</span>
        </div>
      </label>
    );
  });

  return (
    <div className={dropdownClass} onMouseLeave={onMouseLeave}>
      {dropdownStatusRender}
    </div>
  );
};
