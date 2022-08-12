import { lazy,Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ShareLayout from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const MoviesDetals = lazy(() =>
  import('../views/MoviesDetals' /* webpackChunkName: 'MoviesDetals' */)
);

export const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/" element={<ShareLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetals />}>
        <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
      </Suspense> 
  );
};
