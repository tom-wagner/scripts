// TODO: Continue in Firefox; start by parsing window.__remixContext

// TODO: Will need to handle this at later time; maybe today
const EXAMPLE_PLACE_BET_RESPONSE_WITH_LINE_CHANGE_ERRORS = {
    "userLineupKey": "",
    "userPickSetKey": "",
    "numSuccessfulEntries": 0,
    "failedEntries": [],
    "successfulEntryAmount": 0,
    "failedEntryAmount": 0,
    "proposedEntryAmount": 0,
    "manualReallocationRequired": false,
    "responseStatus": {
        "errorCode": "TUR-110",
        "message": "PickableMarket projection has changed"
    },
    "pickableMarketError": {
        "invalidPickableIds": [
            94916,
            94891
        ],
        "activeMarketsByPickableId": {
            "94891": [
                {
                    "pickableMarketId": 316244,
                    "sortOrder": 1,
                    "isPaused": false,
                    "marketStatusTypeId": 1,
                    "targetValue": 26.5,
                    "targetValueChangeId": "arrow-down",
                    "activeSelections": [
                        {
                            "pickableMarketSelectionId": 50572534,
                            "statLinePropositionId": 1,
                            "selectionStatusTypeId": 1
                        },
                        {
                            "pickableMarketSelectionId": 50572535,
                            "statLinePropositionId": 2,
                            "selectionStatusTypeId": 1
                        }
                    ]
                }
            ],
            "94916": [
                {
                    "pickableMarketId": 315511,
                    "sortOrder": 1,
                    "isPaused": false,
                    "marketStatusTypeId": 1,
                    "targetValue": 12.5,
                    "targetValueChangeId": "arrow-down",
                    "activeSelections": [
                        {
                            "pickableMarketSelectionId": 50571068,
                            "statLinePropositionId": 1,
                            "selectionStatusTypeId": 1
                        },
                        {
                            "pickableMarketSelectionId": 50571069,
                            "statLinePropositionId": 2,
                            "selectionStatusTypeId": 1
                        }
                    ]
                }
            ]
        }
    }
};

// TODO: Need a contest sniper for empty contests --> check proposals, target contests that are empty --> run right before lock

// const SLIPS = [
//     {
//         "amount": 15,
//         "one": "50563403: Nikola Vucevic / UNDER 18.5 Points / 6.7%",
//         "two": "50571069: Paolo Banchero / UNDER 13.5 Assists + Rebounds / 100.0%",
//         "three": "50563433: Wendell Carter Jr. / UNDER 10.5 Points / 87.1%",
//         "four": "50563364: Donovan Mitchell / OVER 4.5 Rebounds / 2.9%",
//         "five": "50572535: Collin Sexton / OVER 28.5 Points + Assists + Rebounds / 75.4%",
//         "six": "50563386: Jalen Green / OVER 20.5 Points / 0.0%",
//     },
// ];

// Copy/paste to firefox and this should work
// TODO: Try to pull this and get it to auto update somehow
const USER_KEY = "14e16c0d-d22b-4d82-b58b-ddcb30bb825a";
// TODO: MAKE SURE THIS IS UPDATED
const DRAFT_GROUP_ID = 116072;

const SLIPS = [
    {
        "one": "50640669:Joe FlaccoPassing Yards > 0.51",
        "two": "50627347:Sam DarnoldPassing Yards > 0.44",
        "three": "50628037:Justin JeffersonReceiving Yards > 0.5",
        "four": "50632777:T.J. HockensonReceptions > 0.48",
        "five": "50633685:Michael Pittman Jr.Receiving Yards > 0.5",
        "six": "50639883:Jalen NailorReceiving Yards > 0.54",
        "amount": 50
    },
    {
        "one": "50640669:Joe FlaccoPassing Yards > 0.51",
        "two": "50627349:Sam DarnoldCompletions > 0.42",
        "three": "50627433:T.J. HockensonReceiving Yards > 0.45",
        "four": "50639883:Jalen NailorReceiving Yards > 0.54",
        "five": "50631896:Aaron JonesRushing Yards > 0.54",
        "six": "50627356:Jonathan TaylorRushing Yards > 0.52",
        "amount": 50
    },
    {
        "one": "50627363:Joe FlaccoCompletions > 0.46",
        "two": "50627347:Sam DarnoldPassing Yards > 0.44",
        "three": "50628037:Justin JeffersonReceiving Yards > 0.5",
        "four": "50633685:Michael Pittman Jr.Receiving Yards > 0.5",
        "five": "50631896:Aaron JonesRushing Yards > 0.54",
        "six": "50640559:Mo Alie-CoxReceiving Yards > 0.56",
        "amount": 50
    },
    {
        "one": "50627363:Joe FlaccoCompletions > 0.46",
        "two": "50627349:Sam DarnoldCompletions > 0.42",
        "three": "50627359:Jordan AddisonReceiving Yards > 0.44",
        "four": "50639883:Jalen NailorReceiving Yards > 0.54",
        "five": "50627356:Jonathan TaylorRushing Yards > 0.52",
        "six": "50640581:Alec PierceReceiving Yards > 0.55",
        "amount": 50
    },
    {
        "one": "50640669:Joe FlaccoPassing Yards > 0.51",
        "two": "50633685:Michael Pittman Jr.Receiving Yards > 0.5",
        "three": "50628037:Justin JeffersonReceiving Yards > 0.5",
        "four": "50632777:T.J. HockensonReceptions > 0.48",
        "five": "50631896:Aaron JonesRushing Yards > 0.54",
        "six": "50640559:Mo Alie-CoxReceiving Yards > 0.56",
        "amount": 50
    },
    {
        "one": "50640669:Joe FlaccoPassing Yards > 0.51",
        "two": "50627359:Jordan AddisonReceiving Yards > 0.44",
        "three": "50627433:T.J. HockensonReceiving Yards > 0.45",
        "four": "50627356:Jonathan TaylorRushing Yards > 0.52",
        "five": "50640581:Alec PierceReceiving Yards > 0.55",
        "six": "",
        "amount": 50
    },
    {
        "one": "50627347:Sam DarnoldPassing Yards > 0.44",
        "two": "50639883:Jalen NailorReceiving Yards > 0.54",
        "three": "50628037:Justin JeffersonReceiving Yards > 0.5",
        "four": "50633685:Michael Pittman Jr.Receiving Yards > 0.5",
        "five": "50631896:Aaron JonesRushing Yards > 0.54",
        "six": "50627356:Jonathan TaylorRushing Yards > 0.52",
        "amount": 50
    },
    {
        "one": "50627347:Sam DarnoldPassing Yards > 0.44",
        "two": "50639883:Jalen NailorReceiving Yards > 0.54",
        "three": "50627359:Jordan AddisonReceiving Yards > 0.44",
        "four": "50640559:Mo Alie-CoxReceiving Yards > 0.56",
        "five": "50640581:Alec PierceReceiving Yards > 0.55",
        "six": "",
        "amount": 50
    }
];


const FORMATTED_SLIPS = SLIPS.map(slip => {
    const draftableIds = ["one", "two", "three", "four", "five", "six"].map(val => {
        if (slip[val] === "") {
            return null;
        }

        return slip[val].split(':')[0];
    }
        // TODO: %2C changed to comma?
    ).filter(v => v !== null).join(',')
    return {
        draftableIds,
        amount: slip.amount
    };
}
);

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generateBoundary() {
    // Generate a string of 29 random digits
    let boundary = '';
    for (let i = 0; i < 29; i++) {
        boundary += Math.floor(Math.random() * 10);
    }
    return boundary;
}

function createFormData(data) {
    const boundary = '-----------------------------' + generateBoundary();
    let formData = '';

    for (const [key, value] of Object.entries(data)) {
        formData += `${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n`;
        if (typeof value === 'object') {
            formData += JSON.stringify(value);
        } else {
            formData += value;
        }
        formData += '\r\n';
    }

    formData += `${boundary}--\r\n`;

    return {
        formData,
        contentType: `multipart/form-data; boundary=${boundary.slice(2)}`
    };
}

const f = async () => {
    const placeBetResponses = [];
    const invalidPickableIds = new Set([]);
    debugger;
    for (let i = 0; i < FORMATTED_SLIPS.length; i++) {
        debugger;
        const obj = FORMATTED_SLIPS[i];
        debugger;
        try {
            const { draftableIds, amount } = obj;
            console.log({
                draftableIds,
                amount
            });

            let shouldSkip = false;
            for (const [key, value] of Object.entries(obj)) {
                if (typeof value === 'string' && [...invalidPickableIds].some(id => value.includes(id))) {
                    console.log('skipping due to invalid pickable id: ', value, obj);
                    shouldSkip = true;
                    break;
                }
            }
            if (shouldSkip) continue;

            const { formData, contentType } = createFormData({
                draftGroupId: DRAFT_GROUP_ID,
                entryAmount: amount,
                currencyCode: "USD",
                draftableIds,
                userKey: USER_KEY
            });

            const response = await fetch("https://pick6.draftkings.com/resources/proposal?_data=routes%2fresources.proposal", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiI1Njc4MzkzN2I4MjM5YjVkIiwidHIiOiI2NmRkOTQzZTg5Y2I3MGJkZDNiNGFmMWU3NGQxNjU1YSIsInRpIjoxNzI5NjkwNjUxMzg2fX0=, eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiIyMWE5N2ViNDg1YzkwZTAzIiwidHIiOiI5YzI2NmNmMTNkOTRjOGYzMThlNWZmMWMzYjk1N2ExMCIsInRpIjoxNzI5NjkwNjUxMzg2fX0=",
                    "traceparent": "00-66dd943e89cb70bdd3b4af1e74d1655a-56783937b8239b5d-01, 00-9c266cf13d94c8f318e5ff1c3b957a10-21a97eb485c90e03-01",
                    "tracestate": "546825@nr=0-1-546825-601431337-56783937b8239b5d----1729690651386, 546825@nr=0-1-546825-601431337-21a97eb485c90e03----1729690651386",
                    "Content-Type": contentType,
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin",
                    "Priority": "u=0"
                },
                "referrer": "https://pick6.draftkings.com/",
                "body": formData,
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
            await sleep((Math.random() * 100) + 200);
            console.log('awake!');

            const { response: resp, formattedSlip } = respObj;

            // TODO: Use this
            const { contentType: contentTypeForSubmitPicks, formData: formDataForSubmitPicks } = createFormData({
                draftGroupId: DRAFT_GROUP_ID,
                contestGroupId: resp.contestGroupId,
                entryAmount: amount,
                currencyCode: "USD",
                contestEntries: JSON.stringify(resp.proposedContests.map(({ contestKey, numberOfEntries }) => ({
                    contestKey,
                    numberOfEntries
                }))),
                draftableIds: draftableIds.split(','),
            });

            // TODO: NEED TO REPLACE WITH NEW FORMAT FOR BOTH PROPOSAL AND FOR SUBMIT PICKS
            // const placeBetResponse = await fetch("https://pick6.draftkings.com/resources/submitPicks?_data=routes%2Fresources.submitPicks", {
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
            //     "body": `draftGroupId=${DRAFT_GROUP_ID}&contestGroupId=${resp.contestGroupId}&entryAmount=${resp.proposedEntryAmount}&currencyCode=USD&contestEntries=${encodeURIComponent(JSON.stringify(resp.proposedContests.map(({ contestKey, numberOfEntries }) => ({
            //         contestKey,
            //         numberOfEntries
            //     }))))}&draftableIds=%5B${formattedSlip.draftableIds}%5D`,
            //     "method": "POST",
            //     "mode": "cors"
            // });

            const placeBetResponse = await fetch("https://pick6.draftkings.com/resources/submitPicks?_data=routes%2fresources.submitPicks", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiJkNzI2OWZiNDg2MTgyMzgzIiwidHIiOiI2MTM5YzQwNTk5OWZkY2YxNmNhMjc2ODk5MjBlNTY4NiIsInRpIjoxNzI5NjkwNzkzMzc2fX0=, eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiI0ZTg0NjhmYjZlOTI4N2E2IiwidHIiOiJiMjYyOTdkNmYyM2Q2MWQ0OWFmMDU3ZWZlNWY3OTZlOSIsInRpIjoxNzI5NjkwNzkzMzc2fX0=",
                    "traceparent": "00-6139c405999fdcf16ca27689920e5686-d7269fb486182383-01, 00-b26297d6f23d61d49af057efe5f796e9-4e8468fb6e9287a6-01",
                    "tracestate": "546825@nr=0-1-546825-601431337-d7269fb486182383----1729690793376, 546825@nr=0-1-546825-601431337-4e8468fb6e9287a6----1729690793376",
                    "Content-Type": contentTypeForSubmitPicks,
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-origin",
                    "Priority": "u=0"
                },
                "referrer": "https://pick6.draftkings.com/",
                "body": formDataForSubmitPicks,
                "method": "POST",
                "mode": "cors"
            }).then(r => r.json());

            console.log({
                placeBetResponse,
                errorCode: placeBetResponse.responseStatus?.errorCode
            });
            placeBetResponses.push(placeBetResponse);

            if (placeBetResponse.responseStatus?.errorCode === 'TUR-035') {
                console.log('user not allowed to enter into Pick6 contests; aborting');

                const unplaced = FORMATTED_SLIPS.slice(i);
                console.log({ i, unplaced });
                break;
            }

            // TODO: Handle TUR-092

            if (placeBetResponse.responseStatus?.errorCode === 'TUR-111') {
                console.log("slate already strated?")
                console.log({ placeBetResponse, index: i })
                break;
            }

            if (placeBetResponse.responseStatus?.errorCode === 'TUR-110') {
                console.log('pickable market projection has changed');
                const invalidPickableIds = placeBetResponse.pickableMarketError?.invalidPickableIds;
                invalidPickableIds.forEach(id => invalidPickableIds.add(id));
            }

            // TODO: NEED TO WATCH FOR TUR-135 RESPONSE AND ABORT;
            // {"userLineupKey":"","userPickSetKey":"","numSuccessfulEntries":0,"failedEntries":[],"successfulEntryAmount":0,"failedEntryAmount":0,"proposedEntryAmount":0,"manualReallocationRequired":false,"responseStatus":{"errorCode":"TUR-035","message":"User not allowed to enter into Pick6 contests"}}
            // TODO: CONSIDER CACHING LINES THAT HAVE CHANGED AND SKIPPING API CALLS FOR THOSE
            // {"userLineupKey":"","userPickSetKey":"","numSuccessfulEntries":0,"failedEntries":[],"successfulEntryAmount":0,"failedEntryAmount":0,"proposedEntryAmount":0,"manualReallocationRequired":false,"responseStatus":{"errorCode":"TUR-110","message":"PickableMarket projection has changed"},"pickableMarketError":{"invalidPickableIds":[110484],"activeMarketsByPickableId":{"110484":[{"pickableMarketId":344014,"sortOrder":1,"isPaused":false,"marketStatusTypeId":1,"targetValue":18.5,"targetValueChangeId":"arrow-down","activeSelections":[{"pickableMarketSelectionId":50628074,"statLinePropositionId":1,"selectionStatusTypeId":1},{"pickableMarketSelectionId":50628075,"statLinePropositionId":2,"selectionStatusTypeId":1}]}]}}}

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
