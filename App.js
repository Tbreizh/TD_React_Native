import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ScanScreen from './src/screens/ScanScreen';
import FavorisScreen from './src/screens/FavorisScreen';
import ListProductScreen from './src/screens/ListProductScreen';
import DetailScreen from './src/screens/DetailScreen';


const Tab = createBottomTabNavigator();

/*Test non fonctionnel nesting navigator*/
// const Stack = createStackNavigator();
// const Test = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="List" component={ListProductScreen}>
//         {/* {() => <ListProductScreen productList={productList} />} */}
//       </Stack.Screen>
//       <Stack.Screen name="Detail" component={DetailScreen} />
//     </Stack.Navigator>
//   );
// }


const App = () => {
  const [productList, setProductList] = useState([]) ;

  const addProduct = (product) => {
    let newList = [...productList];
    newList.push(product);
    setProductList(newList);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="List">
        {() => <ListProductScreen productList={productList} />}
      </Tab.Screen>
      {/* <Tab.Screen name='Liste des produits scannés' component={Test}></Tab.Screen> */}
      <Tab.Screen name='Scan'>
        {() => <ScanScreen addProduct={addProduct} />}
      </Tab.Screen>
      <Tab.Screen name="Favoris" component={FavorisScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;