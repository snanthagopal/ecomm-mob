import React from 'react';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import ProductList from './screens/ProductList';
import ProductDetail from './screens/ProductDetail';
import MyCart from './screens/MyCart';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/products';



const ProductsNavigator = StackNavigator({
    Productlist: { screen: ProductList },
    ProductDetail: {screen: ProductDetail}
});

const PurchaseNavigator = StackNavigator({
    MyCart: { screen: MyCart }
    //payment
    //payment confirmation
});

let Navigator;
if (Platform.OS === 'ios') {
    Navigator = TabNavigator(
        {
            Home: { screen: ProductsNavigator },
            MyCart: { screen: PurchaseNavigator },
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
        MyCart: { screen: PurchaseNavigator }
    });
}

const store = createStore(
    combineReducers({ productsReducer ,'userReducer':'test'}),
    applyMiddleware(thunk),
);

export default () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);
