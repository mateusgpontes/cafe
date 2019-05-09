import Styled from "styled-components";

export const Img = Styled.img`
    height:${props => `${props.height}px`};
    width:${props => `${props.width}px`};
    display:${props => `${props.hidden ? "none" : "block"}`};
`;

export const H2 = Styled.h2`
    font-family: ${props => `${props.fontFamily}, sans-serif`};
    position: absolute;
    top:10%;
    color:white; 
`;

export const P = Styled.p`
    color: white;
    display:${props => `${props.hidden ? "none" : "block"}`};
`;

export const Div = Styled.div`
    display:flex;
`;
