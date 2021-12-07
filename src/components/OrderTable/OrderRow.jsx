import Checkbox from "../Elements/Checkbox";
import SvgElement from "../Icons/SvgElement";
import {
  formatDate,
  formatSum,
  formatCount,
} from "../../additional_elements/FormatFunctions";

const orderLabelClass = "table__checkbox-control";
const rowClass = "table__item-row";
const itemClass = "table__header-item";
const itemTextClass = "table__header-item-text";
const blockClassPrimary = "table__item";
const blockClassChecked = "table__item table__item_checked";

const STATUS_ICON_MAP = {
  Новый: "dot",
  Расчет: "dot",
  Выполнен: "checkmark",
  Отменен: "abort",
  Отложен: "dot",
};

const STATUS_CLASS_MAP = {
  Новый: "table__header-item",
  Расчет: "table__header-item table__header-item_blue",
  Выполнен: "table__header-item table__header-item_green",
  Отменен: "table__header-item table__header-item_half-transparent",
  Отложен: "table__header-item",
};

export const OrderRow = ({
  id,
  creationDate,
  status,
  positionsCount,
  sum,
  name,
  onClick,
  onChange,
  CheckedId,
}) => {
  const isOrderChecked = CheckedId.includes(id);
  const blockClass = isOrderChecked ? blockClassChecked : blockClassPrimary;

  return (
    <div className={blockClass} onClick={onClick} name={id}>
      <div className={rowClass} name={id}>
        <div className={itemClass}>
          <label className={orderLabelClass}>
            <Checkbox onChange={onChange} name={id} checked={isOrderChecked} />
          </label>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{id}</span>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{formatDate(creationDate)}</span>
        </div>
        <div className={STATUS_CLASS_MAP[status]}>
          <SvgElement svgName={STATUS_ICON_MAP[status]} />
          <span className={itemTextClass}>{status}</span>
        </div>
        <li className={itemClass}>
          <span className={itemTextClass}>{formatCount(positionsCount)}</span>
        </li>
        <div className={itemClass}>
          <span className={itemTextClass}>{formatSum(sum)}</span>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{name}</span>
        </div>
      </div>
    </div>
  );
};
