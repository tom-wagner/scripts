// =VLOOKUP(CONCAT(B2," ",C2),Sheet1!$B$1:$E$250,4,FALSE)

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Picks a single longshot
const getLongshot = (longshots) => shuffle([...longshots]).slice(0, 1);

const getPlayersToQueue = () => {
    // TODO: TWO LONGSHOTS IS THE ANSWER AS LONG AS GOOD GOLFERS ARE AVAILABLE AT <= 3%; ADP CUTOFF 35 FLAT;

    const tierARaw = [['a4a9d476-9bad-4b86-9595-ee7284c1b436', 0.99], ['91eac8d3-41ae-4b21-82af-cadddd6195d4', 0.99], ['ba8be8fc-0632-48ec-90cf-28edd83c7719', 0.85], ['7af37bbe-b2ef-4d5f-8cdd-335058eb8a90', 0.85], ['bb4140c5-a83c-49f1-bb31-df551cf6822b', 0.85], ['95e5e6ee-eadf-4da2-88c5-f650c5a9277b', 0.7], ['cd3f4fb6-53c1-4da9-b850-fcd2a436bec5', 0.7], ['b10b3592-46d5-45d2-8149-0ee236947785', 0.7], ['797c90be-3fee-48cb-86b7-602966bf591e', 0.7], ['b2948442-f7dd-48c8-a3e8-ad311ca6d207', 0.7], ['be180a4e-04b1-4486-bf4a-9de13aff649e', 0.7], ['0d7a3151-05fc-4a31-8b6c-76af075506aa', 0.7], ['4742c415-5714-43d7-b01e-76576f17e9c6', 0.7], ['724959a6-786e-43f4-8176-dd870d1701dd', 0.7], ['dc927881-567e-40ae-9100-7480266cb913', 0.5], ['07fb0059-e985-488e-b1b8-1267a149d969', 0.5], ['1b0261e4-89bc-4326-b2d6-d52c633453f2', 0.5], ['9c1b024f-1213-43d6-abf8-5a80a1c1870f', 0.4], ['7cff4418-61f1-415e-9cfb-52519d5725dd', 0.4], ['cf4df8d5-b781-4ab6-98d8-081cd432d4e0', 0.4], ['30125c53-5871-4a43-b29c-d82a79374ed3', 0.4], ['2a24b1fe-f93c-4bfe-b955-8fba26eecc92', 0.4], ['1ac34768-8a24-49d3-a482-e643b24bb3cf', 0.4], ['c0afe096-698d-4b83-be9e-a4a84b1aac52', 0.4], ['3ef9480f-8e5b-4ab2-ac92-6e15b0f8dff1', 0.4], ['8cb04abc-626a-47f7-9232-9cc3b426934e', 0.4], ['b2bfeed9-8b90-4056-964a-7fd60d0effe4', 0.4], ['61b41a33-c704-4919-867c-84274d74fd26', 0.4], ['be88f919-0135-4c23-9c26-9dc3d2fbb8e2', 0.4], ['ca96bdba-7ee9-42f8-aad4-0563efdc2574', 0.3], ['31d6bd65-da64-466c-bef9-b78b48db811a', 0.3], ['a903f80f-cda5-459e-bbe4-d7e73d0c4c08', 0.3], ['5233dd60-f1fa-4e2a-9b8b-b2e0de88bd24', 0.3], ['1c20ea06-d346-4ec3-81f3-550f80ae10c7', 0.2], ['d4775a6f-690d-4344-8ab7-9a468571a934', 0.2], ['48638f1d-c84f-48df-b558-5128d1fe1910', 0.2], ['cd94f9ec-5174-41bd-a0d0-71fc7af99a5c', 0.2], ['49b20d0a-a276-4add-9893-c3e324aa2f77', 0.2], ['34446626-d843-4e3d-b2ba-f72cee0ee6ab', 0.2], ['8f1aa6ed-157b-47df-9b46-f4031dd8f5cf', 0.2], ['62d1c4c7-2d07-47b9-8968-207422253076', 0.2], ['ca74cd2f-88fc-4268-a3d9-c90e711756e6', 0.2]];
    const tierA = tierARaw.filter(tup => tup[1] >= Math.random()).map(tup => tup[0])
    console.log({
        tierA
    });

    const longshots = ['eb819525-3213-4b41-9ee9-caee0a007aae', '5d2edb0f-4494-4442-a5e5-428124034b13', 'b71fcc7b-cf24-4777-8771-faf56f5d83db', 'd51d7193-9e44-424a-98c3-0e6a08acae8a', '570f33d5-36a3-4f5c-94d0-dd59a175e64b', 'ca4e16ed-c863-48e6-87a9-d7c05c067c12', '325537b1-2f08-4b85-b7fa-0219ea5b09bd', 'd51569e5-164a-4478-bd4d-2d6aca9bab76', '46664263-0aa7-49f2-9763-440539f236f3', '17e706cc-be93-47c9-ad24-06110662667d', 'ffcc8e1b-8930-4302-aba8-f24da613c563', 'c72a52f9-2508-40c7-a665-7d65c1b1ec5f', '8169b1b5-e0bb-4017-971b-e2114a746074', '3d377dd1-05f9-4b21-8326-2be55f886760', '3f40fba3-6449-43f8-9ce2-3a51450b720b', 'eaef9e1e-ede4-4724-9642-67bebf4bbc8f', '1503392b-eb15-4777-8944-014e311f77bd', '70c25cf8-3d44-4f82-a514-acd75a1fa9fa', '87b0c14b-f3bf-40b5-a397-8227c39eb68b', 'fc789bb5-a27c-41a2-a760-2969f35de6e1', '7b9ef3b2-5c56-4b81-81b5-84098b78f4a8', 'e7f2ae52-fe95-49c6-94ea-04f989aed7e2', 'a98d3df1-4806-4788-a340-22a38f02b4cb', '3fceb9a0-961f-4deb-ad7a-011ae54bcdee', 'f9227366-446e-4ca8-accb-44d888e7972c', 'bc6a5274-0039-4313-9970-6bd13628be9e', '4edf89c6-a95e-4a09-a671-7b9d21807cee', '43a162b3-7f92-414c-94ee-fabef60571cf', '842adf9b-b5e9-4ce9-a3d4-d1e588d649b5', '8c553019-e174-4721-ae6c-a864f67dcba5', 'c21bbcc6-78a1-46eb-8fe9-320fafb748a4', '4d984a6d-26a5-4966-b782-4904bcbb8c61', 'cb12eba8-185f-4d9d-b497-ffadb10c97d3', '5217c224-99d8-4a95-a440-1940be414410', '214bb4a8-c5f1-49e7-8857-422729ae0fd2', 'b5a21499-2b36-48eb-954d-d90596a2373f'];
    const longshotOne = getLongshot(longshots);
    const longshotTwo = getLongshot(longshots);

    // TODO: TEST getPlayersToQueue before RUNNING SCRIPT

    // const tierBRaw = [['700c0e4b-636c-44e4-a494-ecaddd334e0a', 0.3], ['7d5b6ce2-a208-4f01-a38d-aaac3f0412db', 0.3], ['0db6eedf-87b5-4d24-9514-6b9f26a71d1f', 0.3], ['484318f8-c016-4c35-81c9-ed9d83283abc', 0.3], ['9bdc6e3d-9708-4e1d-85fd-adc108b2fb2f', 0.3], ['6351b868-328f-4834-9486-eeabdbd32fcd', 0.3], ['85736deb-7c8e-426c-a244-ecf8d40d231a', 0.3], ['b823a433-168e-4b92-a024-528ba3a1d7c4', 0.3], ['537f4c9d-0f6e-43c2-93c5-032afa466701', 0.3], ['6cf477cd-8c1b-40a8-895f-e45446b719f5', 0.3], ['c4fbb46e-ac51-4d21-8aff-0a3d08b6c148', 0.3], ['904e76a6-8482-4f86-8200-1acffd0b12bb', 0.2], ['2ec9b0e1-8505-4a18-85b2-8f2ac125b56a', 0.2], ['88d0b90d-8b7c-4218-a0d4-db6ed58e86e2', 0.2], ['119ba5b5-4270-4f14-98be-af78e47fb1c8', 0.2], ['70f6493a-7329-47f9-b0d8-d8be37f7890b', 0.2], ['f639a89e-119f-4899-a9cf-b6931a7bddc4', 0.1], ['e0b511ec-bda1-4a57-b869-c34f55b3fbb4', 0.1], ['1047c81d-e78b-48c4-9c94-fcb646bf6de4', 0.1], ['34e41d19-f8f1-47d0-8859-7b9ba592f512', 0.1], ['8be3fea7-c2d4-4052-905c-73433bd1d838', 0.1], ['6604158a-fc1f-4917-8dbe-701b8ea28167', 0.1], ['add27d04-1933-46bf-83ea-fdd3871f2fea', 0.1], ['f11d6149-cc0d-49ed-b6e1-617bbaa5ae4d', 0.1], ['a00729c8-ddea-4042-8c48-5a6fdbd33923', 0.1], ['1288cc9d-55a3-4f51-a3ca-1b0d3c925d77', 0.1], ['788d588b-1955-432f-aa5c-f8250950acaa', 0.1], ['411a73c0-536c-49c0-b28d-fcd3d9d221b0', 0.1], ['132fe7b4-093c-4aaa-9593-2240861f2fa2', 0.1], ['86d04f53-4c11-4352-8efd-9d601cea699a', 0.1], ['41366120-5a3e-4775-943a-48d913aacd41', 0.1]];
    // const tierB = tierBRaw.filter(tup => tup[1] >= Math.random()).map(tup => tup[0])
    // console.log({ tierB });

    // const BUMS = [];
    // const bums = shuffle(BUMS);

    // 1 -> every time
    const HOW_OFTEN_TO_TAKE_TWO_LONGSHOTS = .85;
    if (Math.random() < HOW_OFTEN_TO_TAKE_TWO_LONGSHOTS) {
        console.log('queing 2');
        return [...tierA.slice(0, 10), ...longshotOne, ...longshotTwo, ...tierA.slice(10)];
    }

    console.log('queing 1');
    return [...tierA.slice(0, 10), ...longshotOne, ...tierA.slice(10)];
}
    ;

const oneHundredFiftyPlayerQueues = Array.from({
    length: 250
}, (_, index) => getPlayersToQueue());

// Note: The Auth String can be pulled from the "Authorization" request header on an outgoing request
// TODO: THIS AUTH IS BROKEN --> "Bearer" not used
const AUTH = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjNnRTM4R1FUTW1lcVA5djFYVllEUCJ9.eyJ1ZF9zdWIiOiI4ZTgyYjY5MC1lOThlLTRkNTctODkzMy0zY2I1ZGQzZjJkODIiLCJ1ZF9lbWFpbCI6InR3YWduZXI1NUBnbWFpbC5jb20iLCJ1ZF91c2VybmFtZSI6ImhvbGxpbnNhbml0eSIsImlzcyI6Imh0dHBzOi8vdW5kZXJkb2cudW5kZXJkb2cuYXV0aDBhcHAuY29tLyIsInN1YiI6ImF1dGgwfDhlODJiNjkwLWU5OGUtNGQ1Ny04OTMzLTNjYjVkZDNmMmQ4MiIsImF1ZCI6Imh0dHBzOi8vYXBpLnVuZGVyZG9nZmFudGFzeS5jb20iLCJpYXQiOjE3MTU4MzgyNjcsImV4cCI6MTcxNTg0MTg2Nywic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyIsImd0eSI6WyJyZWZyZXNoX3Rva2VuIiwicGFzc3dvcmQiXSwiYXpwIjoiY1F2WXoxVDJCQUZiaXg0ZFlSMzdkeUQ5TzBUaGYxczYifQ.KMZL2uh8ddJ16l7JGzx57olrPP33dpZ6vOqB0q1koQKUi5ZZiX_3egsdPZufNyYuwsIpkpZyiIY_l0gMmAczL36KZA7xMsufCGgF0H0MddNWmHnmx_QP8151npHySvheXBEo8SsIGYkssn6xzeIgWyeMdlBcGXaOpmYZ3qq1l-q1nkiguayq7lC5j1WOF8jpCGW5bKnAmi-tKJvKTder_1HWEQItIzjRnHo4WsM-wJj7YoOMrzTWx6ZdFbVrIMJAUDRxVZ9UyL3CzHWUkquGoAjC5VN3JVfebx37Ocv3dPL88I4Eo_lx4qABtcIRFLkYqofVeuzva54HPLFlzw40rA";
const f = async () => {
    const response = await fetch("https://api.underdogfantasy.com/v3/user/active_drafts", {
        "headers": {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9,la;q=0.8",
            "authorization": AUTH,
            "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
            "client-request-id": "27b2c755-b882-438a-9d0f-03ec276871b2",
            "client-type": "web",
            "client-version": "202404111623",
            // "if-none-match": "W/\"fa8dd1e80bc7c1b40837767f6729b210\"",
            "referring-link": "",
            "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "user-latitude": "44.9186702",
            "user-location-token": "",
            "user-longitude": "-93.2141856"
        },
        "referrer": "https://underdogfantasy.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        // "credentials": "include"
    });
    const drafts = await response.json();
    console.log(drafts);

    drafts.drafts.forEach(async (draft, idx) => {
        const playersToQueue = oneHundredFiftyPlayerQueues[idx];
        const toPost = {
            'queue': playersToQueue
        };

        const response = await fetch(`https://api.underdogfantasy.com/v1/draft_entries/${draft.draft_entry_id}/queue`, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,la;q=0.8",
                "authorization": AUTH,
                "client-device-id": "9914b1d2-11de-4a55-9d87-02c8a2f61f8a",
                "client-request-id": "82b45a83-a78e-40a4-b018-eca371291c35",
                "client-type": "web",
                "client-version": "202402151108",
                "content-type": "application/json",
                "referring-link": "",
                "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-latitude": "44.9186124",
                "user-location-token": "",
                "user-longitude": "-93.2141521"
            },
            "referrer": "https://underdogfantasy.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": JSON.stringify(toPost),
            "method": "POST",
            "mode": "cors",
            // "credentials": "include"
        });

        const json = await response.text();
        console.log({
            json
        });
    }
    );
}
    ;

f();
