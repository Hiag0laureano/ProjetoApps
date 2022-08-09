import { StyleSheet } from "react-native";

export const caixa = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex: 0.5,
    height:"100%",
    width:"100%",
   
    flexDirection:"row",
  },
  logoOpcoes:{
    paddingTop:60,
    paddingLeft:20,
    alignItems: 'center',
    textAlign:"left",
    flexDirection:"row",
  },
  imgOpcoes:{
    height:30,
    width:30,
  },
  logocompra:{
    paddingTop:60,
    paddingLeft:"80%",
    alignItems: 'center',
    textAlign:"right",
    flexDirection:"row",
  },
  imgcompras:{
    height:50,
    width:50,
  },
  Nomeloja:{
    fontSize:30,
    color:"black",
  },
  main:{
      flex: 6,
      display: "flex",
      flexDirection:"row",  
  },
  txtNovaColecao:{
    paddingTop:30,
    fontSize:27,
    fontWeight: 'bold',
  },
  imgPrincipal:{
    alignItems:"center",
    paddingTop:30,
  },
  imgInicial:{
    borderRadius:30,
    width:500,
    height:220,
  },
  Genero:{
    paddingLeft:50,
    paddingTop: 50,
    flexDirection:"row",
    padding:10,
    
  },
  txtPopular:{
    backgroundColor:'black',
    textAlign:"center",
    color:"white",
    fontSize:20,
    padding:10,
    height:45,
    width:110,
    borderRadius:10,
  },
  txtMasculino:{
    textAlign:"center",
    color:"black",
    fontSize:20,
    paddingLeft:30,
    padding:10,
    borderRadius:10,
  },
  txtFeminino:{
    textAlign:"center",
    color:"black",
    fontSize:20,
    paddingLeft:30,
    padding:10,
    borderRadius:10,
  },
  txtKid:{
    textAlign:"center",
    color:"black",
    fontSize:20,
    paddingLeft:30,
    padding:10,
    borderRadius:10,
  },
  Categoria:{
    paddingLeft:35,
    paddingTop: 50,
    flexDirection:"row",
    padding:10,
    
  },
  txtAll:{
    textAlign:"center",
    color:"#DC143C",
    fontSize:18,
    padding:10,
    paddingLeft:25,
    borderRadius:10,
  },
  txtOriginais:{
    textAlign:"center",
    color:"black",
    fontSize:18,
    paddingLeft:20,
    padding:10,
    borderRadius:10,
  },
  txtLifestyle:{
    textAlign:"center",
    color:"black",
    fontSize:18,
    paddingLeft:20,
    padding:10,
    borderRadius:10,
  },
  txtRunning:{
    textAlign:"center",
    color:"black",
    fontSize:18,
    paddingLeft:30,
    padding:10,
    borderRadius:10,
  },
  txtTennis:{
    textAlign:"center",
    color:"black",
    fontSize:18,
    paddingLeft:30,
    padding:10,
    borderRadius:10,
  },
  Produtos:{
    flex:8,
    heigh:300,
    overflow:"scroll",
    justifyContent: "center",
    textAlign:"center",
    paddingTop:15,
    flexDirection:"row",
    flexWrap:"wrap",
    
  },
  Lista:{
    flexDirection:"column",
  },
  imgProduto:{
    height:200,
    width:200,
    borderRadius:15,
  },
  txtProduto:{
    fontSize:20,
    fontWeight:"bold",
  },
  txtPreco:{
    fontSize:13,
  },
  Lista2:{
    paddingLeft:30,
    flexDirection:"column",
  },
  footer:{
    flex:0.5,
    backgroundColor:"white", 
  },
  Icons:{
    flexDirection:"row",
    padding:20,
    paddingRight:50,
    justifyContent:"center",
    textAlign:"center",
    alignItems: "center",
  },
  imgIcons:{
    height:40,
    width:40,
  },
  iconHome:{
    paddingRight:50,
  },
  iconFavoritos:{
    paddingRight:50,
  }
});