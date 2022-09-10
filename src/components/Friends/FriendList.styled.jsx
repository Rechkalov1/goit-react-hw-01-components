import styled from "styled-components";


export const List = styled.ul`
position: relative;
display: inline-flex;
flex-direction: column;`;

export const FriendList = styled.li`  
display: inline-flex;
border: 1px solid rgba(19, 7, 7, 0.5);
padding: 16px 24px;
margin-top:15px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
  margin-left: 20px;
`;