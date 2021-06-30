import React from 'react';
import Card from "./context";
import UserContext from "./usercontext";

function AllData(){
    const ctx = React.useContext(UserContext);
    const arrUsers = ctx.users;
    
    return(
        <Card
            bgcolor="info"
            txtcolor="black"
            header="All Data"
            body={arrUsers.map((user) =><p>Name: {user.name}<br/> Email: {user.email}<br/> Password: {user.password}<br/> Balance: ${user.balance}</p>)}
            />
    );
}
export default AllData;