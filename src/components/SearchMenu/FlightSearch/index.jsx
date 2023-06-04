import React, { useState } from "react";
import FlightContext, { useContext } from "contexts/flight/FlightContext";
import Container from "components/Container";
import { Row } from "components/Container/styles";
import theme from "theme";
import Radio from "components/Radio";
import { Paragraph, Text } from "components/Typography/styles";
import InputField from "components/Input";
import { FromWhere, RadioButtons, RewardInfo } from "./styles";

const FlightSearch = () => {
    const { flight_type } = useContext(FlightContext);

    const [formValues, setFormValues] = useState({
        departure: "",
        destionation: "",
        date: "",
        flight_type: "",
        passengers: {
            adult: 0,
            child: 0,
            baby: 0,
            student: 0,
        },
        flight_class: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <Container
            padding='30px 26px 20px'
            background={theme.colors.white}
            color={theme.colors.primary}
            width='1000px'
        >
            <form onSubmit={handleFormSubmit}>
                <Row
                    direction='row'
                    align='center'
                    justify='space-between'
                    width='100%'
                >
                    <RadioButtons>
                        {flight_type.map((type, idx) => (
                            <Radio
                                key={idx}
                                padding={
                                    idx === 0
                                        ? "5px 5px 5px 0"
                                        : "5px 5px 5px 10px"
                                }
                                value={type.key}
                                setFormValues={setFormValues}
                                checked={idx === 0 ? true : false}
                            >
                                <Text
                                    size='14px'
                                    weight='500'
                                    lineheight='1.3em'
                                >
                                    {type.label}
                                </Text>
                            </Radio>
                        ))}
                    </RadioButtons>
                    <RewardInfo>
                        <Paragraph size='14px' weight='500' lineheight='1.3em'>
                            Ödül bilet - Millerinizle bilet alın
                        </Paragraph>
                    </RewardInfo>
                </Row>
                <Row>
                    <FromWhere>
                        <InputField
                            size='16px'
                            weight='700'
                            label='Nereden'
                            labelHeight='66px'
                            labelSize='20px'
                            width='180px'
                        />
                        <InputField
                            size='16px'
                            weight='700'
                            label='Nereye'
                            labelHeight='66px'
                            labelSize='20px'
                            width='180px'
                        />
                    </FromWhere>
                </Row>
                {/* <input type="submit" /> */}
            </form>
        </Container>
    );
};

export default FlightSearch;
