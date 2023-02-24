import React, { useContext,useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  InfoLink,
  LabelInput,ImportantSpan,CheckboxContainer,Checkbox
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMessage] = useState(null);

  return (
    <BoxContainer>
      <FormContainer onSubmit={(e) => {
        e.preventDefault();
        import ("./LogSend/register").then(module => {
          (module.registerSend(e,setErrorMessage));
        }).catch(error => {
          alert(error);
        });
      }}
      // prevent default
      >
        <LabelInput>
          E-MAIL 
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
          NOM D'UTILISATEUR
          {error ? <ImportantSpan>- {error}</ImportantSpan> : <ImportantSpan>*</ImportantSpan>}
        </LabelInput>
        <Input
          name='username'
          type="text"
          placeholder="Nom d'utilisateur"
          autoComplete="off"
          aria-label="Nom d'utilisateur"
          spellCheck="false"
          maxLength="999"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <LabelInput>
          CONFIRMER MOT DE PASSE 
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
        <Marginer direction="vertical" margin={15} />
        <SubmitButton type="submit">Inscription</SubmitButton>  
      </FormContainer>
      <Marginer direction="vertical" margin="1em" required />
      <BoldLink href="#" onClick={switchToSignin}>
        Tu as déjà un compte ? 
      </BoldLink>
    </BoxContainer>
  );
}
