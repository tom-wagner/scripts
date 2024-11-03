// const proposals = await fetch("https://pick6.draftkings.com/resources/proposal?_data=routes%2fresources.proposal", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
//         "Accept": "application/json, text/plain, */*",
//         "Accept-Language": "en-US,en;q=0.5",
//         "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiI1Njc4MzkzN2I4MjM5YjVkIiwidHIiOiI2NmRkOTQzZTg5Y2I3MGJkZDNiNGFmMWU3NGQxNjU1YSIsInRpIjoxNzI5NjkwNjUxMzg2fX0=, eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiIyMWE5N2ViNDg1YzkwZTAzIiwidHIiOiI5YzI2NmNmMTNkOTRjOGYzMThlNWZmMWMzYjk1N2ExMCIsInRpIjoxNzI5NjkwNjUxMzg2fX0=",
//         "traceparent": "00-66dd943e89cb70bdd3b4af1e74d1655a-56783937b8239b5d-01, 00-9c266cf13d94c8f318e5ff1c3b957a10-21a97eb485c90e03-01",
//         "tracestate": "546825@nr=0-1-546825-601431337-56783937b8239b5d----1729690651386, 546825@nr=0-1-546825-601431337-21a97eb485c90e03----1729690651386",
//         "Content-Type": "multipart/form-data; boundary=---------------------------846163480117038220771386350",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin",
//         "Priority": "u=0"
//     },
//     "referrer": "https://pick6.draftkings.com/",
//     "body": "-----------------------------846163480117038220771386350\r\nContent-Disposition: form-data; name=\"draftGroupId\"\r\n\r\n115676\r\n-----------------------------846163480117038220771386350\r\nContent-Disposition: form-data; name=\"entryAmount\"\r\n\r\n25\r\n-----------------------------846163480117038220771386350\r\nContent-Disposition: form-data; name=\"currencyCode\"\r\n\r\nUSD\r\n-----------------------------846163480117038220771386350\r\nContent-Disposition: form-data; name=\"draftableIds\"\r\n\r\n50564341,50563425,50569905,50567419,50567425,50567827\r\n-----------------------------846163480117038220771386350\r\nContent-Disposition: form-data; name=\"userKey\"\r\n\r\n14e16c0d-d22b-4d82-b58b-ddcb30bb825a\r\n-----------------------------846163480117038220771386350--\r\n",
//     "method": "POST",
//     "mode": "cors"
// });

// // proposals >>
// const response = { "contestGroupId": 12970, "proposedContests": [{ "contestKey": "64pP9n", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "68pdjK", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "68pzqd", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "6DyrgY", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "J8pdRK", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "JBbmLj", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "JGgqBn", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "JQw4jb", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "JV82QP", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "JxdYD5", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "JZyn5d", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "kgR2yV", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "kjpjr5", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "kMKxMW", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "kPKyG9", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "kypBVb", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "kZynxD", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "l5j8R7", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "l5jL7G", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "ld8LVD", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "lKY2Pr", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "lLVb9z", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "lmLqdW", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "lRgxQd", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }, { "contestKey": "lzwbGP", "numberOfEntries": 1, "entryFee": 1, "currencyCode": "USD" }], "proposedEntryAmount": 25, "currencyCode": "USD" }

// const submitApiResponse = await fetch("https://pick6.draftkings.com/resources/submitPicks?_data=routes%2fresources.submitPicks", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
//         "Accept": "application/json, text/plain, */*",
//         "Accept-Language": "en-US,en;q=0.5",
//         "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiJkNzI2OWZiNDg2MTgyMzgzIiwidHIiOiI2MTM5YzQwNTk5OWZkY2YxNmNhMjc2ODk5MjBlNTY4NiIsInRpIjoxNzI5NjkwNzkzMzc2fX0=, eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiI0ZTg0NjhmYjZlOTI4N2E2IiwidHIiOiJiMjYyOTdkNmYyM2Q2MWQ0OWFmMDU3ZWZlNWY3OTZlOSIsInRpIjoxNzI5NjkwNzkzMzc2fX0=",
//         "traceparent": "00-6139c405999fdcf16ca27689920e5686-d7269fb486182383-01, 00-b26297d6f23d61d49af057efe5f796e9-4e8468fb6e9287a6-01",
//         "tracestate": "546825@nr=0-1-546825-601431337-d7269fb486182383----1729690793376, 546825@nr=0-1-546825-601431337-4e8468fb6e9287a6----1729690793376",
//         "Content-Type": "multipart/form-data; boundary=---------------------------17604249826426994063220340450",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin",
//         "Priority": "u=0"
//     },
//     "referrer": "https://pick6.draftkings.com/",
//     "body": "-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"draftGroupId\"\r\n\r\n115676\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"contestGroupId\"\r\n\r\n12970\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"entryAmount\"\r\n\r\n25\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"currencyCode\"\r\n\r\nUSD\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"contestEntries\"\r\n\r\n[{\"contestKey\":\"64pP9n\",\"numberOfEntries\":1},{\"contestKey\":\"68pdjK\",\"numberOfEntries\":1},{\"contestKey\":\"68pzqd\",\"numberOfEntries\":1},{\"contestKey\":\"6DyrgY\",\"numberOfEntries\":1},{\"contestKey\":\"J8pdRK\",\"numberOfEntries\":1},{\"contestKey\":\"JBbmLj\",\"numberOfEntries\":1},{\"contestKey\":\"JGgqBn\",\"numberOfEntries\":1},{\"contestKey\":\"JQw4jb\",\"numberOfEntries\":1},{\"contestKey\":\"JV82QP\",\"numberOfEntries\":1},{\"contestKey\":\"JxdYD5\",\"numberOfEntries\":1},{\"contestKey\":\"JZyn5d\",\"numberOfEntries\":1},{\"contestKey\":\"kgR2yV\",\"numberOfEntries\":1},{\"contestKey\":\"kjpjr5\",\"numberOfEntries\":1},{\"contestKey\":\"kMKxMW\",\"numberOfEntries\":1},{\"contestKey\":\"kPKyG9\",\"numberOfEntries\":1},{\"contestKey\":\"kypBVb\",\"numberOfEntries\":1},{\"contestKey\":\"kZynxD\",\"numberOfEntries\":1},{\"contestKey\":\"l5j8R7\",\"numberOfEntries\":1},{\"contestKey\":\"l5jL7G\",\"numberOfEntries\":1},{\"contestKey\":\"ld8LVD\",\"numberOfEntries\":1},{\"contestKey\":\"lKY2Pr\",\"numberOfEntries\":1},{\"contestKey\":\"lLVb9z\",\"numberOfEntries\":1},{\"contestKey\":\"lmLqdW\",\"numberOfEntries\":1},{\"contestKey\":\"lRgxQd\",\"numberOfEntries\":1},{\"contestKey\":\"lzwbGP\",\"numberOfEntries\":1}]\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"draftableIds\"\r\n\r\n[50564341,50563425,50569905,50567419,50567425,50567827]\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"userKey\"\r\n\r\n14e16c0d-d22b-4d82-b58b-ddcb30bb825a\r\n-----------------------------17604249826426994063220340450--\r\n",
//     "method": "POST",
//     "mode": "cors"
// });

// The number 17604249826426994063220340450 is likely generated as a unique boundary for the multipart form data.
// It's typically a random string or number to ensure that it doesn't appear in the actual form data content.
// In this case, it's probably generated by the browser or a library that handles form data submission.

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

const data = {
    draftGroupId: "115676",
    contestGroupId: "12970",
    entryAmount: "25",
    currencyCode: "USD",
    contestEntries: [
        { "contestKey": "64pP9n", "numberOfEntries": 1 },
        { "contestKey": "68pdjK", "numberOfEntries": 1 },
        // ... (other contest entries)
    ],
    draftableIds: [50564341, 50563425, 50569905, 50567419, 50567425, 50567827],
    userKey: "14e16c0d-d22b-4d82-b58b-ddcb30bb825a"
};

const { formData, contentType } = createFormData(data);

const actualFormData = "-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"draftGroupId\"\r\n\r\n115676\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"contestGroupId\"\r\n\r\n12970\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"entryAmount\"\r\n\r\n25\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"currencyCode\"\r\n\r\nUSD\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"contestEntries\"\r\n\r\n[{\"contestKey\":\"64pP9n\",\"numberOfEntries\":1},{\"contestKey\":\"68pdjK\",\"numberOfEntries\":1}]\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"draftableIds\"\r\n\r\n[50564341,50563425,50569905,50567419,50567425,50567827]\r\n-----------------------------17604249826426994063220340450\r\nContent-Disposition: form-data; name=\"userKey\"\r\n\r\n14e16c0d-d22b-4d82-b58b-ddcb30bb825a\r\n-----------------------------17604249826426994063220340450--\r\n"; // ,{\"contestKey\":\"68pzqd\",\"numberOfEntries\":1},{\"contestKey\":\"6DyrgY\",\"numberOfEntries\":1},{\"contestKey\":\"J8pdRK\",\"numberOfEntries\":1},{\"contestKey\":\"JBbmLj\",\"numberOfEntries\":1},{\"contestKey\":\"JGgqBn\",\"numberOfEntries\":1},{\"contestKey\":\"JQw4jb\",\"numberOfEntries\":1},{\"contestKey\":\"JV82QP\",\"numberOfEntries\":1},{\"contestKey\":\"JxdYD5\",\"numberOfEntries\":1},{\"contestKey\":\"JZyn5d\",\"numberOfEntries\":1},{\"contestKey\":\"kgR2yV\",\"numberOfEntries\":1},{\"contestKey\":\"kjpjr5\",\"numberOfEntries\":1},{\"contestKey\":\"kMKxMW\",\"numberOfEntries\":1},{\"contestKey\":\"kPKyG9\",\"numberOfEntries\":1},{\"contestKey\":\"kypBVb\",\"numberOfEntries\":1},{\"contestKey\":\"kZynxD\",\"numberOfEntries\":1},{\"contestKey\":\"l5j8R7\",\"numberOfEntries\":1},{\"contestKey\":\"l5jL7G\",\"numberOfEntries\":1},{\"contestKey\":\"ld8LVD\",\"numberOfEntries\":1},{\"contestKey\":\"lKY2Pr\",\"numberOfEntries\":1},{\"contestKey\":\"lLVb9z\",\"numberOfEntries\":1},{\"contestKey\":\"lmLqdW\",\"numberOfEntries\":1},{\"contestKey\":\"lRgxQd\",\"numberOfEntries\":1},{\"contestKey\":\"lzwbGP\",\"numberOfEntries\":1}]

debugger;

// await fetch("https://pick6.draftkings.com/resources/submitPicks?_data=routes%2fresources.submitPicks", {
//     "credentials": "include",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
//         "Accept": "application/json, text/plain, */*",
//         "Accept-Language": "en-US,en;q=0.5",
//         "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiJjNzRhYmVlNGJmYmY2OWYzIiwidHIiOiJjMWZkNmVmMmJkNzFhNWE1ZWJjYmVkMGM5OGMwMDIyMiIsInRpIjoxNzI5NjkxOTY0NDg4fX0=, eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjU0NjgyNSIsImFwIjoiNjAxNDMxMzM3IiwiaWQiOiI3Yzc3ZmM4NDJkOGI5N2I4IiwidHIiOiIwOWVlOWIwOGNmOWEyZTM5YjVhZmE0YTU3MzA1ZDlhMSIsInRpIjoxNzI5NjkxOTY0NDg4fX0=",
//         "traceparent": "00-c1fd6ef2bd71a5a5ebcbed0c98c00222-c74abee4bfbf69f3-01, 00-09ee9b08cf9a2e39b5afa4a57305d9a1-7c77fc842d8b97b8-01",
//         "tracestate": "546825@nr=0-1-546825-601431337-c74abee4bfbf69f3----1729691964488, 546825@nr=0-1-546825-601431337-7c77fc842d8b97b8----1729691964488",
//         "Content-Type": "multipart/form-data; boundary=---------------------------3007638569186211832455724225",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin",
//         "Priority": "u=0"
//     },
//     "referrer": "https://pick6.draftkings.com/",
//     "body": "-----------------------------3007638569186211832455724225\r\nContent-Disposition: form-data; name=\"draftGroupId\"\r\n\r\n115676\r\n-----------------------------3007638569186211832455724225\r\nContent-Disposition: form-data; name=\"contestGroupId\"\r\n\r\n12970\r\n-----------------------------3007638569186211832455724225\r\nContent-Disposition: form-data; name=\"entryAmount\"\r\n\r\n5\r\n-----------------------------3007638569186211832455724225\r\nContent-Disposition: form-data; name=\"currencyCode\"\r\n\r\nUSD\r\n-----------------------------3007638569186211832455724225\r\nContent-Disposition: form-data; name=\"contestEntries\"\r\n\r\n[{\"contestKey\":\"6mLqNd\",\"numberOfEntries\":1},{\"contestKey\":\"JqR2qm\",\"numberOfEntries\":1},{\"contestKey\":\"JWdGxx\",\"numberOfEntries\":1},{\"contestKey\":\"kxdgmq\",\"numberOfEntries\":1},{\"contestKey\":\"l2PpqL\",\"numberOfEntries\":1}]\r\n-----------------------------3007638569186211832455724225\r\nContent-Disposition: form-data; name=\"draftableIds\"\r\n\r\n[50563391,50564275,50569905,50567341,50567419,50568075]\r\n-----------------------------3007638569186211832455724225\r\nContent-Disposition: form-data; name=\"userKey\"\r\n\r\n14e16c0d-d22b-4d82-b58b-ddcb30bb825a\r\n-----------------------------3007638569186211832455724225--\r\n",
//     "method": "POST",
//     "mode": "cors"
// });