import "./Input.css";

const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
export default Input;
