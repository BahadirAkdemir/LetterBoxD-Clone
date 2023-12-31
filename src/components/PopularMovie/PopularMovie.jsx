const PopularMovie = ({ movie }) => {
  const { title, image, view, like } = movie;
  return (
    <div>
      <div className="popular-movie-container w-[150px] h-[225px] rounded cursor-pointer relative">
        <div className="popular-movie-border-wrapper"></div>
        <img src={image} className=" rounded object-cover" />
        <div className="popular-movie-overlay flex flex-col items-center text-xl">
          <p className="pi pi-eye text-green-400 text-3xl"></p>
          <p className=" mb-4">{view}</p>
          <p className="pi pi-heart-fill text-orange-500 text-3xl"></p>
          <p>{like}</p>
        </div>
        <div className="popular-movie-overlay-text">{title}</div>
      </div>
    </div>
  );
};

export default PopularMovie;
