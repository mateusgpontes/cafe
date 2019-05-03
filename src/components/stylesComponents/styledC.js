import Styled from "styled-components";

export const Img = Styled.img `
    height:${props => `${props.height}px`};
    width:${props => `${props.width}px`};
`;

export const Text = Styled.h2 `
    font-family: ${props => `${props.fontFamily}, sans-serif`};
    position: absolute; 
`;

