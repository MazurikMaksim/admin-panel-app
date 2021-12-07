import { PageHeader } from "../Header/PageHeader";
import { OrdersFilter } from "../Filter/OrdersFilter";
import { OrdersTable } from "./OrdersTable";
import { SvgIcons } from "../Icons/SvgIcons";

export const MainTable = () => {
  return (
    <div className="main-wrapper">
      <PageHeader />
      <OrdersFilter />
      <OrdersTable />
      <SvgIcons />
    </div>
  );
};
