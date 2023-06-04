import React from "react";
import { Label, StyledInput } from "./styles";
import Container from "components/Container";
import { Text } from "components/Typography/styles";

const InputField = ({
    width,
    height,
    background,
    label = "",
    color,
    weight,
    size,
    border,
    borderRadius,
    padding,
    labelHeight,
    labelWeight,
    labelColor,
    labelSize,
}) => {
    return (
        <Container>
            {label ? (
                <Label
                    id={label}
                    labelHeight={labelHeight}
                    labelWeight={labelWeight}
                    labelColor={labelColor}
                    labelSize={labelSize}
                >
                    <StyledInput
                        width={width}
                        height={height}
                        background={background}
                        color={color}
                        weight={weight}
                        size={size}
                        border={border}
                        borderRadius={borderRadius}
                        padding={padding}
                        label={label}
                        required
                    />
                    <Text>{label}</Text>
                </Label>
            ) : (
                <StyledInput
                    width={width}
                    height={height}
                    background={background}
                    color={color}
                    weight={weight}
                    size={size}
                    border={border}
                    borderRadius={borderRadius}
                    padding={padding}
                />
            )}
        </Container>
    );
};

export default InputField;
