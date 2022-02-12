import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Manager from '../components/manager/Manager';
import { authService } from '../fBase';

function AppRouter() {
    const [isManager, setIsManager] = React.useState(false);

    React.useEffect(()=>{
        authService.onAuthStateChanged((user:any) => {
            console.log("user : ", user.multiFactor.user.email);
            // console.log("user : ", user.multiFactor.email);
            if(user.multiFactor.user.email === 'bejejupark@gmail.com'
            || user.multiFactor.user.email === 'crfaceit@gmail.com'
            ){
                setIsManager(true);
            }
        });
    },[])

    return (
        <BrowserRouter>
        <Sidebar />
        <Switch>
            <Route exact path="/">
            <About text="About" />
            </Route>
            <Route path="/about">
                <About text="About" />
            </Route>
            <Route path="/gallery/spring">
                <Gallery season="spring"/>
            </Route>
            <Route path="/gallery/summer">
                <Gallery season="summer"/>
            </Route>
            <Route path="/gallery/autumn">
                <Gallery season="autumn"/>
            </Route>
            <Route path="/gallery/winter">
                <Gallery season="winter"/>
            </Route>
            <Route path="/contact">
                <About text="crfaceit@gmail.com" />
            </Route>
            <Route path="/manager">
                <Manager isManager={isManager}/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
