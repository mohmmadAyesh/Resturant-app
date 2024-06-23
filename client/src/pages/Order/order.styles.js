import styled from "styled-components";
export const Card = styled.div`
  width: 300px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 40px;
`;
export const ItemCard = styled.div`
  width: 95%;
  border-radius: 10px;
  border: 2px solid #d3cbfb;
  background-color: #fff;
  color: #43be83;
  box-shadow: 0px 0px 5px #d3cbfb;
  margin: 25px;
  p {
    &:first-child {
      color: #ea8f95;
    }
    &:nth-child(2) {
      color: #ff8057;
    }
  }
`;
