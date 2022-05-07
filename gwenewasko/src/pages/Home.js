import Headshot from "../img/gwen-cutout_crop-sm.png";

function Home(props) {
  return (
    <>
      <div>
        <img class="pos-b w-50" src={Headshot} alt="Gwen's Headshot" />
      </div>
      <h3 class="f-oswald f-400 f-size">
        That's me! I'm a designer and full stack developer.
      </h3>
    </>
  );
}

export default Home;
