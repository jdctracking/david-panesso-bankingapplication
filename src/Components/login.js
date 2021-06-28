import React from 'react';
import Card from "./context";
import UserContext from "./context";

function Login(){
    const [show, setShow]           = React.useState(true);
    const [email, setEmail]           = React.useState('');
    const [password, setPassword]           = React.useState('');

    return(
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Login"
        status={window.status}
        body={show ? 
        (<>
        Email<br/>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.currentTarget.value)}/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e=>setPassword(e.currentTarget.value)}/>
        <br/>
        <button type="submit" className="btn btn-light" onClick={e=>setShow(false)}>Login</button>
        </>)
        :
        (<>
        <h5>Success</h5>
        <p>Browse around the site for information related to your account</p>
        </>)}
        />
    );
}
export default Login;