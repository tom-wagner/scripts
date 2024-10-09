// TODO: Continue in Firefox; start by parsing window.__remixContext

// Copy/paste to firefox and this should work
// TODO: Need to update the logic surrounding draftGroupId
const DRAFT_GROUP_ID = 108619;

const SLIPS = [
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656327: Dereck Lively II / OVER 9.5 Points + Assists / 50.6%",
        "four": "34656199: Jaylen Brown / OVER 3.5 Assists / 67.3%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656286: Daniel Gafford / UNDER 6.5 Points / 51.7%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34675281: Derrick White / UNDER 4.5 Assists / 66.4%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656278: Daniel Gafford / UNDER 0.5 Assists / 51.1%",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656203: Jaylen Brown / OVER 9.5 Assists + Rebounds / 63.1%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656280: Daniel Gafford / UNDER 10.5 Points + Rebounds / 49.5%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656208: Jaylen Brown / UNDER 25.5 Points / 60.4%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656288: Daniel Gafford / UNDER 4.5 Rebounds / 55.8%",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34666714: Jrue Holiday / UNDER 13.5 Points / 58.6%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656284: Daniel Gafford / UNDER 0.5 Turnovers / 56.4%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34656327: Dereck Lively II / OVER 9.5 Points + Assists / 50.6%",
        "four": "34656228: Jrue Holiday / UNDER 18.5 Points + Assists / 58.2%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34656233: Jrue Holiday / OVER 5.5 Rebounds / 57.5%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656288: Daniel Gafford / UNDER 4.5 Rebounds / 55.8%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656247: Derrick White / OVER 15.5 Points / 57.3%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656284: Daniel Gafford / UNDER 0.5 Turnovers / 56.4%",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656215: Jayson Tatum / OVER 5.5 Assists / 56.2%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34656206: Jaylen Brown / UNDER 6.5 Rebounds / 55.7%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656327: Dereck Lively II / OVER 9.5 Points + Assists / 50.6%",
        "four": "34656199: Jaylen Brown / OVER 3.5 Assists / 67.3%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656280: Daniel Gafford / UNDER 10.5 Points + Rebounds / 49.5%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34675281: Derrick White / UNDER 4.5 Assists / 66.4%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656203: Jaylen Brown / OVER 9.5 Assists + Rebounds / 63.1%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656208: Jaylen Brown / UNDER 25.5 Points / 60.4%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34666714: Jrue Holiday / UNDER 13.5 Points / 58.6%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656286: Daniel Gafford / UNDER 6.5 Points / 51.7%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34656327: Dereck Lively II / OVER 9.5 Points + Assists / 50.6%",
        "four": "34656228: Jrue Holiday / UNDER 18.5 Points + Assists / 58.2%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656278: Daniel Gafford / UNDER 0.5 Assists / 51.1%",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34656233: Jrue Holiday / OVER 5.5 Rebounds / 57.5%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656280: Daniel Gafford / UNDER 10.5 Points + Rebounds / 49.5%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656247: Derrick White / OVER 15.5 Points / 57.3%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656288: Daniel Gafford / UNDER 4.5 Rebounds / 55.8%",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656215: Jayson Tatum / OVER 5.5 Assists / 56.2%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656284: Daniel Gafford / UNDER 0.5 Turnovers / 56.4%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34656206: Jaylen Brown / UNDER 6.5 Rebounds / 55.7%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656327: Dereck Lively II / OVER 9.5 Points + Assists / 50.6%",
        "four": "34656199: Jaylen Brown / OVER 3.5 Assists / 67.3%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656288: Daniel Gafford / UNDER 4.5 Rebounds / 55.8%",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34675281: Derrick White / UNDER 4.5 Assists / 66.4%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34656284: Daniel Gafford / UNDER 0.5 Turnovers / 56.4%",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656203: Jaylen Brown / OVER 9.5 Assists + Rebounds / 63.1%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34668307: Kleber over 7.5 FPTS",
        "three": "34668301: Lively FPTS Over 23.5",
        "four": "34656208: Jaylen Brown / UNDER 25.5 Points / 60.4%",
        "five": "",
        "six": ""
    },
    {
        "amount": 15,
        "one": "34668304: Gafford 16.5 FPTS UNDER",
        "two": "34675268: Maxi Kleber / OVER 4.5 Points + Assists + Rebounds / 49.8%",
        "three": "34656337: Dereck Lively II / OVER 9.5 Assists + Rebounds / 50.3%",
        "four": "34666714: Jrue Holiday / UNDER 13.5 Points / 58.6%",
        "five": "",
        "six": ""
    }
];

const FORMATTED_SLIPS = SLIPS.map(slip => {
    const draftableIds = ["one", "two", "three", "four", "five", "six"].map(val => {
        if (slip[val] === "") {
            return null;
        }

        return slip[val].split(':')[0];
    }
    ).filter(v => v !== null).join('%2C')
    return {
        draftableIds,
        amount: slip.amount
    };
}
);

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const f = async () => {
    const placeBetResponses = [];
    for (obj of FORMATTED_SLIPS) {
        try {
            const { draftableIds, amount } = obj;
            console.log({
                draftableIds,
                amount
            });
            const response = await fetch("https://pick6.draftkings.com/resources/proposal?_data=routes%2Fresources.proposal", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0",
                    "Accept": "*/*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiI2ZDAxYTA3ZDNlYTVhNzUyIiwidHIiOiI2OTgxNzZjMjQzYjM2MTk2MmZhZDI3MzhjMGJlYzUwMCIsInRpIjoxNzE1MDYwODQ3ODMxfX0=",
                    "traceparent": "00-698176c243b361962fad2738c0bec500-6d01a07d3ea5a752-01",
                    "tracestate": "546825@nr=0-1-546825-601431337-6d01a07d3ea5a752----1715060847831",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin"
                },
                "referrer": "https://pick6.draftkings.com/?sport=PGA+TOUR",
                "body": `draftGroupId=${DRAFT_GROUP_ID}&entryAmount=${amount}&currencyCode=USD&draftableIds=${draftableIds}`,
                "method": "POST",
                "mode": "cors"
            }).then(r => r.json());
            console.log({
                response
            });

            const respObj = {
                response,
                formattedSlip: obj
            };

            console.log('sleeping...');
            await sleep((Math.random() * 500) + 500);
            console.log('awake!');

            const { response: resp, formattedSlip } = respObj;

            const placeBetResponse = await fetch("https://pick6.draftkings.com/resources/submitPicks?_data=routes%2Fresources.submitPicks", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0",
                    "Accept": "*/*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiJlMTEyMzk3NWFhZDliZjk5IiwidHIiOiI5OGI5YTBlZjc4OWU5NTAyNmNmYWRkY2MwNGEzYTQwMCIsInRpIjoxNzE1MDYwODU1NTA3fX0=",
                    "traceparent": "00-98b9a0ef789e95026cfaddcc04a3a400-e1123975aad9bf99-01",
                    "tracestate": "546825@nr=0-1-546825-601431337-e1123975aad9bf99----1715060855507",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin"
                },
                "referrer": "https://pick6.draftkings.com/?sport=NBA",
                "body": `draftGroupId=${DRAFT_GROUP_ID}&contestGroupId=${resp.contestGroupId}&entryAmount=${resp.proposedEntryAmount}&currencyCode=USD&contestEntries=${encodeURIComponent(JSON.stringify(resp.proposedContests.map(({ contestKey, numberOfEntries }) => ({
                    contestKey,
                    numberOfEntries
                }))))}&draftableIds=%5B${formattedSlip.draftableIds}%5D`,
                "method": "POST",
                "mode": "cors"
            });
            console.log({
                placeBetResponse
            });
            placeBetResponses.push(placeBetResponse);

            console.log('sleeping...');
            await sleep((Math.random() * 500) + 500);
            console.log('awake!');

        } catch (error) {
            console.log({
                error
            });
        }
    }

    console.log({
        placeBetResponses
    });
}
    ;

f();

// await fetch("https://pick6.draftkings.com/resources/submitPicks?_data=routes%2Fresources.submitPicks", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:125.0) Gecko/20100101 Firefox/125.0",
//         "Accept": "*/*",
//         "Accept-Language": "en-US,en;q=0.5",
//         "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiJlMTEyMzk3NWFhZDliZjk5IiwidHIiOiI5OGI5YTBlZjc4OWU5NTAyNmNmYWRkY2MwNGEzYTQwMCIsInRpIjoxNzE1MDYwODU1NTA3fX0=",
//         "traceparent": "00-98b9a0ef789e95026cfaddcc04a3a400-e1123975aad9bf99-01",
//         "tracestate": "546825@nr=0-1-546825-601431337-e1123975aad9bf99----1715060855507",
//         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin"
//     },
//     "referrer": "https://pick6.draftkings.com/?sport=NBA",
//     "body": "draftGroupId=106302&contestGroupId=5038&entryAmount=50&currencyCode=USD&contestEntries=%5B%7B%22contestKey%22%3A%2264g4Vb%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%2265r4gN%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%2267M4LN%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%2268P4mw%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%2269547K%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226bPVjy%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226DR4jr%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226drPBx%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226KQpwb%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226mjDxp%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226n8wxM%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226YrzMz%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%226yx7Y2%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22J7M4b4%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22J8P45w%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JGrpGR%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JMwpWZ%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22Jn8wgM%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JNzpmw%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JpgBxj%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JPq4rL%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JQnpVg%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22Jqrbx9%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JrYKGb%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JWnWYN%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22JZzrPB%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22k2jdK5%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22k4g4Nb%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22k5r4MZ%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kBx4N9%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kdrPqq%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kgp7QW%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kLypjD%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kMwpBV%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kNzpb4%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kQnpD5%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kRVpG4%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22krYKjW%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kVnp7j%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22kWnWQn%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22l2jdY5%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lLypgD%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lmjD78%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lPq4nL%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lqrbK9%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lRVpw4%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lwZLxK%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lYrzN4%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lzLY8B%22%2C%22numberOfEntries%22%3A1%7D%2C%7B%22contestKey%22%3A%22lZzrqB%22%2C%22numberOfEntries%22%3A1%7D%5D&draftableIds=%5B34098752%2C34098746%5D",
//     "method": "POST",
//     "mode": "cors"
// });

// // returns this:
// const submitResponse = {
//     "userLineupKey": "MjzdDW",
//     "userPickSetKey": "r2rKVg",
//     "numSuccessfulEntries": 50,
//     "failedEntries": [],
//     "successfulEntryAmount": 50,
//     "failedEntryAmount": 0,
//     "currencyCode": "USD",
//     "manualReallocationRequired": false
// };
