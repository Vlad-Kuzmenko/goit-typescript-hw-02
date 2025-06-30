import s from "./ImageCard.module.css";
import { OpenModalType } from "../../App.types";

type ImageCardProps = {
  image: ImageProps;
  openModal: OpenModalType;
};

type ImageProps = {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

const ImageCard = ({ image, openModal }: ImageCardProps) => {
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
