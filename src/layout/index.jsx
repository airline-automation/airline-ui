import React from 'react';
import { StyledMainLayout } from './styles';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const MainLayout = ({ children }) => {
    return (
        <StyledMainLayout>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </StyledMainLayout>
    );
};

export default MainLayout;
