import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShareLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const MoviesDetals = lazy(() => import('../views/MoviesDetals'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShareLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetals />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
