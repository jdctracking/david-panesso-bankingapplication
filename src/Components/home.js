import Card from "./context";
import bank from "./bank.png";

function Home(){
    return(
        <Card
            bgcolor="success"
            txtcolor="white"
            header="Bad Bank Landing Page"
            title="Welcome to Bad Bank"
            text="Online services at the tip of your fingers!"
            body={(<img src={bank} className="img-fluid" 
            alt="Responsive image"/>)}
        />
    );
}
export default Home;