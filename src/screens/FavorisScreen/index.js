import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import { style } from './style';


const FavorisScreen = () => {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>ICI FUTUR FAVORIS</Text>
//       </View>
//     );
//   }

return (
    <View style={style.container}>
      <View style={style.titleView}>
        <Text style={style.title}>Vos favoris</Text>
      </View>
      {/* <FlatList
        data={props.productList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item}) => <Text style={style.item}>- {item.name}</Text>
        }
        style={style.list}
      /> */}
    </View>
  );
}


  export default FavorisScreen;