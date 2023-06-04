import React, { lazy, useEffect, useState } from "react";

import LazyLoadComponent from "utils/lazyLoadComponent";

import { menu } from "./constants";
import { MenuBar, MenuItem } from "./styles";
import Container from "components/Container";
import { Text } from "components/Typography/styles";

const FlightSearch = LazyLoadComponent(lazy(() => import("./FlightSearch")));
const FlightHotel = LazyLoadComponent(lazy(() => import("./FlightHotel")));
const CheckIn = LazyLoadComponent(lazy(() => import("./CheckIn")));
const FlightStatus = LazyLoadComponent(lazy(() => import("./FlightStatus")));

const SearchMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState("");

    useEffect(() => {
        setSelectedMenu(menu[0].key);
    }, []);

    const handleMenuClick = (selected) => {
        setSelectedMenu(selected);
    };

    return (
        <Container>
            <MenuBar>
                {menu.map((item) => (
                    <MenuItem
                        key={item.key}
                        className={`${
                            selectedMenu === item.key ? "active" : ""
                        }`}
                        onClick={handleMenuClick.bind(this, item.key)}
                    >
                        <Text size='14px' weight='600' lineheight='1.6'>
                            {item.label}
                        </Text>
                    </MenuItem>
                ))}
            </MenuBar>
            <div>
                {selectedMenu === "flight_search" ? (
                    <FlightSearch />
                ) : selectedMenu === "flight_hotel" ? (
                    <FlightHotel />
                ) : selectedMenu === "check_in" ? (
                    <CheckIn />
                ) : selectedMenu === "flight_status" ? (
                    <FlightStatus />
                ) : (
                    <></>
                )}
            </div>
        </Container>
    );
};

export default SearchMenu;
