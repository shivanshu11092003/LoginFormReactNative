import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import firebase from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


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
    Modal,

} from 'react-native';

//naviagtion
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootsStackParamList } from '../src/App'

type LoginProps = NativeStackScreenProps<RootsStackParamList, 'LoginPage'>





function LoginPage({ navigation }: LoginProps) {
    const [username, setuserName] = useState('')
    const [wrongUsername, setwrongUserName] = useState('')
    const [firstname, setfirstName] = useState('')
    const [wrongfirstname, setwrongfirstName] = useState('')
    const [lastname, setlastName] = useState('')
    const [wronglastname, setwronglastName] = useState('')
    const [email, setemail] = useState('')
    const [wrongemail, setwrongemail] = useState('')
    const [Address, setAddress] = useState('')
    const [wrongAddress, setwrongAddressName] = useState('')
    const [password, setpassword] = useState('')
    const [wrongpassword, setwrongpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [wrongconfirmpassword, setwrongconfirmpassword] = useState('')
    const [date, setdate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [selectedDate, setseletedDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [authLogin, setauthLogin] = useState(false)
    

    const [open, setopen] = useState(false)

    function handleOnPress() {
        setopen(!open);

    }
    function handlechange(selectedDate: string) {
        setdate(selectedDate)
    }

    const validate = () => {
        let validusername = true;
        let validFirstname = true;
        let validlastname = true;
        let validEmail = true;
        let validAddress = true;
        let validpassword = true;
        let validconfirmpassword = true;

        //UserName
        if(username == ''){
            validusername = false
            setwrongUserName("Please Enter username")
        }else if(username != '' && !username.toString().match(/^[A-Za-z][A-Za-z0-9_]{7,29}$/))
            {
                validusername= false
                setwrongUserName("Please Enter username")

            }else if( username != '' && username.toString().match(/^[A-Za-z][A-Za-z0-9_]{7,29}$/)){
                validusername = true
                setwrongUserName("")
            }


        //FirstName
        if (firstname == '') {
            validFirstname = false;
            setwrongfirstName('Please Enter First Name');
        } else if (firstname != '' && firstname.length < 2) {
            validFirstname = false;
            setwrongfirstName('Please Enter 2<letter<50');

        } else if (firstname != '' && firstname.length>50) {
            validFirstname = false;
            setwrongfirstName('Please Enter 2<letter<50');

        } 
        else if (firstname != '' &&  firstname.length >=2 && !firstname.toString().match(/^[A-Za-z]+$/)) {
            validFirstname = false;
            setwrongfirstName('Please Enter 2<letter<50 and only Alphabet');

        } else if (firstname != '' && firstname.length >=2 && firstname.toString().match(/^[A-Za-z]+$/)) {
            validFirstname = true;
            setwrongfirstName('');
        }
        //LastNAme
        if (lastname == '') {
            validlastname = false;
            setwronglastName('Please Enter First Name');
        } else if (lastname != '' && lastname.length < 2) {
            validlastname = false;
            setwronglastName('Please Enter 2<letter<50');

        } else if (lastname != '' && lastname.length>50) {
            validlastname = false;
            setwronglastName('Please Enter 2<letter<50');

        } else if (lastname != '' && lastname.length >=2 && !lastname.toString().match(/^[A-Za-z]+$/)) {
            validlastname = false;
            setwronglastName('Please Enter 2<letter<50');

        }else if (lastname != '' && lastname.length >=2 && firstname.toString().match(/^[A-Za-z]+$/)) {
            validlastname = true;
            setwronglastName('');
        }
        //Email
        if(email == ''){
            validEmail = false
            setwrongemail("Please Enter Valid Email")
        }else if(email !='' && !email.toString().match(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)){
            validEmail = false
            setwrongemail("Please Enter Valid Email")

        }else if(email !='' && email.toString().match(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)){
            validEmail = true
            setwrongemail("")

        }
        //Address
        if(Address == ''){
            validAddress = false
            setwrongAddressName("Enter Address")
        }else{
            validAddress = true
            setwrongAddressName("")
        }
        //Password
        if(password == ''){
            validpassword = false
            setwrongpassword("Enter vali    d password")
        }else if(password != '' && !password.toString().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
            validpassword = false
            setwrongpassword("Minimum eight characters, at least one letter, one number and one special character")
        }else if(password != '' && password.toString().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
            validpassword = true
            setwrongpassword("")
        }
        //confirmPassword
        if(confirmpassword == ''){
            validconfirmpassword = false
            setwrongconfirmpassword("Enter Correct Password")
            
        }else if(confirmpassword !='' && confirmpassword!= password){
            validconfirmpassword = false
            setwrongconfirmpassword("Password not match")
        }else if(confirmpassword !='' && confirmpassword == password){
            validconfirmpassword = true
            setwrongconfirmpassword("")
        }


        return validusername && validFirstname && validlastname && validEmail && validAddress && validpassword

        



    }

    const firebaseAuth = async() =>{
        try{ 
            const isUserLogin = await auth().createUserWithEmailAndPassword(email,password);
            console.log(isUserLogin)
            setauthLogin(true)

        }catch(e){
            setauthLogin(false)
            console.log(e)
        }
    }

    
    const registerUser = () =>{
        
        
        firebase().collection("User").add({
            username,
            firstname,
            lastname,
            email,
            Address,
            date,
            password
        }).then(()=>{
            setuserName("")
            setfirstName("")
            setlastName("")
            setemail("")
            setpassword("")
            setAddress("")
            setconfirmpassword("")
            setdate(new Date().toISOString().split('T')[0])

        }).catch(error =>{
            console.log(error)
        });
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

                    <Text style={styles.title}>Create Your Account </Text>
                </View>

                <View style={styles.form}>
                    <ScrollView>
                        <View style={styles.input}>
                            <Text style={styles.inputlabel}>User Name</Text>
                            <TextInput
                            style ={styles.TextInput}
                            value={username}
                                onChangeText={username => { setuserName(username) }}
                                placeholder="Username"
                                placeholderTextColor="#6b7280" />
                        </View>
                        {wrongUsername != '' && <Text style={styles.errorMsg}>{wrongUsername}</Text>}
                        

                        <View style={styles.input}>
                            <Text style={styles.inputlabel}>First Name</Text>
                            <TextInput
                            style ={styles.TextInput}
                                value={firstname}
                                onChangeText={firstname => { setfirstName(firstname) }}
                                placeholder="First Name"
                                placeholderTextColor="#6b7280" />

                        </View>
                        {wrongfirstname != '' && <Text style={styles.errorMsg}>{wrongfirstname}</Text>}
                        <View style={styles.input}>
                            <Text style={styles.inputlabel}>Last Name</Text>
                            <TextInput
                            style ={styles.TextInput}
                                value={lastname}
                                onChangeText={lastname => { setlastName(lastname) }}
                                placeholder="Last Name"
                                placeholderTextColor="#6b7280" />

                        </View>
                        {wronglastname != '' && <Text style={styles.errorMsg}>{wronglastname}</Text>}
                        <View style={styles.input}>
                            <Text style={styles.inputlabel}>Email</Text>
                            <TextInput
                            style ={styles.TextInput}
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
                            <Text style={styles.inputlabel}>Address</Text>
                            <TextInput
                            style ={styles.TextInput}
                                value={Address}
                                onChangeText={Address => { setAddress(Address) }}
                                placeholder="Address"
                                placeholderTextColor="#6b7280" />

                        </View>
                        {wrongAddress != '' && <Text style={styles.errorMsg}>{wrongAddress}</Text>}
                        <View style={styles.input}>
                            <Text style={styles.inputlabel}>Dob</Text>
                            <View style={styles.calendarcontainer}>
                                <Text style={styles.selectedDate}>{selectedDate}</Text>

                                <TouchableOpacity onPress={handleOnPress}>
                                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/55/55281.png' }}
                                        style={styles.calendarImg}
                                        alt='Logo' />

                                </TouchableOpacity>

                            </View>


                            <Modal animationType='slide'
                                transparent={true}
                                visible={open}
                            >
                                <View style={styles.containerView}>
                                    <View style={styles.modalView}>
                                        <DatePicker
                                            mode='calendar'
                                            selected={date}
                                            onDateChanged={handlechange}
                                            onSelectedChange={(selectedDate) => setseletedDate(selectedDate)}

                                        />
                                        <TouchableOpacity onPress={handleOnPress}>
                                            <Text>Done</Text>

                                        </TouchableOpacity>


                                    </View>
                                </View>

                            </Modal>
                        </View>
                        <View style={styles.input}>
                            <Text style={styles.inputlabel}>Password</Text>
                            <TextInput
                            style ={styles.TextInput}
                                secureTextEntry
                                value={password}
                                onChangeText={password => { setpassword(password) }}
                                placeholder="Password"
                                placeholderTextColor="#6b7280" />

                        </View>
                        {wrongpassword != '' && <Text style={styles.errorMsg}>{wrongpassword}</Text>}
                        <View style={styles.input}>
                            <Text style={styles.inputlabel}>Confirm Password</Text>
                            <TextInput
                            style ={styles.TextInput}
                                secureTextEntry
                                value={confirmpassword}
                                onChangeText={confirmpassword => { setconfirmpassword(confirmpassword) }}
                                placeholder="Confirm Password"
                                placeholderTextColor="#6b7280" />

                        </View>
                        {wrongconfirmpassword != '' && <Text style={styles.errorMsg}>{wrongconfirmpassword}</Text>}
                        

                    </ScrollView>
                    

                </View>
                <View style={styles.formAction}>
                    <TouchableOpacity onPress={ () => {
                        if(validate()){
                            
                            firebaseAuth()
                            if(authLogin){
                            registerUser()
                            navigation.navigate("SignUp")

                            }
                            
                            
                        }
                    }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>
                                Create Account
                            </Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{
                        navigation.navigate("SignUp")
                    }}>
                        <Text style={styles.AlreadyAccount}>Already Have Account!</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    AlreadyAccount:{
        color:'#000000',
        padding:10,
        alignSelf:'center'


    },
    
    errorMsg: {
    fontSize:10,
    color: '#FF0000'

    },
    TextInput:{
        borderWidth:1,
        
        borderColor:'#000000',
    },
    selectedDate: {
        fontSize: 15,
        color: '#000',
        marginTop: 7,
    },
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5


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
        marginBottom:0,
        marginVertical: 2

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,


    },
    calendarcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',


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
    calendarImg: {
        width: 40,
        height: 40,
        alignItems: 'flex-end',
        marginBottom: 0

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
        marginBottom: 14



    },
    calendarlabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000000',




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

export default LoginPage;