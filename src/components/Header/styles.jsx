import styled from "styled-components";
import theme from "../../theme/theme";

export const MyHeader = styled.header`
    margin: auto;
    padding: 16px 32px;
    height: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${({light}) => theme.palette.light};
    font-family: 'Roboto', sans-serif;
`;

export const Logo = styled.div` 
    display: flex;
    align-items: center;
`