import Styled from "styled-components";

export const Img = Styled.img `
    height:500px;
    width:500px;
`;

export const Text = Styled.h2 `
    font-family: ${props => `${props.fontFamily}, sans-serif`};
    position: absolute; 
`;

