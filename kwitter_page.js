var firebaseConfig = {

    apiKey: "AIzaSyDg1uH0lm0GGyHqUj1Xm3SyWgeIpAg9x40",

    authDomain: "kwitter-59f71.firebaseapp.com",

    databaseURL: "https://kwitter-59f71-default-rtdb.firebaseio.com",

    projectId: "kwitter-59f71",

    storageBucket: "kwitter-59f71.appspot.com",

    messagingSenderId: "561708535697",

    appId: "1:561708535697:web:fe61cdd92a18748eb89430"

  };
  
    firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = " ";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();