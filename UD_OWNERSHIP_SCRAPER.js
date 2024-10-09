// NOTE: 24ish seems to be cutoff for low-owned players in 3-man weave

// players
const getPlayers = async () => {
    return await fetch("https://stats.underdogfantasy.com/v1/slates/4c7786ac-0947-4df6-bb93-dbf4337d999f/players", {
        "headers": {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9,la;q=0.8",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMzAyMDE5OC02YWU4LTQ0MTctOGVkNS1kYzkxMjViOTI5OGYiLCJzdWIiOiI4ZTgyYjY5MC1lOThlLTRkNTctODkzMy0zY2I1ZGQzZjJkODIiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE3MDgwOTYwMDgsImV4cCI6MTcxMDcyNTc1NH0.y6Cv94FdIHzYOfLt3B3CkZf40tmqYs68iRCrIvSoBAg",
            "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
            "client-request-id": "46406ecb-6eb4-43c0-8e1f-d2c135057422",
            "client-type": "web",
            "client-version": "202402151633",
            // "if-none-match": "W/\"e50e05b446deba50fb596d36c49a5a76\"",
            "referring-link": "",
            "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "user-latitude": "44.9185938",
            "user-location-token": "",
            "user-longitude": "-93.2141551"
        },
        "referrer": "https://underdogfantasy.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        // "credentials": "include"
    }).then(r => r.json());
};

// appearances
const getApperances = async () => {
    return await fetch("https://stats.underdogfantasy.com/v1/slates/4c7786ac-0947-4df6-bb93-dbf4337d999f/scoring_types/5903e326-17af-4e3b-963b-c142481b6014/appearances", {
        "headers": {
            "accept": "application/json",
            "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMzAyMDE5OC02YWU4LTQ0MTctOGVkNS1kYzkxMjViOTI5OGYiLCJzdWIiOiI4ZTgyYjY5MC1lOThlLTRkNTctODkzMy0zY2I1ZGQzZjJkODIiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE3MDgwOTYwMDgsImV4cCI6MTcxMDcyNTc1NH0.y6Cv94FdIHzYOfLt3B3CkZf40tmqYs68iRCrIvSoBAg",
            "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
            "client-request-id": "0f95448b-b6e0-46f3-9c91-2cfd29226acd",
            "client-type": "web",
            "client-version": "202402151633",
            "referring-link": "",
            "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "user-latitude": "44.9185938",
            "user-location-token": "",
            "user-longitude": "-93.2141551"
        },
        "referrer": "https://underdogfantasy.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        // "credentials": "include"
    }).then(r => r.json());
};


// leaderboard
const getLineups = async (appearancePlayerMap) => {
    // TODO: FILL THIS IN WITH COUNT FROM /leaderboard API RESPONSE
    const COUNT = 1744;

    const results = [];
    const PAGES = Math.ceil(COUNT / 50);
    // const PAGES = 6;

    for (let i = 1; i <= PAGES; i++) {
        const res = await fetch(`https://api.underdogfantasy.com/v1/draft_pools/e7725ec3-18f3-49bb-93a2-2fef031f3704/leaderboard?page=${i}`, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,la;q=0.8",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMzAyMDE5OC02YWU4LTQ0MTctOGVkNS1kYzkxMjViOTI5OGYiLCJzdWIiOiI4ZTgyYjY5MC1lOThlLTRkNTctODkzMy0zY2I1ZGQzZjJkODIiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE3MDgwOTYwMDgsImV4cCI6MTcxMDcyNTc1NH0.y6Cv94FdIHzYOfLt3B3CkZf40tmqYs68iRCrIvSoBAg",
                "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
                "client-request-id": "6a6ef992-3ca6-46b1-bcbe-365bd0607c78",
                "client-type": "web",
                "client-version": "202402151633",
                // "if-none-match": "W/\"e5fcffc60ac2b50924bc6e8dfd967154\"",
                "referring-link": "",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-latitude": "44.9185938",
                "user-location-token": "",
                "user-longitude": "-93.2141551"
            },
            "referrer": "https://underdogfantasy.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            // "credentials": "include"
        }).then(r => r.json());

        results.push(res.draft_pool_entries);
    }

    const appearancesFlat = results
        .flat()
        .map(entry => entry.appearance_ids)
        .flat();

    return appearancesFlat.reduce((acc, appearanceId) => {
        if (appearanceId in acc) {
            acc[appearanceId] += 1;
        } else {
            acc[appearanceId] = 1;
        }

        return acc;
    }, {})
}

const getAppearancePlayerMap = (appearances, players) => {
    const playerMap = players.reduce((acc, p) => {
        acc[p.id] = p.first_name + " " + p.last_name;
        return acc;
    }, {});

    const appearanceMap = appearances.reduce((acc, app) => {
        acc[app.id] = { playerId: app.player_id, adp: app.projection.adp, score: app.projection.points, name: playerMap[app.player_id] };
        return acc;
    }, {});

    return Object.keys(appearanceMap).reduce((acc, appearanceId) => {
        acc[appearanceId] = appearanceMap[appearanceId];
        return acc;
    }, {});
}

const f = async () => {
    const { players } = await getPlayers();
    const { appearances } = await getApperances();

    const y = await getPlayers();
    const z = await getApperances();


    const appearancePlayerMap = getAppearancePlayerMap(appearances, players);

    console.log({ appearancePlayerMap });

    const appearanceCounts = await getLineups();

    console.log({ appearanceCounts });

    const playerCounts = Object.keys(appearanceCounts).reduce((acc, cv) => {
        const player = appearancePlayerMap[cv].name;
        acc[player] = { count: appearanceCounts[cv], ...appearancePlayerMap[cv] };
        return acc;
    }, {})

    console.log({ playerCounts });
};

f();