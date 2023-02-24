import React, { useContext, useState,lazy } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  InfoLink,
  LabelInput,ImportantSpan
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useTranslation } from "react-i18next";

export function LoginForm(props) {

  const { t } = useTranslation();
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState(null);



 
 
  return (
    <BoxContainer>
      <FormContainer onSubmit={(e) => {
        e.preventDefault();
        import ("./LogSend/login").then(module => {
          (module.loginSend(e,setErrorMessage));
        }).catch(error => {
          alert(error);
        });
      }}
      // prevent default

      >
        <LabelInput>
          {t("email_label")} 
          {/* if error place it else place * */}
          {error ? <ImportantSpan>- {error}</ImportantSpan> : <ImportantSpan>*</ImportantSpan>}
        </LabelInput>
        <Input 
        name='email' 
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
          {t("password_label")}
          {error ? <ImportantSpan>- {error}</ImportantSpan> : <ImportantSpan>*</ImportantSpan>}
        </LabelInput>
        <Input 
        name='password' 
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
        <Marginer direction="vertical" margin={10} />
        <BoldLink href="#">{t('forgot_password')}</BoldLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">{t('login_button')}</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <InfoLink>
        {t('dont_have_account')}
        {" "}
        <BoldLink href="#" onClick={switchToSignup}>
          {t('register_link')}
        </BoldLink>
      </InfoLink>
    </BoxContainer>
  );
}
