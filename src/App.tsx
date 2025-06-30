import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { getImage } from "./unsplash-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Loader } from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image, OpenModalType } from "./App.types";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        // setError(false);
        const data = await getImage(query, page);
        const { results, total_pages, total } = data;
        setTotal(total_pages);

        if (total === 0) {
          setError(
            "No images found for this query. Please try a different one."
          );
        }

        setImages((prev: Image[]) => [...prev, ...results]);
      } catch {
        setError("There was an error fetching the images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
    setTotal(0);
  };

  const handleMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal: OpenModalType = (src, alt) => {
    setModalImage({ src, alt: alt ?? "No description" });
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const isLastPage = page === total;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={handleOpenModal} />
      )}
      {images.length > 0 && !isLastPage && <LoadMoreBtn onClick={handleMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        src={modalImage?.src ?? ""}
        alt={modalImage?.alt ?? ""}
      />
    </>
  );
}

export default App;
