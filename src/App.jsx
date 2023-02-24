import "./App.css";
import styled from "styled-components";


import { Routes, Route } from "react-router-dom";
import { AccountBox } from "./components/accountBox";
import { Home } from "./components/home";

import { useTranslation } from "react-i18next";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {

    const { t, i18n } = useTranslation();

    const language = navigator.language.split(/[-_]/)[0];
    i18n.changeLanguage(language);

    return (
        <AppContainer>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/log' element={<AccountBox />} />
                <Route path='/channels/*' element={<AfficherApp />} />
                <Route path='*' element={
                    <div>
                        <h1>{t('notFound')}</h1>
                    </div>
                } />
            </Routes>
        </AppContainer>
    );

    
}



export default App;




function AfficherApp() {
//import { checkAuth } from "./components/accountBox/checkAuth";
    {import ("./components/accountBox/checkAuth").then(module => {
        (module.checkAuth());
    }).catch(error => {
        alert(error);
    });
    return (
        <div>
            <button onClick={(e) => {
                import ("./assets/logout").then(module => {
                    (module.logoutSend(e));
                }).catch(error => {
                    alert(error);
                }
                );
            }
            
            }>Logout</button>
        </div>
    );
  }
}
  