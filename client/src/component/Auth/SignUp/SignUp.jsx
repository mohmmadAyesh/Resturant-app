import { useContext, useState } from "react";
import profile from "../../../assets/profile-icon.svg";
import {
  Wrapper,
  TextFieldWrapper,
  Label,
  InputField,
  Svg,
  Button,
  ErrorMessage,
  Title,
  Image,
} from "../Login/login.style";
import { AuthContext } from "../../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
  });
  const { signup } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      const response = await signup(formData);
      console.log("success full");
      console.log(e.target);
      console.log(response);
      if (response) {
        setErrorMessage(response);
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleChange = (e) => {
    setErrorMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit}>
        <TextFieldWrapper>
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <Image src={profile} alt="" />
        </TextFieldWrapper>
        <TextFieldWrapper>
          <InputField
            type="text"
            name="username"
            placeholder="Your username"
            required
            onChange={handleChange}
          />
          <Image src={profile} alt="" />
        </TextFieldWrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <TextFieldWrapper>
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <Svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8178 12.3636L17.5451 14.0909L20.9996 10.6364L19.2723 8.90909"
              stroke="#ADB0CD"
              stroke-width="2.30303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8451 12.1546L20.9998 2"
              stroke="#ADB0CD"
              stroke-width="2.30303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.18182 21C10.0437 21 12.3636 18.68 12.3636 15.8182C12.3636 12.9563 10.0437 10.6364 7.18182 10.6364C4.31998 10.6364 2 12.9563 2 15.8182C2 18.68 4.31998 21 7.18182 21Z"
              stroke="#ADB0CD"
              stroke-width="2.30303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TextFieldWrapper>
        <Button type="submit">Sign Up</Button>
      </form>
    </Wrapper>
  );
};

export default Login;
