const pages = [
    // offerCatId, response path
    ['PTS', 1215, 'eventGroup.offerCategories[1].offerSubcategoryDescriptors[0].offerSubcategory.offers'],
    ['REB', 1216, 'eventGroup.offerCategories[2].offerSubcategoryDescriptors[0].offerSubcategory.offers]'],
    ['AST', 1217, 'eventGroup.offerCategories[3].offerSubcategoryDescriptors[0].offerSubcategory.offers'],
    ['3PM', 1218, 'eventGroup.offerCategories[4].offerSubcategoryDescriptors[0].offerSubcategory.offers'],
    ['PRA', 583, 'eventGroup.offerCategories[5].offerSubcategoryDescriptors[0].offerSubcategory.offers'],
];

const f = async () => {
    const promises = pages.map(p => {
        return fetch(`https://sportsbook.draftkings.com//sites/US-NJ-SB/api/v5/eventgroups/92483/categories/${p[1]}?format=json`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,la;q=0.8",
                "cache-control": "no-cache",
                "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjg0NDAxMzYiLCJpZCI6IjkwNzIwODk4MDM0MmFkZWMiLCJ0ciI6IjY3YzU2ZTQxZGEzMzQ3NzNhN2ZhMzY1ZWU5ZWI3YWUwIiwidGkiOjE2Nzg5MDI5NTYwMzl9fQ==",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "traceparent": "00-67c56e41da334773a7fa365ee9eb7ae0-907208980342adec-01",
                "tracestate": "546825@nr=0-1-546825-68440136-907208980342adec----1678902956039"
            },
            "referrer": "https://sportsbook.draftkings.com/leagues/basketball/ncaab?category=player-rebounds",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }).then(r => r.json());
    });

    const responses = Promise.allSettled(promises);

    return responses;
}

const responses = await f();

const eventGroups = responses.map(r => r.value);

const data = eventGroups.map((eg, idx) => {
    return eg.eventGroup.offerCategories[idx + 1].offerSubcategoryDescriptors[0].offerSubcategory.offers;
});

const reduceCategory = (arrayOfGames) => {
    return arrayOfGames.reduce((acc, game) => {
        const lines = game.reduce((acc, p) => {
            const player = p.outcomes[0].participant;
            const line = p.outcomes[0].line;
            const outcomesObj = p.outcomes.reduce((acc, cv) => {
                acc[`${cv.label}.Decimal`] = cv.oddsDecimal;
                acc[`${cv.label}.American`] = cv.oddsAmerican;
                return acc;
            }, {});

            const playerObj = { line, player, ...outcomesObj };
            return { ...acc, [player]: playerObj };
        }, {});

        return { ...acc, ...lines };
    }, {});
};

const categories = data.map(reduceCategory);

const adjCategories = categories.map(c => {
    const keys = Object.keys(c);
    return keys.map(k => ({ ...c[k] }));
});

const finalPlayerObj = {};

adjCategories.forEach((c, idx) => {
    const category = pages[idx][0];
    c.forEach(playerObj => {
        const player = playerObj.player;
        if (!finalPlayerObj[playerObj.player]) {
            finalPlayerObj[player] = { player };
        }

        Object.keys(playerObj).forEach(k => {
            if (k !== 'player') {
                finalPlayerObj[player][`${category}.${k}`] = playerObj[k];
            }
        });
    });
});

const json = Object.values(finalPlayerObj);

