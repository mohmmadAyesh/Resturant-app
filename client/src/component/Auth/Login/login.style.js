import styled from "styled-components";
export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: 500;
`;
export const Wrapper = styled.div`
  max-width: 453px;
  height: auto;
  display: flex;
  width: 100%;
  padding: 10px 20px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: auto;
  text-align: left;
  border: 2px solid #e0e2e9;
  border-radius: 20px;
  padding-bottom: 40px;
  padding-top: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const TextFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  height: 45px;
  width: 100%;
  max-width: 403px;
  text-align: left;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
`;
export const Label = styled.label`
  margin-right: 10px;
`;
export const InputField = styled.input`
    width:403px;
    width:100%:
    height:45px !important;
    padding:10px 0px;
    padding-left:30px;
    &::placeholder{
        color:#969ab8;
    }
    border:2px solid #e0e2e9;
    border-radius:8px;
`;
export const Svg = styled.svg`
  position: absolute;
  top: 30%;
  left: 2%;
  width: 15px;
  height: 15px;
`;
export const Image = styled.img`
  position: absolute;
  top: 30%;
  left: 2%;
  width: 15px;
  height: 15px;
`;
export const Button = styled.button`
  font-size: 15px;
  background-color: #0062ff;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 403px;
  height: 47px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
