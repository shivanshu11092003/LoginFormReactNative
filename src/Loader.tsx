import { View, Text, Modal, ActivityIndicator } from 'react-native'
import{scale,moderateScale} from 'react-native-size-matters'

import React from 'react'

const Loader = () => {
  return (
    <Modal transparent visible style={{flex:1}}>
        <View
        style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:'rgba(0,0,0,.2)'

        }}>
            <View style = {{
                width:scale(80),
                height:scale(80),
                backgroundColor: "#ffffff",
                borderRadius:moderateScale(10),
                justifyContent:'center',
                alignItems:'center'
            }}>
                <ActivityIndicator size={'large'} />

            </View>
        </View>
    </Modal>
  );
}

export default Loader