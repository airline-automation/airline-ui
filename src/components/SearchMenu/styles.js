import styled from 'styled-components';

export const MenuBar = styled.ul`
    display: flex;
    gap: 5px;
    border-radius: 3px 3px 0 0;
`;

export const MenuItem = styled.li`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.primaryFaded};
    padding: 10px 18px;

    &.active {
        color: ${({ theme }) => theme.colors.red};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
