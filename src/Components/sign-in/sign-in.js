import { signInWithGooglePopup } from "../../firebase/firebase";

import Button from "../button/button.component";
import "./sign-in.scss";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup().then(() => navigate("/MainPage"));
  };

  return (
    <>
      <Card
        className="shadow rounded-4 mt-5"
        style={{ border: "1px solid white" }}
      >
        <Card.Body>
          <Link
            className="login-logo d-inline-block mb-5 d-flex justify-content-end"
            href="https://souq.car/ar"
            title="سوق كار"
          >
            <img
              className="light w-100 animate__animated animate__fadeInRight duration_2s img-fluid w-auto"
              src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694468780/Untitled_Project_kxiqpk.jpg"
              style={{}}
              alt="سوق كار"
            ></img>
          </Link>
          <div className="sign-in-container">
            <div className="buttons-container">
              <Button
                type="button"
                id="btn1"
                buttonType="google"
                onClick={signInWithGoogle}
                
              >
                <div>
                  <i
                    class="fa-brands fa-google"
                    style={{
                      color: " #ffffff",
                      fontSize: "25px",
                      marginTop: "11.5px",
                      marginInlineEnd:"10px",

                    }}
                  ></i>
                </div>
                <div>Login With Google</div>
              </Button>
              <br></br>
              <Button
                type="button"
                id="btn2"
              >
                <div>
                  <i
                    class="fa-brands fa-facebook"
                    style={{
                      color: "#ffffff",
                      fontSize: "26px",
                      marginTop: "11.5px",
                      marginInlineEnd:"10px",
                    }}
                  ></i>
                </div>
                <div>Login With Facebook </div>
              </Button>
              <br></br>
              <Button
                type="button"
                id="btn3"
              >
                <div>
                  <i
                    class="fa-solid fa-phone"
                    style={{
                      color: " #ffffff",
                      fontSize: "25px",
                      marginTop: "11.5px",
                      marginInlineEnd:"10px",
                    }}
                  ></i>
                </div>
                <div>Login With Mobile </div>
              </Button>
              <br></br>
              <Button
                type="button"
                id="btn4"
              >
                <div>
                  <i
                    class="fa-solid fa-envelope"
                    style={{
                      color: " #ffffff",
                      fontSize: "25px",
                      marginTop: "11.5px",
                      marginInlineEnd:"10px",
                    }}
                  ></i>
                </div>
                <div>Login With Email </div>
              </Button>
              <br></br>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignInForm;
