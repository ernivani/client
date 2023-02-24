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


export function LoginForm(props) {
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
          E-MAIL 
          {/* if error place it else place * */}
          {error ? <ImportantSpan>- {error}</ImportantSpan> : <ImportantSpan>*</ImportantSpan>}
        </LabelInput>
        <Input 
        name='email' 
        type="email" 
        placeholder="E-mail" 
        autoComplete="off" 
        aria-label="E-mail ou numéro de téléphone" 
        spellCheck="false" 
        maxLength="999" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required
        />
        <LabelInput>
          MOT DE PASSE
          {error ? <ImportantSpan>- {error}</ImportantSpan> : <ImportantSpan>*</ImportantSpan>}
        </LabelInput>
        <Input 
        name='password' 
        type="password" 
        placeholder="Mot de passe" 
        autoComplete="off" 
        aria-label="Mot de passe" 
        spellCheck="false" 
        maxLength="999" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        required
        />
        <Marginer direction="vertical" margin={10} />
        <BoldLink href="#">Tu as oublié ton mot de passe ?</BoldLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Connection</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <InfoLink href="#">
        Besoin d'un compte ?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          S'inscrire
        </BoldLink>
      </InfoLink>
    </BoxContainer>
  );
}
