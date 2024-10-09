const calculateExactaFairValues = (entries) => {
    console.log('entries!!  --> ');
    console.log({ entries });
};

const f = async () => {
    const probablesResponse = await fetch("https://www.dkhorse.com/adw/ami/probables?brisCode=cd&trackType=Thoroughbred&race=1&poolType=EX", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sessionid": "ca4e3c9d-3901-4a05-ae1c-85d29482ea85"
        },
        "referrer": "https://www.dkhorse.com/bet/program/classic/churchill-downs/cd/Thoroughbred/1/advanced",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        // "credentials": "omit"
    });
    const probables = await probablesResponse.json();

    const entriesResponse = await fetch("https://www.dkhorse.com/adw/todays-tracks/cd/Thoroughbred/races/1/entries?affid=6200", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,la;q=0.8",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sessionid": "ca4e3c9d-3901-4a05-ae1c-85d29482ea85"
        },
        "referrer": "https://www.dkhorse.com/bet/program/classic/churchill-downs/cd/Thoroughbred/1/advanced",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        // "credentials": "include"
    });
    const entries = entriesResponse.json();

    const exactaFairValues = calculateExactaFairValues(entries);

    console.log({ probables, entries });
};

// example bet request:

// fetch("https://www.dkhorse.com/adw/wager/betslip?username=my_tux&affid=6200", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9,la;q=0.8",
//     "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJESyBIb3JzZSIsImF1ZCI6ImRraG9yc2UuY29tIiwiaWF0IjoxNzE0ODI5NzMxLCJuYmYiOjE3MTQ4Mjk3MzEsImp0aSI6IjE3MTQ4Mjk3MzEuODg1OlVua25vd24gSG9zdCIsInNlcyI6MTcxNDkxNjEzMSwiZXhwIjoxNzE0ODQ1MTQ1LCJ1c2VySW5mbyI6eyJsYXN0TmFtZSI6IldBR05FUiIsImZ1c2VCaWxsaWQiOiIxMjc1MTQ4NyIsIndhZ2VyR2VvQ2hlY2siOmZhbHNlLCJpcCI6IjU0LjE0OC43MC4xNzQiLCJwbGF5ZXJHcm91cElEcyI6W10sImNzc2RMZW5ndGgiOjQsImNhbUlkIjoiODEwOTQ5Mzk4NDQ3OTUyMyIsImVuY1BpbiI6IkVFQjcwQjAwNTQzNjlGQkQyOTYzNEIyODY2MzdCNzM0IiwiY3NzZCI6IjhYWFgiLCJmaXJzdE5hbWUiOiJUSE9NQVMiLCJhcHBSYXRpbmciOjAsImFmZklkIjoiNjIwMCIsIm1pZGRsZU5hbWUiOm51bGwsInN0YXRlIjoiTU4iLCJmcm96ZW5XYWdlciI6ZmFsc2UsImFjY291bnQiOiI2MjAxNjE3MTAiLCJjaGFubmVsSWQiOjE5LCJlbWFpbCI6InR3YWduZXI1NUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkRLUm1TNW1KU3FsTyJ9fQ.FntmnN_EGfoCkNwyNpRPAAwR7Y1S3ixAPpC4coh9RNA",
//     "content-type": "application/json",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "sessionid": "ca4e3c9d-3901-4a05-ae1c-85d29482ea85"
//   },
//   "referrer": "https://www.dkhorse.com/bet/program/classic/churchill-downs/cd/Thoroughbred/1/advanced",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"bets\":[{\"track\":\"CD\",\"trackType\":\"Thoroughbred\",\"race\":1,\"betType\":\"WN\",\"amount\":\"10\",\"runList\":\"6\",\"wagerId\":\"1714831300\",\"betCreatedTimestamp\":1714831300133,\"sourceId\":\"classic_advanced\",\"betShare\":false,\"conditional\":false}]}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });


f();