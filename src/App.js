import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store/store';
import HomeProgressBarpage from './Homebarspages/home-bars-component'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomeProgressBarpage />
      </div>
    </Provider>

  );
}

export default App;
