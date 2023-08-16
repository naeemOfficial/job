import { useMemo } from "react";

const Button = ({
  day,
  buttonPosition,
  buttonBackgroundColor,
  buttonJustifyContent,
  buttonWidth,
  dayColor,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      position: buttonPosition,
      backgroundColor: buttonBackgroundColor,
      justifyContent: buttonJustifyContent,
      width: buttonWidth,
    };
  }, [
    buttonPosition,
    buttonBackgroundColor,
    buttonJustifyContent,
    buttonWidth,
  ]);

  const dayStyle = useMemo(() => {
    return {
      color: dayColor,
    };
  }, [dayColor]);

  return (
    <div
      className="relative rounded-3xl bg-white h-5 flex flex-row py-2.5 px-3 box-border items-center justify-start text-left text-3xs text-black font-tittle-12-m"
      style={buttonStyle}
    >
      <b className="relative" style={dayStyle}>
        {day}
      </b>
    </div>
  );
};

export default Button;
