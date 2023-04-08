import React, { useContext, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    SubmitButton,
    InfoLink,
    LabelInput,
    ImportantSpan,
    CheckboxContainer,
    Checkbox,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

import { useTranslation } from "react-i18next";

export function SignupForm(props) {
    const { t } = useTranslation();
    const { switchToSignin } = useContext(AccountContext);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error_email, setErrorEmail] = useState("");
    const [error_username, setErrorUsername] = useState("");
    const [error_password, setErrorPassword] = useState("");


    const verify = (e) => {
        e.preventDefault();
        setErrorEmail("");
        setErrorUsername("");
        setErrorPassword("");

        console.log(email);
        console.log(username);
        console.log(password);

        if (email === "" || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            setErrorEmail(t("email_required"));
            return;
        }

        if (username === "") {
            setErrorUsername(t("username_required"));
            return;
        }

        if (password === "") {
            setErrorPassword(t("password_required"));
            return;
        }

        import("./LogSend/register")
            .then((module) => {
                module.registerSend(email,password,username, setErrorEmail, setErrorUsername, setErrorPassword);
            })
            .catch((error) => {
                setErrorEmail(error);
                setErrorUsername(error);
                setErrorPassword(error);
            });
    };


    return (
        <BoxContainer>
            <FormContainer>
                <LabelInput>
                    {t("email_label")}
                    {error_email ? (
                        <ImportantSpan>- {error_email}</ImportantSpan>
                    ) : (
                        <ImportantSpan>*</ImportantSpan>
                    )}
                </LabelInput>
                <Input
                    name="email"
                    type="email"
                    placeholder={t("email_placeholder")}
                    autoComplete="off"
                    aria-label={t("email_placeholder")}
                    spellCheck="false"
                    maxLength="999"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <LabelInput>
                    {t("username_label")}
                    {error_username ? (
                        <ImportantSpan>- {error_username}</ImportantSpan>
                    ) : (
                        <ImportantSpan>*</ImportantSpan>
                    )}
                </LabelInput>
                <Input
                    name="username"
                    type="text"
                    placeholder={t("username_placeholder")}
                    autoComplete="off"
                    aria-label={t("username_placeholder")}
                    spellCheck="false"
                    maxLength="999"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <LabelInput>
                    {t("password_label")}
                    {error_password ? (
                        <ImportantSpan>- {error_password}</ImportantSpan>
                    ) : (
                        <ImportantSpan>*</ImportantSpan>
                    )}
                </LabelInput>
                <Input
                    name="password"
                    type="password"
                    placeholder={t("password_placeholder")}
                    autoComplete="off"
                    aria-label={t("password_placeholder")}
                    spellCheck="false"
                    maxLength="999"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Marginer direction="vertical" margin={15} />
                <SubmitButton onClick={(e)=>verify(e)}>
                    {t("register_button")}
                </SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin="1em" required />
            <BoldLink href="#" onClick={switchToSignin}>
                {t("already_have_account")}
            </BoldLink>
            <Marginer direction="vertical" margin="1.6em" />
        </BoxContainer>
    );
}
