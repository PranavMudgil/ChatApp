import React from 'react';
import PropTypes from 'prop-types';
import Backend from '../Backend';
import {
 View,
 StyleSheet,
 Text,
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';


class Chat extends React.Component {
  state = {
    messagaes: [{
      _id: 1,
      text: "Hello Developer",
      createdAt: new Date(),
     user: {
          _id: 2,
          name: "Pranav",
        //  avatar: "https://placeimg.com/140/140/any"
        }
     }
   ]
  };
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };
  }
componentWillMount(){
 this.setState({
  messages: [
          {
            _id: 1,
            text: "Hello, "+this.props.name,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              //avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
          },
        ]
      });
}

onSend=(messages = []) => {
   this.setState((previousState) => ({
     messages: GiftedChat.append(previousState.messages, messages),
   }));
 }

render(){
return(
  <View style={styles.container}>
   <GiftedChat
     messages={this.state.messages}
    onSend={(message) => {
                                    // send msg to backend
    //   this.onSend(message);
      Backend.sendMessage(message);
     }}
     user={{
       _id: Backend.getUid(),
       name: this.props.name,
    // avatar: 'https://facebook.github.io/react/img/logo_og.png',
     }}
    />
  </View>

);
}

  componentDidMount() {
  Backend.loadMessages((messages)=> {
       this.setState((previousState)=>{
         return{
           messages: GiftedChat.append(previousState.messages, messages),
         }
       });
     });
  }
  componentWillUnMount(){
   Backend.closeChat();

  }
}
Chat.defaultProps = {
  name: '',
  password: '',
};
Chat.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

var styles=StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default Chat;
