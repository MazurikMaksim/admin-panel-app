import FilterPrimary from "./FilterPrimary";
import FilterOptions from "./FilterOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordersActions } from "../../redux/orders";
import { paginationActions } from "../../redux/pagination";
import Mocks from "../../data/Orders.json";
import { iconsActions } from "../../redux/icons";
import { debounce } from "../../additional_elements/debounce";
import { checkedOrdersActions } from "../../redux/groupActions";

export const OrdersFilter = ({ className = "filter" }) => {
  const [optionsVision, setOptionsVision] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setInputValue(value);
    const debouncedAction = debounce(() => {
      const currentValue = event.target.value;
      dispatch(ordersActions.searchOrders(currentValue.toLowerCase()));
    }, 750);
    debouncedAction();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOptionsVisible = (event) => {
    event.preventDefault();
    setOptionsVision(!optionsVision);
  };

  const resetFiltersHandler = (event) => {
    event.preventDefault();
    dispatch(ordersActions.setOrders(Mocks));
    setInputValue("");
    const fiterOptionsForm = document.forms["options"];
    const inputs = fiterOptionsForm.getElementsByTagName("input");
    for (let item of inputs) {
      item.value = "";
    }
    dispatch(iconsActions.refreshIcon());
    dispatch(paginationActions.setCurrentPage(1));
    dispatch(checkedOrdersActions.clearCheckedOrders());
  };

  const handleButtonReset = (event) => {
    event.preventDefault();
    setInputValue("");
    dispatch(ordersActions.setOrders(Mocks));
  };

  return (
    <div className={className}>
      <FilterPrimary
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonFiltersHandler={handleOptionsVisible}
        resetFiltersHandler={resetFiltersHandler}
        onClick={handleButtonReset}
        value={inputValue}
      />
      <FilterOptions isVisible={optionsVision} />
    </div>
  );
};
