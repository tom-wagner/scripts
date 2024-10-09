// promising but not really working yet

async function waitForSelector(selector) {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                clearInterval(interval);
                resolve(elements);
            }
        }, 100); // Check every 100 milliseconds
    });
}

// Usage
(async () => {
    const nodeList = await document.querySelectorAll('[data-testid="over-under-cell"]');


    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i] !== undefined) {
            const playerName = await nodeList[i].querySelector('[data-testid="player-name"]').text;
            console.log(playerName);
        }
    }
})();
