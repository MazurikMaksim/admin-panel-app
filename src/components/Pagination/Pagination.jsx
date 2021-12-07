import Button from "../Elements/Button";
import { PageDropdown } from "../Footer/PageDropdown/PageDropdown";

const primaryClass = "table__footer-button table__footer-button_small";
const secondaryClass =
  "table__footer-button table__footer-button_small table__footer-button_transparent";
const thirdClass =
  "table__footer-button table__footer-button_small table__footer-button_transparent";

export const Pagination = ({
  onClick,
  page,
  maxPage,
  onClickLast,
  onSubmit,
  isVisible,
}) => {
  let currentPage = Number(page);
  const pages = [...new Array(maxPage)].map((page, i) => i + 1);

  return (
    <div className="table__footer-pagination">
      {
        pages.map(page => (
          <Button key={page} className={currentPage === page ? primaryClass : secondaryClass} onClick={onClick}>
            {page}
          </Button>
        ))
      }
      <Button className={thirdClass} onClick={onClickLast}>
        #
      </Button>
      <PageDropdown isVisible={isVisible} onSubmit={onSubmit} />
    </div>
  );
};
