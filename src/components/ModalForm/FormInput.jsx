import Button from "../Elements/Button";
import Input from "../Elements/Input";
import modalForm from "./styles/ModalForm.module.css";

const FormInput = ({
  icon = "incorrect",
  placeholder = "dd.mm.dddd",
  isDisabled = false,
  title,
  defaultValue,
  isValid = true,
  value,
  onChange,
  children,
  buttonHandler,
  type,
  onFocus,
  onClick,
}) => {
  let areaClass;

  if (isDisabled) {
    areaClass = modalForm.input_field + " " + modalForm.input_disabled;
  } else if (isValid) {
    areaClass = modalForm.input_field;
  } else {
    areaClass = modalForm.input_field + " " + modalForm.input_incorrect;
  }

  return (
    <div className={modalForm.input_wrapper}>
      <label className={modalForm.input_label}>
        <span className={modalForm.input_title}>{title}</span>
        <div className={areaClass}>
          <Input
            className={modalForm.input_area}
            placeholder={placeholder}
            defaultValue={defaultValue}
            isDisabled={isDisabled}
            value={value}
            onChange={onChange}
            type={type}
            onFocus={onFocus}
            onClick={onClick}
          />
          <Button
            className={modalForm.button}
            svgName={icon}
            iconClassName={modalForm.input_icon}
            onClick={buttonHandler}
          />
          {children}
        </div>
      </label>
    </div>
  );
};

export default FormInput;
