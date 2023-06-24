import React from 'react';
import Map from './components/UI/Map'
import Header from './components/Header'
import { Provider } from 'react-redux';
import store from '../src/store/index';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <Map />
            </div>
        </Provider>
    );
}

export default App;
