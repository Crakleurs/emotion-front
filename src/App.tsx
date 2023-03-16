import React from 'react';
import {Route, Routes} from "react-router-dom";
import EmotionalGraph from "./components/EmotionalGraph";
import Navbar from "./components/Navbar";
import CampaignsPage from "./pages/CampaignsPage";
import AddCampaignPage from "./pages/AddCampaignPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CampaignPage from "./pages/CampaignPage";
function App() {

    return (
        <div className={"h-full w-full flex flex-col"}>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<CampaignsPage/>}/>
                <Route path={"campaign/:id"} element={<CampaignPage/>}/>
                <Route path={"campaign/add"} element={<AddCampaignPage/>}/>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
