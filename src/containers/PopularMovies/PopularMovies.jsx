import { popularMovies } from "../../data/popularMovies";
import PopularMovie from "../../components/PopularMovie/PopularMovie";

const PopularMovies = () => {
  return (
    <div className="flex justify-center gap-3">
      {popularMovies.map((movie, index) => {
        return <PopularMovie key={index} movie={movie} />;
      })}
    </div>
  );
};

export default PopularMovies;
