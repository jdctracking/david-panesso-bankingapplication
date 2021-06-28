import React from 'react';
import Card from "./context";
import UserContext from "./usercontext";

function AllData(){
    const ctx = React.useContext(UserContext);
    return(
        <Card
            bgcolor="info"
            txtcolor="black"
            header="All Data"
            body={ctx.users.forEach((user) => console.log(user.name, user.email, user.password, user.balance))}
        />
    );
}
export default AllData;