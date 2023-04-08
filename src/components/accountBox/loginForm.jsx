import React, { useContext, useState, lazy } from "react";
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
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useTranslation } from "react-i18next";

export function LoginForm() {
    const { t } = useTranslation();
    const { switchToSignup } = useContext(AccountContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error_email, setErrorEmail] = useState("");
    const [error_password, setErrorPassword] = useState("");

    const verify = (e) => {
        e.preventDefault();
        setErrorEmail("");
        setErrorPassword("");
        if (email === "" || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            setErrorEmail(t("email_required"));
            return;
        }
        if (password === "") {
            setErrorPassword(t("password_required"));
            return;
        }
        import("./LogSend/login")
            .then((module) => {
                module.loginSend(email,password, setErrorEmail, setErrorPassword);
            })
            .catch((error) => {
                setErrorEmail(error);
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
                <Marginer direction="vertical" margin={10} />
                <BoldLink onClick={
                    (e) => {
                        setErrorEmail("");
                        e.preventDefault();
                        if (email === "") {
                            setErrorEmail(t("email_required"));
                            return;
                        }
                        import("./LogSend/resetPassword")
                            .then((module) => {
                                console.log(email)
                                module.resetPasswordSend(email, setErrorEmail);
                            }
                            )
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                }>{t("forgot_password")}</BoldLink>
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton onClick={(e)=>verify(e)}>{t("login_button")}</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin="1em" />
            <InfoLink>
                {t("dont_have_account")}{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                    {t("register_link")}
                </BoldLink>
            </InfoLink>
        </BoxContainer>
    );
}
