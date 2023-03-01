import styled from "styled-components";


import { Routes, Route } from "react-router-dom";
import { AccountBox } from "./components/accountBox";
import Home from "./components/Home";
import Cours from "./page/Cours";
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

import To from "./page/Cours/to";

function App() {

    const { t, i18n } = useTranslation();


    // get the language from browser
    const language = navigator.language.split(/[-_]/)[0]; 

    // set the language
    i18n.changeLanguage(language);
    



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
                <Route path='/cours' element={<Cours />} />
                <Route path='/cours/:id' element={<To />} />
            </Routes>
        </AppContainer>
    );

    
}



export default App;

