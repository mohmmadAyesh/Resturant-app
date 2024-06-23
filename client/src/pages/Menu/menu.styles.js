import styled from 'styled-components';
export const Wrapper = styled.div`
background-color:#DBD7D7;
width:100%;
height:100%;
padding-top:30px;
display:flex;
align-items:center;
flex-direction:column;
`;
export const Title = styled.h2`
font-weight: bold;
font-size:30px;
color:#000;
width:100px;
height:22px;
padding-right:20px;
display:flex;
align-items: center;
justify-content: center;
margin-bottom:20px;
`;
export const Item=styled.li`
list-style-type: none;
width:324px;
height:120px;
background-color:white;
border-radius:7px;
box-shadow:0px 0px 5px rgba(0,0,0,0.4);
padding:10px;
position:relative;
margin-bottom:15px;
cursor:pointer;
&:hover{
  background-color:#eee;
}
`;
export const Name=styled.p`
font-weight:400;
font-size:14px;
`;
export const Description=styled.p`
font-weight:200;
color:#000;
font-size:12px;
`;
export const MinusPlusContainer=styled.div`
width:150px;
height:60px;
position:absolute;
bottom:-10%;
right:0%;
`;
export const IcreBtn=styled.button`
width:40px;
height:30px;
background:rgba(0,0,0,0.5);
color:white;
border-bottom-right-radius:100px;
border-top-right-radius:100px;
border:none;
box-shadow:0px 0px 2px rgba(0,0,0,0.2);
`;
export const DecBtn=styled(IcreBtn)`
border-bottom-right-radius:0px;
border-top-right-radius:0px;
border-bottom-left-radius:100px;
border-top-left-radius:100px;
`;
export const Input=styled.input`
height:30px;
width:70px;
text-align:center;
::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
export const PlaceButton=styled.button`
  color:white;
  background-color:#0062FF
  border:none;
  border-radius:8px;
  padding:10px;
  cursor:pointer;
`;



