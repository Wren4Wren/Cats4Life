import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`


export const Button = styled.button`
    color: aqua;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 5px;
    background: none;
    background-color: black;
    padding: 15px;
    margin: 5px;
    &:hover{
        background-color: blueviolet;
        box-shadow: 3px 3px lightblue; 
        box-shadow-border: 3px;
        cursor: url(../components/images/pawPrint.jpg), pointer;
    }
`