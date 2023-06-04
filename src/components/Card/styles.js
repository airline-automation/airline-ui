import styled from "styled-components";

export const StyledCard = styled.div`
    display: inline-flex;
    flex-direction: ${({ direction }) =>
        direction === "row" ? "row" : "column"};

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
`;
