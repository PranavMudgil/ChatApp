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
	 <View style={styles.background}>
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
       <Text style={styles.title}> Enter Your Password:</Text>
       <TextInput
       placeholder="Password" style={styles.nameInput}
       onChangeText={(text)=>{
         this.setState({
           password: text,
         })
     }}
       value={this.state.password}/>

      <View style={styles.container}>
        <Button
           style={styles.buttonText}
           title='Sign In'
           onPress={()=>{
              console.log(this.state.name,this.state.password);
              Actions.chat({
                name: this.state.name,
               password: this.state.password,
              });
          }}/>
       <Button style={styles.buttonText} title='forgot Password'
       onPress={()=>{
          alert('Feature not defined yet');
       }}/>
      </View>
</View>
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
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  Background: {
  backgroundColor: '#d0dae0',
  },

  buttonText: {
   flex: 1,
   fontSize: 20,
   padding: 10,
   backgroundColor: '#428cf4',
 },
});


export default Home;
