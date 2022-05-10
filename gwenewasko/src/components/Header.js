import Logo from "../img/Gwen-logomark.png";

export default function Header(props) {
  return (
    <>
      <header>
        <nav class="ai-c bgc-white d-flex flex-row jc-sb p sticky d-f@lrg">
          <div>
            <img class="logo w-50 m-2" src={Logo} alt="Gwen Ewasko" href="/" />
          </div>
          <ul class="ai-c d-flex fxw-w lis-n m-2 menu p">
            <li class="underline ml@lrg nav-link">
              <a class="a c-lightgray" href="/aboutme">
                About Me
              </a>
            </li>
            <li class="underline ml@lrg nav-link">
              <a class="a c-lightgray" href="/work">
                Work
              </a>
            </li>
            <li class="underline ml@lrg nav-link">
              <a
                class="btn btn-outline-info button rounded-pill c-lightgray"
                href="/contact"
              >
                Get in Touch
              </a>
            </li>
          </ul>
          <div class="hamburger">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
}
