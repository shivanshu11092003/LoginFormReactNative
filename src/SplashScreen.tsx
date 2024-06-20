import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

//naviagtion
import{ NativeStackScreenProps} from "@react-navigation/native-stack"
import{RootsStackParamList} from '../src/App'


type SplashScreenprops = NativeStackScreenProps<RootsStackParamList,'SplashScreen'>
const SplashScreen = ({navigation}:SplashScreenprops) => {
    useEffect(()=>{
        setTimeout(
            () => {
                navigation.navigate('LoginPage')
                
            },
            1300
        )
    },[])
  return (
    <View style={styles.header}>
            <Image
            source={{uri:'https://i.pinimg.com/564x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg'}}
            style={styles.headerImg}
            alt='Logo'
            
            />
           
            
            <Text style={styles.title}> Welcome </Text>
            </View>
  )
}
const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        marginVertical:100
      },
      headerImg:{
        width:88,
        height:80,
        alignSelf:'center',
        marginBottom:36,
        borderRadius: 50,
      },
      title:{
        fontSize:27,
        fontWeight:'700',
        color:'#000000',
        marginBottom:6,
        textAlign:'center'
      },
})

export default SplashScreen