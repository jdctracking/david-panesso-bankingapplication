import React from 'react';
import Card from "./context";

function Withdraw(){
    const [show, setShow]           = React.useState(true);
    const [withdraw, setWithdraw]           = React.useState(100);

    return(
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Withdraw"
        status={window.status}
        body={show ? 
        (<>
        Balance: $100<br/> Withdraw: {withdraw}<br/>
        Withdraw Amount<br/>
        <input type="number" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={e=>setWithdraw(e.currentTarget.value)}/>
        <button type="submit" className="btn btn-light" onClick={e=>setShow(false)}>Withdraw</button>
        </>)
        :
        (<>
        <h5>Success</h5>
        <p>Withdraw More Money?</p>
        <button type="submit" className="btn btn-light" onClick={e=>setShow(true)}>Yes!</button>
        </>)}
        />
    );
}
export default Withdraw;