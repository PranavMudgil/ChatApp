import React from 'react';
import PropTypes from 'prop-types';

import {
 View,
 Text,
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';


class Chat extends React.Component {
  state = {
    messagaes: []
  },
    render(){
	 return(
     <GiftedChat
         messages={this.state.messages}
         onSend={(message) => {
           // send msg to backend

         }}
         user={{
           _id: 1,
         }}
       />

	 );
	}
}
Chat.defaultProps = {
  name: 'john',
};
Chat.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Chat;
