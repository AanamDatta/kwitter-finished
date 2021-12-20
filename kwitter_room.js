var firebaseConfig = {
      apiKey: "AIzaSyDhWuwyOrcZesKedlBMJV9GVZOlxy923lY",
      authDomain: "kwitter-4d163.firebaseapp.com",
      databaseURL: "https://kwitter-4d163-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d163",
      storageBucket: "kwitter-4d163.appspot.com",
      messagingSenderId: "589386329102",
      appId: "1:589386329102:web:01d85d092ff39d3d4da05f",
      measurementId: "G-BV2NPMFE2Q"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function addroom(){
RoomName= document.getElementById("roomname").value
localStorage.setItem("roomname",RoomName) 
window.location="kwitter_page.html"
firebase.database().ref("/").child(RoomName).update({
purpose:"addingroomname"
})
}
function redirecttoroomname(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}
username= localStorage.getItem("Username")
document.getElementById("username").innerHTML="welcome "+username
function logout(){
      window.location = "index.html"
      localStorage.removeItem("Username")
      localStorage.removeItem("RoomName")


}