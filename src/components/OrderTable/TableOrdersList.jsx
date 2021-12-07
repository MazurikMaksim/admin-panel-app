import { OrderRow } from "./OrderRow";

export const TableOrdersList = ({
  className,
  listClass,
  orders,
  onClick,
  onChange,
  CheckedId,
}) => {
  const blockClass = className ? className : "table__body";
  const listMainClass = listClass ? listClass : "table__list";
  const ordersRender = orders.map((order) => {
    return (
      <OrderRow
        {...order}
        key={order.id}
        onClick={onClick}
        onChange={onChange}
        CheckedId={CheckedId}
      />
    );
  });

  return (
    <div className={blockClass}>
      <div className={listMainClass}>{ordersRender}</div>
    </div>
  );
};
