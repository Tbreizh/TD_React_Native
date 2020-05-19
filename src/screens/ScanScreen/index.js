import * as React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import BarCodeScanner from '../../components/BarCodeScanner';

const ScanScreen = (props) => {
    const  addProductFromBarCode = async (barcode) => {
        const { value } = barcode;
        const url = 'https://world.openfoodfacts.org/api/v0/product/' + value + '.json'

        try {
            const req = await fetch(url);
            if (req.ok) {
                const apiProduct = await req.json() || {};
                if (apiProduct.product.product_name_fr){
                    props.addProduct({
                        barcode: value,
                        name: apiProduct.product.product_name_fr
                    });
                    alert('Produit scanné');
                }
                else {
                    alert('Produit non reconnu');
                    throw Error("Product not found", url);
                }
            } 
            else {
                alert('Erreur de connexion');
                throw Error("Not 200");
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <View style={style.view}>
            <View style={style.titleView}>
                <Text style={style.title}>Scanner un produit</Text>
            </View>
            <View style={{flex: 2, width: '100%' }}>
                <BarCodeScanner 
                    style={style.scanner} 
                    onScan={
                        (barcode) => addProductFromBarCode(barcode)
                    } 
                />
            </View>
      </View>
    );
  }

  export default ScanScreen;