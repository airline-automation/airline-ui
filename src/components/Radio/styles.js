import styled from "styled-components";

export const RadioContainer = styled.div`
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

    user-select: none;
`;

export const Label = styled.label`
    display: flex;
    cursor: pointer;
`;

export const RadioBox = styled.div`
    height: 1.125rem;
    width: 1.125rem;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.4rem;
    transition: background 0.15s, border-color 0.15s;
    padding: 2.5px;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
        cursor: pointer;
        transform: scale(0);
    }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
`;
