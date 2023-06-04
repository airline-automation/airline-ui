import styled from "styled-components";

export const Label = styled.label`
    position: relative;
    height: ${({ labelHeight }) => labelHeight};

    color: ${({ labelColor, theme }) => {
        if (!labelColor) return theme.colors.grey;
        return labelColor;
    }};

    & span {
        font-size: ${({ labelSize }) => labelSize};
        font-weight: ${({ labelWeight }) => labelWeight};
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        transition: all 0.3s;
    }
`;

export const StyledInput = styled.input`
    font-family: inherit;
    max-width: 100%;

    width: ${({ width }) => {
        if (!width) return "100%";
        return width;
    }};
    height: ${({ height }) => {
        if (!height) return "100%";
        return height;
    }};
    padding: ${({ padding }) => {
        if (!padding) return "10px 20px";
        return padding;
    }};
    border: ${({ border }) => {
        if (!border) return "none";
        return border;
    }};
    background: ${({ background, theme }) => {
        if (!background) return theme.colors.lightGreyFaded;
        return background;
    }};
    color: ${({ color, theme }) => {
        if (!color) return theme.colors.black;
        return color;
    }};
    ${({ borderRadius }) =>
        borderRadius &&
        `
        border-radius: ${borderRadius};
    `}
    ${({ size }) =>
        size &&
        `
        font-size: ${size};
    `}
    ${({ weight }) =>
        weight &&
        `
        font-weight: ${weight};
    `}


    ${({ label }) =>
        label &&
        `
        &:focus {
            outline: none;
        }
    
        &:focus + span,
        &:valid + span {
            top:0;
            transform: translateY(5px);
            font-size: 11px;
            font-weight: 500;
        }
    `}
`;
