import styled from "styled-components";


import { Routes, Route } from "react-router-dom";
import { AccountLog } from "./components/accountBox";
import { Home } from "./components/home";
import { Users } from "./components/users";
import { CheckAuth } from "./components/checkAuth";

import { ResetPassword } from "./components/accountBox/resetPassword";

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


    if (localStorage.getItem('i18nextLng') === null) {
        localStorage.setItem('i18nextLng', 'en');
    } else {
        i18n.changeLanguage(localStorage.getItem('language'));
    }
    return (
        <AppContainer>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/log' element={<AccountLog/>} />
                <Route path='/channels/:id' element={<Users />} />
                <Route path='/channels/:id/:channelid' element={<Users />} />
                <Route path='/reset/:token' element={<ResetPassword />} />
                <Route path='*' element={
                    <div>
                        <h1>{t('notFound')}</h1>
                    </div>
                } />
            </Routes>
            <CheckAuth/>

        </AppContainer>
    );

    
}



export default App;

