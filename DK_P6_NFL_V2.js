// function processCSV(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = function(event) {
//       const csv = event.target.result;
//       const lines = csv.split(/\r\n|\n/);
//       const headers = lines[0].split(',').map(header => header.trim().replace(/^"(.*)"$/, '$1'));
//       const playerData = {};

//       for (let i = 1; i < lines.length; i++) {
//         const values = lines[i].split(',');
//         if (values.length === headers.length) {
//           const player = {};
//           for (let j = 0; j < headers.length; j++) {
//             let value = values[j].trim().replace(/^"(.*)"$/, '$1');
//             // Custom logic to trim "@" from the Opponent column
//             if (headers[j] === 'Opponent' && value.startsWith('@')) {
//               value = value.substring(1);
//             }
//             player[headers[j]] = isNaN(value) ? value : parseFloat(value);
//           }
//           if (player.Player) {
//             playerData[player.Player] = player;
//           }
//         }
//       }

//       resolve(playerData);
//     };
//     reader.onerror = function(error) {
//       reject(error);
//     };
//     reader.readAsText(file);
//   });
// }

// // Usage in DevTools console
// const fileInput = document.createElement('input');
// fileInput.type = 'file';
// fileInput.accept = '.csv';
// fileInput.onchange = function(event) {
//   const file = event.target.files[0];
//   processCSV(file).then(playerData => {
//     console.log('Player data transformed successfully:');
//     console.log(playerData);
//     window.playerData = playerData; // Store in global variable for easy access
//   }).catch(error => {
//     console.error('Error processing CSV:', error);
//   });
// };
// fileInput.click();

function processCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async function (event) {
            const csv = event.target.result;
            const lines = csv.split(/\r\n|\n/);
            const headers = lines[0].split(',').map(header => header.trim().replace(/^"(.*)"$/, '$1'));
            const playerData = {};

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');
                if (values.length === headers.length) {
                    const player = {};
                    for (let j = 0; j < headers.length; j++) {
                        let value = values[j].trim().replace(/^"(.*)"$/, '$1');

                        if (headers[j] === 'Opponent' && value.startsWith('@')) {
                            value = value.substring(1);
                        }

                        player[headers[j]] = isNaN(value) ? value : parseFloat(value);
                    }
                    if (player.Player) {
                        playerData[player.Player] = player;
                    }
                }
            }

            const updatedPlayerData = await processPlayerData(playerData);
            resolve(updatedPlayerData);
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.readAsText(file);
    });
}

// example for QB:

// WORKING:
// fetch("https://api.unabated.com/api/props/nfl/widereceiver/receivingyards/6/67/0", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9,la;q=0.8",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site",
//     "x-amz-cf-v-id": "dNSob7rQOiJFE_59NDSm7tuZ6ed5MA_8w8CHVqr8tGSFYpgzEUqBuQ=="
//   },
//   "referrer": "https://unabated.com/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

// // BROKEN:
// fetch("https://api.unabated.com/api/props/nfl/widereceiver/receivingyards/0/4.3/0", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9,la;q=0.8",
//     "content-type": "application/json",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site"
//   },
//   "referrer": "https://unabated.com/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });

async function callPlayerApi(player, position) {
    // const baseUrl = 'https://api.unabated.com/v2/projections/playerProps/nfl/';
    const baseUrl = 'https://api.unabated.com/api/props/nfl/';
    let url;

    switch (position) {
        case 'QB':
            const completions = player.Completions || 0;
            const passingYards = player['Passing Yards'] || 0;
            url = `${baseUrl}quarterback/passingyards/${Math.min(completions, passingYards)}/${Math.max(completions, passingYards)}/0`;
            break;
        case 'RB':
            const rushingYards = player['Rushing Yards'] || 0;
            const carries = player.Carries || 0;
            url = `${baseUrl}runningback/rushingyards/${Math.min(rushingYards, carries)}/${Math.max(rushingYards, carries)}/0`;
            break;
        case 'WR':
            const receivingYards = player['Receiving Yards'] || 0;
            const wrReceptions = player.Receptions || 0;
            url = `${baseUrl}widereceiver/receivingyards/${Math.min(receivingYards, wrReceptions)}/${Math.max(receivingYards, wrReceptions)}/0`;
            break;
        case 'TE':
            const teReceivingYards = player['Receiving Yards'] || 0;
            const teReceptions = player.Receptions || 0;
            url = `${baseUrl}tightend/receivingyards/${Math.min(teReceivingYards, teReceptions)}/${Math.max(teReceivingYards, teReceptions)}/0`;
            break;
        default:
            throw new Error(`Invalid position: ${position}`);
    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null,
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error calling API for ${player.Player}:`, error);
        return null;
    }
}

function determinePosition(player) {
    const position = player.Position.toUpperCase();
    if (['QB', 'WR', 'RB', 'TE'].includes(position)) {
        return position;
    }
    return null;
}

async function processPlayerData(playerData) {
    for (const [playerName, player] of Object.entries(playerData)) {
        const position = determinePosition(player);
        if (position) {
            try {
                const apiData = await callPlayerApi(player, position);
                if (apiData) {
                    playerData[playerName] = { ...player, ...apiData };
                }
            } catch (error) {
                console.error(`Error processing ${playerName}:`, error);
            }
        }
    }
    return playerData;
}

// Usage in DevTools console
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.csv';
fileInput.onchange = function (event) {
    const file = event.target.files[0];
    processCSV(file).then(playerData => {
        console.log('Player data processed and API calls completed:');
        console.log(playerData);
        window.playerData = playerData; // Store in global variable for easy access

        processPlayerData(window.playerData);
    }).catch(error => {
        console.error('Error processing CSV or calling APIs:', error);
    });
};
fileInput.click();

