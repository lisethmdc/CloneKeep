import styled from "styled-components";

export const Formulario = styled.form `
    position: relative;
    height: 120px;
    width: 480px;
    margin: 30px auto 20px auto;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
`;

export const NoteTitle = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: ${({theme}) => theme.scale.h2};
    font-family: 'Roboto', sans-serif;
    resize: none;
`;

export const NoteContent = styled.textarea`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-family: inherit;
    font-size: 1.2em;
    resize: none;
`; 

export const IconContainer = styled.div`
    position: absolute;    
    left: 440px;
    bottom: 20px;
    cursor: pointer;
`;

export const Error =  styled.p`
    color: red;
`