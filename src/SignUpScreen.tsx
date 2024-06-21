import React, { useState } from "react";
import { Keyboard } from "react-native";

//naviagtion
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootsStackParamList } from '../src/App'
import { firebase } from "@react-native-firebase/firestore"
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
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type SignUpProps = NativeStackScreenProps<RootsStackParamList, 'SignUp'>

function SignUp({ navigation }: SignUpProps) {
  const [email, setemail] = useState('')
  const [wrongemail, setwrongemail] = useState('')
  const [password, setpassword] = useState('')
  const [wrongpassword, setwrongpassword] = useState('')

  const validate = () => {

    let validEmail = true;
    let validpassword = true;



    //Email
    if (email == '') {
      validEmail = false
      setwrongemail("Please Enter Valid Email")
    } else if (email != '' && !email.toString().match(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)) {
      validEmail = false
      setwrongemail("Please Enter Valid Email")

    } else if (email != '' && email.toString().match(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)) {
      validEmail = true
      setwrongemail("")

    }

    //Password
    if (password == '') {
      validpassword = false
      setwrongpassword("Enter vali    d password")
    } else if (password != '' && !password.toString().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
      validpassword = false
      setwrongpassword("Minimum eight characters, at least one letter, one number and one special character")
    } else if (password != '' && password.toString().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
      validpassword = true
      setwrongpassword("")
    }


    return validEmail && validpassword





  }
  const loginUser = () => {

    firebase.firestore().collection("User").where("email", "==", email).get().then(data => {
      console.log(data.docs)

      if (data.docs.length > 0) {
        data.docs.forEach(item => {

          if (item.data().password == password) {
            setwrongemail("")
            setwrongpassword("")
            console.log(item.data().username)
            navigation.navigate("Successful", {
              username: item.data().username.toString(), firstname: item.data().firstname.toString(), lastname: item.data().lastname.toString(), email: item.data().email.toString(),
              Address: item.data().Address.toString(), Dob: item.data().date.toString()
            })


          } else {
            setwrongpassword("Wrong Password")
          }
        })

      } else {
        setwrongemail("No Such User")
      }

    }



    )
  }
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      
      <View style={styles.container}>
      
        <View style={styles.header}>
        
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg' }}
            style={styles.headerImg}
            alt='Logo'

          />

          <Text style={styles.title}>Login In </Text>
         
        </View>
        

        <View style={styles.form}>

          <View style={styles.input}>
            <Text style={styles.inputlabel}>Email</Text>
            <TextInput
              style={styles.TextInput}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType="email-address"
              value={email}
              onChangeText={email => { setemail(email) }}
              placeholder="Email"
              placeholderTextColor="#6b7280" />

          </View>
          {wrongemail != '' && <Text style={styles.errorMsg}>{wrongemail}</Text>}
          <View style={styles.input}>
            <Text style={styles.inputlabel}>Password</Text>
            <TextInput
              style={styles.TextInput}
              secureTextEntry
              value={password}
              onChangeText={password => { setpassword(password) }}
              placeholder="Password"
              placeholderTextColor="#6b7280" />

          </View>
          {wrongpassword != '' && <Text style={styles.errorMsg}>{wrongpassword}</Text>}

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => {
              if (validate()) {
                loginUser()


              }
            }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>
                  Login In
                </Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
              navigation.navigate('LoginPage')
            }}>
              <Text>Got to Sign Up</Text>
            </TouchableOpacity>


          </View>










          
        </View>
        
      </View>
    
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  errorMsg: {
    fontSize: 10,
    color: '#FF0000'

  },
  TextInput: {
    borderWidth: 1,

    borderColor: '#000000',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'


  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#07eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20

  },
  formAction: {
    marginBottom: 30,
    marginVertical: 24

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,


  },
  header: {
    alignItems: 'center',
    marginVertical: 30
  },
  headerImg: {
    width: 88,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
    borderRadius: 50,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
    textAlign: 'center'
  },

  input: {
    marginBottom: 20

  },
  inputlabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16



  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222'
  },
  form: {
    width: '100%',
    marginBottom: 24,
    flex: 1

  }




});

export default SignUp;