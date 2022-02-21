import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404. Page not found </h1>
            <Link to="/">Go to main</Link>
          </section>
          <section className="locations locations--login locations--current">
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
