const SvgElement = ({
  svgName,
  className = "svg-icon",
  isRotate = false,
  onClick,
}) => {
  const iconClass = isRotate
    ? className + " " + [className, "_rotate"].join("")
    : className;

  return (
    <svg className={iconClass} onClick={onClick}>
      <use xlinkHref={`#${svgName}`}></use>
    </svg>
  );
};

export default SvgElement;
