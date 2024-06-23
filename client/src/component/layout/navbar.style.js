import styled from "styled-components";
export const NavBar = styled.nav`
  background-color: red;
  height: 55px;
  padding: 10px 10px;
  background-color: #333;
  color: #fafafa;
`;
export const List = styled.ul`
  display: flex;
  gap: 10px;
  color: #fafafa;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    gap: 10px;
  }
`;
export const Li = styled.li`
  color: #fafafa;
`;
export const Button = styled.button`
  color: #333;
  background-color: red;
  width: 80px;
  height: 45px;
  border-radius: 5px;
  border: none;
`;
export const LoginButton = styled(Button)`
  background: #ffbc00;
  color: #000;
`;
export const SignupButton = styled(Button)`
  color: #fafafa;
  background: #25a449;
`;
