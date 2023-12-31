import MovieList from "../MovieList/MovieList.jsx";

const SideContent = () => {
  return (
    <>
      <MovieList movieType={"new on letterboxd"} />
      <MovieList movieType={"popular on letterboxd"} />
    </>
  );
};

export default SideContent;
