import MainScreen from '../main-screen/main-screen';
import {AppRoute} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginScreen from '../login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screeen/not-found-screeen';
import PropertyScreen from '../property-screen/property-screen';

type AppScreenProps = {
  rentCount: number,
  isLoggedIn: boolean,
  isFavorites: boolean,
}

function App({rentCount, isLoggedIn, isFavorites}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen rentCount={rentCount} isLoggedIn={isLoggedIn}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen isLoggedIn={isLoggedIn} />}
        />
        <Route
          path={AppRoute.Favorites }
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <FavoritesScreen isLoggedIn={isLoggedIn} isFavorites={isFavorites}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
