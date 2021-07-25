import styled, {keyframes} from 'styled-components'

export const ListItemContainer = styled.div`
    /* height: 200px; */
    width: 250px;
    border: 1px solid grey;
    border-radius: 8px;
    margin-right: 16px;
    margin-top: 24px;
`

export const ListItemRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`


const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(180deg);
  }
`;

export const ListItemImage = styled.img`
  /* height: 150px; */
  height: 250px;
  max-height: 250px;
  /* transform: rotate(0deg); */
  /* animation: ${props => (props.flipped)} */
  animation: ${props => (props.flipped ? `${rotate} 1s linear` : "none")};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  &:hover {
    color: white;
  }
`

export const MediaItemImage = styled.img`
  /* height: 150px; */
  max-height: 300px;
  width: 300px;
`

export const FlipCardContainer = styled.div`
  animation: ${props => (props.flipped ? `${rotate} 1s linear infinite` : "none")}
  /* animation: ${props => (props.flipped ? `${rotate} 1s linear` : "none")} */
  /* animation: ${rotate} 1s linear infinite; */
`

// const Button = styled.div`
//   transform: rotate(0deg);
//   transition: transform .2s ease-out;

//   ${ props => props.expanded && css`
//     transform: rotate(45deg);
//   `};
// `;

export const ApprovalButtons = styled.button`
  border: ${props => (props.approve ? "1px solid #ccc" : "1px solid #ccc")};
  border-bottom: ${props => (props.approve ? "none" : "")};
  background-color: ${props => (props.approve ? "black" : "transparent")};
  color: ${props => (props.approve ? "white" : "black")};
  border-radius: 8px;
  width: 45%;
  height: 40px;
  margin-right: 4px;
`

export const ListBottomContainer = styled.div`
  padding: 4px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 75px;
  background-color: #EFEFEF;
  /* width: 100%; */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`