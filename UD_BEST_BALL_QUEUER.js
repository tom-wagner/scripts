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
    const tiers = [[['f3f067fa-6f6f-40c3-8d20-5d783cd9ad31', 1]], [['280f4726-c2ac-44a8-b9ca-28e4fd96d63e', 1]], [['0f49e825-156e-4258-a6a6-12f0d6f8b404', 1], ['7a310c11-5f08-42c2-a251-3e7239aa2885', 0.6], ['12f0b0b9-4842-49e7-8462-2817e1289beb', 0.75]], [['389f900f-ae7b-4650-b837-6bc818f985a6', 1], ['410e0b5c-a0a3-4db6-9159-bfef32bbc6e5', 1], ['bd77ebc1-227d-4e52-a17d-fa09780c0ff6', 0.5], ['b2b0af2c-4076-4ed1-8e98-1f4e4f8f8801', 0.5], ['81938180-7bbc-4e78-9436-4c62a739babb', 0.7]], [['88f4d8b1-7a9f-485e-958f-f61b1f3933fc', 1], ['825b15f7-5b4f-4ebb-81a0-6f4d95e46812', 1], ['31a99d71-5f13-453d-a13b-9516149732c7', 1], ['d337c035-37fe-401d-9e61-a905272cbe86', 1], ['28ff9e6d-bffd-4684-922a-7b398bd81e86', 1]], [['cc1a97ee-a32c-40fb-974a-70d867cf2bb6', 1], ['7c3c998f-8270-455b-b93a-8693e2d08f74', 1], ['f1aff80c-2d28-48c9-8d45-38ac981e4f69', 0.4], ['68ca1a8b-9b63-4369-acc1-c2899cfa7564', 1], ['184fe868-994f-4fc1-a56c-39664fb42440', 1]], [['2358f001-db1b-4439-a289-ea80655a3200', 1], ['8478d4a0-b5cb-4f75-b1e1-a5447630a6ba', 1], ['42158ad3-5868-4134-b6a6-21b86c32d45f', 1], ['fbd7a63f-e174-4d7d-88b6-e4be63ff7c49', 1], ['734a86f3-6e5f-4b90-90ce-5ea32f8c052a', 1], ['e74c9e9b-3f78-4028-9941-7f4f362970ae', 1]], [['a1791060-7c9e-4b48-8dee-fc9515eca728', 0.7], ['8e1d68d3-bc34-44ff-bba9-1b72302cb643', 0.9], ['2e29b695-2c64-4e96-9717-4bcea1fcb15d', 0.7], ['639a869d-3101-49b1-bea1-f741a9f5ab57', 0.4], ['ba78402d-2aa4-46b2-bc5b-364a03a3005b', 0.7]], [['e6b68277-16be-4b9f-b123-6e7fd234ce2e', 0.7], ['72ef40ec-7ba3-4376-8ccf-945eca45fe89', 0.6], ['38482b72-26cb-41b5-814e-45927fa8f746', 1], ['69689ab4-c754-42f2-8efc-4d8973a7812a', 1], ['6d89c99f-d9bf-40ba-8e45-5d77323133f5', 1], ['8db9b2a9-97ba-47c2-af96-be0a570af330', 1], ['761a37e8-6bba-4ccf-b105-781ad68fb283', 0.7], ['fca1d935-22c2-4e8a-920d-c49a75cd4a7d', 0.7]], [['4e483fee-88b3-4c48-b609-1903206f69b3', 0.5], ['dfe1281d-72cc-49a1-a6bf-11a22634a949', 0.5], ['78389c93-2178-4be2-9f3f-deac432ee21d', 0.5], ['e5b0f48e-8ea5-41fb-aeff-586e2cc60f25', 0.5], ['54bd4c3c-67cc-427b-94af-cfcf1c1abb44', 0.5], ['630e4372-3647-4632-bf6c-6a2e739c56a3', 0.2], ['79fdabde-afee-411e-abac-3a325746d79c', 0.2], ['3585c8dc-2e23-4e11-8625-aa53e30daac0', 0.7], ['a7f7c610-178e-4c21-8438-ac230dc88213', 0.8], ['30e0f3a8-e34c-438c-b4ee-67ed8f9b10cf', 0.8]], [['d931b5cd-eb60-41b6-8842-3ce72e704d9a', 0.5], ['12b0ead7-2600-47cf-a70d-143dd990ea80', 0.5], ['bf9c80de-f1a0-4127-8a30-1cdb89d198ac', 0.5], ['c7378e31-6348-4884-ab81-de256009868b', 0.5], ['8f408fd2-d8de-408b-8aca-3cff359870a0', 0.5], ['3d745598-c972-4706-ba50-73f094ac52cb', 0.5], ['0f6f58c2-7288-45c4-89f4-7e04346c654b', 0.5], ['79df744f-e569-44b5-8148-50bf7f6e64a8', 0.5], ['735baa88-e13d-4c43-a377-88bae9e8b135', 0.5], ['c93889ed-6c75-4605-8a64-f16909939b0d', 0.5], ['783ea152-8180-4c0b-b573-029ba5de16f6', 0.5], ['40b3f210-a17c-46c1-ac79-62894a56f8af', 0.5], ['d4dd8fb5-33a9-4db3-bdf3-ea1f4a280fe5', 0.5], ['3a4fd62d-bf4a-4374-8082-d72b09e4f642', 0.5], ['d2062e71-749e-44f4-a0a4-abe5363ff7ac', 0.5], ['e5d543b0-3848-4368-ab09-56d8330123db', 0.5], ['ed7f8b68-58f4-4031-aa78-cc8fd72bfd26', 0.5], ['7a616e87-cc95-4a8f-9660-eecbad85c4d4', 0.5], ['d14f3d8d-ce58-42ac-9ad9-0d29aadc3453', 0.5], ['4c6c98d5-14bb-4e58-bb97-9619150beee9', 0.5], ['aaaccf61-36a7-4b0f-b767-a98814a44155', 0.5], ['2b879360-def2-456b-9153-dcebffbf2e84', 0.5], ['e9aa1a4d-9b20-4c89-b43d-f7a54f73879b', 0.5], ['fbd2fa80-0b46-4d97-a292-0d838db61ec2', 0.5], ['574adfeb-5c86-43f0-9301-32127076e19e', 0.5], ['c18aeffc-9f20-429c-94a1-8adb57ece2f1', 0.5], ['45f3b335-4439-4d3d-b14f-f5312f573767', 0.5], ['4388025c-1b2e-4024-a59e-2a93910d0ac4', 0.5]]];

    const shuffledTiers = tiers.map(shuffle);
    const flattened = tiers.reduce((acc, cv) => [...acc, ...cv], []);
    const filtered = flattened.filter(tup => tup[1] >= Math.random()).map(tup => tup[0]);
    return filtered;
};

const oneHundredFiftyPlayerQueues = Array.from({ length: 250 }, (_, index) => getPlayersToQueue());


// Note: The Auth String can be pulled from the "Authorization" request header on an outgoing request
// TODO: THIS AUTH IS BROKEN --> "Bearer" not used
const AUTH = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjNnRTM4R1FUTW1lcVA5djFYVllEUCJ9.eyJ1ZF9zdWIiOiI4ZTgyYjY5MC1lOThlLTRkNTctODkzMy0zY2I1ZGQzZjJkODIiLCJ1ZF9lbWFpbCI6InR3YWduZXI1NUBnbWFpbC5jb20iLCJ1ZF91c2VybmFtZSI6ImhvbGxpbnNhbml0eSIsImlzcyI6Imh0dHBzOi8vdW5kZXJkb2cudW5kZXJkb2cuYXV0aDBhcHAuY29tLyIsInN1YiI6ImF1dGgwfDhlODJiNjkwLWU5OGUtNGQ1Ny04OTMzLTNjYjVkZDNmMmQ4MiIsImF1ZCI6Imh0dHBzOi8vYXBpLnVuZGVyZG9nZmFudGFzeS5jb20iLCJpYXQiOjE3MTMzNTk5ODYsImV4cCI6MTcxMzM2MzU4Niwic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyIsImd0eSI6WyJyZWZyZXNoX3Rva2VuIiwicGFzc3dvcmQiXSwiYXpwIjoiY1F2WXoxVDJCQUZiaXg0ZFlSMzdkeUQ5TzBUaGYxczYifQ.juDf-rYN4geNdt3UmLlrJHOqhyGQ38Jk1pJ1y2uU9gtdRihpjk6gLor-Tv2M2RTNVXHQHQgFCZmFi_yMs8xyFaU8K08pVV-1WqOIiDyhuIwoh0aAWgJfZNcHoWJ4kqY5g9289uocISK_Gja5hf0cdsd7t95Fl1wwTmi59N925U8Va_WrQ4sGFJLLxqDW-LHYTy5XIf6SQInogcpYQYR8SbHWxw1OL4UgYNRHVImwIrIaRwWRfpYg4zKhsz-2YxFtFvJoEOfgoz05o__LMJH5wNOREojUI-20pL59lzNewgxZf5e2zK4x2SKTFBWnatQMQLgSHJyHGvQBGd8_2jKqxQ";
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
        const toPost = { 'queue': playersToQueue };

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
        console.log({ json });
    });
};

f();

