import Work from "../pages/Work";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header>header here</Header>
      <main>{props.children}</main>
      <Work>Work here</Work>
    </>
  );
}

export default Layout;
