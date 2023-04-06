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
    const [error, setErrorMessage] = useState(null);

    return (
        <BoxContainer>
            <FormContainer
                onSubmit={(e) => {
                    e.preventDefault();
                    import("./LogSend/register")
                        .then((module) => {
                            module.registerSend(e, setErrorMessage);
                        })
                        .catch((error) => {
                            alert(error);
                        });
                }}
            >
                <LabelInput>
                    {t("email_label")}
                    {error ? (
                        <ImportantSpan>- {error}</ImportantSpan>
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
                    required
                />
                <LabelInput>
                    {t("username_label")}
                    {error ? (
                        <ImportantSpan>- {error}</ImportantSpan>
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
                    required
                />
                <LabelInput>
                    {t("password_label")}
                    {error ? (
                        <ImportantSpan>- {error}</ImportantSpan>
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
                    required
                />
                <Marginer direction="vertical" margin={15} />
                <SubmitButton type="submit">
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
