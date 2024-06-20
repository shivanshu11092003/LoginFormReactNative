import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

//naviagtion
import{ NativeStackScreenProps} from "@react-navigation/native-stack"
import{RootsStackParamList} from '../src/App'

type LoginProps = NativeStackScreenProps<RootsStackParamList,'LoginPage'>



function LoginPage({navigation}:LoginProps){
    const[form,setform] = React.useState({
        username:'',
        firstname:'',
        lastname:'',
        email:'',
        Address:'',
        dob:'',
        password:'',
        confirmpassword:''
    
      });
      
    
      return(
        <SafeAreaView style={{flex:1,backgroundColor:'#e8ecf4'}}>
          <View style={styles.container}>
          <View style={styles.header}>
            <Image
            source={{uri:'https://i.pinimg.com/564x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg'}}
            style={styles.headerImg}
            alt='Logo'
            
            />
            
            <Text style={styles.title}>Sign In </Text>
            </View>
          
          <View style={styles.form}>
          <ScrollView>
            <View style={styles.input}>
              <Text style= { styles.inputlabel}>User Name</Text>
              <TextInput
              value={form.username}
              onChangeText={username => setform({...form, username})}
              placeholder="username"
              placeholderTextColor="#6b7280"/>
              
    
            </View>
            
            <View style={styles.input}>
              <Text style= { styles.inputlabel}>First Name</Text>
              <TextInput
              value={form.firstname}
              onChangeText={firstname => setform({...form, firstname})}
              placeholder="First Name"
              placeholderTextColor="#6b7280"/>
    
            </View>
            <View style={styles.input}>
              <Text style= {styles.inputlabel}>Last Name</Text>
              <TextInput
              value={form.lastname}
              onChangeText={lastname => setform({...form, lastname})}
              placeholder="Last Name"
              placeholderTextColor="#6b7280"/>
    
            </View>
            <View style={styles.input}>
              <Text style= { styles.inputlabel}>Email</Text>
              <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType="email-address"          
              value={form.email}
              onChangeText={email => setform({...form, email})}
              placeholder="Last Name"
              placeholderTextColor="#6b7280"/>
    
            </View>
            <View style={styles.input}>
              <Text style= { styles.inputlabel}>Address</Text>
              <TextInput
              value={form.Address}
              onChangeText={Address => setform({...form, Address})}
              placeholder="Address"
              placeholderTextColor="#6b7280"/>
    
            </View>
            <View style={styles.input}>
              <Text style= { styles.inputlabel}>Dob</Text>
              <TextInput
              value={form.Address}
              onChangeText={Address => setform({...form, Address})}
              placeholder="Address"
              placeholderTextColor="#6b7280"/>
    
            </View>
            <View style={styles.input}>
              <Text style= { styles.inputlabel}>Password</Text>
              <TextInput
              secureTextEntry
              value={form.password}
              onChangeText={password => setform({...form, password})}
              placeholder="**********"
              placeholderTextColor="#6b7280"/>
    
            </View>
            <View style={styles.input}>
              <Text style= { styles.inputlabel}>Confirm Password</Text>
              <TextInput
              secureTextEntry
              value={form.confirmpassword}
              onChangeText={confirmpassword => setform({...form, confirmpassword})}
              placeholder="**********"
              placeholderTextColor="#6b7280"/>
    
            </View>
            
           </ScrollView>
           
          </View>
          <View style={styles.formAction}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>
                    Sign In
                  </Text>
                </View>
    
              </TouchableOpacity>
    
    
            </View>
        </View>
      </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    btnText:{
      fontSize:18,
      fontWeight:'600',
      color:'#fff'
  
  
    },
    btn:{
      backgroundColor: '#075eec',
      borderRadius:8,
      borderWidth:1,
      borderColor:'#07eec',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      paddingVertical:10,
      paddingHorizontal:20
  
    },
    formAction:{
      marginBottom:30,
      marginVertical:24
  
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
      padding:24,
      
  
    },
    header:{
      alignItems: 'center',
      marginVertical:30
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
    
    input:{
      marginBottom:20
  
    },
    inputlabel:{
      fontSize:17,
      fontWeight:'600',
      color: '#000000',
      marginBottom:16
  
  
      
    },
    inputControl:{
      height:44,
      backgroundColor:'#fff',
      paddingVertical:10,
      paddingHorizontal:16,
      borderRadius:12,
      fontSize:15,
      fontWeight:'500',
      color:'#222'
    },
    form:{
      width: '100%',
      marginBottom:24,
      flex:1
  
    }
  
    
      
  
  });

export default LoginPage;