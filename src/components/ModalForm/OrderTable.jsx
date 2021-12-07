import modalForm from "./styles/ModalForm.module.css";
import { OrderFormItem } from "./OrderFormItem";
import { formatSum } from "../../additional_elements/FormatFunctions";

const OrderTable = ({ orders, sum }) => {
  const ordersRender = orders
    ? orders.map((item) => {
        return <OrderFormItem {...item} key={item.article + Math.random()} />;
      })
    : [];

  return (
    <div className={modalForm.OrderTable}>
      <div className={modalForm.OrdersList}>
        <div className={modalForm.ListHeader}>
          <div className={modalForm.ListItem}>Артикул</div>
          <div className={modalForm.ListItem}>Наименование</div>
          <div className={modalForm.ListItem}>Цена</div>
        </div>

        {ordersRender}

        <div className={modalForm.ListFooter}>
          {`Итоговая сумма: ${formatSum(sum)}`}
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
