import Logo from "../img/Gwen-logomark.png";

export default function Header(props) {
  return (
    <>
      <header>
        <nav class="ai-c bgc-white d-f jc-sb p sticky d-f@lrg">
          <div>
            <img class="logo w-50" src={Logo} alt="Gwen Ewasko" />
          </div>
          <ul class="ai-c d-f fxw-w lis-n m menu m0 p">
            <li class="underline ml@lrg nav-link">
              <a class="c-lightgray" href="#aboutme">
                About Me
              </a>
            </li>
            <li class="underline ml@lrg nav-link">
              <a class="c-lightgray" href="#work">
                Work
              </a>
            </li>
            <li class="underline ml@lrg nav-link">
              <a class="c-lightgray" href="#resume">
                Resume
              </a>
            </li>
            <li class="underline ml@lrg nav-link">
              <a class="c-lightgray" href="#contact">
                Contact
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
