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
            <Route path="/manager">
                <Manager isManager={isManager}/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
