import "./Button.css";

const Button = ({ id, type, disable, value }) => {
  return (
    <button className="Button" id={id} type={type} disabled={disable}>
      {value}
    </button>
  );
};

export default Button;
