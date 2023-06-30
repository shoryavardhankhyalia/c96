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

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

  function addRoom()

  {

    room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);

    firebase.database().ref("/").child(room_name).update({ purpose : "adding user" });

    window.location = "kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room_name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row;

   });
});

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()

{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
    
}
