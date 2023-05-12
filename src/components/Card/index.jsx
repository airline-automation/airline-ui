import React from 'react';
import { StyledCard } from './styles';

const Container = ({
    children,
    direction,
    borderRadius,
    background,
    width,
    height,
    justify,
    align,
}) => {
    return (
        <StyledCard
            borderRadius={borderRadius}
            background={background}
            direction={direction}
            width={width}
            height={height}
            justify={justify}
            align={align}>
            {children}
        </StyledCard>
    );
};

export default Container;
