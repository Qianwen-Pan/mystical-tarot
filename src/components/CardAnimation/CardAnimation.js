import "./CardAnimation.scss";

export default function CardAnimation({ images }) {
  const cardClasses = ["one", "two", "three", "four", "five"];
  return (
    <>
      <div className="card-animation__cards">
        {images.map((image, index) => (
          <div className={`card-animation__card card-animation__card--${cardClasses[index]}`} key={index}>
            <img className="card-animation__img" src={image} alt="tarot card" />
          </div>
        ))}
      </div>
    </>
  );
}
