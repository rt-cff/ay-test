import "./NumberPicker.css";

export const NumberPicker = ({ min = 0, max, value, onChange, ...props }) => {
  const handleButtonClick = (change) => () => {
    const newValue = value + change;

    if (newValue < min || newValue > max) return;

    onChange(newValue);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (+value < min || +value > max) return;

    onChange(+value);
  };

  const handleBlur = (e) => {
    e.target.value = +e.target.value;
  };

  const handleClick = (e) => {
    e.target.select();
  };

  return (
    <div styleName="number-picker-container">
      <div styleName="button" onClick={handleButtonClick(-1)}>
        <MinusIcon />
      </div>
      <div styleName="input-container">
        <input
          type="number"
          name="guest_no"
          min={0}
          max={max}
          step={1}
          value={value}
          onClick={handleClick}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
      </div>
      <div styleName="button" onClick={handleButtonClick(1)}>
        <PlusIcon />
      </div>
    </div>
  );
};

const MinusIcon = () => (
  <svg
    width="20"
    height="2"
    viewBox="0 0 20 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2411 0.357143H0.758924C0.418853 0.357143 0.142853 0.644715 0.142853 1C0.142853 1.35529 0.418853 1.64286 0.758924 1.64286H19.2411C19.5811 1.64286 19.8571 1.35529 19.8571 1C19.8571 0.644715 19.5811 0.357143 19.2411 0.357143Z"
      fill="#1E9FD2"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2411 9.38393H10.6161V0.758928C10.6161 0.418446 10.3401 0.142857 10 0.142857C9.65992 0.142857 9.38392 0.418446 9.38392 0.758928V9.38393H0.758924C0.418853 9.38393 0.142853 9.65952 0.142853 10C0.142853 10.3405 0.418853 10.6161 0.758924 10.6161H9.38392V19.2411C9.38392 19.5816 9.65992 19.8571 10 19.8571C10.3401 19.8571 10.6161 19.5816 10.6161 19.2411V10.6161H19.2411C19.5811 10.6161 19.8571 10.3405 19.8571 10C19.8571 9.65952 19.5811 9.38393 19.2411 9.38393Z"
      fill="#1E9FD2"
    />
  </svg>
);
