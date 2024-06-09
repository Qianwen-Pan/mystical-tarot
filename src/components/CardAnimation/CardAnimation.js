import "./CardAnimation.scss";

export default function CardAnimation({ images }) {
  const cardClasses = ["one", "two", "three", "four", "five"];
  return (
    <>
      <div class="card-animation__cards">
        {images.map((image, index) => (
          <div className={`card-animation__card card-animation__card--${cardClasses[index]}`}>
            <img className="card-animation__img" src={image} alt="tarot card" />
          </div>
        ))}
      </div>
    </>
  );
}
