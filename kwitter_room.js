
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDzHkibhQ0WeEO8df4-7qbiL-aUuTEm7g8",
      authDomain: "kwitter-349f4.firebaseapp.com",
      databaseURL: "https://kwitter-349f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-349f4",
      storageBucket: "kwitter-349f4.appspot.com",
      messagingSenderId: "885847444178",
      appId: "1:885847444178:web:070310a037f1c617373b0b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
