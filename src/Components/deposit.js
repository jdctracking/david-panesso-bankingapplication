import React from 'react';
import Card from "./context";
import UserContext from "./context";

function Deposit(){
    const [show, setShow]           = React.useState(true);
    const [deposit, setDeposit]           = React.useState(100);

    return(
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Deposit"
        status={window.status}
        body={show ? 
        (<>
        Balance: $100<br/> Withdraw: {deposit}<br/>
        Deposit Amount<br/>
        <input type="number" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e=>setDeposit(e.currentTarget.value)}/>
        <button type="submit" className="btn btn-light" onClick={e=>setShow(false)}>Deposit</button>
        </>)
        :
        (<>
        <h5>Success</h5>
        <p>Deposit More Money?</p>
        <button type="submit" className="btn btn-light" onClick={e=>setShow(true)}>Yes!</button>
        </>)}
        />
    );
}
export default Deposit;