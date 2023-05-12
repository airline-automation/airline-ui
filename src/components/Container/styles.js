import styled, { css } from 'styled-components';

const JointStyling = css`
    display: inline-flex;
    flex-direction: ${({ direction }) =>
        direction === 'row' ? 'row' : 'column'};

    ${({ borderRadius }) =>
        borderRadius &&
        `
        border-radius: ${borderRadius};
    `}
    ${({ background }) =>
        background &&
        `
        background: ${background};
    `}
    ${({ color }) =>
        color &&
        `
        color: ${color};
    `}
    ${({ width }) =>
        width &&
        `
        width: ${width};
    `}
    ${({ height }) =>
        height &&
        `
        height: ${height};
    `}
    ${({ justify }) =>
        justify &&
        `
        justify-content: ${justify};
    `}
    ${({ align }) =>
        align &&
        `
        align-items: ${align};
    `}
    ${({ padding }) =>
        padding &&
        `
        padding: ${padding};
    `}
    ${({ margin }) =>
        margin &&
        `
        margin: ${margin};
    `}

    max-width: ${({ maxwidth }) => {
        if (!maxwidth) return '100%';
        return maxwidth;
    }};
`;

export const StyledContainer = styled.div`
    ${JointStyling}
`;

export const Row = styled.div`
    ${JointStyling}
`;

export const Col = styled.div`
    ${JointStyling}
`;
