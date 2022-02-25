import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.js';
import Profile from './Profile.js'
import Setting from './Setting.js'

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> } />
                <Route path="/profile" element={ <Profile/> } />
                <Route path="/setting" element={ <Setting/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;