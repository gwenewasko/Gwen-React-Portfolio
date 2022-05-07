import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header>header here</Header>
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
