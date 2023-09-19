import SignInForm from "../../Components/sign-in/sign-in";
import SignUpForm from "../../Components/sign-up/sign-up";
import "./authentication.css";

const Authentication = () => {
  return (
    <div  className="row">
    <div id="ddd" className="col-lg-7 d-lg-block d-none" >
    <img src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694468780/Untitled_Project_kxiqpk.jpg" alt="art" id="cover" className="img-fluid " style={{position:"relative", zIndex:"0" ,height:"100%" }}/>
        </div>
          <div className="authentication-container col-lg-5 col-md-12">
            <SignInForm></SignInForm>
          </div>
       
    </div>
  );
};

export default Authentication;
