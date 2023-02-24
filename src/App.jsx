import "./App.css";
import styled from "styled-components";


import { Routes, Route } from "react-router-dom";
import { AccountBox } from "./components/accountBox";
import { Home } from "./components/home";

import { checkAuth } from "./components/accountBox/checkAuth";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

    

    return (
        <AppContainer>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/log' element={<AccountBox />} />
                <Route path='/channels/*' element={<AfficherApp />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </AppContainer>
    );

    
}



export default App;


import { logout } from "./components/accountBox/LogSend/logout";

function AfficherApp() {
    checkAuth();
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
  }
  
  