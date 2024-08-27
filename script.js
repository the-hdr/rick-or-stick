function getRandomPictureAddress()
{
    // generates a random integer between [0, 1]:
    const randomBit = Math.floor(2*Math.random());

    const directoryName = 0 == randomBit ? "rick" : "stick";
    const filePrefix = directoryName;

    // generates a random integer between [1, 10]:
    const fileIndex = Math.floor(10*Math.random());

    const fileName = filePrefix + fileIndex + ".jpg";
    const filePath = "images" + directoryName + "/" + fileName;

    return filePath;
}

function setRandomPicture()
{
    const randomPictureAddress = getRandomPictureAddress();
    
}