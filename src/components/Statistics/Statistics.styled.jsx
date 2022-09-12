import styled from "styled-components"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const Statistic = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;
  background-color: ${getRandomHexColor};
`
export const Title = styled.h2`
  font-size: 35px;
  color: ${getRandomHexColor};
  padding-top: 20px;
  padding-bottom: 20px;
`
export const StatList = styled.ul`
  display: flex;
  padding: 10px;
`
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 6px;
  background-color: ${getRandomHexColor};
  border-radius: 4px;
`
export const Span = styled.span`
  color: black;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`
export const Percentage = styled.span`
  color: black;
`
