import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image, OpenModalType } from "../../App.types";

type ImageGalleryProps = {
  images: Image[];
  openModal: OpenModalType;
};

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
