const elements = document.querySelectorAll('[data-known-size="68"]');
// const playerObjects = [];

// Iterate over each element
elements.forEach(element => {
    // Extract required information from the element
    const playerName = element.querySelector('div:nth-child(2)').textContent.trim();
    const stat = element.querySelector('div:nth-child(3)').textContent.trim();
    const projection = element.querySelector('div:nth-child(4)').textContent.trim();
    const draftkingsPick6 = element.querySelector('div:nth-child(5)').textContent.trim();
    // const projOw = element.querySelector('div:nth-child(6) > div > div > div').textContent.trim();
    const probability = element.querySelector('div:nth-child(7)').textContent.trim();


    // Create an object with extracted information
    const playerObject = {
        playerName,
        stat,
        projection,
        draftkingsPick6,
        probability
    };

    // Push the object into the playerObjects array
    window.playerObjects.push(playerObject);
});

// Display the playerObjects array
console.log(window.playerObjects);