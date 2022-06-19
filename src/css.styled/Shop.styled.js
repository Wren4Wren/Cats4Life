import styled from "styled-components";

export const ContainerC = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


export const Button = styled.button`
color: aqua;
font-size: 20px;
border: 2px solid black;
border-radius: 5px;
background: none;
background-color: black;
padding: 15px;
margin: 5px;
&:hover {
    background-color: blueviolet;
    box-shadow: 3px 3px lightblue;
    box-shadow-border: 3px;
    cursor: url(../components/images/pawPrint.jpg), pointer;
}
`;


export const FlexEnd= styled.div`
display:flex; 
justify-content:flex-end;
margin-top: 20px;
margin-right: 55px;
`
export const BasketButton = styled.button`
display: flex;
color: aqua;
font-size: 40px;
border: 2px solid cyan;
border-radius: 10px;
background: none;
background-color: black;
padding: 15px;
margin: 5px;
&:hover {
    background-color: blueviolet;
    box-shadow: 5px 5px purple;
    box-shadow-border: 3px;
    cursor: url(../components/images/pawPrint.jpg), pointer;
}
`;