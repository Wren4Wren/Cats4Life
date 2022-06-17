import styled from "styled-components";

export const ContainerC = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Image = styled.img`
  width: 75%;
  height: 250px;
  object-fit: cover;
`;

export const Items = styled.div`
  width: 40%;
  border: solid black 2px;
  margin: 10px;
  padding-bottom: 20px;
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

export const BContainer = styled.div`
    text-align: center;
    background-color: var(--color-1);
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Logo = styled.img`
  width:40px;
  height:40px;
  object-fit: cover;
`

export const TopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
