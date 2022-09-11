import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FriendList = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgba(19, 7, 7, 0.5);
  padding: 16px 24px;
  margin-top: 15px;
  width: 150px;
`

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.status ? 'green' : 'red')};
  border-radius: 50%;
  margin-right: 10px;
`
