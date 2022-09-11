import styled from "styled-components";

export const Statistic = styled.section`
        margin-right: auto;
        margin-left: auto;
        width: 350px;
        display: flex;
        flex-direction: column;
        
        align-items: center;
        background-color: aqua;
`;
export const StatList = styled.ul`
        display: flex;  
        padding: 25px;
`;
export const Item = styled.li`
        display: flex;
        flex-direction:column;
        margin-right: 20px;
         border: 1px solid aqua;
`;
export const Span = styled.span`
     color:blueviolet;
`;
export const Percentage = styled.span`
       color: rgb(158, 111, 111);
`;