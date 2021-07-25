
import styled from "styled-components";

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 150px;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "1px solid #ccc")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "black" : "transparent")};
  color: ${props => (props.active ? "white" : "black")};
  border-radius: 24px;
  height: 2.5em;
  margin-right: 8px;
  transition: background-color 0.5s ease-in-out;

  /* :hover {
    background-color: white;
  } */
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
