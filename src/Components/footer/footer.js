import "./footer.css";
import strings from "../../localization/localization";
export default function Footer(props) {
  return (
    <>
      <footer class="bg-dark text-center text-white">
        <div class="footer-container p-4">
          <section class="mb-4">
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-twitter"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-google"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-instagram"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i class="fab fa-github"></i>
            </a>
          </section>

          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="col-md-5 col-12">
                  <div class="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" class="form-control" />
                    <label class="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section class="">
            <div class="row" style={{display:"flex",justifyContent:"center"}}>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <h4 >{strings.souqcar}</h4>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white">
                    {strings.aboutus}   
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white">
                    {strings.contactus}
                    </a>
                  </li>
               
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <h4 >{strings.needhelp}</h4>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white">
                      {strings.faq}
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white">
                      {strings.privacypolicy}
                    </a>
                  </li>
                  <li>
                    <a id="foot" href="#!" class="text-white ">
                      {strings.termsofuse}
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <h4>{strings.famouscarmakers}</h4>
                  </li>
                  <li>
                    <a href="#!" id="foot" class="text-white">
                      {strings.hyundai}
                    </a>
                  </li>

                  <li>
                    <a href="#!" id="foot" class="text-white">
                      {
                        strings.mercedes
                      }
                    </a>
                  </li>
                  <li>
                    <a href="#!" id="foot" class="text-white">
                      {strings.fiat}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
