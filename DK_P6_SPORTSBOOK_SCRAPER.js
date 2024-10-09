const f = async () => {
    const lines = [];
    const batterProps = await fetch("https://sportsbook.draftkings.com/sites/US-SB/api/v5/eventgroups/84240/categories/743?format=json", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjg0NDAxMzYiLCJpZCI6Ijk1OTVmYjMwMjllZWVmY2MiLCJ0ciI6IjI1YTM2YWZkZmQ1OTA1YjZjZjE2ZDRjZTE3YjMzODAwIiwidGkiOjE3MTMwNzg1MzY0NDZ9fQ==",
            "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "traceparent": "00-25a36afdfd5905b6cf16d4ce17b33800-9595fb3029eeefcc-01",
            "tracestate": "546825@nr=0-1-546825-68440136-9595fb3029eeefcc----1713078536446"
        },
        "referrer": "https://sportsbook.draftkings.com/leagues/baseball/mlb",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        // "credentials": "include"
    }).then(r => r.json())

    console.log({ batterProps });

    const batterPropsIdx = batterProps.eventGroup.offerCategories.reduce((acc, cv, idx) => {
        if (cv.name === 'Batter Props') {
            return idx;
        }
        return acc;
    }, null);

    console.log({ batterPropsIdx });

    const subs = batterProps.eventGroup.offerCategories[batterPropsIdx].offerSubcategoryDescriptors;

    console.log({ subs });

    const subcategoryReponses = await Promise.all(batterProps.eventGroup.offerCategories[batterPropsIdx].offerSubcategoryDescriptors.map(async (offer) => {
        return await fetch(`https://sportsbook.draftkings.com/sites/US-SB/api/v5/eventgroups/84240/categories/743/subcategories/${offer.subcategoryId}?format=json`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjg0NDAxMzYiLCJpZCI6IjcwYWFmNWRjM2NhZmE3NzciLCJ0ciI6IjE0MzE0MGU0MGM4MDgxZWMxZmZlYTQ4Mzk1Y2UzYjYwIiwidGkiOjE3MTMwNzg4ODUyNDJ9fQ==",
                "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "traceparent": "00-143140e40c8081ec1ffea48395ce3b60-70aaf5dc3cafa777-01",
                "tracestate": "546825@nr=0-1-546825-68440136-70aaf5dc3cafa777----1713078885242"
            },
            "referrer": "https://sportsbook.draftkings.com/leagues/baseball/mlb?category=batter-props&subcategory=total-bases",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            // "credentials": "include"
        }).then(r => r.json());
    }));

    const offersBySubcategory = subcategoryReponses.map(r => {
        const subcategory = r.eventGroup.offerCategories[batterPropsIdx].offerSubcategoryDescriptors.filter(cv => cv.offerSubcategory)[0];
        return subcategory.offerSubcategory.offers.map(o => ({ ...o, subcategory: subcategory.name }));
    });
    const offersFlat = offersBySubcategory.reduce((acc, cv) => [...acc, ...cv]);

    console.log({ offersFlat });

    const offersSuperFlat = Object.values(offersFlat).reduce((acc, cv) => [...acc, ...Object.values(cv).map(o => ({ ...o, subcategory: cv.subcategory }))], []);

    console.log({ offersSuperFlat });

    const offersByPlayer = offersSuperFlat.reduce((acc, cv) => {
        if (!acc[cv.playerNameIdentifier]) {
            acc[cv.playerNameIdentifier] = [cv];
        } {
            acc[cv.playerNameIdentifier].push(cv);
        }
        return acc;
    }, {});

    console.log({ offersByPlayer });

    // TODO: I have a bug in my code where `undefined` is included in offersByPlayer as a key --> need to find it!

    // TODO: If the line on DK is lower than P6 and I am betting `over` OR if the line is higher than P6 and I am betting `under` --> make hit rate 65% flat
};

f();