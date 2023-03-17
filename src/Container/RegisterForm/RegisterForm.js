import Heading from "../../component/Heading/Heading";
import Input from "../../component/Input/Input";
import Button from "../../component/Button/Button";
import Form from "../../component/Form/Form";
import Checkbox from "../../component/Checkbox/Checkbox";

function RegisterForm() {
  return (
    <div className="RegisterForm">
      <Heading as="h1">Register</Heading>
      <Form>
        <Input label="Name" id="name" type="text" placeholder="Write Name" />
        <Input
          type="text"
          label="Email"
          placeholder="Write an Email"
          id="email"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Write a Password"
          id="password"
        />
        <Checkbox>Remember me</Checkbox>
        <Button type="submit" id="submit" value="Submit" />
      </Form>
    </div>
  );
}

export default RegisterForm;
