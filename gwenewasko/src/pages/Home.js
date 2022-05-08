import Headshot from "../img/gwen-cutout_crop-sm.png";

function Home(props) {
  return (
    <>
      <section>
        <div class="ai-c d-flex">
          <img class="w-50" src={Headshot} alt="Gwen's Headshot" />
          <div>
            <h2 class="font">
              That's me, <span class="font f-bold">Gwen!</span>
            </h2>
            <p class="font">I'm a designer and full stack developer.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
