import firebase from 'firebase';

class Backend {
uid = '';
messageRef = null;

//initialize firebase Backend
 constructor() {
   this.init();
   this.observeAuth();
 }

 observeAuth = () => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setUid(user,uid);
      }else{
        firebase.auth().signInAnonymously().catch((error)=>{
          alert(error.message);
        });
      }
    });
  }
init = () => {  firebase.initializeApp({
    apikey: 'AIzaSyC5zXAxFJlFU5Ni-SWXglmECOvhf-rCmyM',
    authDomain: 'myapp-220519.firebaseapp.com',
    databaseURL: 'https://myapp-220519.firebaseio.com',
    storageBucket: 'myapp-220519.appspot.com',
    projectId: "myapp-220519",
    messagingSenderId: '1098328449128',
    });
  }

 setUid(value){
   this.uid = value;
 }
  getUid(){
    return(this.uid);
 }
  // Retrieve message from Backend
loadMessage(callback){
  this.messageRef = firebase.database().ref('messages');
  this.messageRef.off();
  const onRecieve = (data)=>{
    const message = data.val();
    callback({
      _id: data.key,
      text: message.text,
      createdAt: new Date(message.createdAt),
      user: {
        _id: message.user._id,
        name: message.user.name,
       }
    });
  };
  this.messageRef.limitToLast(20).on('child_added', onRecieve);
}
//send message to Backend
sendMessage(message){
  for(let i = 0; i <  message.length; i++){
    this.messageRef.push({
      text: message[i].text,
      user: message[i].user,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
  }
}
// close the connection
 closeChat(){
  if(this.messageRef){
    this.messageRef.off();
  }
 }
}

export default Backend;
