var firebaseConfig = {
      apiKey: "AIzaSyCwtrTnD_LqDxg-droXSnIlh1vOlE3qXOg",
      authDomain: "kwitter-app-218da.firebaseapp.com",
      projectId: "kwitter-app-218da",
      storageBucket: "kwitter-app-218da.appspot.com",
      messagingSenderId: "249420896851",
      appId: "1:249420896851:web:cdf537f3522772dcc684a6",
      measurementId: "G-P8R5Z0D810"
    };
   
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
