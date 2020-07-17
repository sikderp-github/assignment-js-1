// Feet to mile converter

function feetToMile(feet) {
  let milesNum = feet / 5280;
  if (feet < 0) {
    return "We are sorry. Please input a positive number.";
  }
  return milesNum.toFixed(4) + " miles(appx)."; // miles fixed to 4 digit
}

// Wood Calculator

function woodCalculator(chairNum, tableNum, bedNum) {
  let chairWoodCount = chairNum * 1;
  let tableWoodCount = tableNum * 3;
  let bedWoodCount = bedNum * 5;
  let totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;
  return totalWoodCount + " " + "cft.";
}

// Brick Calculator

function brickCalculator(number) {
  let floorNum = number;
  let bricksCount = 0;
  if (floorNum < 0) {
    bricksCount = 0;
  } else if (floorNum > 0 && floorNum <= 10) {
    bricksCount = number * 15000;
  } else if (floorNum > 10 && floorNum <= 20) {
    bricksCount = (number - 10) * 12000 + 150000;
  } else {
    bricksCount = (number - 20) * 10000 + 270000;
  }
  return `Total number bricks required : ${bricksCount}`;
}

// Search tiny friend

function tinyFriend(names) {
  let shortestName = names[0];
  for (let i = 0; i < names.length; i++) {
    let friendsName = names[i];
    if (friendsName.length < shortestName.length) {
      shortestName = friendsName;
    }
  }
  return "Tiny friend's name is : " + shortestName; // for same lengthed-string, used alphabetically ascending.
}
