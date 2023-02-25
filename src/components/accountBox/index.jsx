import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

import  checkAuth  from "./checkAuth";

import { useTranslation } from "react-i18next";
import { Marginer } from "../marginer";


const ApplicationCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;


const AccountContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



const BoxContainer = styled.div`
  width: 400px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #1e2124;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  filter: drop-shadow(0px 0px 15px #111);
  @media screen and (max-width: 480px) {
    width: 330px;
    min-height: 500px;
  }
  `;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -330px;
  left: -170px;
  background: rgb(114, 137, 218);
  background: linear-gradient(
    58deg,
    rgba(114, 137, 218, 1) 20%, /* #7289da */
    rgba(243, 172, 18, 1) 100% /* #f3ac12 */
  );
  @media screen and (max-width: 480px) {
    width: 200%;
    height: 550px;
    top: -310px;
    left: -150px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.5,
  stiffness: 30,
};

import { useLocation } from 'react-router-dom'
export function AccountBox() {

  
  const location = useLocation();
  
  console.log(location.state);

  checkAuth(window.location.pathname);

  const { t } = useTranslation();
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState( location.state ? location.state : "signin" );

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration *  320);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };


  // todo: check the current path and set the active state accordingly but we need to make sure that the animation is not played and the page does not load after the animation is done


  return (
    <ApplicationCenter>
      <AccountContainer>
        <AccountContext.Provider value={contextValue}>
          <BoxContainer>
            <TopContainer>
              <BackDrop
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
              />
              {active === "signin" && (
                <HeaderContainer>
                  <HeaderText>{t('login_title')}</HeaderText>
                  <SmallText>{t('login_comment')}</SmallText>
                </HeaderContainer>
              )}
              {active === "signup" && (
                <HeaderContainer>
                  <HeaderText>{t('register_title')}</HeaderText>
                  <Marginer direction="vertical" margin={15} />
                </HeaderContainer>
              )}
            </TopContainer>
            <InnerContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}
            </InnerContainer>
          </BoxContainer>
        </AccountContext.Provider>
      </AccountContainer>
    </ApplicationCenter>
  );
}
