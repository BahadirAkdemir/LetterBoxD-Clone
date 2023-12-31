import { popularMovies } from "../../data/popularMovies";
import PopularMovie from "../../components/PopularMovie/PopularMovie";

const MovieList = ({ movieType }) => {
  return (
    <section className="pb-5 pt-5">
      <h2
        className="border-b border-solid border-gray-400
            text-blue-900
            font-graphik
            text-base
            font-normal
            tracking-wider
            mb-4
            mt-0
            pb-1
            uppercase
            flex
            justify-between"
      >
        <span className="text-white text-xs tracking-wider uppercase top-3 whitespace-nowrap">
          <a href={"/"}>{movieType}</a>
        </span>
        <a
          className="text-white
            text-xs
            tracking-wider
            uppercase
            top-3
            whitespace-nowrap"
          href={"/"}
        >
          more
        </a>
      </h2>

      <ul className="flex flex-wrap justify-between ml-[-10px] overflow-hidden relative z-0 list-none">
        {popularMovies.map((movie, index) => {
          return (
            <li className="mb-0 h-225 w-150 block ml-2 bg-gray-900 shadow-md">
              <PopularMovie key={index} movie={movie} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MovieList;
