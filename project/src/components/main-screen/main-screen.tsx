import LocationsTabs from '../header/locations-tabs';
import Header from '../header/header';
import PropertyCard from '../property-screen/property-card';

type MainScreenProps = {
  rentCount: number,
  isLoggedIn: boolean
}

function MainScreen({rentCount, isLoggedIn} : MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header isLoggedIn={isLoggedIn}/>
      <main className={`page__main page__main--index ${rentCount === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs />
        <div className="cities">
          <div className={`cities__places-container ${rentCount === 0 && 'cities__places-container--empty'} container`}>
            {rentCount > 0 ? (
              <section className='cities__places places'>
                <h2 className='visually-hidden'>Places</h2>
                <b className='places__found'>312 places to stay in Amsterdam</b>
                <form className='places__sorting' action='#' method='get'>
                  <span className='places__sorting-caption'>Sort by</span>
                  <span className='places__sorting-type' tabIndex={0}>
                    Popular
                    <svg className='places__sorting-arrow' width='7' height='4'>
                      <use xlinkHref='#icon-arrow-select'></use>
                    </svg>
                  </span>
                  <ul className='places__options places__options--custom places__options--opened'>
                    <li className='places__option places__option--active' tabIndex={0}>Popular</li>
                    <li className='places__option' tabIndex={0}>Price: low to high</li>
                    <li className='places__option' tabIndex={0}>Price: high to low</li>
                    <li className='places__option' tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className='cities__places-list places__list tabs__content'>
                  <PropertyCard />
                  <PropertyCard />
                </div>
              </section>
            ) : (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
            )}
            <div className='cities__right-section'>
              {rentCount > 0 && <section className='cities__map map'></section>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
