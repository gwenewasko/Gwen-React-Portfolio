import BestShot from "../img/best-shot-screen-shot.png";
import QuizGame from "../img/quiz-game-screenshot.png";

function WorkCard(props) {
  return (
    <>
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
    </>
  );
}

export default WorkCard;
