 // Global variable
var networkName = "JioFiber"; 

// Local Block 1
function LivingRoom() {
    let livingRoomFanStatus = "Medium Speed";
    console.log("Living Room Fan Status:", livingRoomFanStatus);
    console.log("Living Room - Global Network:", networkName);
}

// Local Block 2
function Bedroom() {
    let bedroomFanStatus = "High Speed";
    console.log("Bedroom Fan Status:", bedroomFanStatus);
    console.log("Bedroom - Global Network:", networkName);
}

// Function Calls
LivingRoom();
Bedroom();
