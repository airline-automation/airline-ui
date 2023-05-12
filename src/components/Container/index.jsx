import React from 'react';
import { StyledContainer } from './styles';

const Container = ({
    children,
    direction,
    borderRadius,
    background,
    color,
    width,
    height,
    justify,
    align,
    padding,
    margin,
}) => {
    return (
        <StyledContainer
            borderRadius={borderRadius}
            background={background}
            color={color}
            direction={direction}
            width={width}
            height={height}
            justify={justify}
            align={align}
            padding={padding}
            margin={margin}>
            {children}
        </StyledContainer>
    );
};

export default Container;
