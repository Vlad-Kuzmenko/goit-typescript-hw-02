import s from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <div className={s.card}>
      <img
        className={s.image}
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal(urls.regular, alt_description)}
      />
    </div>
  );
};

export default ImageCard;
