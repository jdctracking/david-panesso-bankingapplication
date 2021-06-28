import Card from "./context";
import UserContext from "./context";

function Home(){
    return(
        <Card
            bgcolor="dark"
            txtcolor="white"
            header="Bad Bank Landing Page"
            title="Welcome to the Bank"
            text="You can use this bank"
            body={(<img src="bank.png" className="img-fluid" 
            alt="Responsive image"/>)}
        />
    );
}
export default Home;