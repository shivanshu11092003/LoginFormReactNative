import { View, Text } from 'react-native'
import React from 'react'


import{ NativeStackScreenProps} from "@react-navigation/native-stack"
import{RootsStackParamList} from '../src/App'
type SuccessfulProps = NativeStackScreenProps<RootsStackParamList,'Successful'>
function Successful(){
  return (
    <View>
      <Text>Successful</Text>
    </View>
  )
}

export default Successful