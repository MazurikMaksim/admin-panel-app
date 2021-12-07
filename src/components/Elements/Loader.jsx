import SvgElement from "../Icons/SvgElement";
import { useState } from "react";

const loaderMainClass = "filter__loader";
const loaderTextClass = "filter__loader-text";

export const Loader = ({ loaderIcon = "refresh", isLoading }) => {
  const [visible, setVisible] = useState(isLoading);
  if (visible) {
    setTimeout(() => setVisible(!isLoading), 2000);
  }
  clearTimeout();
  return (
    visible && (
      <div className={loaderMainClass}>
        <SvgElement svgName={loaderIcon} />
        <span className={loaderTextClass}>Загрузка</span>
      </div>
    )
  );
};
