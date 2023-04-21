import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Marginer } from "../marginer";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    SubmitButton,
    InfoLink,
    LabelInput,
    ImportantSpan,
} from "./common";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { bool } from "prop-types";

export const BoldLinkk = styled(Link)`
    font-size: 11px;
    color: rgb(114, 171, 218);
    color: linear-gradient(
        58deg,
        rgba(114, 137, 218, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );

    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
    pointer-events: visible;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const ResetPasswordContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
`;

const ResetPasswordBox = styled(BoxContainer)`
    width: 400px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: rgb(30, 33, 36);
    box-shadow: rgba(15, 15, 15, 0.28) 0px 0px 2px;
    position: relative;
    overflow: hidden;
    filter: drop-shadow(rgb(17, 17, 17) 0px 0px 15px);

`;

const FormHeader = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 0px 1.8em 5em;

`;

const HeaderText = styled.h2`
    font-size: 35px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    margin: 0;
    z-index: 10;
`;

const InnerContainer = styled(FormContainer)`
    padding: 0 1.8em;
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
    background: rgb(131, 114, 218);
    background: linear-gradient(
        58deg,
        rgba(131, 114, 218, 1) 20%,
        /* #7289da */ rgba(212, 176, 19, 1) 100% /* #f3ac12 */
    );
    @media screen and (max-width: 480px) {
        width: 200%;
        height: 550px;
        top: -310px;
        left: -150px;
    }
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

export function ResetPassword() {
    const { t } = useTranslation();

    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error1, setErrorMessage1] = useState(null);
    const [error2, setErrorMessage2] = useState(null);

    const [isExpanded, setExpanded] = useState(false);




    const resetPasswordSend = (e) => {
        e.preventDefault();
        setErrorMessage1("");
        setErrorMessage2("");

        if (password.length < 8) {
            setErrorMessage1(t("password_too_short"));
            return;
        } else if (password.length > 32) {
            setErrorMessage1(t("password_too_long"));
            return;
        } else if (password !== password2) {
            setErrorMessage2(t("passwords_not_match"));
            return;
        }
       

        const token = e.target.token.value;
        const data = {
            password: password,
            password2: password2,
            token: token,
        };

        axios
            .post("/api/user/reset", data)
            .then(() => {
                setExpanded(true);
                setTimeout(() => {
                    setExpanded(false);
                }, 700);

                window.location.href = "/log";
            })
            .catch((err) => {
                setErrorMessage1(err.response.data.message);
                setErrorMessage2(err.response.data.message);
            });
    };

    return (
        <ResetPasswordContainer>
            <ResetPasswordBox>
                <FormHeader> 
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    <HeaderText>{t("reset_password_title")}</HeaderText>
                </FormHeader>
                <InnerContainer onSubmit={resetPasswordSend}>
                    <LabelInput>
                        {t("new_password_label")}
                        {error1 ? (
                            <ImportantSpan>- {error1}</ImportantSpan>
                        ) : (
                            <ImportantSpan>*</ImportantSpan>
                        )}
                    </LabelInput>
                    <Input
                        name="new-password"
                        type="password"
                        aria-label={t("new_password_placeholder")}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoComplete="new-password"
                    />
                    <LabelInput>
                        {t("confirm_new_password_label")}
                        {error2 ? (
                            <ImportantSpan>- {error2}</ImportantSpan>
                        ) : (
                            <ImportantSpan>*</ImportantSpan>
                        )}
                    </LabelInput>
                    <Input
                        name="new-password-confirm"
                        type="password"
                        aria-label={t("confirm_new_password_placeholder")}
                        onChange={(e) => setPassword2(e.target.value)}
                        value={password2}
                        autoComplete="new-password"
                    />
                    <input
                        type="hidden"
                        name="token"
                        value={window.location.href.split("/")[4]}
                    />
                    <Marginer direction="vertical" margin={15} />
                    <SubmitButton onclick={resetPasswordSend}>
                        {t("reset_password_button")}
                    </SubmitButton>
                </InnerContainer>
                <Marginer direction="vertical" margin={10} />
                <InfoLink>
                    {t("login_link_text")}
                    <BoldLinkk 
                    onClick={ // isExpanded to true and wait for the animation to finish then redirect to login page
                        () => {
                            setExpanded(true);
                            setTimeout(() => {
                                window.location.href = "/log";
                            }, 500);
                        }
                    }
                    >
                        {t("login_link")}
                    </BoldLinkk>
                </InfoLink>

            </ResetPasswordBox>
        </ResetPasswordContainer>
    );
}
