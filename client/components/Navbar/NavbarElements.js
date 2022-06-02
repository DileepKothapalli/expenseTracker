import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 1);
  height: 64px;
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Playfair Display SC", serif;
  font-family: "Poppins", sans-serif;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 45px;
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
`;
export const Logo = styled.h1`
  font-size: 24px;
`;

export const NavLinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavLinkDiv = styled.div`
  display: flex;
  margin: 10px;
  margin-right: ${(props) => props.marginRight};
`;

export const NavLinks = styled.a`
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Open Sans", sans-serif;
  font-family: "Playfair Display", serif;
  font-family: "Playfair Display SC", serif;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

export const AddRecord = styled.button`
  outline: none;
  border: none;
  background-color: white;
  padding: 0px 0px;
  border-radius: 5px;
  background-color: #bbb;
  :hover {
    transition: all 0.5s;
  }
  cursor: pointer;
`;
export const AddrecordDiv = styled.div`
  display: flex;
  outline: none;
  border: none;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #bbb;
  :hover {
    transition: all 0.5s;
  }
  padding: 5px;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 25px;
  width: auto;
`;

export const Img = styled.img`
  height: 30px;
  width: auto;
  border-radius: 50%;
`;

export const DetailsDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  margin-right: ${(props) => props.marginRight};
  margin-left: 10px;
  font-size: 16px;
`;
