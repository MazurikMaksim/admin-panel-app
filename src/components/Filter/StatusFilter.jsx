import { useState } from "react";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import { FilterDropdown } from "../Filter/FilterDropdown";

const mainComponentWrapperClass = "filter__input";
const statusFilterSvgName = "v_arrow";
const labelClassName = "filter__input-control";
const buttonClassName = "filter__input-button";
const inputClassName = "filter__input-area";
const inputWrapperClassName =
  "filter__input-field filter__input-field_empty filter__input-field_long";
const statusTitleClass = "filter__input-title";
const StatusFilter = ({ statusValue, onChange, children }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownVisible = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={mainComponentWrapperClass}>
      <FilterDropdown
        isVisible={dropdownVisible}
        onMouseLeave={handleDropdownVisible}
        onChange={onChange}
      />
      <label className={labelClassName}>
        <span className={statusTitleClass}>{children}</span>
        <div className={inputWrapperClassName}>
          <Input
            className={inputClassName}
            placeholder="Выберите статус заказа"
            value={statusValue}
            name="statuses"
            onFocus={handleDropdownVisible}
            onChange={handleDropdownVisible}
          />
          <Button
            className={buttonClassName}
            svgName={statusFilterSvgName}
            onClick={handleDropdownVisible}
          />
        </div>
      </label>
    </div>
  );
};

export default StatusFilter;
