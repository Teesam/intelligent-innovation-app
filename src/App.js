import './App.css';
import GeneratePhoto from './components/generate-photo/generate-photo';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import Trend from './components/trend/trend';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <Provider store = { store }>
      <div className="App">

        <div id = 'nav-holder'>
          <div id = 'logo-holder'>
            <i id = 'logo-icon' className = 'fas fa-cube'></i>
            <h1>bluecube</h1>
          </div>
          <Nav />
        </div>

        <div id = 'body-holder'>
          <div id = 'search-holder'>

            <Search />

            <div id = 'profile-holder'>
              <i id = 'notification-icon' className = 'fas fa-bell'></i>
              {/* <img /> */}
              <p>
                Abigail
                <i className = 'fas fa-chevron-down'></i>
              </p>
            </div>
          </div>

          <Trend />

          <div id = 'photo-holder'>

            <GeneratePhoto />

          </div>
        </div>

      </div>
    </Provider>
  );
}

export default App;
