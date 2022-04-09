import styled from "styled-components";

export const MyNote = styled.div`
    width: 300px;
    padding: 10px;
    margin: 16px;
    margin-left: 95px;
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    float: left;
`;

export const NoteTitle = styled.h2`
    font-size: 1.1em;
    margin-bottom: 6px;
`;

export const NoteText = styled.p`
    font-size: 1.1em;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
`;

export const EditInput = styled.input`
    border: solid 1px;
    border-color: #f5ba13;
    border-radius: 3px;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    margin-bottom: 5px;
`;

export const Button = styled.button`
    position: relative;    
    left: 245px;
    padding: 2px;
    color: red;
`;

export const CancelButton = styled.button`
    position: relative;
    padding: 2px;
    margin: 5px;
    left: 185px;
`;

export const SaveButton = styled.button`
    position: relative;
    padding: 2px;    
    bottom: -36px;
    margin-left: 2px;
    
`