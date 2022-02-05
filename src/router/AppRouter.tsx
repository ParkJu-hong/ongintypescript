import React from 'react';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

function AppRouter() {
    const sidebar = useSelector((state: RootState) => state.sidebar);

    React.useEffect(()=>{
        console.log("sidebar : ", sidebar);
    },[]);

    return (
        <BrowserRouter>
        {/* 
            사이드바에서 카테고리를 누르면 사이드바 뷰가나오도록 상태관리할 것
            {sideviwe ? <Sidebar/> : <Sidebarview />}
        */}
        <Sidebar/>
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
