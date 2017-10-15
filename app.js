
//  Iteration 1 | The Rover Object Rover object with default direction: N
var rover = {
  position: [0,0],
  direction: "N",
  travelLog: [ ], // Iteration 5 | Tracking
};


// Iteration 2 | Turning the Rover

var direction = ["N", "E", "S", "W"];


function turnLeft(rover) {
  switch(rover.direction) {

     case "N":
       rover.direction = "W";
     break;

     case "E":
       rover.direction = "N";
     break;

     case "S":
      rover.direction = "E";
     break;

     case "W":
      rover.direction = "S";
     break;

}
  console.log("turnLeft was called! now you are facing " + rover.direction);

 }

function turnRight(rover) {
  switch(rover.direction) {

   case "N":
   rover.direction = "E";
   break;

   case "E":
   rover.direction = "S";
   break;

   case "S":
   rover.direction = "W";
   break;

   case "W":
     rover.direction = "N";
   break;

}
  console.log("turnRight was called!, now you are facing " + rover.direction);


}

// Iteration 3 | Moving the Rover
// Moving Forward

function moveForward(rover) {
  switch (rover.direction) {

    case "N":
      rover.position[0]--;
    break;

    case "E":
      rover.position[1]++;
    break;

    case "S":
      rover.position[0]++;
    break;

    case "W":
      rover.position[1]--;
    break;

    }
 console.log("moveForward was called, now your coordinates are: [" + rover.position[0] + "," + rover.position[1] + "]");

}

//Moving Backward (Bonus | Other Suggested Features)

function moveBackward(rover) {
  switch (rover.direction) {

    case "N":
       rover.position[0]++;
    break;

    case "E":
       rover.position[1]--;
    break;

    case "S":
       rover.position[0]--;
    break;

    case "W":
       rover.position[1]++;
    break;

  }
   console.log("moveBackward was called, now your coordinates are: [" + rover.position[0] + "," + rover.position[1] + "]");
}

//Bonus | Enforce Boundaries (NOT WORKING)

    if (rover.position[0] < 0) {
      rover.position[0] = 0;
    }

    if (rover.position[0] > 9) {
      rover.position[0] = 9;
    }

    if (rover.position[1] < 0) {
      rover.position[1] = 0;
    }

    if (rover.position[1] > 9) {
      rover.position[0] = 9;
    }



 //Iteration 4 | Commands

function instructions(command) {

  for (var i = 0; i < command.length; i++) {
    var currentCommand = command[i];

  switch (currentCommand) {
     case "l":
        turnLeft(rover);
     break;

     case "r":
        turnRight(rover);
     break;

     case "f":
        moveForward(rover);
        rover.travelLog.push("[" + rover.position + "]"); // Iteration 5 | Tracking
     break;

     case "b":
         moveBackward(rover);
         rover.travelLog.push("[" + rover.position + "]");
     break;

     default:
         console.log("Unknow command: (" + command[i] + ") Instructions are: l,r,f,b");  // Validate Inputs: Bonus | Other Suggested Features
    }
  }
  console.log("Final Direction: " + rover.direction, "Final Position: " + rover.position);
}






// INIT

 instructions("rffrfflfrff");
  console.log("Travel Log : " + rover.travelLog);
