import React, { useEffect } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { style } from './style';

const ListProductScreen = (props) => {

  return (
    <View style={style.container}>
      <View style={style.titleView}>
        <Text style={style.title}>Liste des produits scan</Text>
      </View>
      <FlatList
        data={props.productList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item}) => <Text style={style.item}>- {item.name} </Text> 
        }
        style={style.list}
      />
    </View>
  );
}

export default ListProductScreen;