const f = async () => {
    const transactions = [];

    for (let i = 1; i++; i <= 5) {
        const result = await fetch(`https://api.underdogfantasy.com/v1/user/transactions?page=${i}`, {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9,la;q=0.8",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMzAyMDE5OC02YWU4LTQ0MTctOGVkNS1kYzkxMjViOTI5OGYiLCJzdWIiOiI4ZTgyYjY5MC1lOThlLTRkNTctODkzMy0zY2I1ZGQzZjJkODIiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE2NzQ0NDM3MzYsImV4cCI6MTY3NzA3MzQ4Mn0.gPBZE7Y7ZFYUMtnrbFx2TGyesLW9wPLydE5ceuRAO-w",
                "cache-control": "no-cache",
                "client-device-id": "401e4fae-4afd-471c-b576-8ca5c20ea1a9",
                "client-request-id": "f4ae9612-16ec-435a-aed7-0045ec7648a1",
                "client-type": "web",
                "client-version": "202301181804",
                // "pragma": "no-cache",
                "referring-link": "",
                "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-latitude": "42.3610759",
                "user-longitude": "-71.1101618"
            },
            "referrer": "https://underdogfantasy.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            // "credentials": "include"
        });
        transactions.push(result)
    }

    console.log({ transactions });
}

f();