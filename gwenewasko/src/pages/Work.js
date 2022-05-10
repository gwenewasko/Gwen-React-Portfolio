import BestShot from "../img/best-shot-screen-shot.png";
import QuizGame from "../img/quiz-game-screenshot.png";
import PetrolPirate from "../img/petrol-pirate-app-screenshot.png";

function Work(props) {
  return (
    <>
      {/* <section class="d-flex" id="/work">
        <div class="card w-card m-reg">
          <img src={QuizGame} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a class="a c-lightgray" href="/work">
              See More
            </a>
          </div>
        </div>
        <div class="card w-card m-reg">
          <img src={BestShot} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Best Shot</h5>
            <p class="card-text">NBA stats API search application.</p>
            <a href="./Work.js" class="btn btn-primary">
              See the repo
            </a>
          </div>
        </div>
      </section> */}
      <section>
        <div class="my-5 w-100">
          <div class="row">
            <div class="bcg-blue d-flex flex-wrap col-4 miw-100@sml p-4 zoom">
              <img src={QuizGame} class="card-img-top" alt="..." />
            </div>
            <div class="bcg-pink d-flex flex-wrap col-4 miw-100@sml p-4 zoom">
              <img src={BestShot} class="card-img-top" alt="..." />
            </div>
            <div class="bcg-blue d-flex flex-wrap col-4 miw-100@sml p-4 zoom">
              <img src={PetrolPirate} class="card-img-top" alt="..." />
            </div>
            <div class="bcg-pink d-flex flex-wrap col-4 miw-100@sml p-4 zoom">
              <img src={QuizGame} class="card-img-top" alt="..." />
            </div>
            <div class="bcg-blue d-flex flex-wrap col-4 miw-100@sml p-4 zoom">
              <img src={BestShot} class="card-img-top" alt="..." />
            </div>
            <div class="bcg-pink d-flex flex-wrap col-4 miw-100@sml p-4 zoom">
              <img src={PetrolPirate} class="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
