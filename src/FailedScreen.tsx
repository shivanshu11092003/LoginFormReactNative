import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import{scale,moderateScale} from 'react-native-size-matters'


import{ NativeStackScreenProps} from "@react-navigation/native-stack"
import{RootsStackParamList} from '../src/App'
type SuccessfulProps = NativeStackScreenProps<RootsStackParamList,'Successful'>

export default function FailedScreen() {
  return (
    <View  style={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems:'center',
      }}
>
       <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/14090/14090276.png' }}
                        style={styles.Successful}
                        alt='Logo'

                    />
                    
                    
      <Text>Successful</Text>
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
  }
  
})