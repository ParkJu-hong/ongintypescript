import React from 'react';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Sidebarview from '../components/Sidebarview';
import About from '../components/About';
import Gallery from '../components/Gallery';

function AppRouter() {
    // const sidebar = useSelector((state: RootState) => state.sidebar);
    // const [sidebarRender, setSidbarRender] = React.useState(<></>);

    // React.useEffect(()=>{
    // },[sidebar]);

    return (
        <BrowserRouter>
        <Sidebar />
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/about">
                <About text="About" />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/contact">
                <About text="crfaceit@gmail.com" />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
