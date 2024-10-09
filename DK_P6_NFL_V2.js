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

async function callPlayerApi(player, position) {
    const baseUrl = 'https://api.unabated.com/v2/projections/playerProps/nfl/';
    let url;

    switch (position) {
        case 'QB':
            const completions = player.Completions || 0;
            const passingYards = player.PassingYards || 0;
            url = `${baseUrl}QB/${Math.min(completions, passingYards)}/${Math.max(completions, passingYards)}/0`;
            break;
        case 'RB':
            const rushingYards = player.RushingYards || 0;
            const carries = player.Carries || 0;
            url = `${baseUrl}RB/${Math.min(rushingYards, carries)}/${Math.max(rushingYards, carries)}/0`;
            break;
        case 'WR':
            const receivingYards = player.ReceivingYards || 0;
            const wrReceptions = player.Receptions || 0;
            url = `${baseUrl}WR/${Math.min(receivingYards, wrReceptions)}/${Math.max(receivingYards, wrReceptions)}/0`;
            break;
        case 'TE':
            const teReceivingYards = player.ReceivingYards || 0;
            const teReceptions = player.Receptions || 0;
            url = `${baseUrl}TE/${Math.min(teReceivingYards, teReceptions)}/${Math.max(teReceivingYards, teReceptions)}/0`;
            break;
        default:
            throw new Error(`Invalid position: ${position}`);
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
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

