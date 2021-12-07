import SvgElement from "../Icons/SvgElement";

const Button = ({
  className,
  svgName,
  textClassName = "button__text",
  onClick,
  iconClassName,
  children,
  type,
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      <SvgElement svgName={svgName} className={iconClassName} />
      <span className={textClassName}>{children}</span>
    </button>
  );
};

export default Button;
