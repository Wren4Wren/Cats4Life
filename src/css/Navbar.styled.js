import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #424651;
  padding: 40px;
`;

export const NavbarItems = styled.a`
  font-size: 16px;
  margin-right: 16px;
  color: white;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
