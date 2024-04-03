import { View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import Constants  from 'expo-constants'

const BmiCalculator = () => {
    const [weight, setweight]= useState('')
    const [height, setheight]= useState('')
    const [bmi,setbmi]= useState('')
    const [description,setdescription]= useState('')

    const calculateBMI = () => {
        const bmi=weight/((height/100)*(height/100))
        setbmi(bmi.toFixed(1))

        if(bmi <18.5){
            setdescription('Underweight, Eat More!!!')
        }
        else if(bmi >=18.5 && bmi <=24.9){
            setdescription('Normal, Keep it up and stay healthy')
        }
        else if(bmi >= 25 && bmi<= 29.9)
        {
            setdescription('Overweight,Start doing exercises!!')
        }
        else if(bmi>30){
            setdescription('Obese, Work hard in Gym!!')
        }
        else{
            setdescription('Fill weight and height!!')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>BMI Calculator</Text>
            </View>
            <TextInput
                style={styles.input}
                value={weight}
                onChangeText={(text) => setweight(text)}
                placeholder='Weight in Kg'
                keyboardType='numeric'
            />
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={(text) => setheight(text)}
                placeholder='Height in Cm'
                keyboardType='numeric'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={calculateBMI}
            >
                <Text style={styles.buttonText}>calculate</Text>
            </TouchableOpacity>
            <View style={styles.resultView}>
                <Text style={styles.result}>{bmi}</Text>
                <Text style={styles.result}>{description}</Text>

            </View>
        </View>
    )
}

export default BmiCalculator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor:'#f8f8ff'
    },
    title: {
        backgroundColor:'#000000',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    titleText:{
        fontSize:35,
        color:'#fff',
        fontWeight:'bold'
    },
    input:{
        height:55,
        margin:15,
        borderWidth:1/2,
        padding:10,
        borderRadius:5,
        backgroundColor:'#',
        fontSize:18
    },
    button:{
        height:50,
        margin:15,
        borderWidth:1/2,
        padding:10,
        borderRadius:5,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:25,
        color:'#fff',
        // fontWeight:'bold'
    },
    resultView:{
        margin:15
    },
    result:{
        fontSize:25,
        color:'#00008b',
        fontWeight:'bold'
    }
});
