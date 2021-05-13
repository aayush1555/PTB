import React, {useState, Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Card, ScrollView, ImageBackground
} from 'react-native';



export default class Details extends Component {
    
      render() {
        return (
          <ScrollView>
          <View style={styles.container}>  
          <Image source ={{uri:'https://www.medyhealth.com/appdata/images/doctor_displaypic/thumbnail/dr._v_._k_maini_.jpg'}}
            style={styles.logo}/>
          <Text style={styles.text}>{`\n\t`}Name: Dr. Vinod Kumar Maini{`\n\t`}
            Degree: M.B.B.S,  MD - Pulmonary Medicine{`\n\t`}
            Address: Maini Chest Clinic, House Number 2066, Phase, 7, {'\t'}Sector 61, Sahibzada Ajit Singh Nagar, Chandigarh 160062.{`\n\t`}
            Phone Number: 09815449344{`\n\t`}
            Timings: Sunday closed. Rest 6 days from  9am to 9pm{`\n\t`}
          </Text>
          </View>

          <View style={styles.container}>
          <Image source ={{uri:'https://www.logintohealth.com/assets/uploads/doctors/ad14120f82284ae04e757db7dc961228.jpg'}}
            style={styles.logo}/>
          <Text style={styles.text}>{`\n\t`}Name: Dr. Agyasingh Kochar{`\n\t`}
            Degree: M.B.B.S,  MD - Pulmonary Medicine{`\n\t`}
            Address: Nanavati Hospital, SV Road,Vile Parle(West), {'\t'}Mumbai,Maharashtra 400056.{`\n\t`}
            Phone Number: 098203 83597{`\n\t`}
            Timings: Sunday closed. Rest 6 days from  9am to 6:30pm{`\n\t`}
          </Text>
          </View>

          <View style={styles.container}>
          <Image source ={{uri:'https://content3.jdmagicbox.com/comp/delhi/q2/011pxx11.xx11.090822093929.e4q2/catalogue/dr-r-s-chatterji-dwarka-delhi-general-physician-doctors-g50fg-250.jpg'}}
            style={styles.logo}/>
          <Text style={styles.text}>{`\n\t`}Name: Dr. R.S Chatterji{`\n\t`}
            Degree: M.B.B.S,  MD - Respiratory Medicine, MD- Medicine{`\n\t`}
            Address: Fortis Flt. Lt. Rajan Dhall Hospital, Sector B, Pocket 1, Aruna Asif Ali Marg, Vasant Kunj, New Delhi 110070.{`\n\t`}
            Phone Number: 9711475222{`\n\t`}
            Timings: Sunday closed. Rest 6 days from  9am to 2:00pm{`\n\t`}
          </Text>
          </View>

          <View style={styles.container}>
          <Image source ={{uri:'https://www.lilavatihospital.com/Admin/Doctors/Doc_Suresh_V._Rang_16-03-2020.jpg'}}
            style={styles.logo}/>
          <Text style={styles.text}>{`\n\t`}Name: Dr. Suresh V Rang{`\n\t`}
            Degree: MD, FRSH, FICA, FRSM, FAGS{`\n\t`}
            Address: A-791, Bandra Reclamation Rd, General Arunkumar Vaidya Marg, Mumbai, Maharashtra 400050{`\n\t`}
            Phone Number: 9820076361{`\n\t`}
            Timings: Tuesday, Thursday, (12- 2 pm),Saturday (2-4pm){`\n\t`}
          </Text>
          </View>

          <View style={styles.container}>
          <Image source ={{uri:'https://cdn.credihealth.com/system/images/assets/23639/original/preetham-acharya-pulmonologist.jpg?1520432597'}}
            style={styles.logo}/>
          <Text style={styles.text}>{`\n\t`}Name:  Dr. R.C. Sahoo{`\n\t`}
            Degree: M.B.B.S,  MD - Tuberculosis and Respiratory Diseases undefined, FCCP{`\n\t`}
            Address: KMC hospital, 10-3-188 St. Johns Road Landmark: Beside Hotel Ramakrishna & Opposite Railway Reservation Counter Lane, Hampankatta, Hyderabad{`\n\t`}
            Phone Number: +91 80 4568 4818{`\n\t`}
            Timings: Sunday closed. Rest 6 days from  11am to 12pm{`\n\t`}
          </Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 2.5,
    borderLeftColor: '#000',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#F0FFFF',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.6,
    flex: 0.1,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
},
text:{
  fontFamily: 'any',
  color: 'blue',
  fontSize: 16,
  justifyContent: 'center',
  // fontWeight: 'bold', 
  flex:1,   
  flexDirection: 'column',     
},
logo:{
  width: 100,
  marginTop: 5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 130,
}
});









