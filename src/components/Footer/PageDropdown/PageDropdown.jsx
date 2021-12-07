import style from "./PageDropdown.module.css";

export const PageDropdown = ({ isVisible = true, onSubmit }) => {
  const blockClass = isVisible ? style._ : [style._, style.hidden].join(" ");
  return (
    <form className={blockClass} onSubmit={onSubmit}>
      <label className={style.control}>
        <span className={style.title}>Номер страницы</span>
        <div className={style.inputWrapper}>
          <input
            className={style.input}
            placeholder="Введите номер"
            name="page"
            autoComplete="off"
          />
        </div>
      </label>
    </form>
  );
};
