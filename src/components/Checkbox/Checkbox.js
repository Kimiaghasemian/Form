import "./Checkbox.css";

const Checkbox = ({ children }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <label> {children}</label>
    </div>
  );
};
export default Checkbox;
