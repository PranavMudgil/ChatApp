import React from 'react';
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 Button,
 TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

class Home extends React.Component {

state={
  name:'',
  password:'',
}

    render(){
	 return(
	 <View>
	     <Text style={styles.title}>
		  Enter Your Name:
	     </Text>
       <TextInput
       placeholder="John Doe" style={styles.nameInput}
       onChangeText={(text)=>{
         this.setState({
           name: text,
         })
     }}
       value={this.state.name}
       />
       <Text style={styles.title}>
          Enter Your Password:
       </Text>
       <TextInput
       placeholder="Password" style={styles.nameInput}
       onChangeText={(text)=>{
         this.setState({
           password: text,
         })
     }}
       value={this.state.password}
       />

      <View style={styles.container}>

      <TouchableOpacity
        onPress={()=>{
          console.log(this.state.name,this.state.password);
          Actions.Chat({
            name: this.state.name,
          });
        })>
        }}
      >
        <Text style={styles.buttonText}>

         Sign In
        </Text>
       </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{
          })>
        }}
        >
          <Text style={styles.buttonText}

          forgot Password
          </Text>
      </TouchableOpacity>


	 );
	}
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 25,
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
   flex: 3,
   fontSize: 20,
 },
});


export default Home;
