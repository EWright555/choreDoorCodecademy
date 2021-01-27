//Global Vars
  //Door Images
  const doorImage1 = document.getElementById("door1");
  const doorImage2 = document.getElementById("door2");
  const doorImage3 = document.getElementById("door3");
  //Door Paths
  const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
  const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
  const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
  //Number of Doors (const or let??)
  let numClosedDoors = 3;
  //Open Doors
  let openDoor1;
  let openDoor2;
  let openDoor3;
  //Closed Door
  const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
  //Start button
  const startButton = document.getElementById("start");
  //Currently Playing
  let currentlyPlaying = true;

//Functions
  //isBot
  const isBot = (door) => {
    if (door.src === botDoorPath) {
      return true;
    }
    else {
      return false;
    }
  };
  //isClicked
  const isClicked = (door) => {
    if (door.src === closedDoorPath) {
      return false;
    }
    else {
      return true;
    }
  };
  //Play Door
  const playDoor = (door) => {
    numClosedDoors --;
    if (numClosedDoors === 0){
      gameOver("win");
    }
    else if (isBot(door)) {
      gameOver();
    }
  }
  //Random Chore Generator
  const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random()*numClosedDoors);
    if (choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    }
    else if (choreDoor === 1) {
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
      openDoor1 = spaceDoorPath;
    }
    else {
      openDoor3 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor1 = beachDoorPath;
    }
  };
  //onClick
  doorImage1.onclick = () => {
    if (!isClicked(doorImage1)&&currentlyPlaying === true) {
      doorImage1.src = openDoor1;
      playDoor(doorImage1);
    }
  };
  doorImage2.onclick = () => {
    if (!isClicked(doorImage2)&&currentlyPlaying === true) {
      doorImage2.src = openDoor2;
      playDoor(doorImage2);
    }
  };
  doorImage3.onclick = () => {
    if (!isClicked(doorImage3)&&currentlyPlaying === true) {
      doorImage3.src = openDoor3;
      playDoor(doorImage3);
    }
  };
    //restart
    startButton.onclick = () => {
      if (!currentlyPlaying) {
        startRound();
      }
    }
    const startRound = () => {
        numClosedDoors = 3;
        doorImage1.src = closedDoorPath;
        doorImage2.src = closedDoorPath;
        doorImage3.src = closedDoorPath;
        startButton.innerHTML = "Good luck!";
        currentlyPlaying = true;
        randomChoreDoorGenerator();
      }
    
    //Game Over
    const gameOver = (status) => {
      if (status === "win"){
        startButton.innerHTML = "You win! Play again?";
      }
      else {
        startButton.innerHTML = "Game over! Play again?"
      }
      currentlyPlaying = false;
    };
    //Invoking RCDG
      startround();
