// Initialize Firebase (replace with your own config)
var firebaseConfig = {
    apiKey: "AIzaSyBLEdxlI59oJ8AFSE7kZuMTD7gn2YxYohs",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://kwitter-11fee-default-rtdb.firebaseio.com",
    projectId: "kwitter-11fee",
    storageBucket: "kwitter-11fee.appspot.com",
    messagingSenderId: "1048675719714",
    appId: "1:1048675719714:web:d58024cc5670e41562c87b"
};
firebase.initializeApp(firebaseConfig);

// Get references to DOM elements
var usernameDisplay = document.getElementById("username-display");
var logoutButton = document.getElementById("logout-button");
var roomNameInput = document.getElementById("room_name");
var addRoomButton = document.getElementById("add-room-button");
var roomList = document.getElementById("room-list");

// Set the username display
usernameDisplay.textContent = "Logged in as: " + localStorage.getItem("username");

// Function to logout
function logout() {
    // Clear localStorage and redirect to login page
    localStorage.clear();
    window.location = "index.html";
}

// Function to add a room
function addRoom() {
    var room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    window.location = "kwitter_page.html";
}


// Function to update room list (retrieve from Firebase)
function updateRoomList() {
    // Retrieve room names from Firebase database
    // Your Firebase database operations here
}

// Call function to update room list initially
updateRoomList();
