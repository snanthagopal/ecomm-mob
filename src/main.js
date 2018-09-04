import React from 'react';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import ProductList from './screens/ProductList';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/products';

const ProductsNavigator = StackNavigator({
    Productlist: { screen: ProductList }
})

let Navigator;
if (Platform.OS === 'ios') {
    Navigator = TabNavigator(
        {
            Home: { screen: ProductsNavigator }
        },
        {
            tabBarOptions: {
                inactiveTintColor: '#aaa',
                activeTintColor: '#000',
                showLabel: true,
            },
        },
    );
} else {
    Navigator = DrawerNavigator({
        Home: { screen: ProductsNavigator },

    });
}

const store = createStore(
    combineReducers({ productsReducer }),
    applyMiddleware(thunk),
);

export default () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);
