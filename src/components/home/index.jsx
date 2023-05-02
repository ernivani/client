import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

const HomeBackground = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 767px) {
    /* Styles for screens smaller than 768px wide */
    height: 60px;
    padding: 1rem 1rem;
  }
`;

const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding: 1.5rem 2rem;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 0;
`;

const Logo = styled.img`
`;

const Button = styled(Link)`
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  transition: 240ms ease-in-out;
  box-shadow: 0px 9px 20px -5px rgba(255, 255, 255, 0.2);
  margin: 0 0.5rem;

  &:hover {
    box-shadow: 0px 9px 20px -5px rgba(255, 255, 255, 0.4);
    border-radius: 15px;
  }

    @media screen and (max-width: 480px) {
        padding: 0.5rem 1rem;
        font-size: 12px;
        margin: 0 auto;
    }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 2rem;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 18px;
    }
`;


const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }

`;

export const Home = () => {
    const { t } = useTranslation();

    const [user, setUser] = useState(false);

   

    useEffect(() => {
        const userCache = localStorage.getItem("userCache");
        if (userCache) {
            setUser(true)
        }
    }, []);


    return (
        <HomeBackground>
            <Header>
                <Logo src="/Impin.svg" alt="Impin" width={100} height={60} />
                {user ? <Button to="/log">{t("app_button")}</Button> : <Button to="/log">{t("login_button")}</Button>}
            </Header>
            <ContentContainer>
                <Title>{t("home_title")}</Title>
                <Subtitle>{t("home_subtitle")}</Subtitle>
            </ContentContainer>
            <ButtonsContainer>
                <Marginer direction="horizontal" margin={20} />
            </ButtonsContainer>
            <Footer>
                <p>Impin 2023 - All rights reserved</p>
            </Footer>
        </HomeBackground>
    );
};
