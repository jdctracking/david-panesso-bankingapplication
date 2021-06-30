import React from 'react';
import Card from "./context";
import UserContext from "./usercontext";

function Deposit(){
    const [show, setShow]                 = React.useState(true);
    const [deposit, setDeposit]           = React.useState(null);
    const ctx                             = React.useContext(UserContext);
    const [balance, setBalance]           = React.useState(ctx.users['0'].balance);
    
    const validateDeposit = (num)=>{
        setDeposit(num);
        if (Math.sign(num)==-1){
            setDeposit(null);
            return alert('Error: $'+num+' is not a valid deposit.');
        }
    }

    const addMoney = (amount)=>{
        setShow(false);
        setBalance(parseInt(deposit) + parseInt(balance));
        return;
    }

    return(
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Deposit Service"
        status={window.status}
        body={show ? 
        (<>
        Balance: ${balance}<br/><br/> Deposit Amount: ${deposit}<br/><br/>
        Please enter the dollar amount:<br/>
            <input type="number" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e=>validateDeposit(e.currentTarget.value)}/>
            <br/><button type="submit" className={deposit? "btn btn-light" : "btn btn-light disabled"} onClick={e=>addMoney(deposit)}>Deposit</button>
        </>)
        :
        (<>
        <h5>Success</h5>
        <p>Current Balance: ${balance}</p>
        <p>Deposit More Money?</p>
        <button type="submit" className="btn btn-light" onClick={e=>setShow(true)}>Yes!</button>
        </>)}
        />
    );
}
export default Deposit;