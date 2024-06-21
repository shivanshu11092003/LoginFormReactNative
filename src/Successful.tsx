import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import{scale,moderateScale} from 'react-native-size-matters'


import{ NativeStackScreenProps} from "@react-navigation/native-stack"
import{RootsStackParamList} from '../src/App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
type SuccessfulProps = NativeStackScreenProps<RootsStackParamList,'Successful'>
function Successful({route}:SuccessfulProps){
  const {username,firstname,lastname,email,Address,Dob} = route.params
  
  useNavigation<NativeStackNavigationProp<RootsStackParamList>>()
  return (
    <View  style={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems:'center',
      }}
>
       <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/190/190411.png' }}
                        style={styles.Successful}
                        alt='Logo'

                    />
                    
      <Text>Successful</Text>
      <Text style={styles.inputlabel} >Username:  {username}</Text>
      <Text style={styles.inputlabel} >Name:  {firstname}{lastname}</Text>
      
      <Text style={styles.inputlabel} >Email:  {email}</Text>
      <Text style={styles.inputlabel} >Address:  {Address}</Text>
      <Text style={styles.inputlabel} >DOB:  {Dob}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  Successful:{
    width:scale(80),
                height:scale(80),
                
                borderRadius:moderateScale(10),
                justifyContent:'center',
                alignItems:'center'
  },
  inputlabel: {
        
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 14



}
  
})

export default Successful