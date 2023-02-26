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

// is localStorage empty? if not, set language to localStorage value

    if (localStorage.getItem('i18nextLng') === null) {
        localStorage.setItem('i18nextLng', 'en');
    } else {
        i18n.changeLanguage(localStorage.getItem('language'));
    }
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

