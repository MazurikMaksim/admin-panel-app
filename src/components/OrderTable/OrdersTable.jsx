import TableHeader from "./TableHeader";
import { TableOrdersList } from "./TableOrdersList";
import { TableFooter } from "./TableFooter";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../redux/orders";
import { formActions } from "../../redux/modalForm";
import { checkedOrdersActions } from "../../redux/groupActions";
import { useState } from "react";
import { FooterActions } from "../Footer/FooterActions";
import { iconsActions } from "../../redux/icons";
import { selectors } from "../../redux/selectors/selectors";
import { Pagination } from "../Pagination/Pagination";
import { paginationActions } from "../../redux/pagination";

const FILTERS_MAP = {
  Дата: "creationDate",
  Статус: "status",
  Позиций: "positionsCount",
  Сумма: "sum",
};

export const OrdersTable = () => {
  const [isAscending, setIsAscending] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const iconsPosition = useSelector(selectors.getIconsPositions);
  const checkedOrders = useSelector(selectors.getCheckedOrders);
  const maxNumberOfPage = useSelector(selectors.getMaxPage);
  const currentPage = useSelector(selectors.getCurrentPage);
  const orders = useSelector(selectors.getOrdersList);
  const ordersList = !!orders ? orders : [];
  const handleFilterSort = (event) => {
    const valueToSort = event.target.innerText;
    dispatch(
      ordersActions.sortOrders({
        value: FILTERS_MAP[valueToSort],
        SortUp: isAscending,
      })
    );
    setIsAscending(!isAscending);
    dispatch(iconsActions.rotateIcon(FILTERS_MAP[valueToSort]));
  };

  const handleCheckbox = (event) => {
    const checkedId = Number(event.target.name);
    const CheckboxIsChecked = event.target.checked;
    if (CheckboxIsChecked) {
      dispatch(checkedOrdersActions.setCheckedOrders([checkedId]));
    } else {
      dispatch(checkedOrdersActions.deleteCheckedOrders([checkedId]));
    }
  };

  const handleRowClick = (event) => {
    const orderId = Number(event.currentTarget.getAttribute("name"));
    const orderToSetFormData = orders.find((item) => item.id === orderId);
    dispatch(formActions.setOrder(orderToSetFormData));
    dispatch(formActions.setVisible());
  };

  const handleCheckboxHeader = (event) => {
    const isCheckboxChecked = event.target.checked;
    const allId = orders.map((order) => order.id);
    const checkboxList = document.querySelectorAll(
      ".table__header-item .checkbox"
    );
    dispatch(checkedOrdersActions.clearCheckedOrders());
    for (let i = 1; i < checkboxList.length; i++) {
      isCheckboxChecked
        ? (checkboxList[i].checked = checkboxList[i].checked = true)
        : (checkboxList[i].checked = false);
    }
    isCheckboxChecked
      ? dispatch(checkedOrdersActions.setAllCheckedOrders(allId))
      : dispatch(checkedOrdersActions.clearCheckedOrders());
  };

  const handleClickLast = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePageChange = (event) => {
    event.preventDefault();
    const page = event.target.innerText;
    dispatch(paginationActions.setCurrentPage(page));
  };

  const handlePageDropdownSubmit = (event) => {
    event.preventDefault();
    const targetPage = event.target.page.value;
    if (
      isFinite(targetPage) &&
      targetPage <= maxNumberOfPage &&
      targetPage > 0
    ) {
      dispatch(paginationActions.setCurrentPage(targetPage));
      setIsDropdownOpen(!isDropdownOpen);
      event.target.page.value = "";
    } else {
      alert(`Введите номер страницы от 1 до ${maxNumberOfPage}`);
    }
  };

  return (
    <div className="table">
      <TableHeader
        onClick={handleFilterSort}
        onChangeCheckbox={handleCheckboxHeader}
        iconRotate={iconsPosition}
      />
      <TableOrdersList
        orders={ordersList}
        onClick={handleRowClick}
        onChange={handleCheckbox}
        CheckedId={checkedOrders}
      />
      <TableFooter>
        <FooterActions />
        <Pagination
          onClick={handlePageChange}
          page={currentPage}
          maxPage={maxNumberOfPage}
          onClickLast={handleClickLast}
          onSubmit={handlePageDropdownSubmit}
          isVisible={isDropdownOpen}
        />
      </TableFooter>
    </div>
  );
};
