import "./Heading.css";

const Heading = ({ children, as }) => {
  if (as == "h1") {
    return <h1>{children}</h1>;
  }
  if (as == "h2") {
    return <h2>{children}</h2>;
  }
  if (as == "h3") {
    return <h3>{children}</h3>;
  }
  return <h1>{children}</h1>;
};

export default Heading;
