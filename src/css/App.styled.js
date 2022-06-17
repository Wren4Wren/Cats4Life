import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
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
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin: 16px;
  padding: 10px 25px;
  border: 2px solid ${(props) => props.background};
  border-radius: 5px;
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