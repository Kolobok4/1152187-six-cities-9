import MainScreen from '../main-screen/main-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginScreen from '../login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screeen/not-found-screeen';
import PropertyScreen from '../property-screen/property-screen';

type AppScreenProps = {
  rentCount: number;
}

function App({rentCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen rentCount={rentCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
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


