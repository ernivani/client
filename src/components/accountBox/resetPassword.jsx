import axios from "axios";
import React, { useState } from "react";
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
`;

const ResetPasswordBox = styled(BoxContainer)`
    max-width: 500px;
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    background-color: rgb(30, 33, 36);
    box-shadow: rgba(15, 15, 15, 0.28) 0px 0px 2px;
    filter: drop-shadow(rgb(17, 17, 17) 0px 0px 15px)
`;

const FormHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.8em;
    padding-bottom: 2em;
`;

const HeaderText = styled.h2`
    font-size: 35px;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    margin: 0;
`;

const InnerContainer = styled(FormContainer)`
    padding: 0 1.8em;
`;

export function ResetPassword() {
    const { t } = useTranslation();

    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setErrorMessage] = useState(null);

    const resetPasswordSend = (e) => {
        setErrorMessage("");
        e.preventDefault();
        const token = e.target.token.value;
        const data = {
            password: password,
            password2: password2,
            token: token,
        };

        axios
            .post("https://api.impin.fr/user/reset", data)
            .then(() => {
                window.location.href = "/log";
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <ResetPasswordContainer>
            <ResetPasswordBox>
                <FormHeader>
                    <HeaderText>{t("reset_password_title")}</HeaderText>
                </FormHeader>
                <InnerContainer onSubmit={resetPasswordSend}>
                    <LabelInput>
                        {t("new_password_label")}
                        {error ? (
                            <ImportantSpan>- {error}</ImportantSpan>
                        ) : (
                            <ImportantSpan>*</ImportantSpan>
                        )}
                    </LabelInput>
                    <Input
                        name="new-password"
                        type="password"
                        placeholder={t("new_password_placeholder")}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <LabelInput>
                        {t("confirm_new_password_label")}
                        {error ? (
                            <ImportantSpan>- {error}</ImportantSpan>
                        ) : (
                            <ImportantSpan>*</ImportantSpan>
                        )}
                    </LabelInput>
                    <Input
                        name="new-password-confirm"
                        type="password"
                        placeholder={t("confirm_new_password_placeholder")}
                        onChange={(e) => setPassword2(e.target.value)}
                        value={password2}
                        required
                    />
                    <input
                        type="hidden"
                        name="token"
                        value={window.location.href.split("/")[4]}
                    />
                    <Marginer direction="vertical" margin={15} />
                    <SubmitButton type="submit">
                        {t("reset_password_button")}
                    </SubmitButton>
                </InnerContainer>
                <Marginer direction="vertical" margin={10} />
                <InfoLink>
                    {t("login_link_text")}
                    <BoldLinkk to="/log">{t("login_link")}</BoldLinkk>
                </InfoLink>

            </ResetPasswordBox>
        </ResetPasswordContainer>
    );
}
