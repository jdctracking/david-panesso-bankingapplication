import React from 'react';
import Card from "./context";
import UserContext from "./usercontext";

function Withdraw(){
    const [show, setShow]                   = React.useState(true);
    const [withdraw, setWithdraw]           = React.useState(null);
    const ctx                               = React.useContext(UserContext);
    const [balance, setBalance]             = React.useState(ctx.users['0'].balance);

    const validateWithdraw = (num)=>{
        setWithdraw(num);
        let total = balance-num;
        if (Math.sign(num)==-1){
            setWithdraw(null);
            return alert('Error: $'+num+' is not a valid withdraw.');
        }else{
            if (total<0){
                setWithdraw(null);
                return alert('Error: You do not have $'+num+' to withdraw. Please try again.');
            }
        }
    }

    const subMoney = ()=>{
        setShow(false);
        setBalance(parseInt(balance) - parseInt(withdraw));
        return;
    }


    return(
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Withdraw Service"
        status={window.status}
        body={show ? 
        (<>
        Balance: ${balance}<br/><br/>Withdraw Amount: ${withdraw}<br/><br/>
        Please enter the dollar amount:<br/>
        <input type="number" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={e=>validateWithdraw(e.currentTarget.value)}/>
        <br/><button type="submit" className={withdraw? "btn btn-light" : "btn btn-light disabled"} onClick={e=>subMoney()}>Withdraw</button>
        </>)
        :
        (<>
        <h5>Success</h5>
        <p>Current Balance: ${balance}</p>
        <p>Withdraw More Money?</p>
        <button type="submit" className="btn btn-light" onClick={e=>setShow(true)}>Yes!</button>
        </>)}
        />
    );
}
export default Withdraw;