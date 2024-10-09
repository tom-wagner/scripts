function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function getCountByPlayer(drafts) {
    const picks = drafts.draft_pool_entries.map(d => d.picks.map(p => p.appearance_id)).reduce((acc, cv) => [...acc, ...cv], []);
    return picks.reduce((acc, cv) => {
        if (cv in acc) {
            acc[cv] += 1;
        } else {
            acc[cv] = 1;
        }
        return acc;
    }, {})
}

// TODO: SET MAX OWNERSHIP BY PLAYER
const THRESHOLD = 22;
const getPlayersToRemove = (counts, playersAlreadyRemoved) => {
    const playersToRemove = new Set();
    for (player in counts) {
        if (!playersAlreadyRemoved.has(player) && counts[player] >= THRESHOLD) {
            playersToRemove.add(player);
        }
    }
    return playersToRemove;
};

// TODO: CONSIDER VARIABLE FOR AUTH STRING

const REFRESH_INTERVAL = 30 * 60 * 1000;
const f = async () => {
    let completedDrafts = 0;
    let playersAlreadyRemoved = new Set();
    let activeDrafts = 'PENDING';
    let authToken = null;
    let authTokenExpiration = new Date().getTime() + REFRESH_INTERVAL;

    while (activeDrafts = 'PENDING' || activeDrafts.length > 0) {
        console.log('Starting loop');

        if (authToken === null || new Date().getTime() > authTokenExpiration) {
            console.log("refreshing Auth");
            const authResponse = await fetch("https://underdog.underdog.auth0app.com/oauth/token", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-US,en;q=0.9,la;q=0.8",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site"
                },
                "referrer": "https://underdogfantasy.com/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"audience\":\"https://api.underdogfantasy.com\",\"client_id\":\"cQvYz1T2BAFbix4dYR37dyD9O0Thf1s6\",\"grant_type\":\"password\",\"password\":\"x67Tiger!!!\",\"scope\":\"offline_access\",\"username\":\"twagner55@gmail.com\",\"ud_client_type\":\"web\",\"ud_client_version\":\"202403141255\",\"ud_device_id\":\"9914b1d2-11de-4a55-9d87-02c8a2f61f8a\"}",
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
            }).then(r => r.json());

            console.log({ authResponse });

            authToken = authResponse.access_token;
            authTokenExpiration = new Date().getTime() + REFRESH_INTERVAL;
        }

        const drafts = await fetch("https://api.underdogfantasy.com/v1/user/draft_pools/95fd7903-ea46-435d-bac5-660fd89082f3/entries", {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,la;q=0.8",
                // TODO: MIGHT NEED TO UPDATE THIS STRING
                "authorization": authToken,
                "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
                "client-request-id": "9f8644d7-9dae-4b3a-98e0-e94edabfe9f0",
                "client-type": "web",
                "client-version": "202403141255",
                // "if-none-match": "W/\"7ebf322a61128006c8ff5fafd15414b6\"",
                "referring-link": "",
                "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-latitude": "44.9186069",
                "user-location-token": "",
                "user-longitude": "-93.2141438"
            },
            "referrer": "https://underdogfantasy.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            // "credentials": "include"
        }).then(r => r.json());

        const counts = getCountByPlayer(drafts);

        console.log({ counts });

        const playersToRemove = getPlayersToRemove(counts, playersAlreadyRemoved);
        console.log('Removing -->');
        console.log({ playersToRemove });

        if (playersToRemove.size > 0) {
            activeDrafts = await fetch("https://api.underdogfantasy.com/v3/user/active_drafts", {
                "headers": {
                    "accept": "application/json",
                    "accept-language": "en-US,en;q=0.9,la;q=0.8",
                    // TODO: MIGHT NEED TO UPDATE THIS STRING
                    "authorization": authToken,
                    "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
                    "client-request-id": "83f560c8-1777-4df7-98ac-136ddc028139",
                    "client-type": "web",
                    "client-version": "202403141255",
                    // "if-none-match": "W/\"7b27dcd1b8fe3dcaf1f485786308a9aa\"",
                    "referring-link": "",
                    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site",
                    "user-latitude": "44.9186069",
                    "user-location-token": "",
                    "user-longitude": "-93.2141438"
                },
                "referrer": "https://underdogfantasy.com/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors",
                // "credentials": "include"
            }).then(r => r.json());

            for (let i = 0; i < activeDrafts.drafts.length; i++) {
                const draft = activeDrafts.drafts[i];
                console.log({ draft });

                // getQueue
                const queue = await fetch(`https://api.underdogfantasy.com/v1/draft_entries/${draft.draft_entry_id}/queue`, {
                    "headers": {
                        "accept": "application/json",
                        "accept-language": "en-US,en;q=0.9,la;q=0.8",
                        // TODO: MIGHT NEED TO UPDATE THIS STRING
                        "authorization": authToken,
                        "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
                        "client-request-id": "6e789770-3767-429c-a88c-8b25f3275921",
                        "client-type": "web",
                        "client-version": "202403141255",
                        "referring-link": "",
                        "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"macOS\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site",
                        "user-latitude": "44.9186069",
                        "user-location-token": "",
                        "user-longitude": "-93.2141438"
                    },
                    "referrer": "https://underdogfantasy.com/",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": null,
                    "method": "GET",
                    "mode": "cors",
                    // "credentials": "include"
                }).then(r => r.json());

                console.log({ queue });

                const adjustedQueue = queue.queue.filter(id => !playersToRemove.has(id));
                console.log({ adjustedQueue });

                const toPost = JSON.stringify({ queue: adjustedQueue });

                // postQueue
                fetch(`https://api.underdogfantasy.com/v1/draft_entries/${draft.draft_entry_id}/queue`, {
                    "headers": {
                        "accept": "application/json",
                        "accept-language": "en-US,en;q=0.9,la;q=0.8",
                        // TODO: MAY NEED TO UPDATE
                        "authorization": authToken,
                        "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
                        "client-request-id": "d1fe6e15-2d8d-41af-89c1-4b4fe56a0398",
                        "client-type": "web",
                        "client-version": "202403141255",
                        "content-type": "application/json",
                        "referring-link": "",
                        "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"macOS\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site",
                        "user-latitude": "44.9186069",
                        "user-location-token": "",
                        "user-longitude": "-93.2141438"
                    },
                    "referrer": "https://underdogfantasy.com/",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": toPost,
                    "method": "POST",
                    "mode": "cors",
                    // "credentials": "include"
                });
            };

            playersAlreadyRemoved = new Set([...playersAlreadyRemoved, ...playersToRemove]);
        }

        console.log("Sleeping for 30...")
        await sleep(30 * 1000);
    }
}

f();