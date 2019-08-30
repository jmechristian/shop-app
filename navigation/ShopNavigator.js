import { createStackNavigator, createAppContainer } from 'react-navigation';

import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';

import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    productsOverview: ProductsOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: 'white'
    }
  }
);

export default createAppContainer(ProductsNavigator);
