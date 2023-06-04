import React from "react";
import { Input, Label, RadioBox, RadioContainer } from "./styles";

const Radio = ({
    children,
    value,
    setFormValues,
    padding,
    margin,
    checked = false,
}) => {
    // useClickOutside('radio-container', setIsChecked);

    const handleChange = () => {
        setFormValues((prev) => ({
            ...prev,
            flight_type: value,
        }));
    };

    return (
        <RadioContainer padding={padding} margin={margin}>
            <Label id={value}>
                <Input
                    type='radio'
                    name='location'
                    id={value}
                    value={value}
                    onChange={handleChange}
                    defaultChecked={checked}
                />
                <RadioBox></RadioBox>
                {children}
            </Label>
        </RadioContainer>
    );
};

export default Radio;
