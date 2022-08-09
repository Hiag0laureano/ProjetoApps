import { StatusBar } from 'expo-status-bar';
import {caixa} from  './Style';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={caixa.container}>
      <StatusBar style="auto" />

      <View style={caixa.header}>

        <View style={caixa.logoOpcoes}>
          <Image style={caixa.imgOpcoes} source={{uri:('https://cdn-icons-png.flaticon.com/128/747/747327.png')}}/>
        </View>

        <View style={caixa.logocompra}>
          <Image style={caixa.imgcompras} source={{uri:('https://cdn-icons-png.flaticon.com/512/6564/6564894.png')}}/>
        </View>

      </View>
    
    <View style={caixa.main}>
      <ScrollView horizontal={false}>
        <Text style={caixa.txtNovaColecao}> New Collection</Text>
      <View style={caixa.imgPrincipal}>
        <Image style={caixa.imgInicial} source={{uri:('https://cf.shopee.com.br/file/91cb65c213fec50f5c81417809e37ac0')}}/>
      </View>

      <View style={caixa.Genero}>
        <Text style={caixa.txtPopular}>Popular</Text>
        <Text style={caixa.txtMasculino}>Masculino</Text>
        <Text style={caixa.txtFeminino}>Feminino</Text>
        <Text style={caixa.txtKid}>Kid</Text>
      </View>

      <View style={caixa.Categoria}>
        <Text style={caixa.txtAll}>All</Text>
        <Text style={caixa.txtOriginais}>Originais</Text>
        <Text style={caixa.txtLifestyle}>Lifestyle</Text>
        <Text style={caixa.txtRunning}>Running</Text>
        <Text style={caixa.txtTennis}>Tennis</Text>
      </View>

      <View style={caixa.Produtos}>
        <View style={caixa.Lista}>
        <Image style={caixa.imgProduto} source={{uri:('https://cf.shopee.com.br/file/91cb65c213fec50f5c81417809e37ac0')}}/>
        <Text style={caixa.txtProduto}>Tênis Jordan 1</Text>
        <Text style={caixa.txtPreco}>R$ 1.199,99</Text>
        </View>

        <View style={caixa.Lista2}>
        <Image style={caixa.imgProduto} source={{uri:('https://cf.shopee.com.br/file/91cb65c213fec50f5c81417809e37ac0')}}/>
        <Text style={caixa.txtProduto}>Tênis Jordan 1</Text>
        <Text style={caixa.txtPreco}>R$ 1.199,99</Text>
        </View>

        <View style={caixa.Lista}>
        <Image style={caixa.imgProduto} source={{uri:('https://cf.shopee.com.br/file/91cb65c213fec50f5c81417809e37ac0')}}/>
        <Text style={caixa.txtProduto}>Tênis Jordan 1</Text>
        <Text style={caixa.txtPreco}>R$ 1.199,99</Text>
        </View>
        
        <View style={caixa.Lista2}>
        <Image style={caixa.imgProduto} source={{uri:('https://cf.shopee.com.br/file/91cb65c213fec50f5c81417809e37ac0')}}/>
        <Text style={caixa.txtProduto}>Tênis Jordan 1</Text>
        <Text style={caixa.txtPreco}>R$ 1.199,99</Text>
        </View>
      </View>
      </ScrollView>
    </View>
    <View style={caixa.footer}>
        <View style={caixa.Icons}>
          
          <View style={caixa.iconHome}>
            <Image style={caixa.imgIcons} source={{uri:('https://cdn-icons-png.flaticon.com/128/1946/1946436.png')}}/>
          </View>
          
          <View style={caixa.iconFavoritos}>
            <Image style={caixa.imgIcons} source={{uri:('https://static.thenounproject.com/png/428419-84.png')}}/>
          </View>
          
          <Image style={caixa.imgIcons} source={{uri:('https://cdn-icons-png.flaticon.com/512/49/49116.png')}}/>

        </View>
      </View>
    </View>
   
  );
}


