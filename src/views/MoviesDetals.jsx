import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import api from 'resource/Api';
import FilmDetals from '../components/FilmDetals/FilmDetals';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    const dataModification = object => {
      const genres = object.genres.map(genre => genre.name).join(', ');
      const year = object['release_date'].split('-')[0];
      const score = Math.ceil(object['vote_average'] * 10);
      const newData = {
        img: `https://image.tmdb.org/t/p/w500/${object['poster_path']}`,
        title: object.title,
        genres,
        year,
        score,
        overview: object.overview,
      };
      setData(newData);
    };

    const fetchData = async () => {
      try {
        const response = await api.fetchId(movieId);
        dataModification(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <FilmDetals data={data} />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={'cast'} state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={'reviews'} state={location.state}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
