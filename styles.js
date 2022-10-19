import {StyleSheet} from 'react-native';
//estilizar os erros

export default StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#A9DEF9',
    padding: 18,
  },
  header : {
    fontSize: 40,
  },
  header2 : {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  subtitle : {
    fontSize: 20,
  },
  button : {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    width: 300,
    height:45,
    marginTop: 40
  },
  input : {
    backgroundColor:'white',
    borderWidth:2,
    marginVertical : 20,
    borderRadius:10,
    width: 300,
    height: 40,
    borderColor:'white'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})