import styled from "styled-components";


import { Routes, Route } from "react-router-dom";
import { AccountBox } from "./components/accountBox";
import { Home } from "./components/home";
import { Users } from "./components/users";

import { useTranslation } from "react-i18next";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-attachment: scroll;
    background-color: rgb(30, 31, 34);
    overflow: hidden;

`;


function App() {

    const { t, i18n } = useTranslation();

    const language = navigator.language.split(/[-_]/)[0];
    i18n.changeLanguage(language);
    // todo: add a language selector
    console.log(language);

    
    return (
        <AppContainer>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/log' element={<AccountBox/>} />
                <Route path='/channels/:id' element={<Users />} />
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

