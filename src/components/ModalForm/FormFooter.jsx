import modalForm from "./styles/ModalForm.module.css";
import Button from "../Elements/Button";
import { Loader } from "../Elements/Loader";

const FormFooter = ({ buttonHandler, error }) => {
  return (
    <footer className={modalForm.footer}>
      <div className={modalForm.footer__text}>
        <Loader isLoading />
        {error}
      </div>

      <Button
        className={modalForm.footer__button}
        svgName="checkmark"
        iconClassName={modalForm.footer__icon}
        onClick={buttonHandler}
      >
        Сохранить
      </Button>
    </footer>
  );
};

export default FormFooter;
