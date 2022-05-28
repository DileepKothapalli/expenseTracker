import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: #fdfefe;
  margin: 20px 20px 20px 40px;
  border-radius: 5px;
`;

export const NavLinksDiv = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NavLinkDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  width: 140px;
  border-radius: 5px;
  /* border: 1px solid #eee; */
  /* padding: 5px 5px; */
  border-radius: 5px;
  :hover {
    transform: scale(1.05);
    transition: all 0.5s;
    background-color: #bbb;
  }
`;

export const NavLinks = styled.a`
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Playfair Display SC", serif;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 100%;
  border: 1px solid #eee;
  padding: 5px 5px;
  border-radius: 5px;
  text-align: center;
`;
