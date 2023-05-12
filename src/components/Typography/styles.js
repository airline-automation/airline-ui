import styled, { css } from 'styled-components';

const JointStyling = css`
    font-family: ${({ theme }) => theme.typography.family.primary};
    color: ${({ color, theme }) =>
        color && color.length > 0
            ? theme.getThemedColor(color) || color
            : 'inherit'};
    transition: color 0.2s ease-in-out;

    max-width: ${({ maxwidth }) => maxwidth}};
    letter-spacing: ${({ letterspacing }) => letterspacing}};
    line-height: ${({ lineheight }) => lineheight || 'auto'}};
    margin: ${({ margin }) => margin || 0};

    font-size: ${({ size }) => size || '1rem'};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineheight }) => lineheight};
    text-align: ${({ textalign }) => textalign};

    display: ${({ display }) => display || 'inline-block'};
    align-items: ${({ alignitems }) => alignitems || 'center'};
    justify-content: ${({ justifycontent }) => justifycontent || 'flex-start'};
`;

export const Title = styled.h1`
    ${JointStyling}
`;

export const Text = styled.span`
    ${JointStyling}
`;

export const Paragraph = styled.p`
    ${JointStyling}
`;
