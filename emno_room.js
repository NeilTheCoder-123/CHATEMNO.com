var firebaseConfig = {
    apiKey: "AIzaSyCZ1RKs4pRjar5r9ZGbXc5zExSSnWLioJc",
    authDomain: "chat-emno-chit-chat.firebaseapp.com",
    databaseURL: "https://chat-emno-chit-chat-default-rtdb.firebaseio.com",
    projectId: "chat-emno-chit-chat",
    storageBucket: "chat-emno-chit-chat.appspot.com",
    messagingSenderId: "44151724082",
    appId: "1:44151724082:web:c8d455b73c7008e8a1c42b",
    measurementId: "G-NP24MJYCSC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(localStorage.getItem("username"));
  document.getElementById("username").innerHTML = "Welcome "+localStorage.getItem("username")+"!";

function addRoom(){
    room_name = document.getElementById("roominput").value;
    console.log(room_name);
    firebase.database().ref("/").child(localStorage.getItem("username")).update({
        purpose: "adding room"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "emno_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
    console.log(childKey);
     Room_names = childKey;
     row = "<div class='roomname' id="+Room_names+" onclick='reto_roomname(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function reto_roomname(id){
    console.log(id);
   window.location = "emno_page.html"; 
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}