import {HashRouter, Route} from 'react-router-dom';
import React from 'react';
import UserContext from "./usercontext";
import NavBar from "./navbar";
import Home from "./home";
import Account from "./createaccount";
import Balance from "./balance";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Login from "./login";
import AllData from "./alldata";

function Spa(){
    return(
        <>
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'david',email:'david@gmu.edu',password:'rocket',balance:100},{name:'aura',email:'aura@gmu.edu',password:'plane',balance:200}]}}>
                <Route path="/" exact             component={Home}/>
                <Route path="/CreateAccount/"     component={Account}/>
                <Route path="/AllData/"           component={AllData}/>
                <Route path="/Deposit/"           component={Deposit}/>
                <Route path="/Balance/"           component={Balance}/>
                <Route path="/Withdraw/"          component={Withdraw}/>
                <Route path="/Login/"             component={Login}/>
            </UserContext.Provider>
        </HashRouter>
        </>
    );
}
export default Spa;