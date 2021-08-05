import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
     FormContext: {
         width:"100%",
         height:"100%",
         bottom:0,
         backgroundColor:"#4F4F4F",
         alignItems:"center",
         borderTopLeftRadius:30,
         borderTopRightRadius:30,
         marginTop:30,
     },
form:{
    width:"100%",
    height:"auto",
    marginTop: 30,
    padding: 10,
},
formLabel:{
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
},
input:{
    width:"90%",
    borderRaius:50,
    backgroundColor:"#C0C0C0",
    height: 40,
    margin:12,
    paddingLeft:10,
}
});

export default styles