let currentPictureName = "";

function getRandomPictureAddress()
{
    // generates a random integer between [0, 1]:
    const randomBit = Math.floor(2*Math.random());

    const directoryName = 0 == randomBit ? "rick" : "stick";
    const filePrefix = directoryName;

    // generates a random integer between [1, 10]:
    const fileIndex = 1 + Math.floor(10*Math.random());

    const fileName = filePrefix + fileIndex + ".jpg";
    const filePath = "images" + "/" + directoryName + "/" + fileName;

    return filePath;
}

function setRandomPicture()
{
    const randomPictureAddress = getRandomPictureAddress();

    // Update the src attribute of the game-image element
    const gameImageElement = document.getElementById("game-image");
    gameImageElement.src = randomPictureAddress;

    // Return the name based on the directory (rick or stick)
    return randomPictureAddress.includes('rick') ? "rick" : "stick";
}

function initGame()
{
    currentPictureName = setRandomPicture();
}

function updateScoreAndChangeImage ()
{
    // UPDATING SCORE:
    const callingButtonClass = this.className;
    const currentScore = parseInt(document.getElementById("user-score").innerHTML);
    
    const currentPictureFullName = currentPictureName + "-button";
    if (callingButtonClass == currentPictureFullName)
    {
        document.getElementById("user-score").innerHTML = 1 + currentScore;
    }
    // CHANGE IMAGE:
    gameLogic();
}

// execution starts here:

initGame();