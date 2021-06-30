import React from 'react';
import Card from "./context";

function Balance(){
    return(
        <Card
        bgcolor="dark"
        txtcolor="white"
        header="Balance"
        status={window.status}
        body={<p>Under construction</p>}
        />
    );
}
export default Balance;