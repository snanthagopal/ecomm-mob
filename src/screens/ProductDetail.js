import React from 'react';
import { Image, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Button, Text } from 'native-base';
import * as ProductsActions from '../reducers/products';
class ProductDetail extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        tabBarIcon: () => <Icon name="home" />,
    };
    onBuyPress(product) {
        this.props.addProductToCart(product);
        this.props.navigation.goBack();
        setTimeout(() => this.props.navigation.navigate('MyCart',
            { product }), 0);
    }


    render() {
        const { navigation } = this.props;
        const { state } = navigation;
        const { params } = state;
        const { product } = params;
        return (
            <ScrollView>
                <Image
                    style={{
                        height: 200,
                        width: 160,
                        alignSelf: 'center',
                        marginTop: 20,
                    }}
                    source={{ uri: product.img }}
                />
                <Text
                    style={{
                        alignSelf: 'center',
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}
                >
                    ${product.price}
                </Text>
                <Text
                    style={{
                        alignSelf: 'center',
                        margin: 20,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Text>
                <Button
                    
                    style={{ margin: 10,alignSelf: 'center', }}
                    onPress={() => this.onBuyPress(product)}
                >
                    <Text>Buy this product</Text>
                </Button>
            </ScrollView>
        );
    }
}

ProductDetail.propTypes = {
    navigation: PropTypes.any.isRequired,
    addProductToCart: PropTypes.func.isRequired
};
ProductDetail.navigationOptions = props => {
    const { navigation } = props;
    const { state } = navigation;
    const { params } = state;
    return {
        tabBarIcon: () => <Icon name="home" />,
        headerTitle: params.product.name,
    };
};
function mapStateToProps(state) {
    return {
        user: ''
    };
}
function mapStateActionsToProps(dispatch) {
    return bindActionCreators(ProductsActions, dispatch);
}
export default connect(mapStateToProps, mapStateActionsToProps)(ProductDetail);