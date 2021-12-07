export const TableFooter = ({ className, children }) => {
  const blockClass = className ? className : "table__footer";
  return <div className={blockClass}>{children}</div>;
};
