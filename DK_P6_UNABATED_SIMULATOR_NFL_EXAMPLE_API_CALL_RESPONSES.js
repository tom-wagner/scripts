// EXAMPLE API CALLS:

// const qbResponse = await fetch("https://api.unabated.com/api/props/nfl/quarterback/passingyards/21/222/0", {
//     "headers": {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "en-US,en;q=0.9,la;q=0.8",
//         "priority": "u=1, i",
//         "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"macOS\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-site",
//         "x-amz-cf-v-id": "dNSob7rQOiJFE_59NDSm7tuZ6ed5MA_8w8CHVqr8tGSFYpgzEUqBuQ=="
//     },
//     "referrer": "https://unabated.com/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors",
//     "credentials": "include"
// });


// This is what the above fetch returns >>>
const qbResponse = {
    "summary": {
        "yardsBonusThreshold": 300,
        "yardBonusProbability": 0.055,
        "meanYards": 222.1927,
        "medianYards": 219
    },
    "countProbabilities": [
        {
            "totalYards": null,
            "total": 0,
            "occurrences": 0,
            "probabilityEqual": 2.6377028977641e-8,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 0.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 2.6377028977641e-8,
            "probabilityOver": 0.999999973622971,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 1,
            "occurrences": 0,
            "probabilityEqual": 3.86641685971932e-7,
            "probabilityUnder": 2.6377039176103898e-8,
            "probabilityOver": 0.9999999736229608,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 1.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 4.13018714949573e-7,
            "probabilityOver": 0.9999995869812851,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 2,
            "occurrences": 0,
            "probabilityEqual": 0.00000289213003462396,
            "probabilityUnder": 4.1301990945685804e-7,
            "probabilityOver": 0.9999995869800905,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 2.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.000003305148749573533,
            "probabilityOver": 0.9999966948512504,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 3,
            "occurrences": 0,
            "probabilityEqual": 0.000014713467459322,
            "probabilityUnder": 0.0000033051973804876372,
            "probabilityOver": 0.9999966948026195,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 3.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.000018018616208895534,
            "probabilityOver": 0.9999819813837911,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 4,
            "occurrences": 0,
            "probabilityEqual": 0.0000572509619393978,
            "probabilityUnder": 0.000018019647851068817,
            "probabilityOver": 0.9999819803521489,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 4.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.00007526957814829333,
            "probabilityOver": 0.9999247304218517,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 5,
            "occurrences": 0,
            "probabilityEqual": 0.000181671280911624,
            "probabilityUnder": 0.00007528325495365196,
            "probabilityOver": 0.9999247167450463,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 5.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0002569408590599173,
            "probabilityOver": 0.9997430591409401,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 6,
            "occurrences": 0,
            "probabilityEqual": 0.000489549837905916,
            "probabilityUnder": 0.0002570667060241825,
            "probabilityOver": 0.9997429332939758,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 6.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0007464906969658333,
            "probabilityOver": 0.9992535093030341,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 7,
            "occurrences": 0,
            "probabilityEqual": 0.00115185445954506,
            "probabilityUnder": 0.0007473515371667667,
            "probabilityOver": 0.9992526484628332,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 7.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0018983451565108933,
            "probabilityOver": 0.9981016548434891,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 8,
            "occurrences": 0,
            "probabilityEqual": 0.0024148890583414,
            "probabilityUnder": 0.0019029405468160736,
            "probabilityOver": 0.9980970594531839,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 8.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.004313234214852293,
            "probabilityOver": 0.9956867657851477,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 9,
            "occurrences": 0,
            "probabilityEqual": 0.00458135817496519,
            "probabilityUnder": 0.004333085632135903,
            "probabilityOver": 0.9956669143678641,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 9.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.008894592389817484,
            "probabilityOver": 0.9911054076101825,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 10,
            "occurrences": 0,
            "probabilityEqual": 0.00796063937732124,
            "probabilityUnder": 0.008965967221537023,
            "probabilityOver": 0.991034032778463,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 10.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.016855231767138722,
            "probabilityOver": 0.9831447682328612,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 11,
            "occurrences": 0,
            "probabilityEqual": 0.012793574580077,
            "probabilityUnder": 0.017073664973330273,
            "probabilityOver": 0.9829263350266697,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 11.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.029648806347215725,
            "probabilityOver": 0.9703511936527843,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 12,
            "occurrences": 0,
            "probabilityEqual": 0.0191691777329494,
            "probabilityUnder": 0.03022825718168882,
            "probabilityOver": 0.9697717428183111,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 12.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.048817984080165126,
            "probabilityOver": 0.9511820159198349,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 13,
            "occurrences": 0,
            "probabilityEqual": 0.0269579344868223,
            "probabilityUnder": 0.05017047649879222,
            "probabilityOver": 0.9498295235012078,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 13.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.07577591856698743,
            "probabilityOver": 0.9242240814330126,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 14,
            "occurrences": 0,
            "probabilityEqual": 0.0357849325646267,
            "probabilityUnder": 0.07858819170762057,
            "probabilityOver": 0.9214118082923795,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 14.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.11156085113161412,
            "probabilityOver": 0.8884391488683859,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 15,
            "occurrences": 0,
            "probabilityEqual": 0.0450558326840942,
            "probabilityUnder": 0.11682447513678419,
            "probabilityOver": 0.8831755248632158,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 15.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1566166838157083,
            "probabilityOver": 0.8433833161842916,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 16,
            "occurrences": 0,
            "probabilityEqual": 0.0540334268193944,
            "probabilityUnder": 0.16556259835812062,
            "probabilityOver": 0.8344374016418794,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 16.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.21065011063510272,
            "probabilityOver": 0.7893498893648973,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 17,
            "occurrences": 0,
            "probabilityEqual": 0.0619479410645398,
            "probabilityUnder": 0.22456121558344755,
            "probabilityOver": 0.7754387844165525,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 17.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2725980516996425,
            "probabilityOver": 0.7274019483003574,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 18,
            "occurrences": 0,
            "probabilityEqual": 0.0681153815715067,
            "probabilityUnder": 0.2925233943225128,
            "probabilityOver": 0.7074766056774872,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 18.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3407134332711492,
            "probabilityOver": 0.6592865667288508,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 19,
            "occurrences": 0,
            "probabilityEqual": 0.0720375332468993,
            "probabilityUnder": 0.3671629462162304,
            "probabilityOver": 0.6328370537837695,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 19.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.41275096651804855,
            "probabilityOver": 0.5872490334819515,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 20,
            "occurrences": 0,
            "probabilityEqual": 0.0734639699796959,
            "probabilityUnder": 0.44547751317237333,
            "probabilityOver": 0.5545224868276266,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 20.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.48621493649774444,
            "probabilityOver": 0.5137850635022556,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 21,
            "occurrences": 0,
            "probabilityEqual": 0.0724075335673209,
            "probabilityUnder": 0.5241686991784468,
            "probabilityOver": 0.4758313008215533,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 21.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5586224700650653,
            "probabilityOver": 0.4413775299349347,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 22,
            "occurrences": 0,
            "probabilityEqual": 0.0691162820415424,
            "probabilityUnder": 0.6000990878755438,
            "probabilityOver": 0.3999009121244563,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 22.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6277387521066077,
            "probabilityOver": 0.37226124789339227,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 23,
            "occurrences": 0,
            "probabilityEqual": 0.0640136583586943,
            "probabilityUnder": 0.6706708465487133,
            "probabilityOver": 0.32932915345128666,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 23.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.691752410465302,
            "probabilityOver": 0.308247589534698,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 24,
            "occurrences": 0,
            "probabilityEqual": 0.0576228921727692,
            "probabilityUnder": 0.7340505246994214,
            "probabilityOver": 0.26594947530057855,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 24.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7493753026380712,
            "probabilityOver": 0.25062469736192877,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 25,
            "occurrences": 0,
            "probabilityEqual": 0.0504913932170446,
            "probabilityUnder": 0.7892243390789696,
            "probabilityOver": 0.2107756609210304,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 25.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7998666958551158,
            "probabilityOver": 0.20013330414488417,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 26,
            "occurrences": 0,
            "probabilityEqual": 0.0431273168113082,
            "probabilityUnder": 0.8359175780728031,
            "probabilityOver": 0.16408242192719694,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 26.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.842994012666424,
            "probabilityOver": 0.15700598733357599,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 27,
            "occurrences": 0,
            "probabilityEqual": 0.0359553000137088,
            "probabilityUnder": 0.8744345699721304,
            "probabilityOver": 0.1255654300278696,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 27.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8789493126801329,
            "probabilityOver": 0.12105068731986718,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 28,
            "occurrences": 0,
            "probabilityEqual": 0.0292931964865617,
            "probabilityUnder": 0.9054735266084543,
            "probabilityOver": 0.09452647339154577,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 28.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9082425091666946,
            "probabilityOver": 0.09175749083330548,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 29,
            "occurrences": 0,
            "probabilityEqual": 0.023347595862889,
            "probabilityUnder": 0.9299547160477655,
            "probabilityOver": 0.07004528395223455,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 29.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9315901050295835,
            "probabilityOver": 0.06840989497041648,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 30,
            "occurrences": 0,
            "probabilityEqual": 0.0182234959500418,
            "probabilityUnder": 0.9488820532846843,
            "probabilityOver": 0.051117946715315686,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 30.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9498136009796253,
            "probabilityOver": 0.050186399020374674,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 31,
            "occurrences": 0,
            "probabilityEqual": 0.0139426692414582,
            "probabilityUnder": 0.9632437905501545,
            "probabilityOver": 0.03675620944984543,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 31.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9637562702210836,
            "probabilityOver": 0.036243729778916475,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 32,
            "occurrences": 0,
            "probabilityEqual": 0.0104656595021957,
            "probabilityUnder": 0.9739492918823286,
            "probabilityOver": 0.02605070811767141,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 32.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9742219297232793,
            "probabilityOver": 0.02577807027672078,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 33,
            "occurrences": 0,
            "probabilityEqual": 0.00771346287909504,
            "probabilityUnder": 0.9817949687697671,
            "probabilityOver": 0.018205031230232906,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 33.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9819353926023743,
            "probabilityOver": 0.018064607397625738,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 34,
            "occurrences": 0,
            "probabilityEqual": 0.0055863266937957,
            "probabilityUnder": 0.9874516199457087,
            "probabilityOver": 0.012548380054291217,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 34.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9875217192961699,
            "probabilityOver": 0.012478280703830037,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 35,
            "occurrences": 0,
            "probabilityEqual": 0.00397839530940234,
            "probabilityUnder": 0.9914661636309906,
            "probabilityOver": 0.008533836369009371,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 35.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9915001146055723,
            "probabilityOver": 0.008499885394427698,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 36,
            "occurrences": 0,
            "probabilityEqual": 0.00278795092699836,
            "probabilityUnder": 0.9942720964184708,
            "probabilityOver": 0.005727903581529218,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 36.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9942880655325707,
            "probabilityOver": 0.005711934467429337,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 37,
            "occurrences": 0,
            "probabilityEqual": 0.00192367145802755,
            "probabilityUnder": 0.9962044355716403,
            "probabilityOver": 0.003795564428359727,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 37.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9962117369905982,
            "probabilityOver": 0.0037882630094017867,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 38,
            "occurrences": 0,
            "probabilityEqual": 0.00130768108677492,
            "probabilityUnder": 0.9975161700198854,
            "probabilityOver": 0.002483829980114627,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 38.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9975194180773731,
            "probabilityOver": 0.0024805819226268668,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 39,
            "occurrences": 0,
            "probabilityEqual": 0.00087627304496076,
            "probabilityUnder": 0.9983942840767525,
            "probabilityOver": 0.0016057159232475127,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 39.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9983956911223338,
            "probabilityOver": 0.0016043088776661067,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 40,
            "occurrences": 0,
            "probabilityEqual": 0.00057912373328306,
            "probabilityUnder": 0.9989742208025386,
            "probabilityOver": 0.0010257791974614045,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 40.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9989748148556169,
            "probabilityOver": 0.0010251851443830466,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 41,
            "occurrences": 0,
            "probabilityEqual": 0.000377669937814891,
            "probabilityUnder": 0.9993522401540111,
            "probabilityOver": 0.0006477598459889093,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 41.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9993524847934319,
            "probabilityOver": 0.0006475152065681557,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 42,
            "occurrences": 0,
            "probabilityEqual": 0.000243145166719261,
            "probabilityUnder": 0.9995955316156183,
            "probabilityOver": 0.0004044683843816478,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 42.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.999595629960151,
            "probabilityOver": 0.00040437003984889467,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 43,
            "occurrences": 0,
            "probabilityEqual": 0.000154604856336176,
            "probabilityUnder": 0.999750196195606,
            "probabilityOver": 0.00024980380439400924,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 43.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9997502348164873,
            "probabilityOver": 0.0002497651835127187,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 44,
            "occurrences": 0,
            "probabilityEqual": 0.0000971330106054059,
            "probabilityUnder": 0.99984735300003,
            "probabilityOver": 0.00015264699996997975,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 44.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9998473678270927,
            "probabilityOver": 0.00015263217290731277,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 45,
            "occurrences": 0,
            "probabilityEqual": 0.000060321113214307,
            "probabilityUnder": 0.9999076833716652,
            "probabilityOver": 0.00009231662833479511,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 45.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.999907688940307,
            "probabilityOver": 0.00009231105969300576,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 46,
            "occurrences": 0,
            "probabilityEqual": 0.0000370420000177567,
            "probabilityUnder": 0.9999447288929724,
            "probabilityOver": 0.00005527110702759656,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 46.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999447309403248,
            "probabilityOver": 0.000055269059675249065,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 47,
            "occurrences": 0,
            "probabilityEqual": 0.0000225007887533007,
            "probabilityUnder": 0.9999672309917496,
            "probabilityOver": 0.000032769008250480666,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 47.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999672317290781,
            "probabilityOver": 0.00003276827092194837,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 48,
            "occurrences": 0,
            "probabilityEqual": 0.0000135246907890759,
            "probabilityUnder": 0.9999807561596001,
            "probabilityOver": 0.000019243840399863468,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 48.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999807564198672,
            "probabilityOver": 0.000019243580132872468,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 49,
            "occurrences": 0,
            "probabilityEqual": 0.00000804681820129204,
            "probabilityUnder": 0.9999888031479693,
            "probabilityOver": 0.000011196852030613144,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 49.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999888032380684,
            "probabilityOver": 0.000011196761931580428,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 50,
            "occurrences": 0,
            "probabilityEqual": 0.00000474048300437121,
            "probabilityUnder": 0.9999935436904668,
            "probabilityOver": 0.000006456309533234831,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 50.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999935437210727,
            "probabilityOver": 0.000006456278927209217,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 51,
            "occurrences": 0,
            "probabilityEqual": 0.00000276599034312673,
            "probabilityUnder": 0.9999963097012086,
            "probabilityOver": 0.000003690298791413307,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 51.5,
            "occurrences": 0,
            "probabilityEqual": 0.000003690288584082487,
            "probabilityUnder": 0.999996309711416,
            "probabilityOver": 0,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 52,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        }
    ],
    "yardsProbabilities": [
        {
            "totalYards": 81,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": 81.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0001,
            "probabilityOver": 0.9999,
            "isWholeNumber": false
        },
        {
            "totalYards": 89,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00010001000100010001,
            "probabilityOver": 0.9998999899989999,
            "isWholeNumber": true
        },
        {
            "totalYards": 89.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0002,
            "probabilityOver": 0.9998,
            "isWholeNumber": false
        },
        {
            "totalYards": 94,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00020002000200020003,
            "probabilityOver": 0.9997999799979999,
            "isWholeNumber": true
        },
        {
            "totalYards": 94.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0003,
            "probabilityOver": 0.9997,
            "isWholeNumber": false
        },
        {
            "totalYards": 101,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.0003000600120024005,
            "probabilityOver": 0.9996999399879976,
            "isWholeNumber": true
        },
        {
            "totalYards": 101.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0005,
            "probabilityOver": 0.9995,
            "isWholeNumber": false
        },
        {
            "totalYards": 103,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.0005000500050005,
            "probabilityOver": 0.9994999499949995,
            "isWholeNumber": true
        },
        {
            "totalYards": 103.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0006,
            "probabilityOver": 0.9994,
            "isWholeNumber": false
        },
        {
            "totalYards": 104,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.000600120024004801,
            "probabilityOver": 0.9993998799759952,
            "isWholeNumber": true
        },
        {
            "totalYards": 104.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0008,
            "probabilityOver": 0.9992,
            "isWholeNumber": false
        },
        {
            "totalYards": 108,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.0008002400720216065,
            "probabilityOver": 0.9991997599279784,
            "isWholeNumber": true
        },
        {
            "totalYards": 108.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0011,
            "probabilityOver": 0.9989,
            "isWholeNumber": false
        },
        {
            "totalYards": 109,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.0011002200440088017,
            "probabilityOver": 0.9988997799559912,
            "isWholeNumber": true
        },
        {
            "totalYards": 109.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0013,
            "probabilityOver": 0.9987,
            "isWholeNumber": false
        },
        {
            "totalYards": 110,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.0013003901170351106,
            "probabilityOver": 0.9986996098829649,
            "isWholeNumber": true
        },
        {
            "totalYards": 110.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0016,
            "probabilityOver": 0.9984,
            "isWholeNumber": false
        },
        {
            "totalYards": 112,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.0016008004002001002,
            "probabilityOver": 0.9983991995998,
            "isWholeNumber": true
        },
        {
            "totalYards": 112.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0021,
            "probabilityOver": 0.9979,
            "isWholeNumber": false
        },
        {
            "totalYards": 114,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.0021010505252626313,
            "probabilityOver": 0.9978989494747373,
            "isWholeNumber": true
        },
        {
            "totalYards": 114.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0026,
            "probabilityOver": 0.9974,
            "isWholeNumber": false
        },
        {
            "totalYards": 115,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.0026002600260026003,
            "probabilityOver": 0.9973997399739974,
            "isWholeNumber": true
        },
        {
            "totalYards": 115.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0027,
            "probabilityOver": 0.9973,
            "isWholeNumber": false
        },
        {
            "totalYards": 116,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.0027002700270027003,
            "probabilityOver": 0.9972997299729973,
            "isWholeNumber": true
        },
        {
            "totalYards": 116.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0028,
            "probabilityOver": 0.9972,
            "isWholeNumber": false
        },
        {
            "totalYards": 117,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.0028002800280028,
            "probabilityOver": 0.9971997199719972,
            "isWholeNumber": true
        },
        {
            "totalYards": 117.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0029,
            "probabilityOver": 0.9971,
            "isWholeNumber": false
        },
        {
            "totalYards": 118,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.0029005801160232048,
            "probabilityOver": 0.9970994198839768,
            "isWholeNumber": true
        },
        {
            "totalYards": 118.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0031,
            "probabilityOver": 0.9969,
            "isWholeNumber": false
        },
        {
            "totalYards": 119,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.0031012404961984793,
            "probabilityOver": 0.9968987595038015,
            "isWholeNumber": true
        },
        {
            "totalYards": 119.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0035,
            "probabilityOver": 0.9965,
            "isWholeNumber": false
        },
        {
            "totalYards": 120,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.0035010503150945285,
            "probabilityOver": 0.9964989496849055,
            "isWholeNumber": true
        },
        {
            "totalYards": 120.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0038,
            "probabilityOver": 0.9962,
            "isWholeNumber": false
        },
        {
            "totalYards": 121,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.0038019009504752376,
            "probabilityOver": 0.9961980990495247,
            "isWholeNumber": true
        },
        {
            "totalYards": 121.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0043,
            "probabilityOver": 0.9957,
            "isWholeNumber": false
        },
        {
            "totalYards": 122,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.0043012903871161344,
            "probabilityOver": 0.9956987096128839,
            "isWholeNumber": true
        },
        {
            "totalYards": 122.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0046,
            "probabilityOver": 0.9954,
            "isWholeNumber": false
        },
        {
            "totalYards": 123,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.004603222255578905,
            "probabilityOver": 0.9953967777444211,
            "isWholeNumber": true
        },
        {
            "totalYards": 123.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0053,
            "probabilityOver": 0.9947,
            "isWholeNumber": false
        },
        {
            "totalYards": 124,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.005303181909145487,
            "probabilityOver": 0.9946968180908545,
            "isWholeNumber": true
        },
        {
            "totalYards": 124.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0059,
            "probabilityOver": 0.9941,
            "isWholeNumber": false
        },
        {
            "totalYards": 125,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.005902360944377751,
            "probabilityOver": 0.9940976390556222,
            "isWholeNumber": true
        },
        {
            "totalYards": 125.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0063,
            "probabilityOver": 0.9937,
            "isWholeNumber": false
        },
        {
            "totalYards": 126,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.0063050440352281825,
            "probabilityOver": 0.9936949559647719,
            "isWholeNumber": true
        },
        {
            "totalYards": 126.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0071,
            "probabilityOver": 0.9929,
            "isWholeNumber": false
        },
        {
            "totalYards": 127,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.00710568454763811,
            "probabilityOver": 0.9928943154523618,
            "isWholeNumber": true
        },
        {
            "totalYards": 127.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0079,
            "probabilityOver": 0.9921,
            "isWholeNumber": false
        },
        {
            "totalYards": 128,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.007906325060048038,
            "probabilityOver": 0.9920936749399519,
            "isWholeNumber": true
        },
        {
            "totalYards": 128.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0087,
            "probabilityOver": 0.9913,
            "isWholeNumber": false
        },
        {
            "totalYards": 129,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.008705223133880328,
            "probabilityOver": 0.9912947768661197,
            "isWholeNumber": true
        },
        {
            "totalYards": 129.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0093,
            "probabilityOver": 0.9907,
            "isWholeNumber": false
        },
        {
            "totalYards": 130,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.009303721488595438,
            "probabilityOver": 0.9906962785114045,
            "isWholeNumber": true
        },
        {
            "totalYards": 130.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0097,
            "probabilityOver": 0.9903,
            "isWholeNumber": false
        },
        {
            "totalYards": 131,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.009711653984781738,
            "probabilityOver": 0.9902883460152183,
            "isWholeNumber": true
        },
        {
            "totalYards": 131.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0109,
            "probabilityOver": 0.9891,
            "isWholeNumber": false
        },
        {
            "totalYards": 132,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.010908726981585268,
            "probabilityOver": 0.9890912730184147,
            "isWholeNumber": true
        },
        {
            "totalYards": 132.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0117,
            "probabilityOver": 0.9883,
            "isWholeNumber": false
        },
        {
            "totalYards": 133,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.011712884172589848,
            "probabilityOver": 0.9882871158274101,
            "isWholeNumber": true
        },
        {
            "totalYards": 133.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0128,
            "probabilityOver": 0.9872,
            "isWholeNumber": false
        },
        {
            "totalYards": 134,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.012810248198558846,
            "probabilityOver": 0.9871897518014412,
            "isWholeNumber": true
        },
        {
            "totalYards": 134.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0136,
            "probabilityOver": 0.9864,
            "isWholeNumber": false
        },
        {
            "totalYards": 135,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.013613613613613613,
            "probabilityOver": 0.9863863863863864,
            "isWholeNumber": true
        },
        {
            "totalYards": 135.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0146,
            "probabilityOver": 0.9854,
            "isWholeNumber": false
        },
        {
            "totalYards": 136,
            "total": null,
            "occurrences": 15,
            "probabilityEqual": 0.0015,
            "probabilityUnder": 0.014621932899349023,
            "probabilityOver": 0.985378067100651,
            "isWholeNumber": true
        },
        {
            "totalYards": 136.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0161,
            "probabilityOver": 0.9839,
            "isWholeNumber": false
        },
        {
            "totalYards": 137,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.016116116116116116,
            "probabilityOver": 0.9838838838838839,
            "isWholeNumber": true
        },
        {
            "totalYards": 137.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0171,
            "probabilityOver": 0.9829,
            "isWholeNumber": false
        },
        {
            "totalYards": 138,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.017117117117117116,
            "probabilityOver": 0.9828828828828828,
            "isWholeNumber": true
        },
        {
            "totalYards": 138.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0181,
            "probabilityOver": 0.9819,
            "isWholeNumber": false
        },
        {
            "totalYards": 139,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.018116304674206787,
            "probabilityOver": 0.9818836953257932,
            "isWholeNumber": true
        },
        {
            "totalYards": 139.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.019,
            "probabilityOver": 0.981,
            "isWholeNumber": false
        },
        {
            "totalYards": 140,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.019024732151797338,
            "probabilityOver": 0.9809752678482027,
            "isWholeNumber": true
        },
        {
            "totalYards": 140.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0203,
            "probabilityOver": 0.9797,
            "isWholeNumber": false
        },
        {
            "totalYards": 141,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.020324389267120546,
            "probabilityOver": 0.9796756107328795,
            "isWholeNumber": true
        },
        {
            "totalYards": 141.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0215,
            "probabilityOver": 0.9785,
            "isWholeNumber": false
        },
        {
            "totalYards": 142,
            "total": null,
            "occurrences": 14,
            "probabilityEqual": 0.0014,
            "probabilityUnder": 0.02153014219907871,
            "probabilityOver": 0.9784698578009213,
            "isWholeNumber": true
        },
        {
            "totalYards": 142.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0229,
            "probabilityOver": 0.9771,
            "isWholeNumber": false
        },
        {
            "totalYards": 143,
            "total": null,
            "occurrences": 15,
            "probabilityEqual": 0.0015,
            "probabilityUnder": 0.022934401602403606,
            "probabilityOver": 0.9770655983975964,
            "isWholeNumber": true
        },
        {
            "totalYards": 143.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0244,
            "probabilityOver": 0.9756,
            "isWholeNumber": false
        },
        {
            "totalYards": 144,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.024448897795591184,
            "probabilityOver": 0.9755511022044088,
            "isWholeNumber": true
        },
        {
            "totalYards": 144.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0264,
            "probabilityOver": 0.9736,
            "isWholeNumber": false
        },
        {
            "totalYards": 145,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.026444956425924072,
            "probabilityOver": 0.973555043574076,
            "isWholeNumber": true
        },
        {
            "totalYards": 145.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0281,
            "probabilityOver": 0.9719,
            "isWholeNumber": false
        },
        {
            "totalYards": 146,
            "total": null,
            "occurrences": 26,
            "probabilityEqual": 0.0026,
            "probabilityUnder": 0.02817325045117305,
            "probabilityOver": 0.971826749548827,
            "isWholeNumber": true
        },
        {
            "totalYards": 146.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0307,
            "probabilityOver": 0.9693,
            "isWholeNumber": false
        },
        {
            "totalYards": 147,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.030761523046092185,
            "probabilityOver": 0.9692384769539079,
            "isWholeNumber": true
        },
        {
            "totalYards": 147.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0327,
            "probabilityOver": 0.9673,
            "isWholeNumber": false
        },
        {
            "totalYards": 148,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.032775383381778087,
            "probabilityOver": 0.9672246166182219,
            "isWholeNumber": true
        },
        {
            "totalYards": 148.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.035,
            "probabilityOver": 0.965,
            "isWholeNumber": false
        },
        {
            "totalYards": 149,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.03509827517047734,
            "probabilityOver": 0.9649017248295226,
            "isWholeNumber": true
        },
        {
            "totalYards": 149.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0378,
            "probabilityOver": 0.9622,
            "isWholeNumber": false
        },
        {
            "totalYards": 150,
            "total": null,
            "occurrences": 31,
            "probabilityEqual": 0.0031,
            "probabilityUnder": 0.037917544387601566,
            "probabilityOver": 0.9620824556123985,
            "isWholeNumber": true
        },
        {
            "totalYards": 150.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0409,
            "probabilityOver": 0.9591,
            "isWholeNumber": false
        },
        {
            "totalYards": 151,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.04099428685977749,
            "probabilityOver": 0.9590057131402225,
            "isWholeNumber": true
        },
        {
            "totalYards": 151.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0432,
            "probabilityOver": 0.9568,
            "isWholeNumber": false
        },
        {
            "totalYards": 152,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.04332129963898917,
            "probabilityOver": 0.9566787003610109,
            "isWholeNumber": true
        },
        {
            "totalYards": 152.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.046,
            "probabilityOver": 0.954,
            "isWholeNumber": false
        },
        {
            "totalYards": 153,
            "total": null,
            "occurrences": 30,
            "probabilityEqual": 0.003,
            "probabilityUnder": 0.04613841524573721,
            "probabilityOver": 0.9538615847542627,
            "isWholeNumber": true
        },
        {
            "totalYards": 153.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.049,
            "probabilityOver": 0.951,
            "isWholeNumber": false
        },
        {
            "totalYards": 154,
            "total": null,
            "occurrences": 38,
            "probabilityEqual": 0.0038,
            "probabilityUnder": 0.04918691025898414,
            "probabilityOver": 0.9508130897410159,
            "isWholeNumber": true
        },
        {
            "totalYards": 154.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0528,
            "probabilityOver": 0.9472,
            "isWholeNumber": false
        },
        {
            "totalYards": 155,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.052953565339484504,
            "probabilityOver": 0.9470464346605155,
            "isWholeNumber": true
        },
        {
            "totalYards": 155.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0557,
            "probabilityOver": 0.9443,
            "isWholeNumber": false
        },
        {
            "totalYards": 156,
            "total": null,
            "occurrences": 32,
            "probabilityEqual": 0.0032,
            "probabilityUnder": 0.05587881219903692,
            "probabilityOver": 0.9441211878009631,
            "isWholeNumber": true
        },
        {
            "totalYards": 156.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0589,
            "probabilityOver": 0.9411,
            "isWholeNumber": false
        },
        {
            "totalYards": 157,
            "total": null,
            "occurrences": 30,
            "probabilityEqual": 0.003,
            "probabilityUnder": 0.059077231695085254,
            "probabilityOver": 0.9409227683049147,
            "isWholeNumber": true
        },
        {
            "totalYards": 157.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0619,
            "probabilityOver": 0.9381,
            "isWholeNumber": false
        },
        {
            "totalYards": 158,
            "total": null,
            "occurrences": 35,
            "probabilityEqual": 0.0035,
            "probabilityUnder": 0.062117410938284,
            "probabilityOver": 0.937882589061716,
            "isWholeNumber": true
        },
        {
            "totalYards": 158.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0654,
            "probabilityOver": 0.9346,
            "isWholeNumber": false
        },
        {
            "totalYards": 159,
            "total": null,
            "occurrences": 38,
            "probabilityEqual": 0.0038,
            "probabilityUnder": 0.06564946797831761,
            "probabilityOver": 0.9343505320216824,
            "isWholeNumber": true
        },
        {
            "totalYards": 159.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0692,
            "probabilityOver": 0.9308,
            "isWholeNumber": false
        },
        {
            "totalYards": 160,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.06939430405134377,
            "probabilityOver": 0.9306056959486563,
            "isWholeNumber": true
        },
        {
            "totalYards": 160.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.072,
            "probabilityOver": 0.928,
            "isWholeNumber": false
        },
        {
            "totalYards": 161,
            "total": null,
            "occurrences": 46,
            "probabilityEqual": 0.0046,
            "probabilityUnder": 0.07233273056057866,
            "probabilityOver": 0.9276672694394213,
            "isWholeNumber": true
        },
        {
            "totalYards": 161.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0766,
            "probabilityOver": 0.9234,
            "isWholeNumber": false
        },
        {
            "totalYards": 162,
            "total": null,
            "occurrences": 34,
            "probabilityEqual": 0.0034,
            "probabilityUnder": 0.07686132851695765,
            "probabilityOver": 0.9231386714830423,
            "isWholeNumber": true
        },
        {
            "totalYards": 162.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.08,
            "probabilityOver": 0.92,
            "isWholeNumber": false
        },
        {
            "totalYards": 163,
            "total": null,
            "occurrences": 45,
            "probabilityEqual": 0.0045,
            "probabilityUnder": 0.0803616273229533,
            "probabilityOver": 0.9196383726770467,
            "isWholeNumber": true
        },
        {
            "totalYards": 163.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0845,
            "probabilityOver": 0.9155,
            "isWholeNumber": false
        },
        {
            "totalYards": 164,
            "total": null,
            "occurrences": 49,
            "probabilityEqual": 0.0049,
            "probabilityUnder": 0.08491608883529293,
            "probabilityOver": 0.9150839111647071,
            "isWholeNumber": true
        },
        {
            "totalYards": 164.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0894,
            "probabilityOver": 0.9106,
            "isWholeNumber": false
        },
        {
            "totalYards": 165,
            "total": null,
            "occurrences": 40,
            "probabilityEqual": 0.004,
            "probabilityUnder": 0.08975903614457831,
            "probabilityOver": 0.9102409638554216,
            "isWholeNumber": true
        },
        {
            "totalYards": 165.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0934,
            "probabilityOver": 0.9066,
            "isWholeNumber": false
        },
        {
            "totalYards": 166,
            "total": null,
            "occurrences": 55,
            "probabilityEqual": 0.0055,
            "probabilityUnder": 0.0939165409753645,
            "probabilityOver": 0.9060834590246355,
            "isWholeNumber": true
        },
        {
            "totalYards": 166.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0989,
            "probabilityOver": 0.9011,
            "isWholeNumber": false
        },
        {
            "totalYards": 167,
            "total": null,
            "occurrences": 44,
            "probabilityEqual": 0.0044,
            "probabilityUnder": 0.0993370831659301,
            "probabilityOver": 0.90066291683407,
            "isWholeNumber": true
        },
        {
            "totalYards": 167.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1033,
            "probabilityOver": 0.8967,
            "isWholeNumber": false
        },
        {
            "totalYards": 168,
            "total": null,
            "occurrences": 40,
            "probabilityEqual": 0.004,
            "probabilityUnder": 0.10371485943775101,
            "probabilityOver": 0.896285140562249,
            "isWholeNumber": true
        },
        {
            "totalYards": 168.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1073,
            "probabilityOver": 0.8927,
            "isWholeNumber": false
        },
        {
            "totalYards": 169,
            "total": null,
            "occurrences": 59,
            "probabilityEqual": 0.0059,
            "probabilityUnder": 0.10793682728095765,
            "probabilityOver": 0.8920631727190423,
            "isWholeNumber": true
        },
        {
            "totalYards": 169.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1132,
            "probabilityOver": 0.8868,
            "isWholeNumber": false
        },
        {
            "totalYards": 170,
            "total": null,
            "occurrences": 41,
            "probabilityEqual": 0.0041,
            "probabilityUnder": 0.1136660307259765,
            "probabilityOver": 0.8863339692740235,
            "isWholeNumber": true
        },
        {
            "totalYards": 170.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1173,
            "probabilityOver": 0.8827,
            "isWholeNumber": false
        },
        {
            "totalYards": 171,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.11793685903880957,
            "probabilityOver": 0.8820631409611904,
            "isWholeNumber": true
        },
        {
            "totalYards": 171.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1227,
            "probabilityOver": 0.8773,
            "isWholeNumber": false
        },
        {
            "totalYards": 172,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.12336617735773175,
            "probabilityOver": 0.8766338226422683,
            "isWholeNumber": true
        },
        {
            "totalYards": 172.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1281,
            "probabilityOver": 0.8719,
            "isWholeNumber": false
        },
        {
            "totalYards": 173,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.12897704389850986,
            "probabilityOver": 0.8710229561014902,
            "isWholeNumber": true
        },
        {
            "totalYards": 173.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1349,
            "probabilityOver": 0.8651,
            "isWholeNumber": false
        },
        {
            "totalYards": 174,
            "total": null,
            "occurrences": 64,
            "probabilityEqual": 0.0064,
            "probabilityUnder": 0.13576892109500804,
            "probabilityOver": 0.864231078904992,
            "isWholeNumber": true
        },
        {
            "totalYards": 174.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1413,
            "probabilityOver": 0.8587,
            "isWholeNumber": false
        },
        {
            "totalYards": 175,
            "total": null,
            "occurrences": 73,
            "probabilityEqual": 0.0073,
            "probabilityUnder": 0.14233907524932005,
            "probabilityOver": 0.85766092475068,
            "isWholeNumber": true
        },
        {
            "totalYards": 175.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1486,
            "probabilityOver": 0.8514,
            "isWholeNumber": false
        },
        {
            "totalYards": 176,
            "total": null,
            "occurrences": 78,
            "probabilityEqual": 0.0078,
            "probabilityUnder": 0.149768191896795,
            "probabilityOver": 0.850231808103205,
            "isWholeNumber": true
        },
        {
            "totalYards": 176.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1564,
            "probabilityOver": 0.8436,
            "isWholeNumber": false
        },
        {
            "totalYards": 177,
            "total": null,
            "occurrences": 58,
            "probabilityEqual": 0.0058,
            "probabilityUnder": 0.15731241198953932,
            "probabilityOver": 0.8426875880104606,
            "isWholeNumber": true
        },
        {
            "totalYards": 177.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1622,
            "probabilityOver": 0.8378,
            "isWholeNumber": false
        },
        {
            "totalYards": 178,
            "total": null,
            "occurrences": 48,
            "probabilityEqual": 0.0048,
            "probabilityUnder": 0.1629823151125402,
            "probabilityOver": 0.8370176848874598,
            "isWholeNumber": true
        },
        {
            "totalYards": 178.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.167,
            "probabilityOver": 0.833,
            "isWholeNumber": false
        },
        {
            "totalYards": 179,
            "total": null,
            "occurrences": 51,
            "probabilityEqual": 0.0051,
            "probabilityUnder": 0.167856065936275,
            "probabilityOver": 0.832143934063725,
            "isWholeNumber": true
        },
        {
            "totalYards": 179.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1721,
            "probabilityOver": 0.8279,
            "isWholeNumber": false
        },
        {
            "totalYards": 180,
            "total": null,
            "occurrences": 62,
            "probabilityEqual": 0.0062,
            "probabilityUnder": 0.17317367679613604,
            "probabilityOver": 0.826826323203864,
            "isWholeNumber": true
        },
        {
            "totalYards": 180.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1783,
            "probabilityOver": 0.8217,
            "isWholeNumber": false
        },
        {
            "totalYards": 181,
            "total": null,
            "occurrences": 69,
            "probabilityEqual": 0.0069,
            "probabilityUnder": 0.1795388178431175,
            "probabilityOver": 0.8204611821568825,
            "isWholeNumber": true
        },
        {
            "totalYards": 181.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1852,
            "probabilityOver": 0.8148,
            "isWholeNumber": false
        },
        {
            "totalYards": 182,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.1862055097526644,
            "probabilityOver": 0.8137944902473356,
            "isWholeNumber": true
        },
        {
            "totalYards": 182.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1906,
            "probabilityOver": 0.8094,
            "isWholeNumber": false
        },
        {
            "totalYards": 183,
            "total": null,
            "occurrences": 73,
            "probabilityEqual": 0.0073,
            "probabilityUnder": 0.192001611765891,
            "probabilityOver": 0.807998388234109,
            "isWholeNumber": true
        },
        {
            "totalYards": 183.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1979,
            "probabilityOver": 0.8021,
            "isWholeNumber": false
        },
        {
            "totalYards": 184,
            "total": null,
            "occurrences": 87,
            "probabilityEqual": 0.0087,
            "probabilityUnder": 0.1996368405124584,
            "probabilityOver": 0.8003631594875417,
            "isWholeNumber": true
        },
        {
            "totalYards": 184.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2066,
            "probabilityOver": 0.7934,
            "isWholeNumber": false
        },
        {
            "totalYards": 185,
            "total": null,
            "occurrences": 57,
            "probabilityEqual": 0.0057,
            "probabilityUnder": 0.207784370914211,
            "probabilityOver": 0.792215629085789,
            "isWholeNumber": true
        },
        {
            "totalYards": 185.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2123,
            "probabilityOver": 0.7877,
            "isWholeNumber": false
        },
        {
            "totalYards": 186,
            "total": null,
            "occurrences": 79,
            "probabilityEqual": 0.0079,
            "probabilityUnder": 0.21399052514867453,
            "probabilityOver": 0.7860094748513254,
            "isWholeNumber": true
        },
        {
            "totalYards": 186.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2202,
            "probabilityOver": 0.7798,
            "isWholeNumber": false
        },
        {
            "totalYards": 187,
            "total": null,
            "occurrences": 99,
            "probabilityEqual": 0.0099,
            "probabilityUnder": 0.2224017775982224,
            "probabilityOver": 0.7775982224017776,
            "isWholeNumber": true
        },
        {
            "totalYards": 187.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2301,
            "probabilityOver": 0.7699,
            "isWholeNumber": false
        },
        {
            "totalYards": 188,
            "total": null,
            "occurrences": 65,
            "probabilityEqual": 0.0065,
            "probabilityUnder": 0.23160543532964267,
            "probabilityOver": 0.7683945646703573,
            "isWholeNumber": true
        },
        {
            "totalYards": 188.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2366,
            "probabilityOver": 0.7634,
            "isWholeNumber": false
        },
        {
            "totalYards": 189,
            "total": null,
            "occurrences": 74,
            "probabilityEqual": 0.0074,
            "probabilityUnder": 0.2383638928067701,
            "probabilityOver": 0.7616361071932299,
            "isWholeNumber": true
        },
        {
            "totalYards": 189.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.244,
            "probabilityOver": 0.756,
            "isWholeNumber": false
        },
        {
            "totalYards": 190,
            "total": null,
            "occurrences": 80,
            "probabilityEqual": 0.008,
            "probabilityUnder": 0.24596774193548387,
            "probabilityOver": 0.7540322580645161,
            "isWholeNumber": true
        },
        {
            "totalYards": 190.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.252,
            "probabilityOver": 0.748,
            "isWholeNumber": false
        },
        {
            "totalYards": 191,
            "total": null,
            "occurrences": 86,
            "probabilityEqual": 0.0086,
            "probabilityUnder": 0.25418599959653015,
            "probabilityOver": 0.7458140004034698,
            "isWholeNumber": true
        },
        {
            "totalYards": 191.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2606,
            "probabilityOver": 0.7394,
            "isWholeNumber": false
        },
        {
            "totalYards": 192,
            "total": null,
            "occurrences": 75,
            "probabilityEqual": 0.0075,
            "probabilityUnder": 0.2625692695214106,
            "probabilityOver": 0.7374307304785894,
            "isWholeNumber": true
        },
        {
            "totalYards": 192.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2681,
            "probabilityOver": 0.7319,
            "isWholeNumber": false
        },
        {
            "totalYards": 193,
            "total": null,
            "occurrences": 94,
            "probabilityEqual": 0.0094,
            "probabilityUnder": 0.270644054108621,
            "probabilityOver": 0.729355945891379,
            "isWholeNumber": true
        },
        {
            "totalYards": 193.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2775,
            "probabilityOver": 0.7225,
            "isWholeNumber": false
        },
        {
            "totalYards": 194,
            "total": null,
            "occurrences": 95,
            "probabilityEqual": 0.0095,
            "probabilityUnder": 0.2801615345784957,
            "probabilityOver": 0.7198384654215043,
            "isWholeNumber": true
        },
        {
            "totalYards": 194.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.287,
            "probabilityOver": 0.713,
            "isWholeNumber": false
        },
        {
            "totalYards": 195,
            "total": null,
            "occurrences": 70,
            "probabilityEqual": 0.007,
            "probabilityUnder": 0.2890231621349446,
            "probabilityOver": 0.7109768378650554,
            "isWholeNumber": true
        },
        {
            "totalYards": 195.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.294,
            "probabilityOver": 0.706,
            "isWholeNumber": false
        },
        {
            "totalYards": 196,
            "total": null,
            "occurrences": 101,
            "probabilityEqual": 0.0101,
            "probabilityUnder": 0.29699969693908473,
            "probabilityOver": 0.7030003030609152,
            "isWholeNumber": true
        },
        {
            "totalYards": 196.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3041,
            "probabilityOver": 0.6959,
            "isWholeNumber": false
        },
        {
            "totalYards": 197,
            "total": null,
            "occurrences": 72,
            "probabilityEqual": 0.0072,
            "probabilityUnder": 0.3063053988718775,
            "probabilityOver": 0.6936946011281225,
            "isWholeNumber": true
        },
        {
            "totalYards": 197.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3113,
            "probabilityOver": 0.6887,
            "isWholeNumber": false
        },
        {
            "totalYards": 198,
            "total": null,
            "occurrences": 80,
            "probabilityEqual": 0.008,
            "probabilityUnder": 0.3138104838709677,
            "probabilityOver": 0.6861895161290322,
            "isWholeNumber": true
        },
        {
            "totalYards": 198.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3193,
            "probabilityOver": 0.6807,
            "isWholeNumber": false
        },
        {
            "totalYards": 199,
            "total": null,
            "occurrences": 81,
            "probabilityEqual": 0.0081,
            "probabilityUnder": 0.3219074503478173,
            "probabilityOver": 0.6780925496521827,
            "isWholeNumber": true
        },
        {
            "totalYards": 199.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3274,
            "probabilityOver": 0.6726,
            "isWholeNumber": false
        },
        {
            "totalYards": 200,
            "total": null,
            "occurrences": 76,
            "probabilityEqual": 0.0076,
            "probabilityUnder": 0.32990729544538494,
            "probabilityOver": 0.6700927045546151,
            "isWholeNumber": true
        },
        {
            "totalYards": 200.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.335,
            "probabilityOver": 0.665,
            "isWholeNumber": false
        },
        {
            "totalYards": 201,
            "total": null,
            "occurrences": 92,
            "probabilityEqual": 0.0092,
            "probabilityUnder": 0.33811061768268064,
            "probabilityOver": 0.6618893823173193,
            "isWholeNumber": true
        },
        {
            "totalYards": 201.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3442,
            "probabilityOver": 0.6558,
            "isWholeNumber": false
        },
        {
            "totalYards": 202,
            "total": null,
            "occurrences": 80,
            "probabilityEqual": 0.008,
            "probabilityUnder": 0.3469758064516129,
            "probabilityOver": 0.6530241935483871,
            "isWholeNumber": true
        },
        {
            "totalYards": 202.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3522,
            "probabilityOver": 0.6478,
            "isWholeNumber": false
        },
        {
            "totalYards": 203,
            "total": null,
            "occurrences": 84,
            "probabilityEqual": 0.0084,
            "probabilityUnder": 0.35518354175070593,
            "probabilityOver": 0.6448164582492941,
            "isWholeNumber": true
        },
        {
            "totalYards": 203.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3606,
            "probabilityOver": 0.6394,
            "isWholeNumber": false
        },
        {
            "totalYards": 204,
            "total": null,
            "occurrences": 96,
            "probabilityEqual": 0.0096,
            "probabilityUnder": 0.36409531502423265,
            "probabilityOver": 0.6359046849757674,
            "isWholeNumber": true
        },
        {
            "totalYards": 204.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3702,
            "probabilityOver": 0.6298,
            "isWholeNumber": false
        },
        {
            "totalYards": 205,
            "total": null,
            "occurrences": 89,
            "probabilityEqual": 0.0089,
            "probabilityUnder": 0.3735243668650994,
            "probabilityOver": 0.6264756331349006,
            "isWholeNumber": true
        },
        {
            "totalYards": 205.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3791,
            "probabilityOver": 0.6209,
            "isWholeNumber": false
        },
        {
            "totalYards": 206,
            "total": null,
            "occurrences": 97,
            "probabilityEqual": 0.0097,
            "probabilityUnder": 0.38281328890235283,
            "probabilityOver": 0.6171867110976472,
            "isWholeNumber": true
        },
        {
            "totalYards": 206.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3888,
            "probabilityOver": 0.6112,
            "isWholeNumber": false
        },
        {
            "totalYards": 207,
            "total": null,
            "occurrences": 95,
            "probabilityEqual": 0.0095,
            "probabilityUnder": 0.39252902574457343,
            "probabilityOver": 0.6074709742554265,
            "isWholeNumber": true
        },
        {
            "totalYards": 207.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3983,
            "probabilityOver": 0.6017,
            "isWholeNumber": false
        },
        {
            "totalYards": 208,
            "total": null,
            "occurrences": 91,
            "probabilityEqual": 0.0091,
            "probabilityUnder": 0.40195781612675346,
            "probabilityOver": 0.5980421838732466,
            "isWholeNumber": true
        },
        {
            "totalYards": 208.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4074,
            "probabilityOver": 0.5926,
            "isWholeNumber": false
        },
        {
            "totalYards": 209,
            "total": null,
            "occurrences": 97,
            "probabilityEqual": 0.0097,
            "probabilityUnder": 0.41139048773099063,
            "probabilityOver": 0.5886095122690094,
            "isWholeNumber": true
        },
        {
            "totalYards": 209.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4171,
            "probabilityOver": 0.5829,
            "isWholeNumber": false
        },
        {
            "totalYards": 210,
            "total": null,
            "occurrences": 81,
            "probabilityEqual": 0.0081,
            "probabilityUnder": 0.42050609940518197,
            "probabilityOver": 0.579493900594818,
            "isWholeNumber": true
        },
        {
            "totalYards": 210.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4252,
            "probabilityOver": 0.5748,
            "isWholeNumber": false
        },
        {
            "totalYards": 211,
            "total": null,
            "occurrences": 80,
            "probabilityEqual": 0.008,
            "probabilityUnder": 0.42862903225806454,
            "probabilityOver": 0.5713709677419355,
            "isWholeNumber": true
        },
        {
            "totalYards": 211.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4332,
            "probabilityOver": 0.5668,
            "isWholeNumber": false
        },
        {
            "totalYards": 212,
            "total": null,
            "occurrences": 73,
            "probabilityEqual": 0.0073,
            "probabilityUnder": 0.4363856149894228,
            "probabilityOver": 0.5636143850105773,
            "isWholeNumber": true
        },
        {
            "totalYards": 212.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4405,
            "probabilityOver": 0.5595,
            "isWholeNumber": false
        },
        {
            "totalYards": 213,
            "total": null,
            "occurrences": 104,
            "probabilityEqual": 0.0104,
            "probabilityUnder": 0.44512934518997577,
            "probabilityOver": 0.5548706548100243,
            "isWholeNumber": true
        },
        {
            "totalYards": 213.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4509,
            "probabilityOver": 0.5491,
            "isWholeNumber": false
        },
        {
            "totalYards": 214,
            "total": null,
            "occurrences": 103,
            "probabilityEqual": 0.0103,
            "probabilityUnder": 0.4555926038193392,
            "probabilityOver": 0.5444073961806608,
            "isWholeNumber": true
        },
        {
            "totalYards": 214.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4612,
            "probabilityOver": 0.5388,
            "isWholeNumber": false
        },
        {
            "totalYards": 215,
            "total": null,
            "occurrences": 88,
            "probabilityEqual": 0.0088,
            "probabilityUnder": 0.4652945924132365,
            "probabilityOver": 0.5347054075867635,
            "isWholeNumber": true
        },
        {
            "totalYards": 215.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.47,
            "probabilityOver": 0.53,
            "isWholeNumber": false
        },
        {
            "totalYards": 216,
            "total": null,
            "occurrences": 81,
            "probabilityEqual": 0.0081,
            "probabilityUnder": 0.4738380885169876,
            "probabilityOver": 0.5261619114830124,
            "isWholeNumber": true
        },
        {
            "totalYards": 216.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4781,
            "probabilityOver": 0.5219,
            "isWholeNumber": false
        },
        {
            "totalYards": 217,
            "total": null,
            "occurrences": 101,
            "probabilityEqual": 0.0101,
            "probabilityUnder": 0.4829780785937974,
            "probabilityOver": 0.5170219214062026,
            "isWholeNumber": true
        },
        {
            "totalYards": 217.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4882,
            "probabilityOver": 0.5118,
            "isWholeNumber": false
        },
        {
            "totalYards": 218,
            "total": null,
            "occurrences": 88,
            "probabilityEqual": 0.0088,
            "probabilityUnder": 0.49253430185633573,
            "probabilityOver": 0.5074656981436643,
            "isWholeNumber": true
        },
        {
            "totalYards": 218.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.497,
            "probabilityOver": 0.503,
            "isWholeNumber": false
        },
        {
            "totalYards": 219,
            "total": null,
            "occurrences": 87,
            "probabilityEqual": 0.0087,
            "probabilityUnder": 0.501361848078281,
            "probabilityOver": 0.49863815192171895,
            "isWholeNumber": true
        },
        {
            "totalYards": 219.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5057,
            "probabilityOver": 0.4943,
            "isWholeNumber": false
        },
        {
            "totalYards": 220,
            "total": null,
            "occurrences": 81,
            "probabilityEqual": 0.0081,
            "probabilityUnder": 0.509829619921363,
            "probabilityOver": 0.49017038007863695,
            "isWholeNumber": true
        },
        {
            "totalYards": 220.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5138,
            "probabilityOver": 0.4862,
            "isWholeNumber": false
        },
        {
            "totalYards": 221,
            "total": null,
            "occurrences": 84,
            "probabilityEqual": 0.0084,
            "probabilityUnder": 0.518152480839048,
            "probabilityOver": 0.481847519160952,
            "isWholeNumber": true
        },
        {
            "totalYards": 221.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5222,
            "probabilityOver": 0.4778,
            "isWholeNumber": false
        },
        {
            "totalYards": 222,
            "total": null,
            "occurrences": 88,
            "probabilityEqual": 0.0088,
            "probabilityUnder": 0.5268361581920904,
            "probabilityOver": 0.4731638418079096,
            "isWholeNumber": true
        },
        {
            "totalYards": 222.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.531,
            "probabilityOver": 0.469,
            "isWholeNumber": false
        },
        {
            "totalYards": 223,
            "total": null,
            "occurrences": 81,
            "probabilityEqual": 0.0081,
            "probabilityUnder": 0.535336223409618,
            "probabilityOver": 0.4646637765903821,
            "isWholeNumber": true
        },
        {
            "totalYards": 223.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5391,
            "probabilityOver": 0.4609,
            "isWholeNumber": false
        },
        {
            "totalYards": 224,
            "total": null,
            "occurrences": 62,
            "probabilityEqual": 0.0062,
            "probabilityUnder": 0.5424632722881868,
            "probabilityOver": 0.45753672771181325,
            "isWholeNumber": true
        },
        {
            "totalYards": 224.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5453,
            "probabilityOver": 0.4547,
            "isWholeNumber": false
        },
        {
            "totalYards": 225,
            "total": null,
            "occurrences": 82,
            "probabilityEqual": 0.0082,
            "probabilityUnder": 0.5498084291187739,
            "probabilityOver": 0.4501915708812261,
            "isWholeNumber": true
        },
        {
            "totalYards": 225.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5535,
            "probabilityOver": 0.4465,
            "isWholeNumber": false
        },
        {
            "totalYards": 226,
            "total": null,
            "occurrences": 99,
            "probabilityEqual": 0.0099,
            "probabilityUnder": 0.559034440965559,
            "probabilityOver": 0.44096555903444096,
            "isWholeNumber": true
        },
        {
            "totalYards": 226.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5634,
            "probabilityOver": 0.4366,
            "isWholeNumber": false
        },
        {
            "totalYards": 227,
            "total": null,
            "occurrences": 97,
            "probabilityEqual": 0.0097,
            "probabilityUnder": 0.5689185095425628,
            "probabilityOver": 0.43108149045743716,
            "isWholeNumber": true
        },
        {
            "totalYards": 227.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5731,
            "probabilityOver": 0.4269,
            "isWholeNumber": false
        },
        {
            "totalYards": 228,
            "total": null,
            "occurrences": 108,
            "probabilityEqual": 0.0108,
            "probabilityUnder": 0.579357056207036,
            "probabilityOver": 0.420642943792964,
            "isWholeNumber": true
        },
        {
            "totalYards": 228.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5839,
            "probabilityOver": 0.4161,
            "isWholeNumber": false
        },
        {
            "totalYards": 229,
            "total": null,
            "occurrences": 82,
            "probabilityEqual": 0.0082,
            "probabilityUnder": 0.5887275660415406,
            "probabilityOver": 0.41127243395845936,
            "isWholeNumber": true
        },
        {
            "totalYards": 229.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5921,
            "probabilityOver": 0.4079,
            "isWholeNumber": false
        },
        {
            "totalYards": 230,
            "total": null,
            "occurrences": 108,
            "probabilityEqual": 0.0108,
            "probabilityUnder": 0.5985644965628791,
            "probabilityOver": 0.4014355034371209,
            "isWholeNumber": true
        },
        {
            "totalYards": 230.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6029,
            "probabilityOver": 0.3971,
            "isWholeNumber": false
        },
        {
            "totalYards": 231,
            "total": null,
            "occurrences": 76,
            "probabilityEqual": 0.0076,
            "probabilityUnder": 0.6075171301894398,
            "probabilityOver": 0.39248286981056024,
            "isWholeNumber": true
        },
        {
            "totalYards": 231.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6105,
            "probabilityOver": 0.3895,
            "isWholeNumber": false
        },
        {
            "totalYards": 232,
            "total": null,
            "occurrences": 88,
            "probabilityEqual": 0.0088,
            "probabilityUnder": 0.6159200968523002,
            "probabilityOver": 0.38407990314769974,
            "isWholeNumber": true
        },
        {
            "totalYards": 232.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6193,
            "probabilityOver": 0.3807,
            "isWholeNumber": false
        },
        {
            "totalYards": 233,
            "total": null,
            "occurrences": 87,
            "probabilityEqual": 0.0087,
            "probabilityUnder": 0.6247351962070009,
            "probabilityOver": 0.3752648037929991,
            "isWholeNumber": true
        },
        {
            "totalYards": 233.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.628,
            "probabilityOver": 0.372,
            "isWholeNumber": false
        },
        {
            "totalYards": 234,
            "total": null,
            "occurrences": 78,
            "probabilityEqual": 0.0078,
            "probabilityUnder": 0.6329369078814755,
            "probabilityOver": 0.3670630921185245,
            "isWholeNumber": true
        },
        {
            "totalYards": 234.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6358,
            "probabilityOver": 0.3642,
            "isWholeNumber": false
        },
        {
            "totalYards": 235,
            "total": null,
            "occurrences": 65,
            "probabilityEqual": 0.0065,
            "probabilityUnder": 0.6399597382989431,
            "probabilityOver": 0.36004026170105685,
            "isWholeNumber": true
        },
        {
            "totalYards": 235.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6423,
            "probabilityOver": 0.3577,
            "isWholeNumber": false
        },
        {
            "totalYards": 236,
            "total": null,
            "occurrences": 84,
            "probabilityEqual": 0.0084,
            "probabilityUnder": 0.6477410246066962,
            "probabilityOver": 0.35225897539330375,
            "isWholeNumber": true
        },
        {
            "totalYards": 236.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6507,
            "probabilityOver": 0.3493,
            "isWholeNumber": false
        },
        {
            "totalYards": 237,
            "total": null,
            "occurrences": 86,
            "probabilityEqual": 0.0086,
            "probabilityUnder": 0.6563445632438976,
            "probabilityOver": 0.3436554367561025,
            "isWholeNumber": true
        },
        {
            "totalYards": 237.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6593,
            "probabilityOver": 0.3407,
            "isWholeNumber": false
        },
        {
            "totalYards": 238,
            "total": null,
            "occurrences": 67,
            "probabilityEqual": 0.0067,
            "probabilityUnder": 0.6637471056075708,
            "probabilityOver": 0.3362528943924293,
            "isWholeNumber": true
        },
        {
            "totalYards": 238.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.666,
            "probabilityOver": 0.334,
            "isWholeNumber": false
        },
        {
            "totalYards": 239,
            "total": null,
            "occurrences": 67,
            "probabilityEqual": 0.0067,
            "probabilityUnder": 0.6704922983992752,
            "probabilityOver": 0.32950770160072484,
            "isWholeNumber": true
        },
        {
            "totalYards": 239.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6727,
            "probabilityOver": 0.3273,
            "isWholeNumber": false
        },
        {
            "totalYards": 240,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.6773056786145791,
            "probabilityOver": 0.32269432138542087,
            "isWholeNumber": true
        },
        {
            "totalYards": 240.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6795,
            "probabilityOver": 0.3205,
            "isWholeNumber": false
        },
        {
            "totalYards": 241,
            "total": null,
            "occurrences": 73,
            "probabilityEqual": 0.0073,
            "probabilityUnder": 0.6844968268359021,
            "probabilityOver": 0.3155031731640979,
            "isWholeNumber": true
        },
        {
            "totalYards": 241.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6868,
            "probabilityOver": 0.3132,
            "isWholeNumber": false
        },
        {
            "totalYards": 242,
            "total": null,
            "occurrences": 61,
            "probabilityEqual": 0.0061,
            "probabilityUnder": 0.6910151926753194,
            "probabilityOver": 0.30898480732468053,
            "isWholeNumber": true
        },
        {
            "totalYards": 242.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6929,
            "probabilityOver": 0.3071,
            "isWholeNumber": false
        },
        {
            "totalYards": 243,
            "total": null,
            "occurrences": 80,
            "probabilityEqual": 0.008,
            "probabilityUnder": 0.6984879032258065,
            "probabilityOver": 0.30151209677419355,
            "isWholeNumber": true
        },
        {
            "totalYards": 243.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7009,
            "probabilityOver": 0.2991,
            "isWholeNumber": false
        },
        {
            "totalYards": 244,
            "total": null,
            "occurrences": 76,
            "probabilityEqual": 0.0076,
            "probabilityUnder": 0.7062676340185409,
            "probabilityOver": 0.2937323659814591,
            "isWholeNumber": true
        },
        {
            "totalYards": 244.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7085,
            "probabilityOver": 0.2915,
            "isWholeNumber": false
        },
        {
            "totalYards": 245,
            "total": null,
            "occurrences": 90,
            "probabilityEqual": 0.009,
            "probabilityUnder": 0.7149344096871847,
            "probabilityOver": 0.28506559031281536,
            "isWholeNumber": true
        },
        {
            "totalYards": 245.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7175,
            "probabilityOver": 0.2825,
            "isWholeNumber": false
        },
        {
            "totalYards": 246,
            "total": null,
            "occurrences": 64,
            "probabilityEqual": 0.0064,
            "probabilityUnder": 0.722121578099839,
            "probabilityOver": 0.27787842190016104,
            "isWholeNumber": true
        },
        {
            "totalYards": 246.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7239,
            "probabilityOver": 0.2761,
            "isWholeNumber": false
        },
        {
            "totalYards": 247,
            "total": null,
            "occurrences": 77,
            "probabilityEqual": 0.0077,
            "probabilityUnder": 0.7295172830797138,
            "probabilityOver": 0.2704827169202862,
            "isWholeNumber": true
        },
        {
            "totalYards": 247.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7316,
            "probabilityOver": 0.2684,
            "isWholeNumber": false
        },
        {
            "totalYards": 248,
            "total": null,
            "occurrences": 65,
            "probabilityEqual": 0.0065,
            "probabilityUnder": 0.736386512330146,
            "probabilityOver": 0.26361348766985404,
            "isWholeNumber": true
        },
        {
            "totalYards": 248.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7381,
            "probabilityOver": 0.2619,
            "isWholeNumber": false
        },
        {
            "totalYards": 249,
            "total": null,
            "occurrences": 60,
            "probabilityEqual": 0.006,
            "probabilityUnder": 0.7425553319919517,
            "probabilityOver": 0.25744466800804827,
            "isWholeNumber": true
        },
        {
            "totalYards": 249.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7441,
            "probabilityOver": 0.2559,
            "isWholeNumber": false
        },
        {
            "totalYards": 250,
            "total": null,
            "occurrences": 60,
            "probabilityEqual": 0.006,
            "probabilityUnder": 0.7485915492957746,
            "probabilityOver": 0.25140845070422535,
            "isWholeNumber": true
        },
        {
            "totalYards": 250.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7501,
            "probabilityOver": 0.2499,
            "isWholeNumber": false
        },
        {
            "totalYards": 251,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.7541725316710235,
            "probabilityOver": 0.24582746832897648,
            "isWholeNumber": true
        },
        {
            "totalYards": 251.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7555,
            "probabilityOver": 0.2445,
            "isWholeNumber": false
        },
        {
            "totalYards": 252,
            "total": null,
            "occurrences": 73,
            "probabilityEqual": 0.0073,
            "probabilityUnder": 0.7610557066586079,
            "probabilityOver": 0.23894429334139217,
            "isWholeNumber": true
        },
        {
            "totalYards": 252.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7628,
            "probabilityOver": 0.2372,
            "isWholeNumber": false
        },
        {
            "totalYards": 253,
            "total": null,
            "occurrences": 62,
            "probabilityEqual": 0.0062,
            "probabilityUnder": 0.7675588649627691,
            "probabilityOver": 0.23244113503723082,
            "isWholeNumber": true
        },
        {
            "totalYards": 253.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.769,
            "probabilityOver": 0.231,
            "isWholeNumber": false
        },
        {
            "totalYards": 254,
            "total": null,
            "occurrences": 66,
            "probabilityEqual": 0.0066,
            "probabilityUnder": 0.7741091201932756,
            "probabilityOver": 0.22589087980672437,
            "isWholeNumber": true
        },
        {
            "totalYards": 254.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7756,
            "probabilityOver": 0.2244,
            "isWholeNumber": false
        },
        {
            "totalYards": 255,
            "total": null,
            "occurrences": 49,
            "probabilityEqual": 0.0049,
            "probabilityUnder": 0.779419153853884,
            "probabilityOver": 0.22058084614611598,
            "isWholeNumber": true
        },
        {
            "totalYards": 255.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7805,
            "probabilityOver": 0.2195,
            "isWholeNumber": false
        },
        {
            "totalYards": 256,
            "total": null,
            "occurrences": 69,
            "probabilityEqual": 0.0069,
            "probabilityUnder": 0.7859228677877353,
            "probabilityOver": 0.21407713221226463,
            "isWholeNumber": true
        },
        {
            "totalYards": 256.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7874,
            "probabilityOver": 0.2126,
            "isWholeNumber": false
        },
        {
            "totalYards": 257,
            "total": null,
            "occurrences": 49,
            "probabilityEqual": 0.0049,
            "probabilityUnder": 0.7912772585669782,
            "probabilityOver": 0.2087227414330218,
            "isWholeNumber": true
        },
        {
            "totalYards": 257.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7923,
            "probabilityOver": 0.2077,
            "isWholeNumber": false
        },
        {
            "totalYards": 258,
            "total": null,
            "occurrences": 51,
            "probabilityEqual": 0.0051,
            "probabilityUnder": 0.7963614433611418,
            "probabilityOver": 0.2036385566388582,
            "isWholeNumber": true
        },
        {
            "totalYards": 258.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7974,
            "probabilityOver": 0.2026,
            "isWholeNumber": false
        },
        {
            "totalYards": 259,
            "total": null,
            "occurrences": 55,
            "probabilityEqual": 0.0055,
            "probabilityUnder": 0.8018099547511313,
            "probabilityOver": 0.19819004524886877,
            "isWholeNumber": true
        },
        {
            "totalYards": 259.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8029,
            "probabilityOver": 0.1971,
            "isWholeNumber": false
        },
        {
            "totalYards": 260,
            "total": null,
            "occurrences": 55,
            "probabilityEqual": 0.0055,
            "probabilityUnder": 0.8073403720462544,
            "probabilityOver": 0.1926596279537456,
            "isWholeNumber": true
        },
        {
            "totalYards": 260.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8084,
            "probabilityOver": 0.1916,
            "isWholeNumber": false
        },
        {
            "totalYards": 261,
            "total": null,
            "occurrences": 57,
            "probabilityEqual": 0.0057,
            "probabilityUnder": 0.8130342954842603,
            "probabilityOver": 0.1869657045157397,
            "isWholeNumber": true
        },
        {
            "totalYards": 261.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8141,
            "probabilityOver": 0.1859,
            "isWholeNumber": false
        },
        {
            "totalYards": 262,
            "total": null,
            "occurrences": 60,
            "probabilityEqual": 0.006,
            "probabilityUnder": 0.8190140845070423,
            "probabilityOver": 0.18098591549295776,
            "isWholeNumber": true
        },
        {
            "totalYards": 262.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8201,
            "probabilityOver": 0.1799,
            "isWholeNumber": false
        },
        {
            "totalYards": 263,
            "total": null,
            "occurrences": 66,
            "probabilityEqual": 0.0066,
            "probabilityUnder": 0.8255486208979264,
            "probabilityOver": 0.17445137910207367,
            "isWholeNumber": true
        },
        {
            "totalYards": 263.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8267,
            "probabilityOver": 0.1733,
            "isWholeNumber": false
        },
        {
            "totalYards": 264,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.831188417454253,
            "probabilityOver": 0.16881158254574705,
            "isWholeNumber": true
        },
        {
            "totalYards": 264.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8321,
            "probabilityOver": 0.1679,
            "isWholeNumber": false
        },
        {
            "totalYards": 265,
            "total": null,
            "occurrences": 41,
            "probabilityEqual": 0.0041,
            "probabilityUnder": 0.8355256551862636,
            "probabilityOver": 0.16447434481373632,
            "isWholeNumber": true
        },
        {
            "totalYards": 265.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8362,
            "probabilityOver": 0.1638,
            "isWholeNumber": false
        },
        {
            "totalYards": 266,
            "total": null,
            "occurrences": 51,
            "probabilityEqual": 0.0051,
            "probabilityUnder": 0.8404864810533722,
            "probabilityOver": 0.1595135189466278,
            "isWholeNumber": true
        },
        {
            "totalYards": 266.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8413,
            "probabilityOver": 0.1587,
            "isWholeNumber": false
        },
        {
            "totalYards": 267,
            "total": null,
            "occurrences": 59,
            "probabilityEqual": 0.0059,
            "probabilityUnder": 0.8462931294638366,
            "probabilityOver": 0.15370687053616336,
            "isWholeNumber": true
        },
        {
            "totalYards": 267.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8472,
            "probabilityOver": 0.1528,
            "isWholeNumber": false
        },
        {
            "totalYards": 268,
            "total": null,
            "occurrences": 33,
            "probabilityEqual": 0.0033,
            "probabilityUnder": 0.8500050165546302,
            "probabilityOver": 0.1499949834453697,
            "isWholeNumber": true
        },
        {
            "totalYards": 268.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8505,
            "probabilityOver": 0.1495,
            "isWholeNumber": false
        },
        {
            "totalYards": 269,
            "total": null,
            "occurrences": 43,
            "probabilityEqual": 0.0043,
            "probabilityUnder": 0.8541729436577282,
            "probabilityOver": 0.14582705634227178,
            "isWholeNumber": true
        },
        {
            "totalYards": 269.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8548,
            "probabilityOver": 0.1452,
            "isWholeNumber": false
        },
        {
            "totalYards": 270,
            "total": null,
            "occurrences": 37,
            "probabilityEqual": 0.0037,
            "probabilityUnder": 0.8579745056709827,
            "probabilityOver": 0.14202549432901737,
            "isWholeNumber": true
        },
        {
            "totalYards": 270.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8585,
            "probabilityOver": 0.1415,
            "isWholeNumber": false
        },
        {
            "totalYards": 271,
            "total": null,
            "occurrences": 34,
            "probabilityEqual": 0.0034,
            "probabilityUnder": 0.8614288581175998,
            "probabilityOver": 0.13857114188240016,
            "isWholeNumber": true
        },
        {
            "totalYards": 271.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8619,
            "probabilityOver": 0.1381,
            "isWholeNumber": false
        },
        {
            "totalYards": 272,
            "total": null,
            "occurrences": 35,
            "probabilityEqual": 0.0035,
            "probabilityUnder": 0.8649272453587556,
            "probabilityOver": 0.13507275464124435,
            "isWholeNumber": true
        },
        {
            "totalYards": 272.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8654,
            "probabilityOver": 0.1346,
            "isWholeNumber": false
        },
        {
            "totalYards": 273,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.8700985320731952,
            "probabilityOver": 0.12990146792680474,
            "isWholeNumber": true
        },
        {
            "totalYards": 273.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8708,
            "probabilityOver": 0.1292,
            "isWholeNumber": false
        },
        {
            "totalYards": 274,
            "total": null,
            "occurrences": 43,
            "probabilityEqual": 0.0043,
            "probabilityUnder": 0.8745606106256905,
            "probabilityOver": 0.12543938937430954,
            "isWholeNumber": true
        },
        {
            "totalYards": 274.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8751,
            "probabilityOver": 0.1249,
            "isWholeNumber": false
        },
        {
            "totalYards": 275,
            "total": null,
            "occurrences": 38,
            "probabilityEqual": 0.0038,
            "probabilityUnder": 0.8784380646456534,
            "probabilityOver": 0.12156193535434652,
            "isWholeNumber": true
        },
        {
            "totalYards": 275.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8789,
            "probabilityOver": 0.1211,
            "isWholeNumber": false
        },
        {
            "totalYards": 276,
            "total": null,
            "occurrences": 30,
            "probabilityEqual": 0.003,
            "probabilityUnder": 0.8815446339017051,
            "probabilityOver": 0.11845536609829488,
            "isWholeNumber": true
        },
        {
            "totalYards": 276.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8819,
            "probabilityOver": 0.1181,
            "isWholeNumber": false
        },
        {
            "totalYards": 277,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.8839330460058133,
            "probabilityOver": 0.11606695399418662,
            "isWholeNumber": true
        },
        {
            "totalYards": 277.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8842,
            "probabilityOver": 0.1158,
            "isWholeNumber": false
        },
        {
            "totalYards": 278,
            "total": null,
            "occurrences": 46,
            "probabilityEqual": 0.0046,
            "probabilityUnder": 0.8882861161342174,
            "probabilityOver": 0.1117138838657826,
            "isWholeNumber": true
        },
        {
            "totalYards": 278.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8888,
            "probabilityOver": 0.1112,
            "isWholeNumber": false
        },
        {
            "totalYards": 279,
            "total": null,
            "occurrences": 35,
            "probabilityEqual": 0.0035,
            "probabilityUnder": 0.8919217260411441,
            "probabilityOver": 0.108078273958856,
            "isWholeNumber": true
        },
        {
            "totalYards": 279.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8923,
            "probabilityOver": 0.1077,
            "isWholeNumber": false
        },
        {
            "totalYards": 280,
            "total": null,
            "occurrences": 25,
            "probabilityEqual": 0.0025,
            "probabilityUnder": 0.8945363408521303,
            "probabilityOver": 0.10546365914786968,
            "isWholeNumber": true
        },
        {
            "totalYards": 280.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8948,
            "probabilityOver": 0.1052,
            "isWholeNumber": false
        },
        {
            "totalYards": 281,
            "total": null,
            "occurrences": 30,
            "probabilityEqual": 0.003,
            "probabilityUnder": 0.8974924774322969,
            "probabilityOver": 0.10250752256770311,
            "isWholeNumber": true
        },
        {
            "totalYards": 281.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8978,
            "probabilityOver": 0.1022,
            "isWholeNumber": false
        },
        {
            "totalYards": 282,
            "total": null,
            "occurrences": 33,
            "probabilityEqual": 0.0033,
            "probabilityUnder": 0.9007725494130631,
            "probabilityOver": 0.0992274505869369,
            "isWholeNumber": true
        },
        {
            "totalYards": 282.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9011,
            "probabilityOver": 0.0989,
            "isWholeNumber": false
        },
        {
            "totalYards": 283,
            "total": null,
            "occurrences": 34,
            "probabilityEqual": 0.0034,
            "probabilityUnder": 0.9041741922536625,
            "probabilityOver": 0.09582580774633755,
            "isWholeNumber": true
        },
        {
            "totalYards": 283.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9045,
            "probabilityOver": 0.0955,
            "isWholeNumber": false
        },
        {
            "totalYards": 284,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.9070397111913358,
            "probabilityOver": 0.09296028880866426,
            "isWholeNumber": true
        },
        {
            "totalYards": 284.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9073,
            "probabilityOver": 0.0927,
            "isWholeNumber": false
        },
        {
            "totalYards": 285,
            "total": null,
            "occurrences": 21,
            "probabilityEqual": 0.0021,
            "probabilityUnder": 0.9092093396131877,
            "probabilityOver": 0.0907906603868123,
            "isWholeNumber": true
        },
        {
            "totalYards": 285.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9094,
            "probabilityOver": 0.0906,
            "isWholeNumber": false
        },
        {
            "totalYards": 286,
            "total": null,
            "occurrences": 36,
            "probabilityEqual": 0.0036,
            "probabilityUnder": 0.9126856684062625,
            "probabilityOver": 0.08731433159373746,
            "isWholeNumber": true
        },
        {
            "totalYards": 286.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.913,
            "probabilityOver": 0.087,
            "isWholeNumber": false
        },
        {
            "totalYards": 287,
            "total": null,
            "occurrences": 31,
            "probabilityEqual": 0.0031,
            "probabilityUnder": 0.9158391012137627,
            "probabilityOver": 0.08416089878623734,
            "isWholeNumber": true
        },
        {
            "totalYards": 287.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9161,
            "probabilityOver": 0.0839,
            "isWholeNumber": false
        },
        {
            "totalYards": 288,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.918211887340884,
            "probabilityOver": 0.08178811265911597,
            "isWholeNumber": true
        },
        {
            "totalYards": 288.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9184,
            "probabilityOver": 0.0816,
            "isWholeNumber": false
        },
        {
            "totalYards": 289,
            "total": null,
            "occurrences": 33,
            "probabilityEqual": 0.0033,
            "probabilityUnder": 0.9214407544898164,
            "probabilityOver": 0.0785592455101836,
            "isWholeNumber": true
        },
        {
            "totalYards": 289.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9217,
            "probabilityOver": 0.0783,
            "isWholeNumber": false
        },
        {
            "totalYards": 290,
            "total": null,
            "occurrences": 25,
            "probabilityEqual": 0.0025,
            "probabilityUnder": 0.9240100250626566,
            "probabilityOver": 0.07598997493734336,
            "isWholeNumber": true
        },
        {
            "totalYards": 290.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9242,
            "probabilityOver": 0.0758,
            "isWholeNumber": false
        },
        {
            "totalYards": 291,
            "total": null,
            "occurrences": 31,
            "probabilityEqual": 0.0031,
            "probabilityUnder": 0.9270739291804594,
            "probabilityOver": 0.07292607081954057,
            "isWholeNumber": true
        },
        {
            "totalYards": 291.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9273,
            "probabilityOver": 0.0727,
            "isWholeNumber": false
        },
        {
            "totalYards": 292,
            "total": null,
            "occurrences": 26,
            "probabilityEqual": 0.0026,
            "probabilityUnder": 0.9297172648887106,
            "probabilityOver": 0.07028273511128935,
            "isWholeNumber": true
        },
        {
            "totalYards": 292.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9299,
            "probabilityOver": 0.0701,
            "isWholeNumber": false
        },
        {
            "totalYards": 293,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.9317635270541083,
            "probabilityOver": 0.06823647294589179,
            "isWholeNumber": true
        },
        {
            "totalYards": 293.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9319,
            "probabilityOver": 0.0681,
            "isWholeNumber": false
        },
        {
            "totalYards": 294,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9336739805630698,
            "probabilityOver": 0.06632601943693017,
            "isWholeNumber": true
        },
        {
            "totalYards": 294.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9338,
            "probabilityOver": 0.0662,
            "isWholeNumber": false
        },
        {
            "totalYards": 295,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.9350155201762291,
            "probabilityOver": 0.0649844798237709,
            "isWholeNumber": true
        },
        {
            "totalYards": 295.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9351,
            "probabilityOver": 0.0649,
            "isWholeNumber": false
        },
        {
            "totalYards": 296,
            "total": null,
            "occurrences": 21,
            "probabilityEqual": 0.0021,
            "probabilityUnder": 0.9370678424691853,
            "probabilityOver": 0.06293215753081471,
            "isWholeNumber": true
        },
        {
            "totalYards": 296.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9372,
            "probabilityOver": 0.0628,
            "isWholeNumber": false
        },
        {
            "totalYards": 297,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.9393605292171996,
            "probabilityOver": 0.06063947078280044,
            "isWholeNumber": true
        },
        {
            "totalYards": 297.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9395,
            "probabilityOver": 0.0605,
            "isWholeNumber": false
        },
        {
            "totalYards": 298,
            "total": null,
            "occurrences": 27,
            "probabilityEqual": 0.0027,
            "probabilityUnder": 0.9420435174972426,
            "probabilityOver": 0.05795648250275744,
            "isWholeNumber": true
        },
        {
            "totalYards": 298.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9422,
            "probabilityOver": 0.0578,
            "isWholeNumber": false
        },
        {
            "totalYards": 299,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.9448455675892499,
            "probabilityOver": 0.0551544324107501,
            "isWholeNumber": true
        },
        {
            "totalYards": 299.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.945,
            "probabilityOver": 0.055,
            "isWholeNumber": false
        },
        {
            "totalYards": 300,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9467989179440938,
            "probabilityOver": 0.05320108205590622,
            "isWholeNumber": true
        },
        {
            "totalYards": 300.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9469,
            "probabilityOver": 0.0531,
            "isWholeNumber": false
        },
        {
            "totalYards": 301,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.9496539965901113,
            "probabilityOver": 0.05034600340988868,
            "isWholeNumber": true
        },
        {
            "totalYards": 301.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9498,
            "probabilityOver": 0.0502,
            "isWholeNumber": false
        },
        {
            "totalYards": 302,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.9517034068136273,
            "probabilityOver": 0.04829659318637274,
            "isWholeNumber": true
        },
        {
            "totalYards": 302.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9518,
            "probabilityOver": 0.0482,
            "isWholeNumber": false
        },
        {
            "totalYards": 303,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9536118625388238,
            "probabilityOver": 0.04638813746117623,
            "isWholeNumber": true
        },
        {
            "totalYards": 303.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9537,
            "probabilityOver": 0.0463,
            "isWholeNumber": false
        },
        {
            "totalYards": 304,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9545591031928736,
            "probabilityOver": 0.045440896807126416,
            "isWholeNumber": true
        },
        {
            "totalYards": 304.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9546,
            "probabilityOver": 0.0454,
            "isWholeNumber": false
        },
        {
            "totalYards": 305,
            "total": null,
            "occurrences": 18,
            "probabilityEqual": 0.0018,
            "probabilityUnder": 0.9563213784812663,
            "probabilityOver": 0.04367862151873372,
            "isWholeNumber": true
        },
        {
            "totalYards": 305.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9564,
            "probabilityOver": 0.0436,
            "isWholeNumber": false
        },
        {
            "totalYards": 306,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.9580286487027948,
            "probabilityOver": 0.04197135129720525,
            "isWholeNumber": true
        },
        {
            "totalYards": 306.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9581,
            "probabilityOver": 0.0419,
            "isWholeNumber": false
        },
        {
            "totalYards": 307,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.9593471512966857,
            "probabilityOver": 0.04065284870331431,
            "isWholeNumber": true
        },
        {
            "totalYards": 307.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9594,
            "probabilityOver": 0.0406,
            "isWholeNumber": false
        },
        {
            "totalYards": 308,
            "total": null,
            "occurrences": 22,
            "probabilityEqual": 0.0022,
            "probabilityUnder": 0.9615153337342153,
            "probabilityOver": 0.03848466626578473,
            "isWholeNumber": true
        },
        {
            "totalYards": 308.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9616,
            "probabilityOver": 0.0384,
            "isWholeNumber": false
        },
        {
            "totalYards": 309,
            "total": null,
            "occurrences": 14,
            "probabilityEqual": 0.0014,
            "probabilityUnder": 0.9629481273783297,
            "probabilityOver": 0.03705187262167034,
            "isWholeNumber": true
        },
        {
            "totalYards": 309.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.963,
            "probabilityOver": 0.037,
            "isWholeNumber": false
        },
        {
            "totalYards": 310,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9638674807326594,
            "probabilityOver": 0.03613251926734061,
            "isWholeNumber": true
        },
        {
            "totalYards": 310.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9639,
            "probabilityOver": 0.0361,
            "isWholeNumber": false
        },
        {
            "totalYards": 311,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.9651547011114449,
            "probabilityOver": 0.03484529888855512,
            "isWholeNumber": true
        },
        {
            "totalYards": 311.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9652,
            "probabilityOver": 0.0348,
            "isWholeNumber": false
        },
        {
            "totalYards": 312,
            "total": null,
            "occurrences": 16,
            "probabilityEqual": 0.0016,
            "probabilityUnder": 0.9667467948717948,
            "probabilityOver": 0.03325320512820513,
            "isWholeNumber": true
        },
        {
            "totalYards": 312.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9668,
            "probabilityOver": 0.0332,
            "isWholeNumber": false
        },
        {
            "totalYards": 313,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.9679615538646376,
            "probabilityOver": 0.032038446135362435,
            "isWholeNumber": true
        },
        {
            "totalYards": 313.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.968,
            "probabilityOver": 0.032,
            "isWholeNumber": false
        },
        {
            "totalYards": 314,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.9690659725698269,
            "probabilityOver": 0.03093402743017319,
            "isWholeNumber": true
        },
        {
            "totalYards": 314.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9691,
            "probabilityOver": 0.0309,
            "isWholeNumber": false
        },
        {
            "totalYards": 315,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.9702643171806168,
            "probabilityOver": 0.02973568281938326,
            "isWholeNumber": true
        },
        {
            "totalYards": 315.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9703,
            "probabilityOver": 0.0297,
            "isWholeNumber": false
        },
        {
            "totalYards": 316,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.9710768614891914,
            "probabilityOver": 0.028923138510808646,
            "isWholeNumber": true
        },
        {
            "totalYards": 316.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9711,
            "probabilityOver": 0.0289,
            "isWholeNumber": false
        },
        {
            "totalYards": 317,
            "total": null,
            "occurrences": 16,
            "probabilityEqual": 0.0016,
            "probabilityUnder": 0.97265625,
            "probabilityOver": 0.02734375,
            "isWholeNumber": true
        },
        {
            "totalYards": 317.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9727,
            "probabilityOver": 0.0273,
            "isWholeNumber": false
        },
        {
            "totalYards": 318,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.9739661560028037,
            "probabilityOver": 0.026033843997196354,
            "isWholeNumber": true
        },
        {
            "totalYards": 318.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.974,
            "probabilityOver": 0.026,
            "isWholeNumber": false
        },
        {
            "totalYards": 319,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.9747798238590872,
            "probabilityOver": 0.02522017614091273,
            "isWholeNumber": true
        },
        {
            "totalYards": 319.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9748,
            "probabilityOver": 0.0252,
            "isWholeNumber": false
        },
        {
            "totalYards": 320,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9756781102992693,
            "probabilityOver": 0.024321889700730657,
            "isWholeNumber": true
        },
        {
            "totalYards": 320.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9757,
            "probabilityOver": 0.0243,
            "isWholeNumber": false
        },
        {
            "totalYards": 321,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9763834684278996,
            "probabilityOver": 0.02361653157210047,
            "isWholeNumber": true
        },
        {
            "totalYards": 321.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9764,
            "probabilityOver": 0.0236,
            "isWholeNumber": false
        },
        {
            "totalYards": 322,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.976986191715029,
            "probabilityOver": 0.02301380828497098,
            "isWholeNumber": true
        },
        {
            "totalYards": 322.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.977,
            "probabilityOver": 0.023,
            "isWholeNumber": false
        },
        {
            "totalYards": 323,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9776843790653458,
            "probabilityOver": 0.022315620934654258,
            "isWholeNumber": true
        },
        {
            "totalYards": 323.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9777,
            "probabilityOver": 0.0223,
            "isWholeNumber": false
        },
        {
            "totalYards": 324,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.9786786786786786,
            "probabilityOver": 0.02132132132132132,
            "isWholeNumber": true
        },
        {
            "totalYards": 324.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9787,
            "probabilityOver": 0.0213,
            "isWholeNumber": false
        },
        {
            "totalYards": 325,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9790916366546618,
            "probabilityOver": 0.020908363345338136,
            "isWholeNumber": true
        },
        {
            "totalYards": 325.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9791,
            "probabilityOver": 0.0209,
            "isWholeNumber": false
        },
        {
            "totalYards": 326,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.9800800800800801,
            "probabilityOver": 0.01991991991991992,
            "isWholeNumber": true
        },
        {
            "totalYards": 326.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9801,
            "probabilityOver": 0.0199,
            "isWholeNumber": false
        },
        {
            "totalYards": 327,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9806884130478287,
            "probabilityOver": 0.019311586952171302,
            "isWholeNumber": true
        },
        {
            "totalYards": 327.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9807,
            "probabilityOver": 0.0193,
            "isWholeNumber": false
        },
        {
            "totalYards": 328,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9815834250825743,
            "probabilityOver": 0.018416574917425682,
            "isWholeNumber": true
        },
        {
            "totalYards": 328.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9816,
            "probabilityOver": 0.0184,
            "isWholeNumber": false
        },
        {
            "totalYards": 329,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9820910455227614,
            "probabilityOver": 0.017908954477238618,
            "isWholeNumber": true
        },
        {
            "totalYards": 329.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9821,
            "probabilityOver": 0.0179,
            "isWholeNumber": false
        },
        {
            "totalYards": 330,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.9828863090472378,
            "probabilityOver": 0.01711369095276221,
            "isWholeNumber": true
        },
        {
            "totalYards": 330.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9829,
            "probabilityOver": 0.0171,
            "isWholeNumber": false
        },
        {
            "totalYards": 331,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.983391695847924,
            "probabilityOver": 0.016608304152076037,
            "isWholeNumber": true
        },
        {
            "totalYards": 331.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9834,
            "probabilityOver": 0.0166,
            "isWholeNumber": false
        },
        {
            "totalYards": 332,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9839903942365419,
            "probabilityOver": 0.016009605763458074,
            "isWholeNumber": true
        },
        {
            "totalYards": 332.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.984,
            "probabilityOver": 0.016,
            "isWholeNumber": false
        },
        {
            "totalYards": 333,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9843937575030012,
            "probabilityOver": 0.015606242496998799,
            "isWholeNumber": true
        },
        {
            "totalYards": 333.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9844,
            "probabilityOver": 0.0156,
            "isWholeNumber": false
        },
        {
            "totalYards": 334,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9849909945967581,
            "probabilityOver": 0.015009005403241946,
            "isWholeNumber": true
        },
        {
            "totalYards": 334.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.985,
            "probabilityOver": 0.015,
            "isWholeNumber": false
        },
        {
            "totalYards": 335,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.9857886309047238,
            "probabilityOver": 0.01421136909527622,
            "isWholeNumber": true
        },
        {
            "totalYards": 335.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9858,
            "probabilityOver": 0.0142,
            "isWholeNumber": false
        },
        {
            "totalYards": 336,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9860958287486246,
            "probabilityOver": 0.013904171251375413,
            "isWholeNumber": true
        },
        {
            "totalYards": 336.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9861,
            "probabilityOver": 0.0139,
            "isWholeNumber": false
        },
        {
            "totalYards": 337,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9869882894605144,
            "probabilityOver": 0.013011710539485537,
            "isWholeNumber": true
        },
        {
            "totalYards": 337.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.987,
            "probabilityOver": 0.013,
            "isWholeNumber": false
        },
        {
            "totalYards": 338,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.987296188856657,
            "probabilityOver": 0.012703811143343003,
            "isWholeNumber": true
        },
        {
            "totalYards": 338.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9873,
            "probabilityOver": 0.0127,
            "isWholeNumber": false
        },
        {
            "totalYards": 339,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9877938969484742,
            "probabilityOver": 0.012206103051525762,
            "isWholeNumber": true
        },
        {
            "totalYards": 339.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9878,
            "probabilityOver": 0.0122,
            "isWholeNumber": false
        },
        {
            "totalYards": 340,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9883930358214928,
            "probabilityOver": 0.011606964178507104,
            "isWholeNumber": true
        },
        {
            "totalYards": 340.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9884,
            "probabilityOver": 0.0116,
            "isWholeNumber": false
        },
        {
            "totalYards": 341,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9890923646552586,
            "probabilityOver": 0.01090763534474132,
            "isWholeNumber": true
        },
        {
            "totalYards": 341.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9891,
            "probabilityOver": 0.0109,
            "isWholeNumber": false
        },
        {
            "totalYards": 342,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9895947973986994,
            "probabilityOver": 0.01040520260130065,
            "isWholeNumber": true
        },
        {
            "totalYards": 342.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9896,
            "probabilityOver": 0.0104,
            "isWholeNumber": false
        },
        {
            "totalYards": 343,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9898969690907272,
            "probabilityOver": 0.010103030909272781,
            "isWholeNumber": true
        },
        {
            "totalYards": 343.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9899,
            "probabilityOver": 0.0101,
            "isWholeNumber": false
        },
        {
            "totalYards": 344,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.990296118447379,
            "probabilityOver": 0.009703881552621049,
            "isWholeNumber": true
        },
        {
            "totalYards": 344.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9903,
            "probabilityOver": 0.0097,
            "isWholeNumber": false
        },
        {
            "totalYards": 345,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9905971791537461,
            "probabilityOver": 0.009402820846253877,
            "isWholeNumber": true
        },
        {
            "totalYards": 345.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9906,
            "probabilityOver": 0.0094,
            "isWholeNumber": false
        },
        {
            "totalYards": 346,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.991095547773887,
            "probabilityOver": 0.008904452226113057,
            "isWholeNumber": true
        },
        {
            "totalYards": 346.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9911,
            "probabilityOver": 0.0089,
            "isWholeNumber": false
        },
        {
            "totalYards": 347,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9915957978989495,
            "probabilityOver": 0.008404202101050525,
            "isWholeNumber": true
        },
        {
            "totalYards": 347.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9916,
            "probabilityOver": 0.0084,
            "isWholeNumber": false
        },
        {
            "totalYards": 348,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9917983596719344,
            "probabilityOver": 0.008201640328065612,
            "isWholeNumber": true
        },
        {
            "totalYards": 348.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9918,
            "probabilityOver": 0.0082,
            "isWholeNumber": false
        },
        {
            "totalYards": 349,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.991998399679936,
            "probabilityOver": 0.008001600320064013,
            "isWholeNumber": true
        },
        {
            "totalYards": 349.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.992,
            "probabilityOver": 0.008,
            "isWholeNumber": false
        },
        {
            "totalYards": 350,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9923969587835134,
            "probabilityOver": 0.007603041216486595,
            "isWholeNumber": true
        },
        {
            "totalYards": 350.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9924,
            "probabilityOver": 0.0076,
            "isWholeNumber": false
        },
        {
            "totalYards": 351,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.992896448224112,
            "probabilityOver": 0.007103551775887944,
            "isWholeNumber": true
        },
        {
            "totalYards": 351.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9929,
            "probabilityOver": 0.0071,
            "isWholeNumber": false
        },
        {
            "totalYards": 352,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9931979593878163,
            "probabilityOver": 0.006802040612183655,
            "isWholeNumber": true
        },
        {
            "totalYards": 352.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9932,
            "probabilityOver": 0.0068,
            "isWholeNumber": false
        },
        {
            "totalYards": 353,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9933986797359472,
            "probabilityOver": 0.006601320264052811,
            "isWholeNumber": true
        },
        {
            "totalYards": 353.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9934,
            "probabilityOver": 0.0066,
            "isWholeNumber": false
        },
        {
            "totalYards": 354,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9934993499349934,
            "probabilityOver": 0.0065006500650065,
            "isWholeNumber": true
        },
        {
            "totalYards": 354.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9935,
            "probabilityOver": 0.0065,
            "isWholeNumber": false
        },
        {
            "totalYards": 355,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9940964578747248,
            "probabilityOver": 0.005903542125275165,
            "isWholeNumber": true
        },
        {
            "totalYards": 355.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9941,
            "probabilityOver": 0.0059,
            "isWholeNumber": false
        },
        {
            "totalYards": 356,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9941994199419942,
            "probabilityOver": 0.0058005800580058,
            "isWholeNumber": true
        },
        {
            "totalYards": 356.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9942,
            "probabilityOver": 0.0058,
            "isWholeNumber": false
        },
        {
            "totalYards": 357,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9942994299429943,
            "probabilityOver": 0.005700570057005701,
            "isWholeNumber": true
        },
        {
            "totalYards": 357.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9943,
            "probabilityOver": 0.0057,
            "isWholeNumber": false
        },
        {
            "totalYards": 358,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.994498899779956,
            "probabilityOver": 0.005501100220044009,
            "isWholeNumber": true
        },
        {
            "totalYards": 358.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9945,
            "probabilityOver": 0.0055,
            "isWholeNumber": false
        },
        {
            "totalYards": 359,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9947984395318595,
            "probabilityOver": 0.005201560468140442,
            "isWholeNumber": true
        },
        {
            "totalYards": 359.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9948,
            "probabilityOver": 0.0052,
            "isWholeNumber": false
        },
        {
            "totalYards": 360,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9948994899489949,
            "probabilityOver": 0.0051005100510051,
            "isWholeNumber": true
        },
        {
            "totalYards": 360.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9949,
            "probabilityOver": 0.0051,
            "isWholeNumber": false
        },
        {
            "totalYards": 361,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9952981192476991,
            "probabilityOver": 0.004701880752300921,
            "isWholeNumber": true
        },
        {
            "totalYards": 361.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9953,
            "probabilityOver": 0.0047,
            "isWholeNumber": false
        },
        {
            "totalYards": 363,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9955986796038812,
            "probabilityOver": 0.004401320396118836,
            "isWholeNumber": true
        },
        {
            "totalYards": 363.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9956,
            "probabilityOver": 0.0044,
            "isWholeNumber": false
        },
        {
            "totalYards": 364,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9956995699569957,
            "probabilityOver": 0.004300430043004301,
            "isWholeNumber": true
        },
        {
            "totalYards": 364.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9957,
            "probabilityOver": 0.0043,
            "isWholeNumber": false
        },
        {
            "totalYards": 365,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9960984393757503,
            "probabilityOver": 0.0039015606242496998,
            "isWholeNumber": true
        },
        {
            "totalYards": 365.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9961,
            "probabilityOver": 0.0039,
            "isWholeNumber": false
        },
        {
            "totalYards": 366,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9961996199619962,
            "probabilityOver": 0.0038003800380038005,
            "isWholeNumber": true
        },
        {
            "totalYards": 366.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9962,
            "probabilityOver": 0.0038,
            "isWholeNumber": false
        },
        {
            "totalYards": 367,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9962996299629963,
            "probabilityOver": 0.0037003700370037006,
            "isWholeNumber": true
        },
        {
            "totalYards": 367.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9963,
            "probabilityOver": 0.0037,
            "isWholeNumber": false
        },
        {
            "totalYards": 368,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9963996399639964,
            "probabilityOver": 0.0036003600360036,
            "isWholeNumber": true
        },
        {
            "totalYards": 368.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9964,
            "probabilityOver": 0.0036,
            "isWholeNumber": false
        },
        {
            "totalYards": 369,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9966990097029109,
            "probabilityOver": 0.003300990297089127,
            "isWholeNumber": true
        },
        {
            "totalYards": 369.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9967,
            "probabilityOver": 0.0033,
            "isWholeNumber": false
        },
        {
            "totalYards": 370,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9968993798759752,
            "probabilityOver": 0.003100620124024805,
            "isWholeNumber": true
        },
        {
            "totalYards": 370.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9969,
            "probabilityOver": 0.0031,
            "isWholeNumber": false
        },
        {
            "totalYards": 371,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9970994198839768,
            "probabilityOver": 0.0029005801160232048,
            "isWholeNumber": true
        },
        {
            "totalYards": 371.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9971,
            "probabilityOver": 0.0029,
            "isWholeNumber": false
        },
        {
            "totalYards": 372,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9971997199719972,
            "probabilityOver": 0.0028002800280028,
            "isWholeNumber": true
        },
        {
            "totalYards": 372.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9972,
            "probabilityOver": 0.0028,
            "isWholeNumber": false
        },
        {
            "totalYards": 373,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9974992497749324,
            "probabilityOver": 0.00250075022506752,
            "isWholeNumber": true
        },
        {
            "totalYards": 373.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9975,
            "probabilityOver": 0.0025,
            "isWholeNumber": false
        },
        {
            "totalYards": 374,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9977993398019406,
            "probabilityOver": 0.002200660198059418,
            "isWholeNumber": true
        },
        {
            "totalYards": 374.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9978,
            "probabilityOver": 0.0022,
            "isWholeNumber": false
        },
        {
            "totalYards": 375,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.997999599919984,
            "probabilityOver": 0.002000400080016003,
            "isWholeNumber": true
        },
        {
            "totalYards": 375.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.998,
            "probabilityOver": 0.002,
            "isWholeNumber": false
        },
        {
            "totalYards": 377,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9981996399279855,
            "probabilityOver": 0.0018003600720144029,
            "isWholeNumber": true
        },
        {
            "totalYards": 377.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9982,
            "probabilityOver": 0.0018,
            "isWholeNumber": false
        },
        {
            "totalYards": 378,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9982998299829983,
            "probabilityOver": 0.0017001700170017002,
            "isWholeNumber": true
        },
        {
            "totalYards": 378.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9983,
            "probabilityOver": 0.0017,
            "isWholeNumber": false
        },
        {
            "totalYards": 379,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9983998399839984,
            "probabilityOver": 0.0016001600160016002,
            "isWholeNumber": true
        },
        {
            "totalYards": 379.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9984,
            "probabilityOver": 0.0016,
            "isWholeNumber": false
        },
        {
            "totalYards": 380,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9984998499849985,
            "probabilityOver": 0.0015001500150015,
            "isWholeNumber": true
        },
        {
            "totalYards": 380.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9985,
            "probabilityOver": 0.0015,
            "isWholeNumber": false
        },
        {
            "totalYards": 383,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9985998599859987,
            "probabilityOver": 0.0014001400140014,
            "isWholeNumber": true
        },
        {
            "totalYards": 383.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9986,
            "probabilityOver": 0.0014,
            "isWholeNumber": false
        },
        {
            "totalYards": 385,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9986998699869987,
            "probabilityOver": 0.0013001300130013002,
            "isWholeNumber": true
        },
        {
            "totalYards": 385.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9987,
            "probabilityOver": 0.0013,
            "isWholeNumber": false
        },
        {
            "totalYards": 386,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9987998799879988,
            "probabilityOver": 0.0012001200120012002,
            "isWholeNumber": true
        },
        {
            "totalYards": 386.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9988,
            "probabilityOver": 0.0012,
            "isWholeNumber": false
        },
        {
            "totalYards": 388,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.998999799959992,
            "probabilityOver": 0.0010002000400080016,
            "isWholeNumber": true
        },
        {
            "totalYards": 388.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.999,
            "probabilityOver": 0.001,
            "isWholeNumber": false
        },
        {
            "totalYards": 389,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9990999099909991,
            "probabilityOver": 0.0009000900090009,
            "isWholeNumber": true
        },
        {
            "totalYards": 389.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9991,
            "probabilityOver": 0.0009,
            "isWholeNumber": false
        },
        {
            "totalYards": 390,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9991999199919992,
            "probabilityOver": 0.0008000800080008001,
            "isWholeNumber": true
        },
        {
            "totalYards": 390.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9992,
            "probabilityOver": 0.0008,
            "isWholeNumber": false
        },
        {
            "totalYards": 393,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9992999299929993,
            "probabilityOver": 0.0007000700070007,
            "isWholeNumber": true
        },
        {
            "totalYards": 393.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9993,
            "probabilityOver": 0.0007,
            "isWholeNumber": false
        },
        {
            "totalYards": 394,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9993999399939995,
            "probabilityOver": 0.0006000600060006001,
            "isWholeNumber": true
        },
        {
            "totalYards": 394.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9994,
            "probabilityOver": 0.0006,
            "isWholeNumber": false
        },
        {
            "totalYards": 396,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9994999499949995,
            "probabilityOver": 0.0005000500050005,
            "isWholeNumber": true
        },
        {
            "totalYards": 396.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9995,
            "probabilityOver": 0.0005,
            "isWholeNumber": false
        },
        {
            "totalYards": 397,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9995999599959996,
            "probabilityOver": 0.00040004000400040005,
            "isWholeNumber": true
        },
        {
            "totalYards": 397.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9996,
            "probabilityOver": 0.0004,
            "isWholeNumber": false
        },
        {
            "totalYards": 405,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9996999699969997,
            "probabilityOver": 0.00030003000300030005,
            "isWholeNumber": true
        },
        {
            "totalYards": 405.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9997,
            "probabilityOver": 0.0003,
            "isWholeNumber": false
        },
        {
            "totalYards": 420,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9997999799979999,
            "probabilityOver": 0.00020002000200020003,
            "isWholeNumber": true
        },
        {
            "totalYards": 420.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9998,
            "probabilityOver": 0.0002,
            "isWholeNumber": false
        },
        {
            "totalYards": 425,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9998999899989999,
            "probabilityOver": 0.00010001000100010001,
            "isWholeNumber": true
        },
        {
            "totalYards": 425.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999,
            "probabilityOver": 0.0001,
            "isWholeNumber": false
        },
        {
            "totalYards": 429,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        },
        {
            "totalYards": 429.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": false
        }
    ],
    "yardsRangeProbabilities": [
        {
            "startYards": 0,
            "endYards": 19,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 20,
            "endYards": 39,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 40,
            "endYards": 59,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 60,
            "endYards": 79,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 80,
            "endYards": 99,
            "occurrences": 3,
            "probabilityWithin": 0.0003
        },
        {
            "startYards": 100,
            "endYards": 119,
            "occurrences": 32,
            "probabilityWithin": 0.0032
        },
        {
            "startYards": 120,
            "endYards": 139,
            "occurrences": 155,
            "probabilityWithin": 0.0155
        },
        {
            "startYards": 140,
            "endYards": 159,
            "occurrences": 502,
            "probabilityWithin": 0.0502
        },
        {
            "startYards": 160,
            "endYards": 179,
            "occurrences": 1029,
            "probabilityWithin": 0.1029
        },
        {
            "startYards": 180,
            "endYards": 199,
            "occurrences": 1553,
            "probabilityWithin": 0.1553
        },
        {
            "startYards": 200,
            "endYards": 219,
            "occurrences": 1783,
            "probabilityWithin": 0.1783
        },
        {
            "startYards": 220,
            "endYards": 239,
            "occurrences": 1670,
            "probabilityWithin": 0.167
        },
        {
            "startYards": 240,
            "endYards": 259,
            "occurrences": 1302,
            "probabilityWithin": 0.1302
        },
        {
            "startYards": 260,
            "endYards": 279,
            "occurrences": 894,
            "probabilityWithin": 0.0894
        },
        {
            "startYards": 280,
            "endYards": 299,
            "occurrences": 527,
            "probabilityWithin": 0.0527
        },
        {
            "startYards": 300,
            "endYards": 319,
            "occurrences": 298,
            "probabilityWithin": 0.0298
        },
        {
            "startYards": 320,
            "endYards": 339,
            "occurrences": 130,
            "probabilityWithin": 0.013
        },
        {
            "startYards": 340,
            "endYards": 359,
            "occurrences": 70,
            "probabilityWithin": 0.007
        },
        {
            "startYards": 360,
            "endYards": 379,
            "occurrences": 36,
            "probabilityWithin": 0.0036
        },
        {
            "startYards": 380,
            "endYards": 399,
            "occurrences": 12,
            "probabilityWithin": 0.0012
        },
        {
            "startYards": 400,
            "endYards": null,
            "occurrences": 4,
            "probabilityWithin": 0.0004
        }
    ]
};

// const rbResponse = fetch("https://api.unabated.com/api/props/nfl/runningback/rushingyards/14/60/0", {
//     "headers": {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "en-US,en;q=0.9,la;q=0.8",
//         "priority": "u=1, i",
//         "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"macOS\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-site",
//         "x-amz-cf-v-id": "dNSob7rQOiJFE_59NDSm7tuZ6ed5MA_8w8CHVqr8tGSFYpgzEUqBuQ=="
//     },
//     "referrer": "https://unabated.com/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors",
//     "credentials": "include"
// });

// this is the response for the RB
const rbResponse = {
    "summary": {
        "yardsBonusThreshold": 100,
        "yardBonusProbability": 0.0908,
        "meanYards": 59.4947,
        "medianYards": 55
    },
    "countProbabilities": [
        {
            "totalYards": null,
            "total": 0,
            "occurrences": 0,
            "probabilityEqual": 8.31528719103568e-7,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 0.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 8.31528719103568e-7,
            "probabilityOver": 0.9999991684712809,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 1,
            "occurrences": 0,
            "probabilityEqual": 0.00001164140206745,
            "probabilityUnder": 8.315383993764096e-7,
            "probabilityOver": 0.9999991684616006,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 1.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.000012472930786553567,
            "probabilityOver": 0.9999875270692135,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 2,
            "occurrences": 0,
            "probabilityEqual": 0.0000814898144721497,
            "probabilityUnder": 0.000012473947286203655,
            "probabilityOver": 0.9999875260527138,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 2.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.00009396274525870327,
            "probabilityOver": 0.9999060372547413,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 3,
            "occurrences": 0,
            "probabilityEqual": 0.000380285800870032,
            "probabilityUnder": 0.00009399849155034306,
            "probabilityOver": 0.9999060015084497,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 3.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.00047424854612873526,
            "probabilityOver": 0.9995257514538712,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 4,
            "occurrences": 0,
            "probabilityEqual": 0.00133100030304511,
            "probabilityUnder": 0.00047488061236770695,
            "probabilityOver": 0.9995251193876323,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 4.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0018052488491738454,
            "probabilityOver": 0.9981947511508261,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 5,
            "occurrences": 0,
            "probabilityEqual": 0.00372680084852631,
            "probabilityUnder": 0.001812001819090764,
            "probabilityOver": 0.9981879981809092,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 5.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.005532049697700155,
            "probabilityOver": 0.9944679503022998,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 6,
            "occurrences": 0,
            "probabilityEqual": 0.00869586864656137,
            "probabilityUnder": 0.005580577668073658,
            "probabilityOver": 0.9944194223319264,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 6.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.014227918344261525,
            "probabilityOver": 0.9857720816557385,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 7,
            "occurrences": 0,
            "probabilityEqual": 0.0173917372931227,
            "probabilityUnder": 0.01447974628776948,
            "probabilityOver": 0.9855202537122305,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 7.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.031619655637384225,
            "probabilityOver": 0.9683803443626158,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 8,
            "occurrences": 0,
            "probabilityEqual": 0.0304355402629648,
            "probabilityUnder": 0.0326122263660119,
            "probabilityOver": 0.9673877736339881,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 8.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.062055195900349025,
            "probabilityOver": 0.937944804099651,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 9,
            "occurrences": 0,
            "probabilityEqual": 0.0473441737423898,
            "probabilityUnder": 0.06513915539059383,
            "probabilityOver": 0.9348608446094062,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 9.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.10939936964273883,
            "probabilityOver": 0.8906006303572612,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 10,
            "occurrences": 0,
            "probabilityEqual": 0.0662818432393456,
            "probabilityUnder": 0.11716530181042825,
            "probabilityOver": 0.8828346981895717,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 10.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.17568121288208444,
            "probabilityOver": 0.8243187871179156,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 11,
            "occurrences": 0,
            "probabilityEqual": 0.084358709577349,
            "probabilityUnder": 0.19186685301292136,
            "probabilityOver": 0.8081331469870786,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 11.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2600399224594334,
            "probabilityOver": 0.7399600775405666,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 12,
            "occurrences": 0,
            "probabilityEqual": 0.098418494506907,
            "probabilityUnder": 0.2884264161088934,
            "probabilityOver": 0.7115735838911066,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 12.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3584584169663404,
            "probabilityOver": 0.6415415830336596,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 13,
            "occurrences": 0,
            "probabilityEqual": 0.105989147930515,
            "probabilityUnder": 0.40095533084030177,
            "probabilityOver": 0.5990446691596982,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 13.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4644475648968554,
            "probabilityOver": 0.5355524351031445,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 14,
            "occurrences": 0,
            "probabilityEqual": 0.105989147930515,
            "probabilityUnder": 0.5195099856134154,
            "probabilityOver": 0.48049001438658456,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 14.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5704367128273704,
            "probabilityOver": 0.4295632871726296,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 15,
            "occurrences": 0,
            "probabilityEqual": 0.098923204735148,
            "probabilityUnder": 0.633061150642219,
            "probabilityOver": 0.366938849357781,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 15.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6693599175625184,
            "probabilityOver": 0.33064008243748155,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 16,
            "occurrences": 0,
            "probabilityEqual": 0.0865578041432541,
            "probabilityUnder": 0.7327884792257762,
            "probabilityOver": 0.26721152077422383,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 16.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7559177217057725,
            "probabilityOver": 0.24408227829422746,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 17,
            "occurrences": 0,
            "probabilityEqual": 0.0712828975297383,
            "probabilityUnder": 0.813937548576562,
            "probabilityOver": 0.18606245142343802,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 17.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8272006192355108,
            "probabilityOver": 0.17279938076448917,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 18,
            "occurrences": 0,
            "probabilityEqual": 0.0554422536342412,
            "probabilityUnder": 0.8757544177878098,
            "probabilityOver": 0.12424558221219019,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 18.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8826428728697521,
            "probabilityOver": 0.11735712713024797,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 19,
            "occurrences": 0,
            "probabilityEqual": 0.0408521868883881,
            "probabilityUnder": 0.9202365483233841,
            "probabilityOver": 0.0797634516766159,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 19.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9234950597581402,
            "probabilityOver": 0.07650494024185987,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 20,
            "occurrences": 0,
            "probabilityEqual": 0.0285965308218718,
            "probabilityUnder": 0.9506812452908762,
            "probabilityOver": 0.04931875470912387,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 20.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9520915905800119,
            "probabilityOver": 0.04790840941998808,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 21,
            "occurrences": 0,
            "probabilityEqual": 0.0190643538812478,
            "probabilityUnder": 0.9705953640762603,
            "probabilityOver": 0.0294046359237397,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 21.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9711559444612597,
            "probabilityOver": 0.028844055538740275,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 22,
            "occurrences": 0,
            "probabilityEqual": 0.0121318615607941,
            "probabilityUnder": 0.983082566055475,
            "probabilityOver": 0.01691743394452503,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 22.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9832878060220538,
            "probabilityOver": 0.016712193977946176,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 23,
            "occurrences": 0,
            "probabilityEqual": 0.00738461138483114,
            "probabilityUnder": 0.9906030243938407,
            "probabilityOver": 0.009396975606159258,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 23.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9906724174068849,
            "probabilityOver": 0.009327582593115035,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 24,
            "occurrences": 0,
            "probabilityEqual": 0.00430768997448483,
            "probabilityUnder": 0.99495838968717,
            "probabilityOver": 0.0050416103128300424,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 24.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9949801073813698,
            "probabilityOver": 0.005019892618630205,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 25,
            "occurrences": 0,
            "probabilityEqual": 0.0024123063857115,
            "probabilityUnder": 0.9973861082593437,
            "probabilityOver": 0.0026138917406562483,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 25.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9973924137670813,
            "probabilityOver": 0.0026075862329187046,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 26,
            "occurrences": 0,
            "probabilityEqual": 0.00129893420769082,
            "probabilityUnder": 0.9986896459110217,
            "probabilityOver": 0.0013103540889782461,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 26.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9986913479747721,
            "probabilityOver": 0.0013086520252278847,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 27,
            "occurrences": 0,
            "probabilityEqual": 0.000673521441024863,
            "probabilityUnder": 0.9993644413534215,
            "probabilityOver": 0.0006355586465785211,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 27.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9993648694157969,
            "probabilityOver": 0.0006351305842030217,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 28,
            "occurrences": 0,
            "probabilityEqual": 0.000336760720512431,
            "probabilityUnder": 0.9997015296232102,
            "probabilityOver": 0.00029847037678973007,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 28.5,
            "occurrences": 0,
            "probabilityEqual": 0.0002983698636905907,
            "probabilityUnder": 0.9997016301363094,
            "probabilityOver": 0,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 29,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        }
    ],
    "yardsProbabilities": [
        {
            "totalYards": -7,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": -6.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0001,
            "probabilityOver": 0.9999,
            "isWholeNumber": false
        },
        {
            "totalYards": -6,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00010001000100010001,
            "probabilityOver": 0.9998999899989999,
            "isWholeNumber": true
        },
        {
            "totalYards": -5.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0002,
            "probabilityOver": 0.9998,
            "isWholeNumber": false
        },
        {
            "totalYards": -5,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00020002000200020003,
            "probabilityOver": 0.9997999799979999,
            "isWholeNumber": true
        },
        {
            "totalYards": -4.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0003,
            "probabilityOver": 0.9997,
            "isWholeNumber": false
        },
        {
            "totalYards": -1,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00030003000300030005,
            "probabilityOver": 0.9996999699969997,
            "isWholeNumber": true
        },
        {
            "totalYards": -0.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0004,
            "probabilityOver": 0.9996,
            "isWholeNumber": false
        },
        {
            "totalYards": 0,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00040004000400040005,
            "probabilityOver": 0.9995999599959996,
            "isWholeNumber": true
        },
        {
            "totalYards": 0.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0005,
            "probabilityOver": 0.9995,
            "isWholeNumber": false
        },
        {
            "totalYards": 2,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.0005002000800320128,
            "probabilityOver": 0.999499799919968,
            "isWholeNumber": true
        },
        {
            "totalYards": 2.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0009,
            "probabilityOver": 0.9991,
            "isWholeNumber": false
        },
        {
            "totalYards": 3,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.0009004502251125563,
            "probabilityOver": 0.9990995497748875,
            "isWholeNumber": true
        },
        {
            "totalYards": 3.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0014,
            "probabilityOver": 0.9986,
            "isWholeNumber": false
        },
        {
            "totalYards": 4,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.0014008405043025814,
            "probabilityOver": 0.9985991594956974,
            "isWholeNumber": true
        },
        {
            "totalYards": 4.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.002,
            "probabilityOver": 0.998,
            "isWholeNumber": false
        },
        {
            "totalYards": 5,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.0020008003201280513,
            "probabilityOver": 0.9979991996798719,
            "isWholeNumber": true
        },
        {
            "totalYards": 5.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0024,
            "probabilityOver": 0.9976,
            "isWholeNumber": false
        },
        {
            "totalYards": 6,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.0024007202160648195,
            "probabilityOver": 0.9975992797839351,
            "isWholeNumber": true
        },
        {
            "totalYards": 6.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0027,
            "probabilityOver": 0.9973,
            "isWholeNumber": false
        },
        {
            "totalYards": 7,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.0027029732705976576,
            "probabilityOver": 0.9972970267294023,
            "isWholeNumber": true
        },
        {
            "totalYards": 7.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0038,
            "probabilityOver": 0.9962,
            "isWholeNumber": false
        },
        {
            "totalYards": 8,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.0038049464303594673,
            "probabilityOver": 0.9961950535696406,
            "isWholeNumber": true
        },
        {
            "totalYards": 8.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0051,
            "probabilityOver": 0.9949,
            "isWholeNumber": false
        },
        {
            "totalYards": 9,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.005106638630219285,
            "probabilityOver": 0.9948933613697807,
            "isWholeNumber": true
        },
        {
            "totalYards": 9.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0064,
            "probabilityOver": 0.9936,
            "isWholeNumber": false
        },
        {
            "totalYards": 10,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.006410898527496744,
            "probabilityOver": 0.9935891014725032,
            "isWholeNumber": true
        },
        {
            "totalYards": 10.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0081,
            "probabilityOver": 0.9919,
            "isWholeNumber": false
        },
        {
            "totalYards": 11,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.00811623246492986,
            "probabilityOver": 0.9918837675350701,
            "isWholeNumber": true
        },
        {
            "totalYards": 11.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0101,
            "probabilityOver": 0.9899,
            "isWholeNumber": false
        },
        {
            "totalYards": 12,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.01012328355216999,
            "probabilityOver": 0.98987671644783,
            "isWholeNumber": true
        },
        {
            "totalYards": 12.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0124,
            "probabilityOver": 0.9876,
            "isWholeNumber": false
        },
        {
            "totalYards": 13,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.012436064587303178,
            "probabilityOver": 0.9875639354126968,
            "isWholeNumber": true
        },
        {
            "totalYards": 13.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0153,
            "probabilityOver": 0.9847,
            "isWholeNumber": false
        },
        {
            "totalYards": 14,
            "total": null,
            "occurrences": 32,
            "probabilityEqual": 0.0032,
            "probabilityUnder": 0.015349117174959872,
            "probabilityOver": 0.9846508828250401,
            "isWholeNumber": true
        },
        {
            "totalYards": 14.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0185,
            "probabilityOver": 0.9815,
            "isWholeNumber": false
        },
        {
            "totalYards": 15,
            "total": null,
            "occurrences": 34,
            "probabilityEqual": 0.0034,
            "probabilityUnder": 0.018563114589604655,
            "probabilityOver": 0.9814368854103953,
            "isWholeNumber": true
        },
        {
            "totalYards": 15.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0219,
            "probabilityOver": 0.9781,
            "isWholeNumber": false
        },
        {
            "totalYards": 16,
            "total": null,
            "occurrences": 41,
            "probabilityEqual": 0.0041,
            "probabilityUnder": 0.021990159654583792,
            "probabilityOver": 0.9780098403454162,
            "isWholeNumber": true
        },
        {
            "totalYards": 16.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.026,
            "probabilityOver": 0.974,
            "isWholeNumber": false
        },
        {
            "totalYards": 17,
            "total": null,
            "occurrences": 35,
            "probabilityEqual": 0.0035,
            "probabilityUnder": 0.02609131961866533,
            "probabilityOver": 0.9739086803813347,
            "isWholeNumber": true
        },
        {
            "totalYards": 17.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0295,
            "probabilityOver": 0.9705,
            "isWholeNumber": false
        },
        {
            "totalYards": 18,
            "total": null,
            "occurrences": 39,
            "probabilityEqual": 0.0039,
            "probabilityUnder": 0.02961550045176187,
            "probabilityOver": 0.9703844995482381,
            "isWholeNumber": true
        },
        {
            "totalYards": 18.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0334,
            "probabilityOver": 0.9666,
            "isWholeNumber": false
        },
        {
            "totalYards": 19,
            "total": null,
            "occurrences": 56,
            "probabilityEqual": 0.0056,
            "probabilityUnder": 0.033588093322606594,
            "probabilityOver": 0.9664119066773934,
            "isWholeNumber": true
        },
        {
            "totalYards": 19.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.039,
            "probabilityOver": 0.961,
            "isWholeNumber": false
        },
        {
            "totalYards": 20,
            "total": null,
            "occurrences": 46,
            "probabilityEqual": 0.0046,
            "probabilityUnder": 0.03918022905364678,
            "probabilityOver": 0.9608197709463532,
            "isWholeNumber": true
        },
        {
            "totalYards": 20.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0436,
            "probabilityOver": 0.9564,
            "isWholeNumber": false
        },
        {
            "totalYards": 21,
            "total": null,
            "occurrences": 57,
            "probabilityEqual": 0.0057,
            "probabilityUnder": 0.0438499446847028,
            "probabilityOver": 0.9561500553152972,
            "isWholeNumber": true
        },
        {
            "totalYards": 21.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0493,
            "probabilityOver": 0.9507,
            "isWholeNumber": false
        },
        {
            "totalYards": 22,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.04963753523962948,
            "probabilityOver": 0.9503624647603706,
            "isWholeNumber": true
        },
        {
            "totalYards": 22.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0561,
            "probabilityOver": 0.9439,
            "isWholeNumber": false
        },
        {
            "totalYards": 23,
            "total": null,
            "occurrences": 72,
            "probabilityEqual": 0.0072,
            "probabilityUnder": 0.05650684931506849,
            "probabilityOver": 0.9434931506849316,
            "isWholeNumber": true
        },
        {
            "totalYards": 23.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0633,
            "probabilityOver": 0.9367,
            "isWholeNumber": false
        },
        {
            "totalYards": 24,
            "total": null,
            "occurrences": 77,
            "probabilityEqual": 0.0077,
            "probabilityUnder": 0.06379119217978434,
            "probabilityOver": 0.9362088078202156,
            "isWholeNumber": true
        },
        {
            "totalYards": 24.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.071,
            "probabilityOver": 0.929,
            "isWholeNumber": false
        },
        {
            "totalYards": 25,
            "total": null,
            "occurrences": 89,
            "probabilityEqual": 0.0089,
            "probabilityUnder": 0.0716375744122692,
            "probabilityOver": 0.9283624255877309,
            "isWholeNumber": true
        },
        {
            "totalYards": 25.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0799,
            "probabilityOver": 0.9201,
            "isWholeNumber": false
        },
        {
            "totalYards": 26,
            "total": null,
            "occurrences": 79,
            "probabilityEqual": 0.0079,
            "probabilityUnder": 0.0805362362665054,
            "probabilityOver": 0.9194637637334946,
            "isWholeNumber": true
        },
        {
            "totalYards": 26.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0878,
            "probabilityOver": 0.9122,
            "isWholeNumber": false
        },
        {
            "totalYards": 27,
            "total": null,
            "occurrences": 98,
            "probabilityEqual": 0.0098,
            "probabilityUnder": 0.08866895576651182,
            "probabilityOver": 0.9113310442334882,
            "isWholeNumber": true
        },
        {
            "totalYards": 27.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0976,
            "probabilityOver": 0.9024,
            "isWholeNumber": false
        },
        {
            "totalYards": 28,
            "total": null,
            "occurrences": 96,
            "probabilityEqual": 0.0096,
            "probabilityUnder": 0.09854604200323101,
            "probabilityOver": 0.901453957996769,
            "isWholeNumber": true
        },
        {
            "totalYards": 28.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1072,
            "probabilityOver": 0.8928,
            "isWholeNumber": false
        },
        {
            "totalYards": 29,
            "total": null,
            "occurrences": 94,
            "probabilityEqual": 0.0094,
            "probabilityUnder": 0.1082172420755098,
            "probabilityOver": 0.8917827579244902,
            "isWholeNumber": true
        },
        {
            "totalYards": 29.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1166,
            "probabilityOver": 0.8834,
            "isWholeNumber": false
        },
        {
            "totalYards": 30,
            "total": null,
            "occurrences": 120,
            "probabilityEqual": 0.012,
            "probabilityUnder": 0.1180161943319838,
            "probabilityOver": 0.8819838056680162,
            "isWholeNumber": true
        },
        {
            "totalYards": 30.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1286,
            "probabilityOver": 0.8714,
            "isWholeNumber": false
        },
        {
            "totalYards": 31,
            "total": null,
            "occurrences": 126,
            "probabilityEqual": 0.0126,
            "probabilityUnder": 0.13024103706704476,
            "probabilityOver": 0.8697589629329552,
            "isWholeNumber": true
        },
        {
            "totalYards": 31.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1412,
            "probabilityOver": 0.8588,
            "isWholeNumber": false
        },
        {
            "totalYards": 32,
            "total": null,
            "occurrences": 151,
            "probabilityEqual": 0.0151,
            "probabilityUnder": 0.14336480861001116,
            "probabilityOver": 0.8566351913899888,
            "isWholeNumber": true
        },
        {
            "totalYards": 32.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1563,
            "probabilityOver": 0.8437,
            "isWholeNumber": false
        },
        {
            "totalYards": 33,
            "total": null,
            "occurrences": 141,
            "probabilityEqual": 0.0141,
            "probabilityUnder": 0.1585353484126179,
            "probabilityOver": 0.841464651587382,
            "isWholeNumber": true
        },
        {
            "totalYards": 33.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1704,
            "probabilityOver": 0.8296,
            "isWholeNumber": false
        },
        {
            "totalYards": 34,
            "total": null,
            "occurrences": 123,
            "probabilityEqual": 0.0123,
            "probabilityUnder": 0.1725220208565354,
            "probabilityOver": 0.8274779791434647,
            "isWholeNumber": true
        },
        {
            "totalYards": 34.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1827,
            "probabilityOver": 0.8173,
            "isWholeNumber": false
        },
        {
            "totalYards": 35,
            "total": null,
            "occurrences": 123,
            "probabilityEqual": 0.0123,
            "probabilityUnder": 0.184975194897236,
            "probabilityOver": 0.815024805102764,
            "isWholeNumber": true
        },
        {
            "totalYards": 35.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.195,
            "probabilityOver": 0.805,
            "isWholeNumber": false
        },
        {
            "totalYards": 36,
            "total": null,
            "occurrences": 143,
            "probabilityEqual": 0.0143,
            "probabilityUnder": 0.19782895404281223,
            "probabilityOver": 0.8021710459571878,
            "isWholeNumber": true
        },
        {
            "totalYards": 36.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2093,
            "probabilityOver": 0.7907,
            "isWholeNumber": false
        },
        {
            "totalYards": 37,
            "total": null,
            "occurrences": 139,
            "probabilityEqual": 0.0139,
            "probabilityUnder": 0.2122502788763817,
            "probabilityOver": 0.7877497211236183,
            "isWholeNumber": true
        },
        {
            "totalYards": 37.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2232,
            "probabilityOver": 0.7768,
            "isWholeNumber": false
        },
        {
            "totalYards": 38,
            "total": null,
            "occurrences": 149,
            "probabilityEqual": 0.0149,
            "probabilityUnder": 0.2265759821337935,
            "probabilityOver": 0.7734240178662065,
            "isWholeNumber": true
        },
        {
            "totalYards": 38.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2381,
            "probabilityOver": 0.7619,
            "isWholeNumber": false
        },
        {
            "totalYards": 39,
            "total": null,
            "occurrences": 150,
            "probabilityEqual": 0.015,
            "probabilityUnder": 0.2417258883248731,
            "probabilityOver": 0.7582741116751269,
            "isWholeNumber": true
        },
        {
            "totalYards": 39.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2531,
            "probabilityOver": 0.7469,
            "isWholeNumber": false
        },
        {
            "totalYards": 40,
            "total": null,
            "occurrences": 166,
            "probabilityEqual": 0.0166,
            "probabilityUnder": 0.2573723815334554,
            "probabilityOver": 0.7426276184665447,
            "isWholeNumber": true
        },
        {
            "totalYards": 40.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2697,
            "probabilityOver": 0.7303,
            "isWholeNumber": false
        },
        {
            "totalYards": 41,
            "total": null,
            "occurrences": 134,
            "probabilityEqual": 0.0134,
            "probabilityUnder": 0.27336306507196434,
            "probabilityOver": 0.7266369349280357,
            "isWholeNumber": true
        },
        {
            "totalYards": 41.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2831,
            "probabilityOver": 0.7169,
            "isWholeNumber": false
        },
        {
            "totalYards": 42,
            "total": null,
            "occurrences": 161,
            "probabilityEqual": 0.0161,
            "probabilityUnder": 0.2877324931395467,
            "probabilityOver": 0.7122675068604533,
            "isWholeNumber": true
        },
        {
            "totalYards": 42.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2992,
            "probabilityOver": 0.7008,
            "isWholeNumber": false
        },
        {
            "totalYards": 43,
            "total": null,
            "occurrences": 147,
            "probabilityEqual": 0.0147,
            "probabilityUnder": 0.3036638587232315,
            "probabilityOver": 0.6963361412767685,
            "isWholeNumber": true
        },
        {
            "totalYards": 43.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3139,
            "probabilityOver": 0.6861,
            "isWholeNumber": false
        },
        {
            "totalYards": 44,
            "total": null,
            "occurrences": 143,
            "probabilityEqual": 0.0143,
            "probabilityUnder": 0.3184538906360962,
            "probabilityOver": 0.6815461093639038,
            "isWholeNumber": true
        },
        {
            "totalYards": 44.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3282,
            "probabilityOver": 0.6718,
            "isWholeNumber": false
        },
        {
            "totalYards": 45,
            "total": null,
            "occurrences": 166,
            "probabilityEqual": 0.0166,
            "probabilityUnder": 0.33374008541793776,
            "probabilityOver": 0.6662599145820622,
            "isWholeNumber": true
        },
        {
            "totalYards": 45.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3448,
            "probabilityOver": 0.6552,
            "isWholeNumber": false
        },
        {
            "totalYards": 46,
            "total": null,
            "occurrences": 166,
            "probabilityEqual": 0.0166,
            "probabilityUnder": 0.35062029692902175,
            "probabilityOver": 0.6493797030709783,
            "isWholeNumber": true
        },
        {
            "totalYards": 46.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3614,
            "probabilityOver": 0.6386,
            "isWholeNumber": false
        },
        {
            "totalYards": 47,
            "total": null,
            "occurrences": 163,
            "probabilityEqual": 0.0163,
            "probabilityUnder": 0.3673884314323473,
            "probabilityOver": 0.6326115685676528,
            "isWholeNumber": true
        },
        {
            "totalYards": 47.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3777,
            "probabilityOver": 0.6223,
            "isWholeNumber": false
        },
        {
            "totalYards": 48,
            "total": null,
            "occurrences": 160,
            "probabilityEqual": 0.016,
            "probabilityUnder": 0.38384146341463415,
            "probabilityOver": 0.6161585365853659,
            "isWholeNumber": true
        },
        {
            "totalYards": 48.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3937,
            "probabilityOver": 0.6063,
            "isWholeNumber": false
        },
        {
            "totalYards": 49,
            "total": null,
            "occurrences": 200,
            "probabilityEqual": 0.02,
            "probabilityUnder": 0.401734693877551,
            "probabilityOver": 0.598265306122449,
            "isWholeNumber": true
        },
        {
            "totalYards": 49.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4137,
            "probabilityOver": 0.5863,
            "isWholeNumber": false
        },
        {
            "totalYards": 50,
            "total": null,
            "occurrences": 171,
            "probabilityEqual": 0.0171,
            "probabilityUnder": 0.4208973445925323,
            "probabilityOver": 0.5791026554074677,
            "isWholeNumber": true
        },
        {
            "totalYards": 50.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4308,
            "probabilityOver": 0.5692,
            "isWholeNumber": false
        },
        {
            "totalYards": 51,
            "total": null,
            "occurrences": 171,
            "probabilityEqual": 0.0171,
            "probabilityUnder": 0.4382948417946892,
            "probabilityOver": 0.5617051582053109,
            "isWholeNumber": true
        },
        {
            "totalYards": 51.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4479,
            "probabilityOver": 0.5521,
            "isWholeNumber": false
        },
        {
            "totalYards": 52,
            "total": null,
            "occurrences": 133,
            "probabilityEqual": 0.0133,
            "probabilityUnder": 0.45393736698084525,
            "probabilityOver": 0.5460626330191548,
            "isWholeNumber": true
        },
        {
            "totalYards": 52.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4612,
            "probabilityOver": 0.5388,
            "isWholeNumber": false
        },
        {
            "totalYards": 53,
            "total": null,
            "occurrences": 164,
            "probabilityEqual": 0.0164,
            "probabilityUnder": 0.46888979259861735,
            "probabilityOver": 0.5311102074013827,
            "isWholeNumber": true
        },
        {
            "totalYards": 53.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4776,
            "probabilityOver": 0.5224,
            "isWholeNumber": false
        },
        {
            "totalYards": 54,
            "total": null,
            "occurrences": 168,
            "probabilityEqual": 0.0168,
            "probabilityUnder": 0.48576078112286414,
            "probabilityOver": 0.5142392188771359,
            "isWholeNumber": true
        },
        {
            "totalYards": 54.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4944,
            "probabilityOver": 0.5056,
            "isWholeNumber": false
        },
        {
            "totalYards": 55,
            "total": null,
            "occurrences": 157,
            "probabilityEqual": 0.0157,
            "probabilityUnder": 0.5022858884486437,
            "probabilityOver": 0.4977141115513563,
            "isWholeNumber": true
        },
        {
            "totalYards": 55.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5101,
            "probabilityOver": 0.4899,
            "isWholeNumber": false
        },
        {
            "totalYards": 56,
            "total": null,
            "occurrences": 137,
            "probabilityEqual": 0.0137,
            "probabilityUnder": 0.5171854405353341,
            "probabilityOver": 0.48281455946466595,
            "isWholeNumber": true
        },
        {
            "totalYards": 56.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5238,
            "probabilityOver": 0.4762,
            "isWholeNumber": false
        },
        {
            "totalYards": 57,
            "total": null,
            "occurrences": 147,
            "probabilityEqual": 0.0147,
            "probabilityUnder": 0.5316147366284381,
            "probabilityOver": 0.46838526337156194,
            "isWholeNumber": true
        },
        {
            "totalYards": 57.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5385,
            "probabilityOver": 0.4615,
            "isWholeNumber": false
        },
        {
            "totalYards": 58,
            "total": null,
            "occurrences": 138,
            "probabilityEqual": 0.0138,
            "probabilityUnder": 0.5460352869600487,
            "probabilityOver": 0.45396471303995134,
            "isWholeNumber": true
        },
        {
            "totalYards": 58.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5523,
            "probabilityOver": 0.4477,
            "isWholeNumber": false
        },
        {
            "totalYards": 59,
            "total": null,
            "occurrences": 153,
            "probabilityEqual": 0.0153,
            "probabilityUnder": 0.5608814867472327,
            "probabilityOver": 0.43911851325276735,
            "isWholeNumber": true
        },
        {
            "totalYards": 59.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5676,
            "probabilityOver": 0.4324,
            "isWholeNumber": false
        },
        {
            "totalYards": 60,
            "total": null,
            "occurrences": 157,
            "probabilityEqual": 0.0157,
            "probabilityUnder": 0.5766534593111856,
            "probabilityOver": 0.4233465406888144,
            "isWholeNumber": true
        },
        {
            "totalYards": 60.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5833,
            "probabilityOver": 0.4167,
            "isWholeNumber": false
        },
        {
            "totalYards": 61,
            "total": null,
            "occurrences": 150,
            "probabilityEqual": 0.015,
            "probabilityUnder": 0.5921827411167513,
            "probabilityOver": 0.4078172588832487,
            "isWholeNumber": true
        },
        {
            "totalYards": 61.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5983,
            "probabilityOver": 0.4017,
            "isWholeNumber": false
        },
        {
            "totalYards": 62,
            "total": null,
            "occurrences": 148,
            "probabilityEqual": 0.0148,
            "probabilityUnder": 0.6072878603329274,
            "probabilityOver": 0.3927121396670727,
            "isWholeNumber": true
        },
        {
            "totalYards": 62.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6131,
            "probabilityOver": 0.3869,
            "isWholeNumber": false
        },
        {
            "totalYards": 63,
            "total": null,
            "occurrences": 118,
            "probabilityEqual": 0.0118,
            "probabilityUnder": 0.6204209674155029,
            "probabilityOver": 0.37957903258449704,
            "isWholeNumber": true
        },
        {
            "totalYards": 63.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6249,
            "probabilityOver": 0.3751,
            "isWholeNumber": false
        },
        {
            "totalYards": 64,
            "total": null,
            "occurrences": 118,
            "probabilityEqual": 0.0118,
            "probabilityUnder": 0.6323618700667881,
            "probabilityOver": 0.3676381299332119,
            "isWholeNumber": true
        },
        {
            "totalYards": 64.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6367,
            "probabilityOver": 0.3633,
            "isWholeNumber": false
        },
        {
            "totalYards": 65,
            "total": null,
            "occurrences": 129,
            "probabilityEqual": 0.0129,
            "probabilityUnder": 0.6450207679059873,
            "probabilityOver": 0.3549792320940128,
            "isWholeNumber": true
        },
        {
            "totalYards": 65.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6496,
            "probabilityOver": 0.3504,
            "isWholeNumber": false
        },
        {
            "totalYards": 66,
            "total": null,
            "occurrences": 147,
            "probabilityEqual": 0.0147,
            "probabilityUnder": 0.6592915863188876,
            "probabilityOver": 0.3407084136811124,
            "isWholeNumber": true
        },
        {
            "totalYards": 66.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6643,
            "probabilityOver": 0.3357,
            "isWholeNumber": false
        },
        {
            "totalYards": 67,
            "total": null,
            "occurrences": 122,
            "probabilityEqual": 0.0122,
            "probabilityUnder": 0.6725045555780522,
            "probabilityOver": 0.3274954444219478,
            "isWholeNumber": true
        },
        {
            "totalYards": 67.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6765,
            "probabilityOver": 0.3235,
            "isWholeNumber": false
        },
        {
            "totalYards": 68,
            "total": null,
            "occurrences": 97,
            "probabilityEqual": 0.0097,
            "probabilityUnder": 0.6831263253559527,
            "probabilityOver": 0.31687367464404725,
            "isWholeNumber": true
        },
        {
            "totalYards": 68.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6862,
            "probabilityOver": 0.3138,
            "isWholeNumber": false
        },
        {
            "totalYards": 69,
            "total": null,
            "occurrences": 122,
            "probabilityEqual": 0.0122,
            "probabilityUnder": 0.6946750354322737,
            "probabilityOver": 0.3053249645677263,
            "isWholeNumber": true
        },
        {
            "totalYards": 69.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6984,
            "probabilityOver": 0.3016,
            "isWholeNumber": false
        },
        {
            "totalYards": 70,
            "total": null,
            "occurrences": 110,
            "probabilityEqual": 0.011,
            "probabilityUnder": 0.7061678463094034,
            "probabilityOver": 0.29383215369059656,
            "isWholeNumber": true
        },
        {
            "totalYards": 70.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7094,
            "probabilityOver": 0.2906,
            "isWholeNumber": false
        },
        {
            "totalYards": 71,
            "total": null,
            "occurrences": 104,
            "probabilityEqual": 0.0104,
            "probabilityUnder": 0.7168552950687146,
            "probabilityOver": 0.28314470493128535,
            "isWholeNumber": true
        },
        {
            "totalYards": 71.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7198,
            "probabilityOver": 0.2802,
            "isWholeNumber": false
        },
        {
            "totalYards": 72,
            "total": null,
            "occurrences": 95,
            "probabilityEqual": 0.0095,
            "probabilityUnder": 0.726703685007572,
            "probabilityOver": 0.27329631499242807,
            "isWholeNumber": true
        },
        {
            "totalYards": 72.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7293,
            "probabilityOver": 0.2707,
            "isWholeNumber": false
        },
        {
            "totalYards": 73,
            "total": null,
            "occurrences": 114,
            "probabilityEqual": 0.0114,
            "probabilityUnder": 0.7377098927776654,
            "probabilityOver": 0.2622901072223346,
            "isWholeNumber": true
        },
        {
            "totalYards": 73.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7407,
            "probabilityOver": 0.2593,
            "isWholeNumber": false
        },
        {
            "totalYards": 74,
            "total": null,
            "occurrences": 91,
            "probabilityEqual": 0.0091,
            "probabilityUnder": 0.7475022706630337,
            "probabilityOver": 0.2524977293369664,
            "isWholeNumber": true
        },
        {
            "totalYards": 74.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7498,
            "probabilityOver": 0.2502,
            "isWholeNumber": false
        },
        {
            "totalYards": 75,
            "total": null,
            "occurrences": 72,
            "probabilityEqual": 0.0072,
            "probabilityUnder": 0.7552377115229654,
            "probabilityOver": 0.24476228847703466,
            "isWholeNumber": true
        },
        {
            "totalYards": 75.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.757,
            "probabilityOver": 0.243,
            "isWholeNumber": false
        },
        {
            "totalYards": 76,
            "total": null,
            "occurrences": 85,
            "probabilityEqual": 0.0085,
            "probabilityUnder": 0.7634896621280888,
            "probabilityOver": 0.23651033787191125,
            "isWholeNumber": true
        },
        {
            "totalYards": 76.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7655,
            "probabilityOver": 0.2345,
            "isWholeNumber": false
        },
        {
            "totalYards": 77,
            "total": null,
            "occurrences": 89,
            "probabilityEqual": 0.0089,
            "probabilityUnder": 0.7723741297548179,
            "probabilityOver": 0.22762587024518213,
            "isWholeNumber": true
        },
        {
            "totalYards": 77.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7744,
            "probabilityOver": 0.2256,
            "isWholeNumber": false
        },
        {
            "totalYards": 78,
            "total": null,
            "occurrences": 96,
            "probabilityEqual": 0.0096,
            "probabilityUnder": 0.7819063004846527,
            "probabilityOver": 0.21809369951534732,
            "isWholeNumber": true
        },
        {
            "totalYards": 78.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.784,
            "probabilityOver": 0.216,
            "isWholeNumber": false
        },
        {
            "totalYards": 79,
            "total": null,
            "occurrences": 69,
            "probabilityEqual": 0.0069,
            "probabilityUnder": 0.7894471855805055,
            "probabilityOver": 0.2105528144194945,
            "isWholeNumber": true
        },
        {
            "totalYards": 79.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7909,
            "probabilityOver": 0.2091,
            "isWholeNumber": false
        },
        {
            "totalYards": 80,
            "total": null,
            "occurrences": 88,
            "probabilityEqual": 0.0088,
            "probabilityUnder": 0.7979217110573043,
            "probabilityOver": 0.20207828894269572,
            "isWholeNumber": true
        },
        {
            "totalYards": 80.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7997,
            "probabilityOver": 0.2003,
            "isWholeNumber": false
        },
        {
            "totalYards": 81,
            "total": null,
            "occurrences": 74,
            "probabilityEqual": 0.0074,
            "probabilityUnder": 0.805661898045537,
            "probabilityOver": 0.19433810195446302,
            "isWholeNumber": true
        },
        {
            "totalYards": 81.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8071,
            "probabilityOver": 0.1929,
            "isWholeNumber": false
        },
        {
            "totalYards": 82,
            "total": null,
            "occurrences": 74,
            "probabilityEqual": 0.0074,
            "probabilityUnder": 0.81311706629055,
            "probabilityOver": 0.18688293370944992,
            "isWholeNumber": true
        },
        {
            "totalYards": 82.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8145,
            "probabilityOver": 0.1855,
            "isWholeNumber": false
        },
        {
            "totalYards": 83,
            "total": null,
            "occurrences": 83,
            "probabilityEqual": 0.0083,
            "probabilityUnder": 0.8213169305233438,
            "probabilityOver": 0.17868306947665624,
            "isWholeNumber": true
        },
        {
            "totalYards": 83.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8228,
            "probabilityOver": 0.1772,
            "isWholeNumber": false
        },
        {
            "totalYards": 84,
            "total": null,
            "occurrences": 81,
            "probabilityEqual": 0.0081,
            "probabilityUnder": 0.8295191047484626,
            "probabilityOver": 0.17048089525153745,
            "isWholeNumber": true
        },
        {
            "totalYards": 84.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8309,
            "probabilityOver": 0.1691,
            "isWholeNumber": false
        },
        {
            "totalYards": 85,
            "total": null,
            "occurrences": 74,
            "probabilityEqual": 0.0074,
            "probabilityUnder": 0.8370944992947814,
            "probabilityOver": 0.16290550070521861,
            "isWholeNumber": true
        },
        {
            "totalYards": 85.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8383,
            "probabilityOver": 0.1617,
            "isWholeNumber": false
        },
        {
            "totalYards": 86,
            "total": null,
            "occurrences": 56,
            "probabilityEqual": 0.0056,
            "probabilityUnder": 0.8430209171359614,
            "probabilityOver": 0.1569790828640386,
            "isWholeNumber": true
        },
        {
            "totalYards": 86.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8439,
            "probabilityOver": 0.1561,
            "isWholeNumber": false
        },
        {
            "totalYards": 87,
            "total": null,
            "occurrences": 71,
            "probabilityEqual": 0.0071,
            "probabilityUnder": 0.8499345351999195,
            "probabilityOver": 0.15006546480008057,
            "isWholeNumber": true
        },
        {
            "totalYards": 87.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.851,
            "probabilityOver": 0.149,
            "isWholeNumber": false
        },
        {
            "totalYards": 88,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.8556203498894027,
            "probabilityOver": 0.14437965011059722,
            "isWholeNumber": true
        },
        {
            "totalYards": 88.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8564,
            "probabilityOver": 0.1436,
            "isWholeNumber": false
        },
        {
            "totalYards": 89,
            "total": null,
            "occurrences": 57,
            "probabilityEqual": 0.0057,
            "probabilityUnder": 0.8613094639444836,
            "probabilityOver": 0.13869053605551646,
            "isWholeNumber": true
        },
        {
            "totalYards": 89.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8621,
            "probabilityOver": 0.1379,
            "isWholeNumber": false
        },
        {
            "totalYards": 90,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.8680024164317358,
            "probabilityOver": 0.1319975835682642,
            "isWholeNumber": true
        },
        {
            "totalYards": 90.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8689,
            "probabilityOver": 0.1311,
            "isWholeNumber": false
        },
        {
            "totalYards": 91,
            "total": null,
            "occurrences": 52,
            "probabilityEqual": 0.0052,
            "probabilityUnder": 0.8734418978689183,
            "probabilityOver": 0.12655810213108162,
            "isWholeNumber": true
        },
        {
            "totalYards": 91.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8741,
            "probabilityOver": 0.1259,
            "isWholeNumber": false
        },
        {
            "totalYards": 92,
            "total": null,
            "occurrences": 42,
            "probabilityEqual": 0.0042,
            "probabilityUnder": 0.8777867041574613,
            "probabilityOver": 0.12221329584253866,
            "isWholeNumber": true
        },
        {
            "totalYards": 92.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8783,
            "probabilityOver": 0.1217,
            "isWholeNumber": false
        },
        {
            "totalYards": 93,
            "total": null,
            "occurrences": 44,
            "probabilityEqual": 0.0044,
            "probabilityUnder": 0.8821815990357573,
            "probabilityOver": 0.11781840096424266,
            "isWholeNumber": true
        },
        {
            "totalYards": 93.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8827,
            "probabilityOver": 0.1173,
            "isWholeNumber": false
        },
        {
            "totalYards": 94,
            "total": null,
            "occurrences": 44,
            "probabilityEqual": 0.0044,
            "probabilityUnder": 0.8866010445962234,
            "probabilityOver": 0.11339895540377662,
            "isWholeNumber": true
        },
        {
            "totalYards": 94.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8871,
            "probabilityOver": 0.1129,
            "isWholeNumber": false
        },
        {
            "totalYards": 95,
            "total": null,
            "occurrences": 53,
            "probabilityEqual": 0.0053,
            "probabilityUnder": 0.8918266814114808,
            "probabilityOver": 0.10817331858851915,
            "isWholeNumber": true
        },
        {
            "totalYards": 95.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8924,
            "probabilityOver": 0.1076,
            "isWholeNumber": false
        },
        {
            "totalYards": 96,
            "total": null,
            "occurrences": 46,
            "probabilityEqual": 0.0046,
            "probabilityUnder": 0.8965240104480611,
            "probabilityOver": 0.10347598955193892,
            "isWholeNumber": true
        },
        {
            "totalYards": 96.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.897,
            "probabilityOver": 0.103,
            "isWholeNumber": false
        },
        {
            "totalYards": 97,
            "total": null,
            "occurrences": 38,
            "probabilityEqual": 0.0038,
            "probabilityUnder": 0.9004216020879342,
            "probabilityOver": 0.09957839791206585,
            "isWholeNumber": true
        },
        {
            "totalYards": 97.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9008,
            "probabilityOver": 0.0992,
            "isWholeNumber": false
        },
        {
            "totalYards": 98,
            "total": null,
            "occurrences": 47,
            "probabilityEqual": 0.0047,
            "probabilityUnder": 0.9050537526373957,
            "probabilityOver": 0.09494624736260424,
            "isWholeNumber": true
        },
        {
            "totalYards": 98.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9055,
            "probabilityOver": 0.0945,
            "isWholeNumber": false
        },
        {
            "totalYards": 99,
            "total": null,
            "occurrences": 37,
            "probabilityEqual": 0.0037,
            "probabilityUnder": 0.908862792331627,
            "probabilityOver": 0.09113720766837298,
            "isWholeNumber": true
        },
        {
            "totalYards": 99.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9092,
            "probabilityOver": 0.0908,
            "isWholeNumber": false
        },
        {
            "totalYards": 100,
            "total": null,
            "occurrences": 52,
            "probabilityEqual": 0.0052,
            "probabilityUnder": 0.9139525532770406,
            "probabilityOver": 0.08604744672295939,
            "isWholeNumber": true
        },
        {
            "totalYards": 100.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9144,
            "probabilityOver": 0.0856,
            "isWholeNumber": false
        },
        {
            "totalYards": 101,
            "total": null,
            "occurrences": 30,
            "probabilityEqual": 0.003,
            "probabilityUnder": 0.9171514543630893,
            "probabilityOver": 0.08284854563691073,
            "isWholeNumber": true
        },
        {
            "totalYards": 101.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9174,
            "probabilityOver": 0.0826,
            "isWholeNumber": false
        },
        {
            "totalYards": 102,
            "total": null,
            "occurrences": 37,
            "probabilityEqual": 0.0037,
            "probabilityUnder": 0.9208069858476362,
            "probabilityOver": 0.07919301415236375,
            "isWholeNumber": true
        },
        {
            "totalYards": 102.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9211,
            "probabilityOver": 0.0789,
            "isWholeNumber": false
        },
        {
            "totalYards": 103,
            "total": null,
            "occurrences": 38,
            "probabilityEqual": 0.0038,
            "probabilityUnder": 0.9246135314193937,
            "probabilityOver": 0.0753864685806063,
            "isWholeNumber": true
        },
        {
            "totalYards": 103.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9249,
            "probabilityOver": 0.0751,
            "isWholeNumber": false
        },
        {
            "totalYards": 104,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.9275900110319928,
            "probabilityOver": 0.07240998896800722,
            "isWholeNumber": true
        },
        {
            "totalYards": 104.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9278,
            "probabilityOver": 0.0722,
            "isWholeNumber": false
        },
        {
            "totalYards": 105,
            "total": null,
            "occurrences": 30,
            "probabilityEqual": 0.003,
            "probabilityUnder": 0.9305917753259779,
            "probabilityOver": 0.06940822467402206,
            "isWholeNumber": true
        },
        {
            "totalYards": 105.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9308,
            "probabilityOver": 0.0692,
            "isWholeNumber": false
        },
        {
            "totalYards": 106,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.9334135579622944,
            "probabilityOver": 0.06658644203770557,
            "isWholeNumber": true
        },
        {
            "totalYards": 106.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9336,
            "probabilityOver": 0.0664,
            "isWholeNumber": false
        },
        {
            "totalYards": 107,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.9357522301292974,
            "probabilityOver": 0.06424776987070262,
            "isWholeNumber": true
        },
        {
            "totalYards": 107.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9359,
            "probabilityOver": 0.0641,
            "isWholeNumber": false
        },
        {
            "totalYards": 108,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.938527878058564,
            "probabilityOver": 0.061472121941436024,
            "isWholeNumber": true
        },
        {
            "totalYards": 108.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9387,
            "probabilityOver": 0.0613,
            "isWholeNumber": false
        },
        {
            "totalYards": 109,
            "total": null,
            "occurrences": 25,
            "probabilityEqual": 0.0025,
            "probabilityUnder": 0.9410526315789474,
            "probabilityOver": 0.05894736842105263,
            "isWholeNumber": true
        },
        {
            "totalYards": 109.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9412,
            "probabilityOver": 0.0588,
            "isWholeNumber": false
        },
        {
            "totalYards": 110,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.9438427597272363,
            "probabilityOver": 0.05615724027276374,
            "isWholeNumber": true
        },
        {
            "totalYards": 110.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.944,
            "probabilityOver": 0.056,
            "isWholeNumber": false
        },
        {
            "totalYards": 111,
            "total": null,
            "occurrences": 26,
            "probabilityEqual": 0.0026,
            "probabilityUnder": 0.946460798074995,
            "probabilityOver": 0.05353920192500501,
            "isWholeNumber": true
        },
        {
            "totalYards": 111.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9466,
            "probabilityOver": 0.0534,
            "isWholeNumber": false
        },
        {
            "totalYards": 112,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9484019637310891,
            "probabilityOver": 0.05159803626891093,
            "isWholeNumber": true
        },
        {
            "totalYards": 112.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9485,
            "probabilityOver": 0.0515,
            "isWholeNumber": false
        },
        {
            "totalYards": 113,
            "total": null,
            "occurrences": 28,
            "probabilityEqual": 0.0028,
            "probabilityUnder": 0.9511632571199358,
            "probabilityOver": 0.04883674288006418,
            "isWholeNumber": true
        },
        {
            "totalYards": 113.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9513,
            "probabilityOver": 0.0487,
            "isWholeNumber": false
        },
        {
            "totalYards": 114,
            "total": null,
            "occurrences": 22,
            "probabilityEqual": 0.0022,
            "probabilityUnder": 0.9533974744437763,
            "probabilityOver": 0.04660252555622369,
            "isWholeNumber": true
        },
        {
            "totalYards": 114.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9535,
            "probabilityOver": 0.0465,
            "isWholeNumber": false
        },
        {
            "totalYards": 115,
            "total": null,
            "occurrences": 34,
            "probabilityEqual": 0.0034,
            "probabilityUnder": 0.9567529600642184,
            "probabilityOver": 0.043247039935781655,
            "isWholeNumber": true
        },
        {
            "totalYards": 115.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9569,
            "probabilityOver": 0.0431,
            "isWholeNumber": false
        },
        {
            "totalYards": 116,
            "total": null,
            "occurrences": 24,
            "probabilityEqual": 0.0024,
            "probabilityUnder": 0.9592020850040096,
            "probabilityOver": 0.04079791499599038,
            "isWholeNumber": true
        },
        {
            "totalYards": 116.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9593,
            "probabilityOver": 0.0407,
            "isWholeNumber": false
        },
        {
            "totalYards": 117,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9611261396653642,
            "probabilityOver": 0.03887386033463581,
            "isWholeNumber": true
        },
        {
            "totalYards": 117.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9612,
            "probabilityOver": 0.0388,
            "isWholeNumber": false
        },
        {
            "totalYards": 118,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.9628368225984173,
            "probabilityOver": 0.03716317740158269,
            "isWholeNumber": true
        },
        {
            "totalYards": 118.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9629,
            "probabilityOver": 0.0371,
            "isWholeNumber": false
        },
        {
            "totalYards": 119,
            "total": null,
            "occurrences": 14,
            "probabilityEqual": 0.0014,
            "probabilityUnder": 0.9642499499299019,
            "probabilityOver": 0.035750050070098134,
            "isWholeNumber": true
        },
        {
            "totalYards": 119.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9643,
            "probabilityOver": 0.0357,
            "isWholeNumber": false
        },
        {
            "totalYards": 120,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9661356577497244,
            "probabilityOver": 0.03386434225027552,
            "isWholeNumber": true
        },
        {
            "totalYards": 120.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9662,
            "probabilityOver": 0.0338,
            "isWholeNumber": false
        },
        {
            "totalYards": 121,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.9678453370730241,
            "probabilityOver": 0.03215466292697586,
            "isWholeNumber": true
        },
        {
            "totalYards": 121.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9679,
            "probabilityOver": 0.0321,
            "isWholeNumber": false
        },
        {
            "totalYards": 122,
            "total": null,
            "occurrences": 14,
            "probabilityEqual": 0.0014,
            "probabilityUnder": 0.9692569597436411,
            "probabilityOver": 0.030743040256358902,
            "isWholeNumber": true
        },
        {
            "totalYards": 122.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9693,
            "probabilityOver": 0.0307,
            "isWholeNumber": false
        },
        {
            "totalYards": 123,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9701731558402562,
            "probabilityOver": 0.02982684415974377,
            "isWholeNumber": true
        },
        {
            "totalYards": 123.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9702,
            "probabilityOver": 0.0298,
            "isWholeNumber": false
        },
        {
            "totalYards": 124,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.971073966569913,
            "probabilityOver": 0.028926033430087077,
            "isWholeNumber": true
        },
        {
            "totalYards": 124.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9711,
            "probabilityOver": 0.0289,
            "isWholeNumber": false
        },
        {
            "totalYards": 125,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.9721693863249574,
            "probabilityOver": 0.027830613675042547,
            "isWholeNumber": true
        },
        {
            "totalYards": 125.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9722,
            "probabilityOver": 0.0278,
            "isWholeNumber": false
        },
        {
            "totalYards": 126,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.97336804164998,
            "probabilityOver": 0.026631958350020024,
            "isWholeNumber": true
        },
        {
            "totalYards": 126.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9734,
            "probabilityOver": 0.0266,
            "isWholeNumber": false
        },
        {
            "totalYards": 127,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.9746670671873435,
            "probabilityOver": 0.025332932812656455,
            "isWholeNumber": true
        },
        {
            "totalYards": 127.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9747,
            "probabilityOver": 0.0253,
            "isWholeNumber": false
        },
        {
            "totalYards": 128,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.9758710452543051,
            "probabilityOver": 0.024128954745694833,
            "isWholeNumber": true
        },
        {
            "totalYards": 128.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9759,
            "probabilityOver": 0.0241,
            "isWholeNumber": false
        },
        {
            "totalYards": 129,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.9770724869843812,
            "probabilityOver": 0.022927513015618742,
            "isWholeNumber": true
        },
        {
            "totalYards": 129.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9771,
            "probabilityOver": 0.0229,
            "isWholeNumber": false
        },
        {
            "totalYards": 130,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9776866119671803,
            "probabilityOver": 0.02231338803281969,
            "isWholeNumber": true
        },
        {
            "totalYards": 130.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9777,
            "probabilityOver": 0.0223,
            "isWholeNumber": false
        },
        {
            "totalYards": 131,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.9786786786786786,
            "probabilityOver": 0.02132132132132132,
            "isWholeNumber": true
        },
        {
            "totalYards": 131.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9787,
            "probabilityOver": 0.0213,
            "isWholeNumber": false
        },
        {
            "totalYards": 132,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.9799739661560029,
            "probabilityOver": 0.020026033843997197,
            "isWholeNumber": true
        },
        {
            "totalYards": 132.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.98,
            "probabilityOver": 0.02,
            "isWholeNumber": false
        },
        {
            "totalYards": 133,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9804902451225613,
            "probabilityOver": 0.01950975487743872,
            "isWholeNumber": true
        },
        {
            "totalYards": 133.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9805,
            "probabilityOver": 0.0195,
            "isWholeNumber": false
        },
        {
            "totalYards": 134,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.9815797377114827,
            "probabilityOver": 0.01842026228851737,
            "isWholeNumber": true
        },
        {
            "totalYards": 134.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9816,
            "probabilityOver": 0.0184,
            "isWholeNumber": false
        },
        {
            "totalYards": 135,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9821893135881529,
            "probabilityOver": 0.017810686411847108,
            "isWholeNumber": true
        },
        {
            "totalYards": 135.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9822,
            "probabilityOver": 0.0178,
            "isWholeNumber": false
        },
        {
            "totalYards": 136,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9830847762986687,
            "probabilityOver": 0.016915223701331198,
            "isWholeNumber": true
        },
        {
            "totalYards": 136.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9831,
            "probabilityOver": 0.0169,
            "isWholeNumber": false
        },
        {
            "totalYards": 137,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.9842811373648378,
            "probabilityOver": 0.015718862635162194,
            "isWholeNumber": true
        },
        {
            "totalYards": 137.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9843,
            "probabilityOver": 0.0157,
            "isWholeNumber": false
        },
        {
            "totalYards": 138,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.984792396198099,
            "probabilityOver": 0.01520760380190095,
            "isWholeNumber": true
        },
        {
            "totalYards": 138.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9848,
            "probabilityOver": 0.0152,
            "isWholeNumber": false
        },
        {
            "totalYards": 139,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9852926463231616,
            "probabilityOver": 0.01470735367683842,
            "isWholeNumber": true
        },
        {
            "totalYards": 139.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9853,
            "probabilityOver": 0.0147,
            "isWholeNumber": false
        },
        {
            "totalYards": 140,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9857928964482241,
            "probabilityOver": 0.014207103551775888,
            "isWholeNumber": true
        },
        {
            "totalYards": 140.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9858,
            "probabilityOver": 0.0142,
            "isWholeNumber": false
        },
        {
            "totalYards": 141,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9862931465732866,
            "probabilityOver": 0.013706853426713357,
            "isWholeNumber": true
        },
        {
            "totalYards": 141.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9863,
            "probabilityOver": 0.0137,
            "isWholeNumber": false
        },
        {
            "totalYards": 142,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9867933966983492,
            "probabilityOver": 0.013206603301650825,
            "isWholeNumber": true
        },
        {
            "totalYards": 142.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9868,
            "probabilityOver": 0.0132,
            "isWholeNumber": false
        },
        {
            "totalYards": 143,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9872936468234117,
            "probabilityOver": 0.012706353176588294,
            "isWholeNumber": true
        },
        {
            "totalYards": 143.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9873,
            "probabilityOver": 0.0127,
            "isWholeNumber": false
        },
        {
            "totalYards": 144,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9879915941158811,
            "probabilityOver": 0.012008405884118884,
            "isWholeNumber": true
        },
        {
            "totalYards": 144.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.988,
            "probabilityOver": 0.012,
            "isWholeNumber": false
        },
        {
            "totalYards": 145,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9888900010009009,
            "probabilityOver": 0.01110999899909919,
            "isWholeNumber": true
        },
        {
            "totalYards": 145.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9889,
            "probabilityOver": 0.0111,
            "isWholeNumber": false
        },
        {
            "totalYards": 146,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9890978195639127,
            "probabilityOver": 0.010902180436087218,
            "isWholeNumber": true
        },
        {
            "totalYards": 146.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9891,
            "probabilityOver": 0.0109,
            "isWholeNumber": false
        },
        {
            "totalYards": 147,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9896938162897738,
            "probabilityOver": 0.010306183710226135,
            "isWholeNumber": true
        },
        {
            "totalYards": 147.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9897,
            "probabilityOver": 0.0103,
            "isWholeNumber": false
        },
        {
            "totalYards": 148,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9900960384153662,
            "probabilityOver": 0.009903961584633853,
            "isWholeNumber": true
        },
        {
            "totalYards": 148.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9901,
            "probabilityOver": 0.0099,
            "isWholeNumber": false
        },
        {
            "totalYards": 149,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9902980596119224,
            "probabilityOver": 0.009701940388077616,
            "isWholeNumber": true
        },
        {
            "totalYards": 149.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9903,
            "probabilityOver": 0.0097,
            "isWholeNumber": false
        },
        {
            "totalYards": 150,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.990498099619924,
            "probabilityOver": 0.009501900380076015,
            "isWholeNumber": true
        },
        {
            "totalYards": 150.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9905,
            "probabilityOver": 0.0095,
            "isWholeNumber": false
        },
        {
            "totalYards": 151,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9908963585434174,
            "probabilityOver": 0.009103641456582634,
            "isWholeNumber": true
        },
        {
            "totalYards": 151.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9909,
            "probabilityOver": 0.0091,
            "isWholeNumber": false
        },
        {
            "totalYards": 152,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.990999099909991,
            "probabilityOver": 0.009000900090009001,
            "isWholeNumber": true
        },
        {
            "totalYards": 152.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.991,
            "probabilityOver": 0.009,
            "isWholeNumber": false
        },
        {
            "totalYards": 153,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9916941859301511,
            "probabilityOver": 0.008305814069848894,
            "isWholeNumber": true
        },
        {
            "totalYards": 153.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9917,
            "probabilityOver": 0.0083,
            "isWholeNumber": false
        },
        {
            "totalYards": 154,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9918983796759352,
            "probabilityOver": 0.008101620324064814,
            "isWholeNumber": true
        },
        {
            "totalYards": 154.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9919,
            "probabilityOver": 0.0081,
            "isWholeNumber": false
        },
        {
            "totalYards": 156,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.992296918767507,
            "probabilityOver": 0.007703081232492998,
            "isWholeNumber": true
        },
        {
            "totalYards": 156.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9923,
            "probabilityOver": 0.0077,
            "isWholeNumber": false
        },
        {
            "totalYards": 157,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9926970788315326,
            "probabilityOver": 0.007302921168467387,
            "isWholeNumber": true
        },
        {
            "totalYards": 157.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9927,
            "probabilityOver": 0.0073,
            "isWholeNumber": false
        },
        {
            "totalYards": 159,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9930972388955582,
            "probabilityOver": 0.006902761104441777,
            "isWholeNumber": true
        },
        {
            "totalYards": 159.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9931,
            "probabilityOver": 0.0069,
            "isWholeNumber": false
        },
        {
            "totalYards": 160,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9931993199319932,
            "probabilityOver": 0.006800680068006801,
            "isWholeNumber": true
        },
        {
            "totalYards": 160.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9932,
            "probabilityOver": 0.0068,
            "isWholeNumber": false
        },
        {
            "totalYards": 161,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9934980494148244,
            "probabilityOver": 0.006501950585175552,
            "isWholeNumber": true
        },
        {
            "totalYards": 161.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9935,
            "probabilityOver": 0.0065,
            "isWholeNumber": false
        },
        {
            "totalYards": 163,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9937981394418326,
            "probabilityOver": 0.006201860558167451,
            "isWholeNumber": true
        },
        {
            "totalYards": 163.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9938,
            "probabilityOver": 0.0062,
            "isWholeNumber": false
        },
        {
            "totalYards": 164,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9942971485742872,
            "probabilityOver": 0.0057028514257128566,
            "isWholeNumber": true
        },
        {
            "totalYards": 164.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9943,
            "probabilityOver": 0.0057,
            "isWholeNumber": false
        },
        {
            "totalYards": 165,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9943994399439944,
            "probabilityOver": 0.0056005600560056,
            "isWholeNumber": true
        },
        {
            "totalYards": 165.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9944,
            "probabilityOver": 0.0056,
            "isWholeNumber": false
        },
        {
            "totalYards": 166,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.994797919167667,
            "probabilityOver": 0.005202080832332933,
            "isWholeNumber": true
        },
        {
            "totalYards": 166.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9948,
            "probabilityOver": 0.0052,
            "isWholeNumber": false
        },
        {
            "totalYards": 167,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9948994899489949,
            "probabilityOver": 0.0051005100510051,
            "isWholeNumber": true
        },
        {
            "totalYards": 167.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9949,
            "probabilityOver": 0.0051,
            "isWholeNumber": false
        },
        {
            "totalYards": 168,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9950990198039608,
            "probabilityOver": 0.0049009801960392075,
            "isWholeNumber": true
        },
        {
            "totalYards": 168.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9951,
            "probabilityOver": 0.0049,
            "isWholeNumber": false
        },
        {
            "totalYards": 171,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9952990598119624,
            "probabilityOver": 0.004700940188037608,
            "isWholeNumber": true
        },
        {
            "totalYards": 171.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9953,
            "probabilityOver": 0.0047,
            "isWholeNumber": false
        },
        {
            "totalYards": 172,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9955986796038812,
            "probabilityOver": 0.004401320396118836,
            "isWholeNumber": true
        },
        {
            "totalYards": 172.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9956,
            "probabilityOver": 0.0044,
            "isWholeNumber": false
        },
        {
            "totalYards": 173,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9959983993597439,
            "probabilityOver": 0.004001600640256103,
            "isWholeNumber": true
        },
        {
            "totalYards": 173.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.996,
            "probabilityOver": 0.004,
            "isWholeNumber": false
        },
        {
            "totalYards": 174,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9963985594237695,
            "probabilityOver": 0.003601440576230492,
            "isWholeNumber": true
        },
        {
            "totalYards": 174.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9964,
            "probabilityOver": 0.0036,
            "isWholeNumber": false
        },
        {
            "totalYards": 175,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9964996499649965,
            "probabilityOver": 0.0035003500350035003,
            "isWholeNumber": true
        },
        {
            "totalYards": 175.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9965,
            "probabilityOver": 0.0035,
            "isWholeNumber": false
        },
        {
            "totalYards": 176,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9966993398679735,
            "probabilityOver": 0.0033006601320264054,
            "isWholeNumber": true
        },
        {
            "totalYards": 176.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9967,
            "probabilityOver": 0.0033,
            "isWholeNumber": false
        },
        {
            "totalYards": 177,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9968993798759752,
            "probabilityOver": 0.003100620124024805,
            "isWholeNumber": true
        },
        {
            "totalYards": 177.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9969,
            "probabilityOver": 0.0031,
            "isWholeNumber": false
        },
        {
            "totalYards": 179,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.996999699969997,
            "probabilityOver": 0.003000300030003,
            "isWholeNumber": true
        },
        {
            "totalYards": 179.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.997,
            "probabilityOver": 0.003,
            "isWholeNumber": false
        },
        {
            "totalYards": 180,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9970997099709971,
            "probabilityOver": 0.0029002900290029,
            "isWholeNumber": true
        },
        {
            "totalYards": 180.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9971,
            "probabilityOver": 0.0029,
            "isWholeNumber": false
        },
        {
            "totalYards": 181,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9971997199719972,
            "probabilityOver": 0.0028002800280028,
            "isWholeNumber": true
        },
        {
            "totalYards": 181.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9972,
            "probabilityOver": 0.0028,
            "isWholeNumber": false
        },
        {
            "totalYards": 182,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9973994798959792,
            "probabilityOver": 0.002600520104020804,
            "isWholeNumber": true
        },
        {
            "totalYards": 182.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9974,
            "probabilityOver": 0.0026,
            "isWholeNumber": false
        },
        {
            "totalYards": 183,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9974997499749975,
            "probabilityOver": 0.0025002500250025004,
            "isWholeNumber": true
        },
        {
            "totalYards": 183.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9975,
            "probabilityOver": 0.0025,
            "isWholeNumber": false
        },
        {
            "totalYards": 185,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9977993398019406,
            "probabilityOver": 0.002200660198059418,
            "isWholeNumber": true
        },
        {
            "totalYards": 185.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9978,
            "probabilityOver": 0.0022,
            "isWholeNumber": false
        },
        {
            "totalYards": 187,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9978997899789979,
            "probabilityOver": 0.0021002100210021,
            "isWholeNumber": true
        },
        {
            "totalYards": 187.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9979,
            "probabilityOver": 0.0021,
            "isWholeNumber": false
        },
        {
            "totalYards": 188,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9982993197278912,
            "probabilityOver": 0.0017006802721088435,
            "isWholeNumber": true
        },
        {
            "totalYards": 188.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9983,
            "probabilityOver": 0.0017,
            "isWholeNumber": false
        },
        {
            "totalYards": 190,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9983998399839984,
            "probabilityOver": 0.0016001600160016002,
            "isWholeNumber": true
        },
        {
            "totalYards": 190.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9984,
            "probabilityOver": 0.0016,
            "isWholeNumber": false
        },
        {
            "totalYards": 191,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9984998499849985,
            "probabilityOver": 0.0015001500150015,
            "isWholeNumber": true
        },
        {
            "totalYards": 191.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9985,
            "probabilityOver": 0.0015,
            "isWholeNumber": false
        },
        {
            "totalYards": 192,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9986997399479896,
            "probabilityOver": 0.001300260052010402,
            "isWholeNumber": true
        },
        {
            "totalYards": 192.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9987,
            "probabilityOver": 0.0013,
            "isWholeNumber": false
        },
        {
            "totalYards": 193,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9987998799879988,
            "probabilityOver": 0.0012001200120012002,
            "isWholeNumber": true
        },
        {
            "totalYards": 193.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9988,
            "probabilityOver": 0.0012,
            "isWholeNumber": false
        },
        {
            "totalYards": 195,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9988998899889989,
            "probabilityOver": 0.0011001100110011,
            "isWholeNumber": true
        },
        {
            "totalYards": 195.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9989,
            "probabilityOver": 0.0011,
            "isWholeNumber": false
        },
        {
            "totalYards": 196,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9990998199639928,
            "probabilityOver": 0.0009001800360072014,
            "isWholeNumber": true
        },
        {
            "totalYards": 196.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9991,
            "probabilityOver": 0.0009,
            "isWholeNumber": false
        },
        {
            "totalYards": 197,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9991999199919992,
            "probabilityOver": 0.0008000800080008001,
            "isWholeNumber": true
        },
        {
            "totalYards": 197.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9992,
            "probabilityOver": 0.0008,
            "isWholeNumber": false
        },
        {
            "totalYards": 199,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9992999299929993,
            "probabilityOver": 0.0007000700070007,
            "isWholeNumber": true
        },
        {
            "totalYards": 199.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9993,
            "probabilityOver": 0.0007,
            "isWholeNumber": false
        },
        {
            "totalYards": 200,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9993999399939995,
            "probabilityOver": 0.0006000600060006001,
            "isWholeNumber": true
        },
        {
            "totalYards": 200.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9994,
            "probabilityOver": 0.0006,
            "isWholeNumber": false
        },
        {
            "totalYards": 204,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9994999499949995,
            "probabilityOver": 0.0005000500050005,
            "isWholeNumber": true
        },
        {
            "totalYards": 204.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9995,
            "probabilityOver": 0.0005,
            "isWholeNumber": false
        },
        {
            "totalYards": 211,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9995999599959996,
            "probabilityOver": 0.00040004000400040005,
            "isWholeNumber": true
        },
        {
            "totalYards": 211.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9996,
            "probabilityOver": 0.0004,
            "isWholeNumber": false
        },
        {
            "totalYards": 215,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9996999699969997,
            "probabilityOver": 0.00030003000300030005,
            "isWholeNumber": true
        },
        {
            "totalYards": 215.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9997,
            "probabilityOver": 0.0003,
            "isWholeNumber": false
        },
        {
            "totalYards": 221,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9997999799979999,
            "probabilityOver": 0.00020002000200020003,
            "isWholeNumber": true
        },
        {
            "totalYards": 221.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9998,
            "probabilityOver": 0.0002,
            "isWholeNumber": false
        },
        {
            "totalYards": 230,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9998999899989999,
            "probabilityOver": 0.00010001000100010001,
            "isWholeNumber": true
        },
        {
            "totalYards": 230.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999,
            "probabilityOver": 0.0001,
            "isWholeNumber": false
        },
        {
            "totalYards": 253,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        },
        {
            "totalYards": 253.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": false
        }
    ],
    "yardsRangeProbabilities": [
        {
            "startYards": 0,
            "endYards": 9,
            "occurrences": 60,
            "probabilityWithin": 0.006
        },
        {
            "startYards": 10,
            "endYards": 19,
            "occurrences": 326,
            "probabilityWithin": 0.0326
        },
        {
            "startYards": 20,
            "endYards": 29,
            "occurrences": 776,
            "probabilityWithin": 0.0776
        },
        {
            "startYards": 30,
            "endYards": 39,
            "occurrences": 1365,
            "probabilityWithin": 0.1365
        },
        {
            "startYards": 40,
            "endYards": 49,
            "occurrences": 1606,
            "probabilityWithin": 0.1606
        },
        {
            "startYards": 50,
            "endYards": 59,
            "occurrences": 1539,
            "probabilityWithin": 0.1539
        },
        {
            "startYards": 60,
            "endYards": 69,
            "occurrences": 1308,
            "probabilityWithin": 0.1308
        },
        {
            "startYards": 70,
            "endYards": 79,
            "occurrences": 925,
            "probabilityWithin": 0.0925
        },
        {
            "startYards": 80,
            "endYards": 89,
            "occurrences": 712,
            "probabilityWithin": 0.0712
        },
        {
            "startYards": 90,
            "endYards": 99,
            "occurrences": 471,
            "probabilityWithin": 0.0471
        },
        {
            "startYards": 100,
            "endYards": 109,
            "occurrences": 320,
            "probabilityWithin": 0.032
        },
        {
            "startYards": 110,
            "endYards": 119,
            "occurrences": 231,
            "probabilityWithin": 0.0231
        },
        {
            "startYards": 120,
            "endYards": 129,
            "occurrences": 128,
            "probabilityWithin": 0.0128
        },
        {
            "startYards": 130,
            "endYards": 139,
            "occurrences": 82,
            "probabilityWithin": 0.0082
        },
        {
            "startYards": 140,
            "endYards": 149,
            "occurrences": 50,
            "probabilityWithin": 0.005
        },
        {
            "startYards": 150,
            "endYards": 159,
            "occurrences": 28,
            "probabilityWithin": 0.0028
        },
        {
            "startYards": 160,
            "endYards": 169,
            "occurrences": 20,
            "probabilityWithin": 0.002
        },
        {
            "startYards": 170,
            "endYards": 179,
            "occurrences": 19,
            "probabilityWithin": 0.0019
        },
        {
            "startYards": 180,
            "endYards": 189,
            "occurrences": 13,
            "probabilityWithin": 0.0013
        },
        {
            "startYards": 190,
            "endYards": 199,
            "occurrences": 10,
            "probabilityWithin": 0.001
        },
        {
            "startYards": 200,
            "endYards": null,
            "occurrences": 7,
            "probabilityWithin": 0.0007
        }
    ]
};

// const wrResponse = fetch("https://api.unabated.com/api/props/nfl/widereceiver/receivingyards/5/50/0", {
//     "headers": {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "en-US,en;q=0.9,la;q=0.8",
//         "priority": "u=1, i",
//         "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"macOS\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-site",
//         "x-amz-cf-v-id": "dNSob7rQOiJFE_59NDSm7tuZ6ed5MA_8w8CHVqr8tGSFYpgzEUqBuQ=="
//     },
//     "referrer": "https://unabated.com/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors",
//     "credentials": "include"
// });

// this is the response for the WR
const wrResponse = {
    "summary": {
        "yardsBonusThreshold": 100,
        "yardBonusProbability": 0.0669,
        "meanYards": 49.4686,
        "medianYards": 45
    },
    "countProbabilities": [
        {
            "totalYards": null,
            "total": 0,
            "occurrences": 0,
            "probabilityEqual": 0.00673794699908547,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 0.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.00673794699908547,
            "probabilityOver": 0.9932620530009145,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 1,
            "occurrences": 0,
            "probabilityEqual": 0.0336897349954273,
            "probabilityUnder": 0.006972860832699097,
            "probabilityOver": 0.9930271391673009,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 1.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.04042768199451277,
            "probabilityOver": 0.9595723180054873,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 2,
            "occurrences": 0,
            "probabilityEqual": 0.0842243374885683,
            "probabilityUnder": 0.04414583576467136,
            "probabilityOver": 0.9558541642353287,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 2.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.12465201948308106,
            "probabilityOver": 0.875347980516919,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 3,
            "occurrences": 0,
            "probabilityEqual": 0.14037389581428,
            "probabilityUnder": 0.1450072524276791,
            "probabilityOver": 0.8549927475723209,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 3.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2650259152973611,
            "probabilityOver": 0.7349740847026389,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 4,
            "occurrences": 0,
            "probabilityEqual": 0.175467369767851,
            "probabilityUnder": 0.3214256241414514,
            "probabilityOver": 0.6785743758585486,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 4.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.44049328506521207,
            "probabilityOver": 0.559506714934788,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 5,
            "occurrences": 0,
            "probabilityEqual": 0.175467369767851,
            "probabilityUnder": 0.5342339028367988,
            "probabilityOver": 0.46576609716320116,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 5.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6159606548330631,
            "probabilityOver": 0.38403934516693694,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 6,
            "occurrences": 0,
            "probabilityEqual": 0.146222808139875,
            "probabilityUnder": 0.7214536306493139,
            "probabilityOver": 0.27854636935068605,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 6.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.762183462972938,
            "probabilityOver": 0.23781653702706193,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 7,
            "occurrences": 0,
            "probabilityEqual": 0.104444862957054,
            "probabilityUnder": 0.8510737434767099,
            "probabilityOver": 0.14892625652329003,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 7.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8666283259299921,
            "probabilityOver": 0.13337167407000794,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 8,
            "occurrences": 0,
            "probabilityEqual": 0.0652780393481586,
            "probabilityUnder": 0.9271509201791266,
            "probabilityOver": 0.07284907982087345,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 8.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9319063652781506,
            "probabilityOver": 0.06809363472184933,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 9,
            "occurrences": 0,
            "probabilityEqual": 0.0362655774156437,
            "probabilityUnder": 0.9669742446047996,
            "probabilityOver": 0.03302575539520038,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 9.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9681719426937944,
            "probabilityOver": 0.03182805730620563,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 10,
            "occurrences": 0,
            "probabilityEqual": 0.0181327887078219,
            "probabilityUnder": 0.9860518118530914,
            "probabilityOver": 0.013948188146908569,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 10.5,
            "occurrences": 0,
            "probabilityEqual": 0.01369526859838373,
            "probabilityUnder": 0.9863047314016162,
            "probabilityOver": 0,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 11,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        }
    ],
    "yardsProbabilities": [
        {
            "totalYards": -6,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": -5.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0001,
            "probabilityOver": 0.9999,
            "isWholeNumber": false
        },
        {
            "totalYards": -5,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.00010002000400080016,
            "probabilityOver": 0.9998999799959992,
            "isWholeNumber": true
        },
        {
            "totalYards": -4.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0003,
            "probabilityOver": 0.9997,
            "isWholeNumber": false
        },
        {
            "totalYards": -4,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00030003000300030005,
            "probabilityOver": 0.9996999699969997,
            "isWholeNumber": true
        },
        {
            "totalYards": -3.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0004,
            "probabilityOver": 0.9996,
            "isWholeNumber": false
        },
        {
            "totalYards": -2,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.00040012003601080324,
            "probabilityOver": 0.9995998799639892,
            "isWholeNumber": true
        },
        {
            "totalYards": -1.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0007,
            "probabilityOver": 0.9993,
            "isWholeNumber": false
        },
        {
            "totalYards": -1,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.0007004903432402681,
            "probabilityOver": 0.9992995096567597,
            "isWholeNumber": true
        },
        {
            "totalYards": -0.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0014,
            "probabilityOver": 0.9986,
            "isWholeNumber": false
        },
        {
            "totalYards": 0,
            "total": null,
            "occurrences": 86,
            "probabilityEqual": 0.0086,
            "probabilityUnder": 0.0014121444422029454,
            "probabilityOver": 0.998587855557797,
            "isWholeNumber": true
        },
        {
            "totalYards": 0.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.01,
            "probabilityOver": 0.99,
            "isWholeNumber": false
        },
        {
            "totalYards": 1,
            "total": null,
            "occurrences": 16,
            "probabilityEqual": 0.0016,
            "probabilityUnder": 0.010016025641025642,
            "probabilityOver": 0.9899839743589743,
            "isWholeNumber": true
        },
        {
            "totalYards": 1.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0116,
            "probabilityOver": 0.9884,
            "isWholeNumber": false
        },
        {
            "totalYards": 2,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.01161975358108785,
            "probabilityOver": 0.9883802464189122,
            "isWholeNumber": true
        },
        {
            "totalYards": 2.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0133,
            "probabilityOver": 0.9867,
            "isWholeNumber": false
        },
        {
            "totalYards": 3,
            "total": null,
            "occurrences": 25,
            "probabilityEqual": 0.0025,
            "probabilityUnder": 0.013333333333333334,
            "probabilityOver": 0.9866666666666667,
            "isWholeNumber": true
        },
        {
            "totalYards": 3.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0158,
            "probabilityOver": 0.9842,
            "isWholeNumber": false
        },
        {
            "totalYards": 4,
            "total": null,
            "occurrences": 43,
            "probabilityEqual": 0.0043,
            "probabilityUnder": 0.015868233403635634,
            "probabilityOver": 0.9841317665963644,
            "isWholeNumber": true
        },
        {
            "totalYards": 4.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0201,
            "probabilityOver": 0.9799,
            "isWholeNumber": false
        },
        {
            "totalYards": 5,
            "total": null,
            "occurrences": 41,
            "probabilityEqual": 0.0041,
            "probabilityUnder": 0.020182749272015264,
            "probabilityOver": 0.9798172507279848,
            "isWholeNumber": true
        },
        {
            "totalYards": 5.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0242,
            "probabilityOver": 0.9758,
            "isWholeNumber": false
        },
        {
            "totalYards": 6,
            "total": null,
            "occurrences": 56,
            "probabilityEqual": 0.0056,
            "probabilityUnder": 0.024336283185840708,
            "probabilityOver": 0.9756637168141593,
            "isWholeNumber": true
        },
        {
            "totalYards": 6.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0298,
            "probabilityOver": 0.9702,
            "isWholeNumber": false
        },
        {
            "totalYards": 7,
            "total": null,
            "occurrences": 44,
            "probabilityEqual": 0.0044,
            "probabilityUnder": 0.029931699477701888,
            "probabilityOver": 0.9700683005222981,
            "isWholeNumber": true
        },
        {
            "totalYards": 7.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0342,
            "probabilityOver": 0.9658,
            "isWholeNumber": false
        },
        {
            "totalYards": 8,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.034434152235199356,
            "probabilityOver": 0.9655658477648007,
            "isWholeNumber": true
        },
        {
            "totalYards": 8.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.041,
            "probabilityOver": 0.959,
            "isWholeNumber": false
        },
        {
            "totalYards": 9,
            "total": null,
            "occurrences": 70,
            "probabilityEqual": 0.007,
            "probabilityUnder": 0.041289023162134945,
            "probabilityOver": 0.9587109768378651,
            "isWholeNumber": true
        },
        {
            "totalYards": 9.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.048,
            "probabilityOver": 0.952,
            "isWholeNumber": false
        },
        {
            "totalYards": 10,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.04832863471606927,
            "probabilityOver": 0.9516713652839307,
            "isWholeNumber": true
        },
        {
            "totalYards": 10.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0548,
            "probabilityOver": 0.9452,
            "isWholeNumber": false
        },
        {
            "totalYards": 11,
            "total": null,
            "occurrences": 83,
            "probabilityEqual": 0.0083,
            "probabilityUnder": 0.05525864676817586,
            "probabilityOver": 0.9447413532318242,
            "isWholeNumber": true
        },
        {
            "totalYards": 11.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0631,
            "probabilityOver": 0.9369,
            "isWholeNumber": false
        },
        {
            "totalYards": 12,
            "total": null,
            "occurrences": 91,
            "probabilityEqual": 0.0091,
            "probabilityUnder": 0.0636794832980119,
            "probabilityOver": 0.9363205167019881,
            "isWholeNumber": true
        },
        {
            "totalYards": 12.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0722,
            "probabilityOver": 0.9278,
            "isWholeNumber": false
        },
        {
            "totalYards": 13,
            "total": null,
            "occurrences": 96,
            "probabilityEqual": 0.0096,
            "probabilityUnder": 0.07289983844911146,
            "probabilityOver": 0.9271001615508885,
            "isWholeNumber": true
        },
        {
            "totalYards": 13.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0818,
            "probabilityOver": 0.9182,
            "isWholeNumber": false
        },
        {
            "totalYards": 14,
            "total": null,
            "occurrences": 105,
            "probabilityEqual": 0.0105,
            "probabilityUnder": 0.08266801414855988,
            "probabilityOver": 0.9173319858514402,
            "isWholeNumber": true
        },
        {
            "totalYards": 14.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0923,
            "probabilityOver": 0.9077,
            "isWholeNumber": false
        },
        {
            "totalYards": 15,
            "total": null,
            "occurrences": 87,
            "probabilityEqual": 0.0087,
            "probabilityUnder": 0.0931100575002522,
            "probabilityOver": 0.9068899424997479,
            "isWholeNumber": true
        },
        {
            "totalYards": 15.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.101,
            "probabilityOver": 0.899,
            "isWholeNumber": false
        },
        {
            "totalYards": 16,
            "total": null,
            "occurrences": 113,
            "probabilityEqual": 0.0113,
            "probabilityUnder": 0.10215434408819662,
            "probabilityOver": 0.8978456559118034,
            "isWholeNumber": true
        },
        {
            "totalYards": 16.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1123,
            "probabilityOver": 0.8877,
            "isWholeNumber": false
        },
        {
            "totalYards": 17,
            "total": null,
            "occurrences": 110,
            "probabilityEqual": 0.011,
            "probabilityUnder": 0.11354903943377148,
            "probabilityOver": 0.8864509605662285,
            "isWholeNumber": true
        },
        {
            "totalYards": 17.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1233,
            "probabilityOver": 0.8767,
            "isWholeNumber": false
        },
        {
            "totalYards": 18,
            "total": null,
            "occurrences": 95,
            "probabilityEqual": 0.0095,
            "probabilityUnder": 0.12448258455325593,
            "probabilityOver": 0.8755174154467441,
            "isWholeNumber": true
        },
        {
            "totalYards": 18.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1328,
            "probabilityOver": 0.8672,
            "isWholeNumber": false
        },
        {
            "totalYards": 19,
            "total": null,
            "occurrences": 114,
            "probabilityEqual": 0.0114,
            "probabilityUnder": 0.13433137770584666,
            "probabilityOver": 0.8656686222941533,
            "isWholeNumber": true
        },
        {
            "totalYards": 19.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1442,
            "probabilityOver": 0.8558,
            "isWholeNumber": false
        },
        {
            "totalYards": 20,
            "total": null,
            "occurrences": 133,
            "probabilityEqual": 0.0133,
            "probabilityUnder": 0.14614371136110266,
            "probabilityOver": 0.8538562886388973,
            "isWholeNumber": true
        },
        {
            "totalYards": 20.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1575,
            "probabilityOver": 0.8425,
            "isWholeNumber": false
        },
        {
            "totalYards": 21,
            "total": null,
            "occurrences": 115,
            "probabilityEqual": 0.0115,
            "probabilityUnder": 0.15933232169954475,
            "probabilityOver": 0.8406676783004552,
            "isWholeNumber": true
        },
        {
            "totalYards": 21.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.169,
            "probabilityOver": 0.831,
            "isWholeNumber": false
        },
        {
            "totalYards": 22,
            "total": null,
            "occurrences": 129,
            "probabilityEqual": 0.0129,
            "probabilityUnder": 0.17120859082159862,
            "probabilityOver": 0.8287914091784013,
            "isWholeNumber": true
        },
        {
            "totalYards": 22.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1819,
            "probabilityOver": 0.8181,
            "isWholeNumber": false
        },
        {
            "totalYards": 23,
            "total": null,
            "occurrences": 114,
            "probabilityEqual": 0.0114,
            "probabilityUnder": 0.1839975723244993,
            "probabilityOver": 0.8160024276755007,
            "isWholeNumber": true
        },
        {
            "totalYards": 23.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1933,
            "probabilityOver": 0.8067,
            "isWholeNumber": false
        },
        {
            "totalYards": 24,
            "total": null,
            "occurrences": 140,
            "probabilityEqual": 0.014,
            "probabilityUnder": 0.1960446247464503,
            "probabilityOver": 0.8039553752535497,
            "isWholeNumber": true
        },
        {
            "totalYards": 24.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2073,
            "probabilityOver": 0.7927,
            "isWholeNumber": false
        },
        {
            "totalYards": 25,
            "total": null,
            "occurrences": 121,
            "probabilityEqual": 0.0121,
            "probabilityUnder": 0.20983905253568175,
            "probabilityOver": 0.7901609474643182,
            "isWholeNumber": true
        },
        {
            "totalYards": 25.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2194,
            "probabilityOver": 0.7806,
            "isWholeNumber": false
        },
        {
            "totalYards": 26,
            "total": null,
            "occurrences": 158,
            "probabilityEqual": 0.0158,
            "probabilityUnder": 0.22292217029059133,
            "probabilityOver": 0.7770778297094086,
            "isWholeNumber": true
        },
        {
            "totalYards": 26.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2352,
            "probabilityOver": 0.7648,
            "isWholeNumber": false
        },
        {
            "totalYards": 27,
            "total": null,
            "occurrences": 145,
            "probabilityEqual": 0.0145,
            "probabilityUnder": 0.2386605783866058,
            "probabilityOver": 0.7613394216133942,
            "isWholeNumber": true
        },
        {
            "totalYards": 27.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2497,
            "probabilityOver": 0.7503,
            "isWholeNumber": false
        },
        {
            "totalYards": 28,
            "total": null,
            "occurrences": 129,
            "probabilityEqual": 0.0129,
            "probabilityUnder": 0.2529632256103738,
            "probabilityOver": 0.7470367743896261,
            "isWholeNumber": true
        },
        {
            "totalYards": 28.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2626,
            "probabilityOver": 0.7374,
            "isWholeNumber": false
        },
        {
            "totalYards": 29,
            "total": null,
            "occurrences": 143,
            "probabilityEqual": 0.0143,
            "probabilityUnder": 0.2664096581109871,
            "probabilityOver": 0.7335903418890128,
            "isWholeNumber": true
        },
        {
            "totalYards": 29.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2769,
            "probabilityOver": 0.7231,
            "isWholeNumber": false
        },
        {
            "totalYards": 30,
            "total": null,
            "occurrences": 149,
            "probabilityEqual": 0.0149,
            "probabilityUnder": 0.28108821439447773,
            "probabilityOver": 0.7189117856055223,
            "isWholeNumber": true
        },
        {
            "totalYards": 30.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2918,
            "probabilityOver": 0.7082,
            "isWholeNumber": false
        },
        {
            "totalYards": 31,
            "total": null,
            "occurrences": 162,
            "probabilityEqual": 0.0162,
            "probabilityUnder": 0.29660500101646675,
            "probabilityOver": 0.7033949989835332,
            "isWholeNumber": true
        },
        {
            "totalYards": 31.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.308,
            "probabilityOver": 0.692,
            "isWholeNumber": false
        },
        {
            "totalYards": 32,
            "total": null,
            "occurrences": 162,
            "probabilityEqual": 0.0162,
            "probabilityUnder": 0.3130717625533645,
            "probabilityOver": 0.6869282374466354,
            "isWholeNumber": true
        },
        {
            "totalYards": 32.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3242,
            "probabilityOver": 0.6758,
            "isWholeNumber": false
        },
        {
            "totalYards": 33,
            "total": null,
            "occurrences": 122,
            "probabilityEqual": 0.0122,
            "probabilityUnder": 0.3282040898967402,
            "probabilityOver": 0.6717959101032598,
            "isWholeNumber": true
        },
        {
            "totalYards": 33.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3364,
            "probabilityOver": 0.6636,
            "isWholeNumber": false
        },
        {
            "totalYards": 34,
            "total": null,
            "occurrences": 140,
            "probabilityEqual": 0.014,
            "probabilityUnder": 0.3411764705882353,
            "probabilityOver": 0.6588235294117647,
            "isWholeNumber": true
        },
        {
            "totalYards": 34.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3504,
            "probabilityOver": 0.6496,
            "isWholeNumber": false
        },
        {
            "totalYards": 35,
            "total": null,
            "occurrences": 150,
            "probabilityEqual": 0.015,
            "probabilityUnder": 0.35573604060913705,
            "probabilityOver": 0.6442639593908629,
            "isWholeNumber": true
        },
        {
            "totalYards": 35.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3654,
            "probabilityOver": 0.6346,
            "isWholeNumber": false
        },
        {
            "totalYards": 36,
            "total": null,
            "occurrences": 158,
            "probabilityEqual": 0.0158,
            "probabilityUnder": 0.3712660028449502,
            "probabilityOver": 0.6287339971550497,
            "isWholeNumber": true
        },
        {
            "totalYards": 36.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3812,
            "probabilityOver": 0.6188,
            "isWholeNumber": false
        },
        {
            "totalYards": 37,
            "total": null,
            "occurrences": 167,
            "probabilityEqual": 0.0167,
            "probabilityUnder": 0.387674158446049,
            "probabilityOver": 0.612325841553951,
            "isWholeNumber": true
        },
        {
            "totalYards": 37.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3979,
            "probabilityOver": 0.6021,
            "isWholeNumber": false
        },
        {
            "totalYards": 38,
            "total": null,
            "occurrences": 130,
            "probabilityEqual": 0.013,
            "probabilityUnder": 0.40314083080040525,
            "probabilityOver": 0.5968591691995947,
            "isWholeNumber": true
        },
        {
            "totalYards": 38.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4109,
            "probabilityOver": 0.5891,
            "isWholeNumber": false
        },
        {
            "totalYards": 39,
            "total": null,
            "occurrences": 139,
            "probabilityEqual": 0.0139,
            "probabilityUnder": 0.4166920190650035,
            "probabilityOver": 0.5833079809349965,
            "isWholeNumber": true
        },
        {
            "totalYards": 39.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4248,
            "probabilityOver": 0.5752,
            "isWholeNumber": false
        },
        {
            "totalYards": 40,
            "total": null,
            "occurrences": 156,
            "probabilityEqual": 0.0156,
            "probabilityUnder": 0.4315318976026006,
            "probabilityOver": 0.5684681023973994,
            "isWholeNumber": true
        },
        {
            "totalYards": 40.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4404,
            "probabilityOver": 0.5596,
            "isWholeNumber": false
        },
        {
            "totalYards": 41,
            "total": null,
            "occurrences": 154,
            "probabilityEqual": 0.0154,
            "probabilityUnder": 0.4472882388787325,
            "probabilityOver": 0.5527117611212675,
            "isWholeNumber": true
        },
        {
            "totalYards": 41.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4558,
            "probabilityOver": 0.5442,
            "isWholeNumber": false
        },
        {
            "totalYards": 42,
            "total": null,
            "occurrences": 125,
            "probabilityEqual": 0.0125,
            "probabilityUnder": 0.46156962025316456,
            "probabilityOver": 0.5384303797468355,
            "isWholeNumber": true
        },
        {
            "totalYards": 42.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4683,
            "probabilityOver": 0.5317,
            "isWholeNumber": false
        },
        {
            "totalYards": 43,
            "total": null,
            "occurrences": 143,
            "probabilityEqual": 0.0143,
            "probabilityUnder": 0.47509384193973825,
            "probabilityOver": 0.5249061580602618,
            "isWholeNumber": true
        },
        {
            "totalYards": 43.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4826,
            "probabilityOver": 0.5174,
            "isWholeNumber": false
        },
        {
            "totalYards": 44,
            "total": null,
            "occurrences": 135,
            "probabilityEqual": 0.0135,
            "probabilityUnder": 0.489204257475925,
            "probabilityOver": 0.510795742524075,
            "isWholeNumber": true
        },
        {
            "totalYards": 44.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4961,
            "probabilityOver": 0.5039,
            "isWholeNumber": false
        },
        {
            "totalYards": 45,
            "total": null,
            "occurrences": 134,
            "probabilityEqual": 0.0134,
            "probabilityUnder": 0.5028380295965944,
            "probabilityOver": 0.49716197040340565,
            "isWholeNumber": true
        },
        {
            "totalYards": 45.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5095,
            "probabilityOver": 0.4905,
            "isWholeNumber": false
        },
        {
            "totalYards": 46,
            "total": null,
            "occurrences": 141,
            "probabilityEqual": 0.0141,
            "probabilityUnder": 0.5167866923623086,
            "probabilityOver": 0.48321330763769144,
            "isWholeNumber": true
        },
        {
            "totalYards": 46.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5236,
            "probabilityOver": 0.4764,
            "isWholeNumber": false
        },
        {
            "totalYards": 47,
            "total": null,
            "occurrences": 156,
            "probabilityEqual": 0.0156,
            "probabilityUnder": 0.5318976026005688,
            "probabilityOver": 0.4681023973994311,
            "isWholeNumber": true
        },
        {
            "totalYards": 47.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5392,
            "probabilityOver": 0.4608,
            "isWholeNumber": false
        },
        {
            "totalYards": 48,
            "total": null,
            "occurrences": 138,
            "probabilityEqual": 0.0138,
            "probabilityUnder": 0.5467450821334415,
            "probabilityOver": 0.4532549178665585,
            "isWholeNumber": true
        },
        {
            "totalYards": 48.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.553,
            "probabilityOver": 0.447,
            "isWholeNumber": false
        },
        {
            "totalYards": 49,
            "total": null,
            "occurrences": 131,
            "probabilityEqual": 0.0131,
            "probabilityUnder": 0.5603404600263451,
            "probabilityOver": 0.43965953997365487,
            "isWholeNumber": true
        },
        {
            "totalYards": 49.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5661,
            "probabilityOver": 0.4339,
            "isWholeNumber": false
        },
        {
            "totalYards": 50,
            "total": null,
            "occurrences": 121,
            "probabilityEqual": 0.0121,
            "probabilityUnder": 0.5730337078651685,
            "probabilityOver": 0.42696629213483145,
            "isWholeNumber": true
        },
        {
            "totalYards": 50.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5782,
            "probabilityOver": 0.4218,
            "isWholeNumber": false
        },
        {
            "totalYards": 51,
            "total": null,
            "occurrences": 140,
            "probabilityEqual": 0.014,
            "probabilityUnder": 0.5864097363083164,
            "probabilityOver": 0.41359026369168356,
            "isWholeNumber": true
        },
        {
            "totalYards": 51.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5922,
            "probabilityOver": 0.4078,
            "isWholeNumber": false
        },
        {
            "totalYards": 52,
            "total": null,
            "occurrences": 130,
            "probabilityEqual": 0.013,
            "probabilityUnder": 0.6,
            "probabilityOver": 0.4,
            "isWholeNumber": true
        },
        {
            "totalYards": 52.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6052,
            "probabilityOver": 0.3948,
            "isWholeNumber": false
        },
        {
            "totalYards": 53,
            "total": null,
            "occurrences": 123,
            "probabilityEqual": 0.0123,
            "probabilityUnder": 0.612736660929432,
            "probabilityOver": 0.387263339070568,
            "isWholeNumber": true
        },
        {
            "totalYards": 53.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6175,
            "probabilityOver": 0.3825,
            "isWholeNumber": false
        },
        {
            "totalYards": 54,
            "total": null,
            "occurrences": 119,
            "probabilityEqual": 0.0119,
            "probabilityUnder": 0.6249367472927841,
            "probabilityOver": 0.37506325270721586,
            "isWholeNumber": true
        },
        {
            "totalYards": 54.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6294,
            "probabilityOver": 0.3706,
            "isWholeNumber": false
        },
        {
            "totalYards": 55,
            "total": null,
            "occurrences": 127,
            "probabilityEqual": 0.0127,
            "probabilityUnder": 0.6374962017623823,
            "probabilityOver": 0.36250379823761775,
            "isWholeNumber": true
        },
        {
            "totalYards": 55.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6421,
            "probabilityOver": 0.3579,
            "isWholeNumber": false
        },
        {
            "totalYards": 56,
            "total": null,
            "occurrences": 109,
            "probabilityEqual": 0.0109,
            "probabilityUnder": 0.6491760186027702,
            "probabilityOver": 0.3508239813972298,
            "isWholeNumber": true
        },
        {
            "totalYards": 56.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.653,
            "probabilityOver": 0.347,
            "isWholeNumber": false
        },
        {
            "totalYards": 57,
            "total": null,
            "occurrences": 123,
            "probabilityEqual": 0.0123,
            "probabilityUnder": 0.6611319226485775,
            "probabilityOver": 0.3388680773514225,
            "isWholeNumber": true
        },
        {
            "totalYards": 57.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6653,
            "probabilityOver": 0.3347,
            "isWholeNumber": false
        },
        {
            "totalYards": 58,
            "total": null,
            "occurrences": 103,
            "probabilityEqual": 0.0103,
            "probabilityUnder": 0.6722239062342124,
            "probabilityOver": 0.3277760937657876,
            "isWholeNumber": true
        },
        {
            "totalYards": 58.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6756,
            "probabilityOver": 0.3244,
            "isWholeNumber": false
        },
        {
            "totalYards": 59,
            "total": null,
            "occurrences": 88,
            "probabilityEqual": 0.0088,
            "probabilityUnder": 0.6815980629539952,
            "probabilityOver": 0.31840193704600483,
            "isWholeNumber": true
        },
        {
            "totalYards": 59.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6844,
            "probabilityOver": 0.3156,
            "isWholeNumber": false
        },
        {
            "totalYards": 60,
            "total": null,
            "occurrences": 111,
            "probabilityEqual": 0.0111,
            "probabilityUnder": 0.6920821114369502,
            "probabilityOver": 0.30791788856304986,
            "isWholeNumber": true
        },
        {
            "totalYards": 60.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6955,
            "probabilityOver": 0.3045,
            "isWholeNumber": false
        },
        {
            "totalYards": 61,
            "total": null,
            "occurrences": 101,
            "probabilityEqual": 0.0101,
            "probabilityUnder": 0.70259622184059,
            "probabilityOver": 0.29740377815941005,
            "isWholeNumber": true
        },
        {
            "totalYards": 61.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7056,
            "probabilityOver": 0.2944,
            "isWholeNumber": false
        },
        {
            "totalYards": 62,
            "total": null,
            "occurrences": 123,
            "probabilityEqual": 0.0123,
            "probabilityUnder": 0.7143869596031184,
            "probabilityOver": 0.2856130403968816,
            "isWholeNumber": true
        },
        {
            "totalYards": 62.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7179,
            "probabilityOver": 0.2821,
            "isWholeNumber": false
        },
        {
            "totalYards": 63,
            "total": null,
            "occurrences": 87,
            "probabilityEqual": 0.0087,
            "probabilityUnder": 0.7242005447392313,
            "probabilityOver": 0.2757994552607687,
            "isWholeNumber": true
        },
        {
            "totalYards": 63.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7266,
            "probabilityOver": 0.2734,
            "isWholeNumber": false
        },
        {
            "totalYards": 64,
            "total": null,
            "occurrences": 120,
            "probabilityEqual": 0.012,
            "probabilityUnder": 0.7354251012145749,
            "probabilityOver": 0.2645748987854251,
            "isWholeNumber": true
        },
        {
            "totalYards": 64.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7386,
            "probabilityOver": 0.2614,
            "isWholeNumber": false
        },
        {
            "totalYards": 65,
            "total": null,
            "occurrences": 98,
            "probabilityEqual": 0.0098,
            "probabilityUnder": 0.7459099171884468,
            "probabilityOver": 0.2540900828115532,
            "isWholeNumber": true
        },
        {
            "totalYards": 65.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7484,
            "probabilityOver": 0.2516,
            "isWholeNumber": false
        },
        {
            "totalYards": 66,
            "total": null,
            "occurrences": 87,
            "probabilityEqual": 0.0087,
            "probabilityUnder": 0.7549682235448401,
            "probabilityOver": 0.2450317764551599,
            "isWholeNumber": true
        },
        {
            "totalYards": 66.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7571,
            "probabilityOver": 0.2429,
            "isWholeNumber": false
        },
        {
            "totalYards": 67,
            "total": null,
            "occurrences": 75,
            "probabilityEqual": 0.0075,
            "probabilityUnder": 0.7628211586901763,
            "probabilityOver": 0.23717884130982367,
            "isWholeNumber": true
        },
        {
            "totalYards": 67.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7646,
            "probabilityOver": 0.2354,
            "isWholeNumber": false
        },
        {
            "totalYards": 68,
            "total": null,
            "occurrences": 77,
            "probabilityEqual": 0.0077,
            "probabilityUnder": 0.77053310490779,
            "probabilityOver": 0.22946689509221002,
            "isWholeNumber": true
        },
        {
            "totalYards": 68.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7723,
            "probabilityOver": 0.2277,
            "isWholeNumber": false
        },
        {
            "totalYards": 69,
            "total": null,
            "occurrences": 76,
            "probabilityEqual": 0.0076,
            "probabilityUnder": 0.7782144296654575,
            "probabilityOver": 0.22178557033454252,
            "isWholeNumber": true
        },
        {
            "totalYards": 69.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7799,
            "probabilityOver": 0.2201,
            "isWholeNumber": false
        },
        {
            "totalYards": 70,
            "total": null,
            "occurrences": 83,
            "probabilityEqual": 0.0083,
            "probabilityUnder": 0.7864273469799334,
            "probabilityOver": 0.21357265302006656,
            "isWholeNumber": true
        },
        {
            "totalYards": 70.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7882,
            "probabilityOver": 0.2118,
            "isWholeNumber": false
        },
        {
            "totalYards": 71,
            "total": null,
            "occurrences": 87,
            "probabilityEqual": 0.0087,
            "probabilityUnder": 0.7951175224452739,
            "probabilityOver": 0.2048824775547261,
            "isWholeNumber": true
        },
        {
            "totalYards": 71.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7969,
            "probabilityOver": 0.2031,
            "isWholeNumber": false
        },
        {
            "totalYards": 72,
            "total": null,
            "occurrences": 70,
            "probabilityEqual": 0.007,
            "probabilityUnder": 0.8025176233635448,
            "probabilityOver": 0.19748237663645518,
            "isWholeNumber": true
        },
        {
            "totalYards": 72.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8039,
            "probabilityOver": 0.1961,
            "isWholeNumber": false
        },
        {
            "totalYards": 73,
            "total": null,
            "occurrences": 62,
            "probabilityEqual": 0.0062,
            "probabilityUnder": 0.8089152747031596,
            "probabilityOver": 0.19108472529684042,
            "isWholeNumber": true
        },
        {
            "totalYards": 73.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8101,
            "probabilityOver": 0.1899,
            "isWholeNumber": false
        },
        {
            "totalYards": 74,
            "total": null,
            "occurrences": 62,
            "probabilityEqual": 0.0062,
            "probabilityUnder": 0.8151539545180116,
            "probabilityOver": 0.18484604548198832,
            "isWholeNumber": true
        },
        {
            "totalYards": 74.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8163,
            "probabilityOver": 0.1837,
            "isWholeNumber": false
        },
        {
            "totalYards": 75,
            "total": null,
            "occurrences": 69,
            "probabilityEqual": 0.0069,
            "probabilityUnder": 0.8219716040680697,
            "probabilityOver": 0.17802839593193032,
            "isWholeNumber": true
        },
        {
            "totalYards": 75.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8232,
            "probabilityOver": 0.1768,
            "isWholeNumber": false
        },
        {
            "totalYards": 76,
            "total": null,
            "occurrences": 54,
            "probabilityEqual": 0.0054,
            "probabilityUnder": 0.8276694148401368,
            "probabilityOver": 0.17233058515986327,
            "isWholeNumber": true
        },
        {
            "totalYards": 76.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8286,
            "probabilityOver": 0.1714,
            "isWholeNumber": false
        },
        {
            "totalYards": 77,
            "total": null,
            "occurrences": 51,
            "probabilityEqual": 0.0051,
            "probabilityUnder": 0.8328475223640567,
            "probabilityOver": 0.16715247763594332,
            "isWholeNumber": true
        },
        {
            "totalYards": 77.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8337,
            "probabilityOver": 0.1663,
            "isWholeNumber": false
        },
        {
            "totalYards": 78,
            "total": null,
            "occurrences": 51,
            "probabilityEqual": 0.0051,
            "probabilityUnder": 0.8379736656950447,
            "probabilityOver": 0.16202633430495528,
            "isWholeNumber": true
        },
        {
            "totalYards": 78.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8388,
            "probabilityOver": 0.1612,
            "isWholeNumber": false
        },
        {
            "totalYards": 79,
            "total": null,
            "occurrences": 63,
            "probabilityEqual": 0.0063,
            "probabilityUnder": 0.8441179430411593,
            "probabilityOver": 0.1558820569588407,
            "isWholeNumber": true
        },
        {
            "totalYards": 79.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8451,
            "probabilityOver": 0.1549,
            "isWholeNumber": false
        },
        {
            "totalYards": 80,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.8508860249697946,
            "probabilityOver": 0.1491139750302054,
            "isWholeNumber": true
        },
        {
            "totalYards": 80.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8519,
            "probabilityOver": 0.1481,
            "isWholeNumber": false
        },
        {
            "totalYards": 81,
            "total": null,
            "occurrences": 59,
            "probabilityEqual": 0.0059,
            "probabilityUnder": 0.8569560406397747,
            "probabilityOver": 0.14304395936022532,
            "isWholeNumber": true
        },
        {
            "totalYards": 81.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8578,
            "probabilityOver": 0.1422,
            "isWholeNumber": false
        },
        {
            "totalYards": 82,
            "total": null,
            "occurrences": 57,
            "probabilityEqual": 0.0057,
            "probabilityUnder": 0.8627174896912401,
            "probabilityOver": 0.13728251030875993,
            "isWholeNumber": true
        },
        {
            "totalYards": 82.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8635,
            "probabilityOver": 0.1365,
            "isWholeNumber": false
        },
        {
            "totalYards": 83,
            "total": null,
            "occurrences": 66,
            "probabilityEqual": 0.0066,
            "probabilityUnder": 0.8692369639621502,
            "probabilityOver": 0.1307630360378498,
            "isWholeNumber": true
        },
        {
            "totalYards": 83.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8701,
            "probabilityOver": 0.1299,
            "isWholeNumber": false
        },
        {
            "totalYards": 84,
            "total": null,
            "occurrences": 62,
            "probabilityEqual": 0.0062,
            "probabilityUnder": 0.8755282753069028,
            "probabilityOver": 0.1244717246930972,
            "isWholeNumber": true
        },
        {
            "totalYards": 84.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8763,
            "probabilityOver": 0.1237,
            "isWholeNumber": false
        },
        {
            "totalYards": 85,
            "total": null,
            "occurrences": 50,
            "probabilityEqual": 0.005,
            "probabilityUnder": 0.8807035175879397,
            "probabilityOver": 0.1192964824120603,
            "isWholeNumber": true
        },
        {
            "totalYards": 85.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8813,
            "probabilityOver": 0.1187,
            "isWholeNumber": false
        },
        {
            "totalYards": 86,
            "total": null,
            "occurrences": 48,
            "probabilityEqual": 0.0048,
            "probabilityUnder": 0.8855506430868167,
            "probabilityOver": 0.11444935691318328,
            "isWholeNumber": true
        },
        {
            "totalYards": 86.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8861,
            "probabilityOver": 0.1139,
            "isWholeNumber": false
        },
        {
            "totalYards": 87,
            "total": null,
            "occurrences": 40,
            "probabilityEqual": 0.004,
            "probabilityUnder": 0.8896586345381526,
            "probabilityOver": 0.11034136546184739,
            "isWholeNumber": true
        },
        {
            "totalYards": 87.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8901,
            "probabilityOver": 0.1099,
            "isWholeNumber": false
        },
        {
            "totalYards": 88,
            "total": null,
            "occurrences": 36,
            "probabilityEqual": 0.0036,
            "probabilityUnder": 0.8933159373745484,
            "probabilityOver": 0.10668406262545163,
            "isWholeNumber": true
        },
        {
            "totalYards": 88.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8937,
            "probabilityOver": 0.1063,
            "isWholeNumber": false
        },
        {
            "totalYards": 89,
            "total": null,
            "occurrences": 42,
            "probabilityEqual": 0.0042,
            "probabilityUnder": 0.8974693713597108,
            "probabilityOver": 0.10253062864028921,
            "isWholeNumber": true
        },
        {
            "totalYards": 89.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8979,
            "probabilityOver": 0.1021,
            "isWholeNumber": false
        },
        {
            "totalYards": 90,
            "total": null,
            "occurrences": 45,
            "probabilityEqual": 0.0045,
            "probabilityUnder": 0.901958814665997,
            "probabilityOver": 0.09804118533400301,
            "isWholeNumber": true
        },
        {
            "totalYards": 90.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9024,
            "probabilityOver": 0.0976,
            "isWholeNumber": false
        },
        {
            "totalYards": 91,
            "total": null,
            "occurrences": 40,
            "probabilityEqual": 0.004,
            "probabilityUnder": 0.9060240963855422,
            "probabilityOver": 0.09397590361445783,
            "isWholeNumber": true
        },
        {
            "totalYards": 91.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9064,
            "probabilityOver": 0.0936,
            "isWholeNumber": false
        },
        {
            "totalYards": 92,
            "total": null,
            "occurrences": 42,
            "probabilityEqual": 0.0042,
            "probabilityUnder": 0.9102229363325969,
            "probabilityOver": 0.0897770636674031,
            "isWholeNumber": true
        },
        {
            "totalYards": 92.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9106,
            "probabilityOver": 0.0894,
            "isWholeNumber": false
        },
        {
            "totalYards": 93,
            "total": null,
            "occurrences": 37,
            "probabilityEqual": 0.0037,
            "probabilityUnder": 0.9139817324099166,
            "probabilityOver": 0.08601826759008331,
            "isWholeNumber": true
        },
        {
            "totalYards": 93.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9143,
            "probabilityOver": 0.0857,
            "isWholeNumber": false
        },
        {
            "totalYards": 94,
            "total": null,
            "occurrences": 32,
            "probabilityEqual": 0.0032,
            "probabilityUnder": 0.9172351524879615,
            "probabilityOver": 0.08276484751203853,
            "isWholeNumber": true
        },
        {
            "totalYards": 94.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9175,
            "probabilityOver": 0.0825,
            "isWholeNumber": false
        },
        {
            "totalYards": 95,
            "total": null,
            "occurrences": 43,
            "probabilityEqual": 0.0043,
            "probabilityUnder": 0.9214622878377021,
            "probabilityOver": 0.07853771216229788,
            "isWholeNumber": true
        },
        {
            "totalYards": 95.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9218,
            "probabilityOver": 0.0782,
            "isWholeNumber": false
        },
        {
            "totalYards": 96,
            "total": null,
            "occurrences": 26,
            "probabilityEqual": 0.0026,
            "probabilityUnder": 0.9242029276117907,
            "probabilityOver": 0.07579707238820935,
            "isWholeNumber": true
        },
        {
            "totalYards": 96.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9244,
            "probabilityOver": 0.0756,
            "isWholeNumber": false
        },
        {
            "totalYards": 97,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.9270885568147628,
            "probabilityOver": 0.07291144318523719,
            "isWholeNumber": true
        },
        {
            "totalYards": 97.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9273,
            "probabilityOver": 0.0727,
            "isWholeNumber": false
        },
        {
            "totalYards": 98,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.9299969912746966,
            "probabilityOver": 0.07000300872530338,
            "isWholeNumber": true
        },
        {
            "totalYards": 98.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9302,
            "probabilityOver": 0.0698,
            "isWholeNumber": false
        },
        {
            "totalYards": 99,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.9329054257346304,
            "probabilityOver": 0.06709457426536958,
            "isWholeNumber": true
        },
        {
            "totalYards": 99.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9331,
            "probabilityOver": 0.0669,
            "isWholeNumber": false
        },
        {
            "totalYards": 100,
            "total": null,
            "occurrences": 30,
            "probabilityEqual": 0.003,
            "probabilityUnder": 0.9359077231695085,
            "probabilityOver": 0.06409227683049147,
            "isWholeNumber": true
        },
        {
            "totalYards": 100.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9361,
            "probabilityOver": 0.0639,
            "isWholeNumber": false
        },
        {
            "totalYards": 101,
            "total": null,
            "occurrences": 35,
            "probabilityEqual": 0.0035,
            "probabilityUnder": 0.9393878575012544,
            "probabilityOver": 0.06061214249874561,
            "isWholeNumber": true
        },
        {
            "totalYards": 101.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9396,
            "probabilityOver": 0.0604,
            "isWholeNumber": false
        },
        {
            "totalYards": 102,
            "total": null,
            "occurrences": 29,
            "probabilityEqual": 0.0029,
            "probabilityUnder": 0.9423327650185538,
            "probabilityOver": 0.05766723498144619,
            "isWholeNumber": true
        },
        {
            "totalYards": 102.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9425,
            "probabilityOver": 0.0575,
            "isWholeNumber": false
        },
        {
            "totalYards": 103,
            "total": null,
            "occurrences": 32,
            "probabilityEqual": 0.0032,
            "probabilityUnder": 0.9455256821829856,
            "probabilityOver": 0.054474317817014443,
            "isWholeNumber": true
        },
        {
            "totalYards": 103.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9457,
            "probabilityOver": 0.0543,
            "isWholeNumber": false
        },
        {
            "totalYards": 104,
            "total": null,
            "occurrences": 24,
            "probabilityEqual": 0.0024,
            "probabilityUnder": 0.9479751403368083,
            "probabilityOver": 0.05202485966319166,
            "isWholeNumber": true
        },
        {
            "totalYards": 104.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9481,
            "probabilityOver": 0.0519,
            "isWholeNumber": false
        },
        {
            "totalYards": 105,
            "total": null,
            "occurrences": 21,
            "probabilityEqual": 0.0021,
            "probabilityUnder": 0.9500951999198316,
            "probabilityOver": 0.04990480008016835,
            "isWholeNumber": true
        },
        {
            "totalYards": 105.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9502,
            "probabilityOver": 0.0498,
            "isWholeNumber": false
        },
        {
            "totalYards": 106,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.9521042084168336,
            "probabilityOver": 0.047895791583166335,
            "isWholeNumber": true
        },
        {
            "totalYards": 106.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9522,
            "probabilityOver": 0.0478,
            "isWholeNumber": false
        },
        {
            "totalYards": 107,
            "total": null,
            "occurrences": 25,
            "probabilityEqual": 0.0025,
            "probabilityUnder": 0.9545864661654135,
            "probabilityOver": 0.04541353383458647,
            "isWholeNumber": true
        },
        {
            "totalYards": 107.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9547,
            "probabilityOver": 0.0453,
            "isWholeNumber": false
        },
        {
            "totalYards": 108,
            "total": null,
            "occurrences": 22,
            "probabilityEqual": 0.0022,
            "probabilityUnder": 0.9568049709360593,
            "probabilityOver": 0.04319502906394067,
            "isWholeNumber": true
        },
        {
            "totalYards": 108.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9569,
            "probabilityOver": 0.0431,
            "isWholeNumber": false
        },
        {
            "totalYards": 109,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.9588176352705411,
            "probabilityOver": 0.041182364729458916,
            "isWholeNumber": true
        },
        {
            "totalYards": 109.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9589,
            "probabilityOver": 0.0411,
            "isWholeNumber": false
        },
        {
            "totalYards": 110,
            "total": null,
            "occurrences": 21,
            "probabilityEqual": 0.0021,
            "probabilityUnder": 0.9609179276480609,
            "probabilityOver": 0.03908207235193907,
            "isWholeNumber": true
        },
        {
            "totalYards": 110.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.961,
            "probabilityOver": 0.039,
            "isWholeNumber": false
        },
        {
            "totalYards": 111,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.9622509262040653,
            "probabilityOver": 0.037749073795934715,
            "isWholeNumber": true
        },
        {
            "totalYards": 111.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9623,
            "probabilityOver": 0.0377,
            "isWholeNumber": false
        },
        {
            "totalYards": 112,
            "total": null,
            "occurrences": 15,
            "probabilityEqual": 0.0015,
            "probabilityUnder": 0.9637456184276415,
            "probabilityOver": 0.03625438157235854,
            "isWholeNumber": true
        },
        {
            "totalYards": 112.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9638,
            "probabilityOver": 0.0362,
            "isWholeNumber": false
        },
        {
            "totalYards": 113,
            "total": null,
            "occurrences": 14,
            "probabilityEqual": 0.0014,
            "probabilityUnder": 0.965151211696375,
            "probabilityOver": 0.034848788303625075,
            "isWholeNumber": true
        },
        {
            "totalYards": 113.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9652,
            "probabilityOver": 0.0348,
            "isWholeNumber": false
        },
        {
            "totalYards": 114,
            "total": null,
            "occurrences": 16,
            "probabilityEqual": 0.0016,
            "probabilityUnder": 0.9667467948717948,
            "probabilityOver": 0.03325320512820513,
            "isWholeNumber": true
        },
        {
            "totalYards": 114.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9668,
            "probabilityOver": 0.0332,
            "isWholeNumber": false
        },
        {
            "totalYards": 115,
            "total": null,
            "occurrences": 16,
            "probabilityEqual": 0.0016,
            "probabilityUnder": 0.9683493589743589,
            "probabilityOver": 0.031650641025641024,
            "isWholeNumber": true
        },
        {
            "totalYards": 115.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9684,
            "probabilityOver": 0.0316,
            "isWholeNumber": false
        },
        {
            "totalYards": 116,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.9703406813627254,
            "probabilityOver": 0.02965931863727455,
            "isWholeNumber": true
        },
        {
            "totalYards": 116.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9704,
            "probabilityOver": 0.0296,
            "isWholeNumber": false
        },
        {
            "totalYards": 117,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.9720524892316939,
            "probabilityOver": 0.027947510768306122,
            "isWholeNumber": true
        },
        {
            "totalYards": 117.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9721,
            "probabilityOver": 0.0279,
            "isWholeNumber": false
        },
        {
            "totalYards": 118,
            "total": null,
            "occurrences": 16,
            "probabilityEqual": 0.0016,
            "probabilityUnder": 0.9736578525641025,
            "probabilityOver": 0.026342147435897436,
            "isWholeNumber": true
        },
        {
            "totalYards": 118.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9737,
            "probabilityOver": 0.0263,
            "isWholeNumber": false
        },
        {
            "totalYards": 119,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.9746746746746747,
            "probabilityOver": 0.025325325325325325,
            "isWholeNumber": true
        },
        {
            "totalYards": 119.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9747,
            "probabilityOver": 0.0253,
            "isWholeNumber": false
        },
        {
            "totalYards": 120,
            "total": null,
            "occurrences": 14,
            "probabilityEqual": 0.0014,
            "probabilityUnder": 0.9760664930903264,
            "probabilityOver": 0.02393350690967354,
            "isWholeNumber": true
        },
        {
            "totalYards": 120.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9761,
            "probabilityOver": 0.0239,
            "isWholeNumber": false
        },
        {
            "totalYards": 121,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.977077077077077,
            "probabilityOver": 0.022922922922922924,
            "isWholeNumber": true
        },
        {
            "totalYards": 121.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9771,
            "probabilityOver": 0.0229,
            "isWholeNumber": false
        },
        {
            "totalYards": 122,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.9778823058446757,
            "probabilityOver": 0.02211769415532426,
            "isWholeNumber": true
        },
        {
            "totalYards": 122.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9779,
            "probabilityOver": 0.0221,
            "isWholeNumber": false
        },
        {
            "totalYards": 123,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.9786829463570856,
            "probabilityOver": 0.021317053642914332,
            "isWholeNumber": true
        },
        {
            "totalYards": 123.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9787,
            "probabilityOver": 0.0213,
            "isWholeNumber": false
        },
        {
            "totalYards": 124,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.9796796796796797,
            "probabilityOver": 0.02032032032032032,
            "isWholeNumber": true
        },
        {
            "totalYards": 124.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9797,
            "probabilityOver": 0.0203,
            "isWholeNumber": false
        },
        {
            "totalYards": 125,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.980484387510008,
            "probabilityOver": 0.019515612489991993,
            "isWholeNumber": true
        },
        {
            "totalYards": 125.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9805,
            "probabilityOver": 0.0195,
            "isWholeNumber": false
        },
        {
            "totalYards": 126,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9811868307815471,
            "probabilityOver": 0.018813169218452917,
            "isWholeNumber": true
        },
        {
            "totalYards": 126.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9812,
            "probabilityOver": 0.0188,
            "isWholeNumber": false
        },
        {
            "totalYards": 127,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9820838754879392,
            "probabilityOver": 0.017916124512060854,
            "isWholeNumber": true
        },
        {
            "totalYards": 127.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9821,
            "probabilityOver": 0.0179,
            "isWholeNumber": false
        },
        {
            "totalYards": 128,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.9831814996496145,
            "probabilityOver": 0.016818500350385426,
            "isWholeNumber": true
        },
        {
            "totalYards": 128.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9832,
            "probabilityOver": 0.0168,
            "isWholeNumber": false
        },
        {
            "totalYards": 129,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.9839871897518014,
            "probabilityOver": 0.016012810248198558,
            "isWholeNumber": true
        },
        {
            "totalYards": 129.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.984,
            "probabilityOver": 0.016,
            "isWholeNumber": false
        },
        {
            "totalYards": 130,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9846892824977485,
            "probabilityOver": 0.015310717502251577,
            "isWholeNumber": true
        },
        {
            "totalYards": 130.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9847,
            "probabilityOver": 0.0153,
            "isWholeNumber": false
        },
        {
            "totalYards": 131,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.985784362799079,
            "probabilityOver": 0.014215637200921014,
            "isWholeNumber": true
        },
        {
            "totalYards": 131.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9858,
            "probabilityOver": 0.0142,
            "isWholeNumber": false
        },
        {
            "totalYards": 132,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9861944777911165,
            "probabilityOver": 0.013805522208883553,
            "isWholeNumber": true
        },
        {
            "totalYards": 132.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9862,
            "probabilityOver": 0.0138,
            "isWholeNumber": false
        },
        {
            "totalYards": 133,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.9871871871871872,
            "probabilityOver": 0.012812812812812813,
            "isWholeNumber": true
        },
        {
            "totalYards": 133.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9872,
            "probabilityOver": 0.0128,
            "isWholeNumber": false
        },
        {
            "totalYards": 134,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9875950380152061,
            "probabilityOver": 0.012404961984793917,
            "isWholeNumber": true
        },
        {
            "totalYards": 134.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9876,
            "probabilityOver": 0.0124,
            "isWholeNumber": false
        },
        {
            "totalYards": 135,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9879951980792316,
            "probabilityOver": 0.012004801920768308,
            "isWholeNumber": true
        },
        {
            "totalYards": 135.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.988,
            "probabilityOver": 0.012,
            "isWholeNumber": false
        },
        {
            "totalYards": 136,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9885931558935361,
            "probabilityOver": 0.011406844106463879,
            "isWholeNumber": true
        },
        {
            "totalYards": 136.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9886,
            "probabilityOver": 0.0114,
            "isWholeNumber": false
        },
        {
            "totalYards": 138,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9887977595519104,
            "probabilityOver": 0.011202240448089618,
            "isWholeNumber": true
        },
        {
            "totalYards": 138.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9888,
            "probabilityOver": 0.0112,
            "isWholeNumber": false
        },
        {
            "totalYards": 139,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9892946473236618,
            "probabilityOver": 0.010705352676338169,
            "isWholeNumber": true
        },
        {
            "totalYards": 139.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9893,
            "probabilityOver": 0.0107,
            "isWholeNumber": false
        },
        {
            "totalYards": 140,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9898939363618171,
            "probabilityOver": 0.01010606363818291,
            "isWholeNumber": true
        },
        {
            "totalYards": 140.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9899,
            "probabilityOver": 0.0101,
            "isWholeNumber": false
        },
        {
            "totalYards": 141,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9901970591177354,
            "probabilityOver": 0.00980294088226468,
            "isWholeNumber": true
        },
        {
            "totalYards": 141.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9902,
            "probabilityOver": 0.0098,
            "isWholeNumber": false
        },
        {
            "totalYards": 142,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9908936255378765,
            "probabilityOver": 0.009106374462123486,
            "isWholeNumber": true
        },
        {
            "totalYards": 142.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9909,
            "probabilityOver": 0.0091,
            "isWholeNumber": false
        },
        {
            "totalYards": 143,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.991494896938163,
            "probabilityOver": 0.008505103061837103,
            "isWholeNumber": true
        },
        {
            "totalYards": 143.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9915,
            "probabilityOver": 0.0085,
            "isWholeNumber": false
        },
        {
            "totalYards": 144,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9919959979989995,
            "probabilityOver": 0.0080040020010005,
            "isWholeNumber": true
        },
        {
            "totalYards": 144.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.992,
            "probabilityOver": 0.008,
            "isWholeNumber": false
        },
        {
            "totalYards": 145,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9922976893067921,
            "probabilityOver": 0.007702310693207963,
            "isWholeNumber": true
        },
        {
            "totalYards": 145.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9923,
            "probabilityOver": 0.0077,
            "isWholeNumber": false
        },
        {
            "totalYards": 146,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9927963981990996,
            "probabilityOver": 0.007203601800900451,
            "isWholeNumber": true
        },
        {
            "totalYards": 146.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9928,
            "probabilityOver": 0.0072,
            "isWholeNumber": false
        },
        {
            "totalYards": 147,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9928992899289929,
            "probabilityOver": 0.007100710071007101,
            "isWholeNumber": true
        },
        {
            "totalYards": 147.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9929,
            "probabilityOver": 0.0071,
            "isWholeNumber": false
        },
        {
            "totalYards": 148,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9931979593878163,
            "probabilityOver": 0.006802040612183655,
            "isWholeNumber": true
        },
        {
            "totalYards": 148.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9932,
            "probabilityOver": 0.0068,
            "isWholeNumber": false
        },
        {
            "totalYards": 149,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9932993299329933,
            "probabilityOver": 0.0067006700670067,
            "isWholeNumber": true
        },
        {
            "totalYards": 149.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9933,
            "probabilityOver": 0.0067,
            "isWholeNumber": false
        },
        {
            "totalYards": 150,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9936974789915967,
            "probabilityOver": 0.0063025210084033615,
            "isWholeNumber": true
        },
        {
            "totalYards": 150.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9937,
            "probabilityOver": 0.0063,
            "isWholeNumber": false
        },
        {
            "totalYards": 151,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9939981994598379,
            "probabilityOver": 0.006001800540162049,
            "isWholeNumber": true
        },
        {
            "totalYards": 151.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.994,
            "probabilityOver": 0.006,
            "isWholeNumber": false
        },
        {
            "totalYards": 152,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9940994099409941,
            "probabilityOver": 0.005900590059005901,
            "isWholeNumber": true
        },
        {
            "totalYards": 152.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9941,
            "probabilityOver": 0.0059,
            "isWholeNumber": false
        },
        {
            "totalYards": 153,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9942988597719544,
            "probabilityOver": 0.005701140228045609,
            "isWholeNumber": true
        },
        {
            "totalYards": 153.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9943,
            "probabilityOver": 0.0057,
            "isWholeNumber": false
        },
        {
            "totalYards": 154,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9945983795138541,
            "probabilityOver": 0.005401620486145843,
            "isWholeNumber": true
        },
        {
            "totalYards": 154.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9946,
            "probabilityOver": 0.0054,
            "isWholeNumber": false
        },
        {
            "totalYards": 157,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9951971182709626,
            "probabilityOver": 0.004802881729037423,
            "isWholeNumber": true
        },
        {
            "totalYards": 157.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9952,
            "probabilityOver": 0.0048,
            "isWholeNumber": false
        },
        {
            "totalYards": 158,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9953990798159632,
            "probabilityOver": 0.004600920184036807,
            "isWholeNumber": true
        },
        {
            "totalYards": 158.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9954,
            "probabilityOver": 0.0046,
            "isWholeNumber": false
        },
        {
            "totalYards": 159,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9955991198239648,
            "probabilityOver": 0.004400880176035207,
            "isWholeNumber": true
        },
        {
            "totalYards": 159.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9956,
            "probabilityOver": 0.0044,
            "isWholeNumber": false
        },
        {
            "totalYards": 160,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9956995699569957,
            "probabilityOver": 0.004300430043004301,
            "isWholeNumber": true
        },
        {
            "totalYards": 160.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9957,
            "probabilityOver": 0.0043,
            "isWholeNumber": false
        },
        {
            "totalYards": 161,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.995998799639892,
            "probabilityOver": 0.004001200360108033,
            "isWholeNumber": true
        },
        {
            "totalYards": 161.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.996,
            "probabilityOver": 0.004,
            "isWholeNumber": false
        },
        {
            "totalYards": 162,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9961992398479695,
            "probabilityOver": 0.003800760152030406,
            "isWholeNumber": true
        },
        {
            "totalYards": 162.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9962,
            "probabilityOver": 0.0038,
            "isWholeNumber": false
        },
        {
            "totalYards": 163,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9963992798559712,
            "probabilityOver": 0.0036007201440288058,
            "isWholeNumber": true
        },
        {
            "totalYards": 163.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9964,
            "probabilityOver": 0.0036,
            "isWholeNumber": false
        },
        {
            "totalYards": 164,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9965993198639728,
            "probabilityOver": 0.0034006801360272052,
            "isWholeNumber": true
        },
        {
            "totalYards": 164.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9966,
            "probabilityOver": 0.0034,
            "isWholeNumber": false
        },
        {
            "totalYards": 165,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9967993598719744,
            "probabilityOver": 0.003200640128025605,
            "isWholeNumber": true
        },
        {
            "totalYards": 165.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9968,
            "probabilityOver": 0.0032,
            "isWholeNumber": false
        },
        {
            "totalYards": 166,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9968996899689969,
            "probabilityOver": 0.0031003100310031005,
            "isWholeNumber": true
        },
        {
            "totalYards": 166.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9969,
            "probabilityOver": 0.0031,
            "isWholeNumber": false
        },
        {
            "totalYards": 167,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9970994198839768,
            "probabilityOver": 0.0029005801160232048,
            "isWholeNumber": true
        },
        {
            "totalYards": 167.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9971,
            "probabilityOver": 0.0029,
            "isWholeNumber": false
        },
        {
            "totalYards": 170,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9972994598919784,
            "probabilityOver": 0.0027005401080216042,
            "isWholeNumber": true
        },
        {
            "totalYards": 170.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9973,
            "probabilityOver": 0.0027,
            "isWholeNumber": false
        },
        {
            "totalYards": 171,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.99749949989998,
            "probabilityOver": 0.002500500100020004,
            "isWholeNumber": true
        },
        {
            "totalYards": 171.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9975,
            "probabilityOver": 0.0025,
            "isWholeNumber": false
        },
        {
            "totalYards": 172,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9977993398019406,
            "probabilityOver": 0.002200660198059418,
            "isWholeNumber": true
        },
        {
            "totalYards": 172.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9978,
            "probabilityOver": 0.0022,
            "isWholeNumber": false
        },
        {
            "totalYards": 173,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9978997899789979,
            "probabilityOver": 0.0021002100210021,
            "isWholeNumber": true
        },
        {
            "totalYards": 173.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9979,
            "probabilityOver": 0.0021,
            "isWholeNumber": false
        },
        {
            "totalYards": 174,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9981994598379513,
            "probabilityOver": 0.0018005401620486145,
            "isWholeNumber": true
        },
        {
            "totalYards": 174.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9982,
            "probabilityOver": 0.0018,
            "isWholeNumber": false
        },
        {
            "totalYards": 175,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9982998299829983,
            "probabilityOver": 0.0017001700170017002,
            "isWholeNumber": true
        },
        {
            "totalYards": 175.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9983,
            "probabilityOver": 0.0017,
            "isWholeNumber": false
        },
        {
            "totalYards": 176,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9983998399839984,
            "probabilityOver": 0.0016001600160016002,
            "isWholeNumber": true
        },
        {
            "totalYards": 176.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9984,
            "probabilityOver": 0.0016,
            "isWholeNumber": false
        },
        {
            "totalYards": 178,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9984998499849985,
            "probabilityOver": 0.0015001500150015,
            "isWholeNumber": true
        },
        {
            "totalYards": 178.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9985,
            "probabilityOver": 0.0015,
            "isWholeNumber": false
        },
        {
            "totalYards": 179,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9986997399479896,
            "probabilityOver": 0.001300260052010402,
            "isWholeNumber": true
        },
        {
            "totalYards": 179.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9987,
            "probabilityOver": 0.0013,
            "isWholeNumber": false
        },
        {
            "totalYards": 183,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9988997799559912,
            "probabilityOver": 0.0011002200440088017,
            "isWholeNumber": true
        },
        {
            "totalYards": 183.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9989,
            "probabilityOver": 0.0011,
            "isWholeNumber": false
        },
        {
            "totalYards": 185,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.998999899989999,
            "probabilityOver": 0.001000100010001,
            "isWholeNumber": true
        },
        {
            "totalYards": 185.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.999,
            "probabilityOver": 0.001,
            "isWholeNumber": false
        },
        {
            "totalYards": 187,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9991998399679936,
            "probabilityOver": 0.0008001600320064013,
            "isWholeNumber": true
        },
        {
            "totalYards": 187.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9992,
            "probabilityOver": 0.0008,
            "isWholeNumber": false
        },
        {
            "totalYards": 188,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9993998799759952,
            "probabilityOver": 0.000600120024004801,
            "isWholeNumber": true
        },
        {
            "totalYards": 188.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9994,
            "probabilityOver": 0.0006,
            "isWholeNumber": false
        },
        {
            "totalYards": 189,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9994999499949995,
            "probabilityOver": 0.0005000500050005,
            "isWholeNumber": true
        },
        {
            "totalYards": 189.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9995,
            "probabilityOver": 0.0005,
            "isWholeNumber": false
        },
        {
            "totalYards": 191,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9995999599959996,
            "probabilityOver": 0.00040004000400040005,
            "isWholeNumber": true
        },
        {
            "totalYards": 191.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9996,
            "probabilityOver": 0.0004,
            "isWholeNumber": false
        },
        {
            "totalYards": 193,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9996999699969997,
            "probabilityOver": 0.00030003000300030005,
            "isWholeNumber": true
        },
        {
            "totalYards": 193.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9997,
            "probabilityOver": 0.0003,
            "isWholeNumber": false
        },
        {
            "totalYards": 202,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9997999799979999,
            "probabilityOver": 0.00020002000200020003,
            "isWholeNumber": true
        },
        {
            "totalYards": 202.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9998,
            "probabilityOver": 0.0002,
            "isWholeNumber": false
        },
        {
            "totalYards": 204,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9998999899989999,
            "probabilityOver": 0.00010001000100010001,
            "isWholeNumber": true
        },
        {
            "totalYards": 204.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999,
            "probabilityOver": 0.0001,
            "isWholeNumber": false
        },
        {
            "totalYards": 236,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        },
        {
            "totalYards": 236.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": false
        }
    ],
    "yardsRangeProbabilities": [
        {
            "startYards": 0,
            "endYards": 9,
            "occurrences": 466,
            "probabilityWithin": 0.0466
        },
        {
            "startYards": 10,
            "endYards": 19,
            "occurrences": 962,
            "probabilityWithin": 0.0962
        },
        {
            "startYards": 20,
            "endYards": 29,
            "occurrences": 1327,
            "probabilityWithin": 0.1327
        },
        {
            "startYards": 30,
            "endYards": 39,
            "occurrences": 1479,
            "probabilityWithin": 0.1479
        },
        {
            "startYards": 40,
            "endYards": 49,
            "occurrences": 1413,
            "probabilityWithin": 0.1413
        },
        {
            "startYards": 50,
            "endYards": 59,
            "occurrences": 1183,
            "probabilityWithin": 0.1183
        },
        {
            "startYards": 60,
            "endYards": 69,
            "occurrences": 955,
            "probabilityWithin": 0.0955
        },
        {
            "startYards": 70,
            "endYards": 79,
            "occurrences": 652,
            "probabilityWithin": 0.0652
        },
        {
            "startYards": 80,
            "endYards": 89,
            "occurrences": 528,
            "probabilityWithin": 0.0528
        },
        {
            "startYards": 90,
            "endYards": 99,
            "occurrences": 352,
            "probabilityWithin": 0.0352
        },
        {
            "startYards": 100,
            "endYards": 109,
            "occurrences": 258,
            "probabilityWithin": 0.0258
        },
        {
            "startYards": 110,
            "endYards": 119,
            "occurrences": 158,
            "probabilityWithin": 0.0158
        },
        {
            "startYards": 120,
            "endYards": 129,
            "occurrences": 93,
            "probabilityWithin": 0.0093
        },
        {
            "startYards": 130,
            "endYards": 139,
            "occurrences": 53,
            "probabilityWithin": 0.0053
        },
        {
            "startYards": 140,
            "endYards": 149,
            "occurrences": 40,
            "probabilityWithin": 0.004
        },
        {
            "startYards": 150,
            "endYards": 159,
            "occurrences": 23,
            "probabilityWithin": 0.0023
        },
        {
            "startYards": 160,
            "endYards": 169,
            "occurrences": 15,
            "probabilityWithin": 0.0015
        },
        {
            "startYards": 170,
            "endYards": 179,
            "occurrences": 16,
            "probabilityWithin": 0.0016
        },
        {
            "startYards": 180,
            "endYards": 189,
            "occurrences": 8,
            "probabilityWithin": 0.0008
        },
        {
            "startYards": 190,
            "endYards": 199,
            "occurrences": 2,
            "probabilityWithin": 0.0002
        },
        {
            "startYards": 200,
            "endYards": null,
            "occurrences": 3,
            "probabilityWithin": 0.0003
        }
    ]
};

// const teResponse = await fetch("https://api.unabated.com/api/props/nfl/tightend/receivingyards/3/30/0", {
//     "headers": {
//         "accept": "application/json, text/plain, */*",
//         "accept-language": "en-US,en;q=0.9,la;q=0.8",
//         "priority": "u=1, i",
//         "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"macOS\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-site",
//         "x-amz-cf-v-id": "dNSob7rQOiJFE_59NDSm7tuZ6ed5MA_8w8CHVqr8tGSFYpgzEUqBuQ=="
//     },
//     "referrer": "https://unabated.com/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors",
//     "credentials": "include"
// });

// This is the response for TE
const teResponse = {
    "summary": {
        "yardsBonusThreshold": 100,
        "yardBonusProbability": 0.009,
        "meanYards": 29.4549,
        "medianYards": 26
    },
    "countProbabilities": [
        {
            "totalYards": null,
            "total": 0,
            "occurrences": 0,
            "probabilityEqual": 0.0497870683678639,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 0.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0497870683678639,
            "probabilityOver": 0.950212931632136,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 1,
            "occurrences": 0,
            "probabilityEqual": 0.149361205103592,
            "probabilityUnder": 0.058529035668925776,
            "probabilityOver": 0.9414709643310742,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 1.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1991482734714559,
            "probabilityOver": 0.8008517265285441,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 2,
            "occurrences": 0,
            "probabilityEqual": 0.224041807655388,
            "probabilityUnder": 0.2566482001687687,
            "probabilityOver": 0.7433517998312313,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 2.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4231900811268439,
            "probabilityOver": 0.5768099188731561,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 3,
            "occurrences": 0,
            "probabilityEqual": 0.224041807655388,
            "probabilityUnder": 0.5453774253586336,
            "probabilityOver": 0.4546225746413664,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 3.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6472318887822319,
            "probabilityOver": 0.3527681112177681,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 4,
            "occurrences": 0,
            "probabilityEqual": 0.168031355741541,
            "probabilityUnder": 0.7779522620820829,
            "probabilityOver": 0.2220477379179171,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 4.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8152632445237729,
            "probabilityOver": 0.1847367554762271,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 5,
            "occurrences": 0,
            "probabilityEqual": 0.100818813444925,
            "probabilityUnder": 0.9066729339024465,
            "probabilityOver": 0.09332706609755353,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 5.5,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9160820579686979,
            "probabilityOver": 0.0839179420313021,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 6,
            "occurrences": 0,
            "probabilityEqual": 0.0504094067224622,
            "probabilityUnder": 0.9647126503294601,
            "probabilityOver": 0.03528734967053989,
            "isWholeNumber": true
        },
        {
            "totalYards": null,
            "total": 6.5,
            "occurrences": 0,
            "probabilityEqual": 0.0335085353088399,
            "probabilityUnder": 0.9664914646911601,
            "probabilityOver": 0,
            "isWholeNumber": false
        },
        {
            "totalYards": null,
            "total": 7,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        }
    ],
    "yardsProbabilities": [
        {
            "totalYards": -9,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0,
            "probabilityOver": 1,
            "isWholeNumber": true
        },
        {
            "totalYards": -8.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0001,
            "probabilityOver": 0.9999,
            "isWholeNumber": false
        },
        {
            "totalYards": -6,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.00010001000100010001,
            "probabilityOver": 0.9998999899989999,
            "isWholeNumber": true
        },
        {
            "totalYards": -5.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0002,
            "probabilityOver": 0.9998,
            "isWholeNumber": false
        },
        {
            "totalYards": -5,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.00020012007204322593,
            "probabilityOver": 0.9997998799279568,
            "isWholeNumber": true
        },
        {
            "totalYards": -4.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0008,
            "probabilityOver": 0.9992,
            "isWholeNumber": false
        },
        {
            "totalYards": -4,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.0008003201280512205,
            "probabilityOver": 0.9991996798719488,
            "isWholeNumber": true
        },
        {
            "totalYards": -3.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0012,
            "probabilityOver": 0.9988,
            "isWholeNumber": false
        },
        {
            "totalYards": -3,
            "total": null,
            "occurrences": 8,
            "probabilityEqual": 0.0008,
            "probabilityUnder": 0.0012009607686148918,
            "probabilityOver": 0.9987990392313851,
            "isWholeNumber": true
        },
        {
            "totalYards": -2.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.002,
            "probabilityOver": 0.998,
            "isWholeNumber": false
        },
        {
            "totalYards": -2,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.0020012007204322593,
            "probabilityOver": 0.9979987992795677,
            "isWholeNumber": true
        },
        {
            "totalYards": -1.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0026,
            "probabilityOver": 0.9974,
            "isWholeNumber": false
        },
        {
            "totalYards": -1,
            "total": null,
            "occurrences": 15,
            "probabilityEqual": 0.0015,
            "probabilityUnder": 0.002603905858788182,
            "probabilityOver": 0.9973960941412118,
            "isWholeNumber": true
        },
        {
            "totalYards": -0.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0041,
            "probabilityOver": 0.9959,
            "isWholeNumber": false
        },
        {
            "totalYards": 0,
            "total": null,
            "occurrences": 524,
            "probabilityEqual": 0.0524,
            "probabilityUnder": 0.004326720135078092,
            "probabilityOver": 0.9956732798649219,
            "isWholeNumber": true
        },
        {
            "totalYards": 0.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0565,
            "probabilityOver": 0.9435,
            "isWholeNumber": false
        },
        {
            "totalYards": 1,
            "total": null,
            "occurrences": 68,
            "probabilityEqual": 0.0068,
            "probabilityUnder": 0.05688683044703987,
            "probabilityOver": 0.9431131695529601,
            "isWholeNumber": true
        },
        {
            "totalYards": 1.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0633,
            "probabilityOver": 0.9367,
            "isWholeNumber": false
        },
        {
            "totalYards": 2,
            "total": null,
            "occurrences": 77,
            "probabilityEqual": 0.0077,
            "probabilityUnder": 0.06379119217978434,
            "probabilityOver": 0.9362088078202156,
            "isWholeNumber": true
        },
        {
            "totalYards": 2.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.071,
            "probabilityOver": 0.929,
            "isWholeNumber": false
        },
        {
            "totalYards": 3,
            "total": null,
            "occurrences": 94,
            "probabilityEqual": 0.0094,
            "probabilityUnder": 0.07167373309105593,
            "probabilityOver": 0.928326266908944,
            "isWholeNumber": true
        },
        {
            "totalYards": 3.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0804,
            "probabilityOver": 0.9196,
            "isWholeNumber": false
        },
        {
            "totalYards": 4,
            "total": null,
            "occurrences": 148,
            "probabilityEqual": 0.0148,
            "probabilityUnder": 0.08160779537149818,
            "probabilityOver": 0.9183922046285018,
            "isWholeNumber": true
        },
        {
            "totalYards": 4.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.0952,
            "probabilityOver": 0.9048,
            "isWholeNumber": false
        },
        {
            "totalYards": 5,
            "total": null,
            "occurrences": 167,
            "probabilityEqual": 0.0167,
            "probabilityUnder": 0.0968168412488559,
            "probabilityOver": 0.9031831587511441,
            "isWholeNumber": true
        },
        {
            "totalYards": 5.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1119,
            "probabilityOver": 0.8881,
            "isWholeNumber": false
        },
        {
            "totalYards": 6,
            "total": null,
            "occurrences": 166,
            "probabilityEqual": 0.0166,
            "probabilityUnder": 0.11378889566809029,
            "probabilityOver": 0.8862111043319097,
            "isWholeNumber": true
        },
        {
            "totalYards": 6.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1285,
            "probabilityOver": 0.8715,
            "isWholeNumber": false
        },
        {
            "totalYards": 7,
            "total": null,
            "occurrences": 186,
            "probabilityEqual": 0.0186,
            "probabilityUnder": 0.13093539841043408,
            "probabilityOver": 0.8690646015895659,
            "isWholeNumber": true
        },
        {
            "totalYards": 7.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1471,
            "probabilityOver": 0.8529,
            "isWholeNumber": false
        },
        {
            "totalYards": 8,
            "total": null,
            "occurrences": 167,
            "probabilityEqual": 0.0167,
            "probabilityUnder": 0.14959829146750736,
            "probabilityOver": 0.8504017085324926,
            "isWholeNumber": true
        },
        {
            "totalYards": 8.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1638,
            "probabilityOver": 0.8362,
            "isWholeNumber": false
        },
        {
            "totalYards": 9,
            "total": null,
            "occurrences": 213,
            "probabilityEqual": 0.0213,
            "probabilityUnder": 0.16736487176867273,
            "probabilityOver": 0.8326351282313272,
            "isWholeNumber": true
        },
        {
            "totalYards": 9.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.1851,
            "probabilityOver": 0.8149,
            "isWholeNumber": false
        },
        {
            "totalYards": 10,
            "total": null,
            "occurrences": 168,
            "probabilityEqual": 0.0168,
            "probabilityUnder": 0.18826281529698943,
            "probabilityOver": 0.8117371847030106,
            "isWholeNumber": true
        },
        {
            "totalYards": 10.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2019,
            "probabilityOver": 0.7981,
            "isWholeNumber": false
        },
        {
            "totalYards": 11,
            "total": null,
            "occurrences": 218,
            "probabilityEqual": 0.0218,
            "probabilityUnder": 0.20639950930280107,
            "probabilityOver": 0.793600490697199,
            "isWholeNumber": true
        },
        {
            "totalYards": 11.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2237,
            "probabilityOver": 0.7763,
            "isWholeNumber": false
        },
        {
            "totalYards": 12,
            "total": null,
            "occurrences": 191,
            "probabilityEqual": 0.0191,
            "probabilityUnder": 0.22805586706086248,
            "probabilityOver": 0.7719441329391376,
            "isWholeNumber": true
        },
        {
            "totalYards": 12.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2428,
            "probabilityOver": 0.7572,
            "isWholeNumber": false
        },
        {
            "totalYards": 13,
            "total": null,
            "occurrences": 207,
            "probabilityEqual": 0.0207,
            "probabilityUnder": 0.2479321964668641,
            "probabilityOver": 0.752067803533136,
            "isWholeNumber": true
        },
        {
            "totalYards": 13.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2635,
            "probabilityOver": 0.7365,
            "isWholeNumber": false
        },
        {
            "totalYards": 14,
            "total": null,
            "occurrences": 228,
            "probabilityEqual": 0.0228,
            "probabilityUnder": 0.2696479738027016,
            "probabilityOver": 0.7303520261972984,
            "isWholeNumber": true
        },
        {
            "totalYards": 14.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.2863,
            "probabilityOver": 0.7137,
            "isWholeNumber": false
        },
        {
            "totalYards": 15,
            "total": null,
            "occurrences": 200,
            "probabilityEqual": 0.02,
            "probabilityUnder": 0.29214285714285715,
            "probabilityOver": 0.7078571428571429,
            "isWholeNumber": true
        },
        {
            "totalYards": 15.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3063,
            "probabilityOver": 0.6937,
            "isWholeNumber": false
        },
        {
            "totalYards": 16,
            "total": null,
            "occurrences": 209,
            "probabilityEqual": 0.0209,
            "probabilityUnder": 0.31283832090695535,
            "probabilityOver": 0.6871616790930446,
            "isWholeNumber": true
        },
        {
            "totalYards": 16.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3272,
            "probabilityOver": 0.6728,
            "isWholeNumber": false
        },
        {
            "totalYards": 17,
            "total": null,
            "occurrences": 206,
            "probabilityEqual": 0.0206,
            "probabilityUnder": 0.3340820910761691,
            "probabilityOver": 0.665917908923831,
            "isWholeNumber": true
        },
        {
            "totalYards": 17.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3478,
            "probabilityOver": 0.6522,
            "isWholeNumber": false
        },
        {
            "totalYards": 18,
            "total": null,
            "occurrences": 214,
            "probabilityEqual": 0.0214,
            "probabilityUnder": 0.3554056815859391,
            "probabilityOver": 0.6445943184140609,
            "isWholeNumber": true
        },
        {
            "totalYards": 18.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3692,
            "probabilityOver": 0.6308,
            "isWholeNumber": false
        },
        {
            "totalYards": 19,
            "total": null,
            "occurrences": 172,
            "probabilityEqual": 0.0172,
            "probabilityUnder": 0.37566137566137564,
            "probabilityOver": 0.6243386243386243,
            "isWholeNumber": true
        },
        {
            "totalYards": 19.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.3864,
            "probabilityOver": 0.6136,
            "isWholeNumber": false
        },
        {
            "totalYards": 20,
            "total": null,
            "occurrences": 210,
            "probabilityEqual": 0.021,
            "probabilityUnder": 0.3946884576098059,
            "probabilityOver": 0.605311542390194,
            "isWholeNumber": true
        },
        {
            "totalYards": 20.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4074,
            "probabilityOver": 0.5926,
            "isWholeNumber": false
        },
        {
            "totalYards": 21,
            "total": null,
            "occurrences": 180,
            "probabilityEqual": 0.018,
            "probabilityUnder": 0.41486761710794295,
            "probabilityOver": 0.585132382892057,
            "isWholeNumber": true
        },
        {
            "totalYards": 21.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4254,
            "probabilityOver": 0.5746,
            "isWholeNumber": false
        },
        {
            "totalYards": 22,
            "total": null,
            "occurrences": 172,
            "probabilityEqual": 0.0172,
            "probabilityUnder": 0.43284493284493286,
            "probabilityOver": 0.5671550671550671,
            "isWholeNumber": true
        },
        {
            "totalYards": 22.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4426,
            "probabilityOver": 0.5574,
            "isWholeNumber": false
        },
        {
            "totalYards": 23,
            "total": null,
            "occurrences": 195,
            "probabilityEqual": 0.0195,
            "probabilityUnder": 0.45140234574196836,
            "probabilityOver": 0.5485976542580316,
            "isWholeNumber": true
        },
        {
            "totalYards": 23.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4621,
            "probabilityOver": 0.5379,
            "isWholeNumber": false
        },
        {
            "totalYards": 24,
            "total": null,
            "occurrences": 185,
            "probabilityEqual": 0.0185,
            "probabilityUnder": 0.4708099847172695,
            "probabilityOver": 0.5291900152827305,
            "isWholeNumber": true
        },
        {
            "totalYards": 24.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4806,
            "probabilityOver": 0.5194,
            "isWholeNumber": false
        },
        {
            "totalYards": 25,
            "total": null,
            "occurrences": 187,
            "probabilityEqual": 0.0187,
            "probabilityUnder": 0.48975848364414554,
            "probabilityOver": 0.5102415163558545,
            "isWholeNumber": true
        },
        {
            "totalYards": 25.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.4993,
            "probabilityOver": 0.5007,
            "isWholeNumber": false
        },
        {
            "totalYards": 26,
            "total": null,
            "occurrences": 170,
            "probabilityEqual": 0.017,
            "probabilityUnder": 0.5079348931841302,
            "probabilityOver": 0.4920651068158698,
            "isWholeNumber": true
        },
        {
            "totalYards": 26.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5163,
            "probabilityOver": 0.4837,
            "isWholeNumber": false
        },
        {
            "totalYards": 27,
            "total": null,
            "occurrences": 204,
            "probabilityEqual": 0.0204,
            "probabilityUnder": 0.5270518579011841,
            "probabilityOver": 0.47294814209881586,
            "isWholeNumber": true
        },
        {
            "totalYards": 27.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5367,
            "probabilityOver": 0.4633,
            "isWholeNumber": false
        },
        {
            "totalYards": 28,
            "total": null,
            "occurrences": 174,
            "probabilityEqual": 0.0174,
            "probabilityUnder": 0.5462039487075107,
            "probabilityOver": 0.4537960512924893,
            "isWholeNumber": true
        },
        {
            "totalYards": 28.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5541,
            "probabilityOver": 0.4459,
            "isWholeNumber": false
        },
        {
            "totalYards": 29,
            "total": null,
            "occurrences": 185,
            "probabilityEqual": 0.0185,
            "probabilityUnder": 0.5645440652063168,
            "probabilityOver": 0.43545593479368316,
            "isWholeNumber": true
        },
        {
            "totalYards": 29.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5726,
            "probabilityOver": 0.4274,
            "isWholeNumber": false
        },
        {
            "totalYards": 30,
            "total": null,
            "occurrences": 166,
            "probabilityEqual": 0.0166,
            "probabilityUnder": 0.5822656091112467,
            "probabilityOver": 0.4177343908887533,
            "isWholeNumber": true
        },
        {
            "totalYards": 30.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.5892,
            "probabilityOver": 0.4108,
            "isWholeNumber": false
        },
        {
            "totalYards": 31,
            "total": null,
            "occurrences": 195,
            "probabilityEqual": 0.0195,
            "probabilityUnder": 0.6009178990311066,
            "probabilityOver": 0.3990821009688934,
            "isWholeNumber": true
        },
        {
            "totalYards": 31.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6087,
            "probabilityOver": 0.3913,
            "isWholeNumber": false
        },
        {
            "totalYards": 32,
            "total": null,
            "occurrences": 143,
            "probabilityEqual": 0.0143,
            "probabilityUnder": 0.6175306888505631,
            "probabilityOver": 0.38246931114943694,
            "isWholeNumber": true
        },
        {
            "totalYards": 32.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.623,
            "probabilityOver": 0.377,
            "isWholeNumber": false
        },
        {
            "totalYards": 33,
            "total": null,
            "occurrences": 148,
            "probabilityEqual": 0.0148,
            "probabilityUnder": 0.6323589118960617,
            "probabilityOver": 0.3676410881039383,
            "isWholeNumber": true
        },
        {
            "totalYards": 33.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6378,
            "probabilityOver": 0.3622,
            "isWholeNumber": false
        },
        {
            "totalYards": 34,
            "total": null,
            "occurrences": 147,
            "probabilityEqual": 0.0147,
            "probabilityUnder": 0.647315538414696,
            "probabilityOver": 0.352684461585304,
            "isWholeNumber": true
        },
        {
            "totalYards": 34.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6525,
            "probabilityOver": 0.3475,
            "isWholeNumber": false
        },
        {
            "totalYards": 35,
            "total": null,
            "occurrences": 157,
            "probabilityEqual": 0.0157,
            "probabilityUnder": 0.6629076501066747,
            "probabilityOver": 0.3370923498933252,
            "isWholeNumber": true
        },
        {
            "totalYards": 35.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6682,
            "probabilityOver": 0.3318,
            "isWholeNumber": false
        },
        {
            "totalYards": 36,
            "total": null,
            "occurrences": 138,
            "probabilityEqual": 0.0138,
            "probabilityUnder": 0.6775501926586899,
            "probabilityOver": 0.32244980734131007,
            "isWholeNumber": true
        },
        {
            "totalYards": 36.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.682,
            "probabilityOver": 0.318,
            "isWholeNumber": false
        },
        {
            "totalYards": 37,
            "total": null,
            "occurrences": 152,
            "probabilityEqual": 0.0152,
            "probabilityUnder": 0.6925264012997563,
            "probabilityOver": 0.3074735987002437,
            "isWholeNumber": true
        },
        {
            "totalYards": 37.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.6972,
            "probabilityOver": 0.3028,
            "isWholeNumber": false
        },
        {
            "totalYards": 38,
            "total": null,
            "occurrences": 147,
            "probabilityEqual": 0.0147,
            "probabilityUnder": 0.7076017456612199,
            "probabilityOver": 0.2923982543387801,
            "isWholeNumber": true
        },
        {
            "totalYards": 38.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7119,
            "probabilityOver": 0.2881,
            "isWholeNumber": false
        },
        {
            "totalYards": 39,
            "total": null,
            "occurrences": 138,
            "probabilityEqual": 0.0138,
            "probabilityUnder": 0.7218616913404989,
            "probabilityOver": 0.2781383086595011,
            "isWholeNumber": true
        },
        {
            "totalYards": 39.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7257,
            "probabilityOver": 0.2743,
            "isWholeNumber": false
        },
        {
            "totalYards": 40,
            "total": null,
            "occurrences": 123,
            "probabilityEqual": 0.0123,
            "probabilityUnder": 0.7347372684013365,
            "probabilityOver": 0.26526273159866354,
            "isWholeNumber": true
        },
        {
            "totalYards": 40.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.738,
            "probabilityOver": 0.262,
            "isWholeNumber": false
        },
        {
            "totalYards": 41,
            "total": null,
            "occurrences": 116,
            "probabilityEqual": 0.0116,
            "probabilityUnder": 0.7466612707405909,
            "probabilityOver": 0.25333872925940915,
            "isWholeNumber": true
        },
        {
            "totalYards": 41.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7496,
            "probabilityOver": 0.2504,
            "isWholeNumber": false
        },
        {
            "totalYards": 42,
            "total": null,
            "occurrences": 111,
            "probabilityEqual": 0.0111,
            "probabilityUnder": 0.7580139548993832,
            "probabilityOver": 0.24198604510061686,
            "isWholeNumber": true
        },
        {
            "totalYards": 42.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7607,
            "probabilityOver": 0.2393,
            "isWholeNumber": false
        },
        {
            "totalYards": 43,
            "total": null,
            "occurrences": 109,
            "probabilityEqual": 0.0109,
            "probabilityUnder": 0.7690830047517946,
            "probabilityOver": 0.23091699524820544,
            "isWholeNumber": true
        },
        {
            "totalYards": 43.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7716,
            "probabilityOver": 0.2284,
            "isWholeNumber": false
        },
        {
            "totalYards": 44,
            "total": null,
            "occurrences": 117,
            "probabilityEqual": 0.0117,
            "probabilityUnder": 0.7807345947586766,
            "probabilityOver": 0.21926540524132349,
            "isWholeNumber": true
        },
        {
            "totalYards": 44.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7833,
            "probabilityOver": 0.2167,
            "isWholeNumber": false
        },
        {
            "totalYards": 45,
            "total": null,
            "occurrences": 105,
            "probabilityEqual": 0.0105,
            "probabilityUnder": 0.7916119252147549,
            "probabilityOver": 0.20838807478524507,
            "isWholeNumber": true
        },
        {
            "totalYards": 45.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.7938,
            "probabilityOver": 0.2062,
            "isWholeNumber": false
        },
        {
            "totalYards": 46,
            "total": null,
            "occurrences": 107,
            "probabilityEqual": 0.0107,
            "probabilityUnder": 0.8023855251187708,
            "probabilityOver": 0.19761447488122916,
            "isWholeNumber": true
        },
        {
            "totalYards": 46.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8045,
            "probabilityOver": 0.1955,
            "isWholeNumber": false
        },
        {
            "totalYards": 47,
            "total": null,
            "occurrences": 91,
            "probabilityEqual": 0.0091,
            "probabilityUnder": 0.8118881824603895,
            "probabilityOver": 0.18811181753961045,
            "isWholeNumber": true
        },
        {
            "totalYards": 47.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8136,
            "probabilityOver": 0.1864,
            "isWholeNumber": false
        },
        {
            "totalYards": 48,
            "total": null,
            "occurrences": 88,
            "probabilityEqual": 0.0088,
            "probabilityUnder": 0.8208232445520581,
            "probabilityOver": 0.1791767554479419,
            "isWholeNumber": true
        },
        {
            "totalYards": 48.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8224,
            "probabilityOver": 0.1776,
            "isWholeNumber": false
        },
        {
            "totalYards": 49,
            "total": null,
            "occurrences": 99,
            "probabilityEqual": 0.0099,
            "probabilityUnder": 0.8306231693768307,
            "probabilityOver": 0.16937683062316938,
            "isWholeNumber": true
        },
        {
            "totalYards": 49.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8323,
            "probabilityOver": 0.1677,
            "isWholeNumber": false
        },
        {
            "totalYards": 50,
            "total": null,
            "occurrences": 92,
            "probabilityEqual": 0.0092,
            "probabilityUnder": 0.8400282599919258,
            "probabilityOver": 0.1599717400080743,
            "isWholeNumber": true
        },
        {
            "totalYards": 50.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8415,
            "probabilityOver": 0.1585,
            "isWholeNumber": false
        },
        {
            "totalYards": 51,
            "total": null,
            "occurrences": 71,
            "probabilityEqual": 0.0071,
            "probabilityUnder": 0.8475173733507906,
            "probabilityOver": 0.1524826266492094,
            "isWholeNumber": true
        },
        {
            "totalYards": 51.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8486,
            "probabilityOver": 0.1514,
            "isWholeNumber": false
        },
        {
            "totalYards": 52,
            "total": null,
            "occurrences": 85,
            "probabilityEqual": 0.0085,
            "probabilityUnder": 0.8558749369641957,
            "probabilityOver": 0.14412506303580433,
            "isWholeNumber": true
        },
        {
            "totalYards": 52.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8571,
            "probabilityOver": 0.1429,
            "isWholeNumber": false
        },
        {
            "totalYards": 53,
            "total": null,
            "occurrences": 81,
            "probabilityEqual": 0.0081,
            "probabilityUnder": 0.8640992035487448,
            "probabilityOver": 0.13590079645125516,
            "isWholeNumber": true
        },
        {
            "totalYards": 53.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8652,
            "probabilityOver": 0.1348,
            "isWholeNumber": false
        },
        {
            "totalYards": 54,
            "total": null,
            "occurrences": 66,
            "probabilityEqual": 0.0066,
            "probabilityUnder": 0.8709482585061405,
            "probabilityOver": 0.12905174149385948,
            "isWholeNumber": true
        },
        {
            "totalYards": 54.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8718,
            "probabilityOver": 0.1282,
            "isWholeNumber": false
        },
        {
            "totalYards": 55,
            "total": null,
            "occurrences": 70,
            "probabilityEqual": 0.007,
            "probabilityUnder": 0.8779456193353474,
            "probabilityOver": 0.12205438066465257,
            "isWholeNumber": true
        },
        {
            "totalYards": 55.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8788,
            "probabilityOver": 0.1212,
            "isWholeNumber": false
        },
        {
            "totalYards": 56,
            "total": null,
            "occurrences": 61,
            "probabilityEqual": 0.0061,
            "probabilityUnder": 0.8841935808431431,
            "probabilityOver": 0.11580641915685683,
            "isWholeNumber": true
        },
        {
            "totalYards": 56.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8849,
            "probabilityOver": 0.1151,
            "isWholeNumber": false
        },
        {
            "totalYards": 57,
            "total": null,
            "occurrences": 56,
            "probabilityEqual": 0.0056,
            "probabilityUnder": 0.8898833467417538,
            "probabilityOver": 0.11011665325824618,
            "isWholeNumber": true
        },
        {
            "totalYards": 57.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8905,
            "probabilityOver": 0.1095,
            "isWholeNumber": false
        },
        {
            "totalYards": 58,
            "total": null,
            "occurrences": 66,
            "probabilityEqual": 0.0066,
            "probabilityUnder": 0.8964163478961144,
            "probabilityOver": 0.10358365210388565,
            "isWholeNumber": true
        },
        {
            "totalYards": 58.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.8971,
            "probabilityOver": 0.1029,
            "isWholeNumber": false
        },
        {
            "totalYards": 59,
            "total": null,
            "occurrences": 48,
            "probabilityEqual": 0.0048,
            "probabilityUnder": 0.9014268488745981,
            "probabilityOver": 0.09857315112540192,
            "isWholeNumber": true
        },
        {
            "totalYards": 59.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9019,
            "probabilityOver": 0.0981,
            "isWholeNumber": false
        },
        {
            "totalYards": 60,
            "total": null,
            "occurrences": 49,
            "probabilityEqual": 0.0049,
            "probabilityUnder": 0.9063410712491207,
            "probabilityOver": 0.0936589287508793,
            "isWholeNumber": true
        },
        {
            "totalYards": 60.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9068,
            "probabilityOver": 0.0932,
            "isWholeNumber": false
        },
        {
            "totalYards": 61,
            "total": null,
            "occurrences": 52,
            "probabilityEqual": 0.0052,
            "probabilityUnder": 0.9115400080418175,
            "probabilityOver": 0.08845999195818255,
            "isWholeNumber": true
        },
        {
            "totalYards": 61.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.912,
            "probabilityOver": 0.088,
            "isWholeNumber": false
        },
        {
            "totalYards": 62,
            "total": null,
            "occurrences": 48,
            "probabilityEqual": 0.0048,
            "probabilityUnder": 0.9163987138263665,
            "probabilityOver": 0.08360128617363344,
            "isWholeNumber": true
        },
        {
            "totalYards": 62.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9168,
            "probabilityOver": 0.0832,
            "isWholeNumber": false
        },
        {
            "totalYards": 63,
            "total": null,
            "occurrences": 42,
            "probabilityEqual": 0.0042,
            "probabilityUnder": 0.9206668005623619,
            "probabilityOver": 0.07933319943763809,
            "isWholeNumber": true
        },
        {
            "totalYards": 63.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.921,
            "probabilityOver": 0.079,
            "isWholeNumber": false
        },
        {
            "totalYards": 64,
            "total": null,
            "occurrences": 41,
            "probabilityEqual": 0.0041,
            "probabilityUnder": 0.924791645747565,
            "probabilityOver": 0.07520835425243498,
            "isWholeNumber": true
        },
        {
            "totalYards": 64.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9251,
            "probabilityOver": 0.0749,
            "isWholeNumber": false
        },
        {
            "totalYards": 65,
            "total": null,
            "occurrences": 37,
            "probabilityEqual": 0.0037,
            "probabilityUnder": 0.9285355816521128,
            "probabilityOver": 0.07146441834788718,
            "isWholeNumber": true
        },
        {
            "totalYards": 65.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9288,
            "probabilityOver": 0.0712,
            "isWholeNumber": false
        },
        {
            "totalYards": 66,
            "total": null,
            "occurrences": 39,
            "probabilityEqual": 0.0039,
            "probabilityUnder": 0.9324365023592008,
            "probabilityOver": 0.06756349764079912,
            "isWholeNumber": true
        },
        {
            "totalYards": 66.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9327,
            "probabilityOver": 0.0673,
            "isWholeNumber": false
        },
        {
            "totalYards": 67,
            "total": null,
            "occurrences": 39,
            "probabilityEqual": 0.0039,
            "probabilityUnder": 0.9363517719104507,
            "probabilityOver": 0.06364822808954924,
            "isWholeNumber": true
        },
        {
            "totalYards": 67.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9366,
            "probabilityOver": 0.0634,
            "isWholeNumber": false
        },
        {
            "totalYards": 68,
            "total": null,
            "occurrences": 34,
            "probabilityEqual": 0.0034,
            "probabilityUnder": 0.9397953040337146,
            "probabilityOver": 0.060204695966285374,
            "isWholeNumber": true
        },
        {
            "totalYards": 68.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.94,
            "probabilityOver": 0.06,
            "isWholeNumber": false
        },
        {
            "totalYards": 69,
            "total": null,
            "occurrences": 43,
            "probabilityEqual": 0.0043,
            "probabilityUnder": 0.9440594556593351,
            "probabilityOver": 0.05594054434066486,
            "isWholeNumber": true
        },
        {
            "totalYards": 69.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9443,
            "probabilityOver": 0.0557,
            "isWholeNumber": false
        },
        {
            "totalYards": 70,
            "total": null,
            "occurrences": 34,
            "probabilityEqual": 0.0034,
            "probabilityUnder": 0.9475215733493879,
            "probabilityOver": 0.05247842665061208,
            "isWholeNumber": true
        },
        {
            "totalYards": 70.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9477,
            "probabilityOver": 0.0523,
            "isWholeNumber": false
        },
        {
            "totalYards": 71,
            "total": null,
            "occurrences": 21,
            "probabilityEqual": 0.0021,
            "probabilityUnder": 0.9496943581521194,
            "probabilityOver": 0.05030564184788055,
            "isWholeNumber": true
        },
        {
            "totalYards": 71.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9498,
            "probabilityOver": 0.0502,
            "isWholeNumber": false
        },
        {
            "totalYards": 72,
            "total": null,
            "occurrences": 32,
            "probabilityEqual": 0.0032,
            "probabilityUnder": 0.9528491171749599,
            "probabilityOver": 0.04715088282504013,
            "isWholeNumber": true
        },
        {
            "totalYards": 72.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.953,
            "probabilityOver": 0.047,
            "isWholeNumber": false
        },
        {
            "totalYards": 73,
            "total": null,
            "occurrences": 26,
            "probabilityEqual": 0.0026,
            "probabilityUnder": 0.9554842590735914,
            "probabilityOver": 0.04451574092640866,
            "isWholeNumber": true
        },
        {
            "totalYards": 73.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9556,
            "probabilityOver": 0.0444,
            "isWholeNumber": false
        },
        {
            "totalYards": 74,
            "total": null,
            "occurrences": 24,
            "probabilityEqual": 0.0024,
            "probabilityUnder": 0.9578989574979951,
            "probabilityOver": 0.04210104250200481,
            "isWholeNumber": true
        },
        {
            "totalYards": 74.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.958,
            "probabilityOver": 0.042,
            "isWholeNumber": false
        },
        {
            "totalYards": 75,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9598236649634305,
            "probabilityOver": 0.040176335036569484,
            "isWholeNumber": true
        },
        {
            "totalYards": 75.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9599,
            "probabilityOver": 0.0401,
            "isWholeNumber": false
        },
        {
            "totalYards": 76,
            "total": null,
            "occurrences": 20,
            "probabilityEqual": 0.002,
            "probabilityUnder": 0.9618236472945891,
            "probabilityOver": 0.038176352705410824,
            "isWholeNumber": true
        },
        {
            "totalYards": 76.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9619,
            "probabilityOver": 0.0381,
            "isWholeNumber": false
        },
        {
            "totalYards": 77,
            "total": null,
            "occurrences": 23,
            "probabilityEqual": 0.0023,
            "probabilityUnder": 0.9641174701814172,
            "probabilityOver": 0.03588252981858274,
            "isWholeNumber": true
        },
        {
            "totalYards": 77.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9642,
            "probabilityOver": 0.0358,
            "isWholeNumber": false
        },
        {
            "totalYards": 78,
            "total": null,
            "occurrences": 24,
            "probabilityEqual": 0.0024,
            "probabilityUnder": 0.9665196471531676,
            "probabilityOver": 0.0334803528468324,
            "isWholeNumber": true
        },
        {
            "totalYards": 78.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9666,
            "probabilityOver": 0.0334,
            "isWholeNumber": false
        },
        {
            "totalYards": 79,
            "total": null,
            "occurrences": 25,
            "probabilityEqual": 0.0025,
            "probabilityUnder": 0.9690225563909775,
            "probabilityOver": 0.030977443609022555,
            "isWholeNumber": true
        },
        {
            "totalYards": 79.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9691,
            "probabilityOver": 0.0309,
            "isWholeNumber": false
        },
        {
            "totalYards": 80,
            "total": null,
            "occurrences": 14,
            "probabilityEqual": 0.0014,
            "probabilityUnder": 0.9704586420989385,
            "probabilityOver": 0.029541357901061487,
            "isWholeNumber": true
        },
        {
            "totalYards": 80.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9705,
            "probabilityOver": 0.0295,
            "isWholeNumber": false
        },
        {
            "totalYards": 81,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.971568725598158,
            "probabilityOver": 0.028431274401842028,
            "isWholeNumber": true
        },
        {
            "totalYards": 81.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9716,
            "probabilityOver": 0.0284,
            "isWholeNumber": false
        },
        {
            "totalYards": 82,
            "total": null,
            "occurrences": 19,
            "probabilityEqual": 0.0019,
            "probabilityUnder": 0.9734495541528905,
            "probabilityOver": 0.026550445847109506,
            "isWholeNumber": true
        },
        {
            "totalYards": 82.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9735,
            "probabilityOver": 0.0265,
            "isWholeNumber": false
        },
        {
            "totalYards": 83,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.974669603524229,
            "probabilityOver": 0.025330396475770924,
            "isWholeNumber": true
        },
        {
            "totalYards": 83.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9747,
            "probabilityOver": 0.0253,
            "isWholeNumber": false
        },
        {
            "totalYards": 84,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.9763598116798557,
            "probabilityOver": 0.023640188320144244,
            "isWholeNumber": true
        },
        {
            "totalYards": 84.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9764,
            "probabilityOver": 0.0236,
            "isWholeNumber": false
        },
        {
            "totalYards": 85,
            "total": null,
            "occurrences": 17,
            "probabilityEqual": 0.0017,
            "probabilityUnder": 0.9780627066012221,
            "probabilityOver": 0.021937293398777924,
            "isWholeNumber": true
        },
        {
            "totalYards": 85.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9781,
            "probabilityOver": 0.0219,
            "isWholeNumber": false
        },
        {
            "totalYards": 86,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.9791770948042847,
            "probabilityOver": 0.020822905195715287,
            "isWholeNumber": true
        },
        {
            "totalYards": 86.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9792,
            "probabilityOver": 0.0208,
            "isWholeNumber": false
        },
        {
            "totalYards": 87,
            "total": null,
            "occurrences": 16,
            "probabilityEqual": 0.0016,
            "probabilityUnder": 0.9807692307692307,
            "probabilityOver": 0.019230769230769232,
            "isWholeNumber": true
        },
        {
            "totalYards": 87.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9808,
            "probabilityOver": 0.0192,
            "isWholeNumber": false
        },
        {
            "totalYards": 88,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9816835151636473,
            "probabilityOver": 0.018316484836352717,
            "isWholeNumber": true
        },
        {
            "totalYards": 88.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9817,
            "probabilityOver": 0.0183,
            "isWholeNumber": false
        },
        {
            "totalYards": 89,
            "total": null,
            "occurrences": 15,
            "probabilityEqual": 0.0015,
            "probabilityUnder": 0.9831747621432149,
            "probabilityOver": 0.016825237856785177,
            "isWholeNumber": true
        },
        {
            "totalYards": 89.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9832,
            "probabilityOver": 0.0168,
            "isWholeNumber": false
        },
        {
            "totalYards": 90,
            "total": null,
            "occurrences": 9,
            "probabilityEqual": 0.0009,
            "probabilityUnder": 0.9840856771093984,
            "probabilityOver": 0.015914322890601542,
            "isWholeNumber": true
        },
        {
            "totalYards": 90.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9841,
            "probabilityOver": 0.0159,
            "isWholeNumber": false
        },
        {
            "totalYards": 91,
            "total": null,
            "occurrences": 13,
            "probabilityEqual": 0.0013,
            "probabilityUnder": 0.985380995293882,
            "probabilityOver": 0.014619004706117954,
            "isWholeNumber": true
        },
        {
            "totalYards": 91.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9854,
            "probabilityOver": 0.0146,
            "isWholeNumber": false
        },
        {
            "totalYards": 92,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9857943177270908,
            "probabilityOver": 0.014205682272909163,
            "isWholeNumber": true
        },
        {
            "totalYards": 92.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9858,
            "probabilityOver": 0.0142,
            "isWholeNumber": false
        },
        {
            "totalYards": 93,
            "total": null,
            "occurrences": 10,
            "probabilityEqual": 0.001,
            "probabilityUnder": 0.9867867867867868,
            "probabilityOver": 0.013213213213213212,
            "isWholeNumber": true
        },
        {
            "totalYards": 93.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9868,
            "probabilityOver": 0.0132,
            "isWholeNumber": false
        },
        {
            "totalYards": 94,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9873924354612768,
            "probabilityOver": 0.012607564538723234,
            "isWholeNumber": true
        },
        {
            "totalYards": 94.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9874,
            "probabilityOver": 0.0126,
            "isWholeNumber": false
        },
        {
            "totalYards": 95,
            "total": null,
            "occurrences": 11,
            "probabilityEqual": 0.0011,
            "probabilityUnder": 0.9884873360696766,
            "probabilityOver": 0.011512663930323356,
            "isWholeNumber": true
        },
        {
            "totalYards": 95.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9885,
            "probabilityOver": 0.0115,
            "isWholeNumber": false
        },
        {
            "totalYards": 96,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9889944972486243,
            "probabilityOver": 0.011005502751375688,
            "isWholeNumber": true
        },
        {
            "totalYards": 96.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.989,
            "probabilityOver": 0.011,
            "isWholeNumber": false
        },
        {
            "totalYards": 97,
            "total": null,
            "occurrences": 5,
            "probabilityEqual": 0.0005,
            "probabilityUnder": 0.9894947473736868,
            "probabilityOver": 0.010505252626313157,
            "isWholeNumber": true
        },
        {
            "totalYards": 97.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9895,
            "probabilityOver": 0.0105,
            "isWholeNumber": false
        },
        {
            "totalYards": 98,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.9906888265919103,
            "probabilityOver": 0.009311173408089707,
            "isWholeNumber": true
        },
        {
            "totalYards": 98.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9907,
            "probabilityOver": 0.0093,
            "isWholeNumber": false
        },
        {
            "totalYards": 99,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9909972991897569,
            "probabilityOver": 0.009002700810243073,
            "isWholeNumber": true
        },
        {
            "totalYards": 99.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.991,
            "probabilityOver": 0.009,
            "isWholeNumber": false
        },
        {
            "totalYards": 100,
            "total": null,
            "occurrences": 12,
            "probabilityEqual": 0.0012,
            "probabilityUnder": 0.9921906287545054,
            "probabilityOver": 0.007809371245494593,
            "isWholeNumber": true
        },
        {
            "totalYards": 100.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9922,
            "probabilityOver": 0.0078,
            "isWholeNumber": false
        },
        {
            "totalYards": 101,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9924977493247974,
            "probabilityOver": 0.007502250675202561,
            "isWholeNumber": true
        },
        {
            "totalYards": 101.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9925,
            "probabilityOver": 0.0075,
            "isWholeNumber": false
        },
        {
            "totalYards": 102,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9930958575145087,
            "probabilityOver": 0.006904142485491295,
            "isWholeNumber": true
        },
        {
            "totalYards": 102.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9931,
            "probabilityOver": 0.0069,
            "isWholeNumber": false
        },
        {
            "totalYards": 103,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9936962177306384,
            "probabilityOver": 0.006303782269361617,
            "isWholeNumber": true
        },
        {
            "totalYards": 103.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9937,
            "probabilityOver": 0.0063,
            "isWholeNumber": false
        },
        {
            "totalYards": 104,
            "total": null,
            "occurrences": 7,
            "probabilityEqual": 0.0007,
            "probabilityUnder": 0.9943960772540779,
            "probabilityOver": 0.005603922745922145,
            "isWholeNumber": true
        },
        {
            "totalYards": 104.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9944,
            "probabilityOver": 0.0056,
            "isWholeNumber": false
        },
        {
            "totalYards": 105,
            "total": null,
            "occurrences": 6,
            "probabilityEqual": 0.0006,
            "probabilityUnder": 0.9949969981989194,
            "probabilityOver": 0.005003001801080648,
            "isWholeNumber": true
        },
        {
            "totalYards": 105.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.995,
            "probabilityOver": 0.005,
            "isWholeNumber": false
        },
        {
            "totalYards": 107,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9952985895768731,
            "probabilityOver": 0.0047014104231269385,
            "isWholeNumber": true
        },
        {
            "totalYards": 107.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9953,
            "probabilityOver": 0.0047,
            "isWholeNumber": false
        },
        {
            "totalYards": 108,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9956982793117247,
            "probabilityOver": 0.00430172068827531,
            "isWholeNumber": true
        },
        {
            "totalYards": 108.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9957,
            "probabilityOver": 0.0043,
            "isWholeNumber": false
        },
        {
            "totalYards": 109,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9957995799579958,
            "probabilityOver": 0.0042004200420042,
            "isWholeNumber": true
        },
        {
            "totalYards": 109.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9958,
            "probabilityOver": 0.0042,
            "isWholeNumber": false
        },
        {
            "totalYards": 110,
            "total": null,
            "occurrences": 4,
            "probabilityEqual": 0.0004,
            "probabilityUnder": 0.9961984793917567,
            "probabilityOver": 0.0038015206082432974,
            "isWholeNumber": true
        },
        {
            "totalYards": 110.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9962,
            "probabilityOver": 0.0038,
            "isWholeNumber": false
        },
        {
            "totalYards": 111,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9963992798559712,
            "probabilityOver": 0.0036007201440288058,
            "isWholeNumber": true
        },
        {
            "totalYards": 111.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9964,
            "probabilityOver": 0.0036,
            "isWholeNumber": false
        },
        {
            "totalYards": 112,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9964996499649965,
            "probabilityOver": 0.0035003500350035003,
            "isWholeNumber": true
        },
        {
            "totalYards": 112.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9965,
            "probabilityOver": 0.0035,
            "isWholeNumber": false
        },
        {
            "totalYards": 113,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9966993398679735,
            "probabilityOver": 0.0033006601320264054,
            "isWholeNumber": true
        },
        {
            "totalYards": 113.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9967,
            "probabilityOver": 0.0033,
            "isWholeNumber": false
        },
        {
            "totalYards": 114,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9968993798759752,
            "probabilityOver": 0.003100620124024805,
            "isWholeNumber": true
        },
        {
            "totalYards": 114.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9969,
            "probabilityOver": 0.0031,
            "isWholeNumber": false
        },
        {
            "totalYards": 116,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9970994198839768,
            "probabilityOver": 0.0029005801160232048,
            "isWholeNumber": true
        },
        {
            "totalYards": 116.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9971,
            "probabilityOver": 0.0029,
            "isWholeNumber": false
        },
        {
            "totalYards": 117,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9971997199719972,
            "probabilityOver": 0.0028002800280028,
            "isWholeNumber": true
        },
        {
            "totalYards": 117.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9972,
            "probabilityOver": 0.0028,
            "isWholeNumber": false
        },
        {
            "totalYards": 118,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9973994798959792,
            "probabilityOver": 0.002600520104020804,
            "isWholeNumber": true
        },
        {
            "totalYards": 118.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9974,
            "probabilityOver": 0.0026,
            "isWholeNumber": false
        },
        {
            "totalYards": 119,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9974997499749975,
            "probabilityOver": 0.0025002500250025004,
            "isWholeNumber": true
        },
        {
            "totalYards": 119.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9975,
            "probabilityOver": 0.0025,
            "isWholeNumber": false
        },
        {
            "totalYards": 120,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9975997599759976,
            "probabilityOver": 0.0024002400240024004,
            "isWholeNumber": true
        },
        {
            "totalYards": 120.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9976,
            "probabilityOver": 0.0024,
            "isWholeNumber": false
        },
        {
            "totalYards": 121,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9976997699769977,
            "probabilityOver": 0.0023002300230023,
            "isWholeNumber": true
        },
        {
            "totalYards": 121.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9977,
            "probabilityOver": 0.0023,
            "isWholeNumber": false
        },
        {
            "totalYards": 124,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9977997799779978,
            "probabilityOver": 0.0022002200220022,
            "isWholeNumber": true
        },
        {
            "totalYards": 124.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9978,
            "probabilityOver": 0.0022,
            "isWholeNumber": false
        },
        {
            "totalYards": 125,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9980994298289487,
            "probabilityOver": 0.0019005701710513153,
            "isWholeNumber": true
        },
        {
            "totalYards": 125.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9981,
            "probabilityOver": 0.0019,
            "isWholeNumber": false
        },
        {
            "totalYards": 126,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9983995198559568,
            "probabilityOver": 0.001600480144043213,
            "isWholeNumber": true
        },
        {
            "totalYards": 126.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9984,
            "probabilityOver": 0.0016,
            "isWholeNumber": false
        },
        {
            "totalYards": 127,
            "total": null,
            "occurrences": 3,
            "probabilityEqual": 0.0003,
            "probabilityUnder": 0.9986996098829649,
            "probabilityOver": 0.0013003901170351106,
            "isWholeNumber": true
        },
        {
            "totalYards": 127.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9987,
            "probabilityOver": 0.0013,
            "isWholeNumber": false
        },
        {
            "totalYards": 128,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9987998799879988,
            "probabilityOver": 0.0012001200120012002,
            "isWholeNumber": true
        },
        {
            "totalYards": 128.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9988,
            "probabilityOver": 0.0012,
            "isWholeNumber": false
        },
        {
            "totalYards": 129,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9988998899889989,
            "probabilityOver": 0.0011001100110011,
            "isWholeNumber": true
        },
        {
            "totalYards": 129.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9989,
            "probabilityOver": 0.0011,
            "isWholeNumber": false
        },
        {
            "totalYards": 130,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.998999899989999,
            "probabilityOver": 0.001000100010001,
            "isWholeNumber": true
        },
        {
            "totalYards": 130.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.999,
            "probabilityOver": 0.001,
            "isWholeNumber": false
        },
        {
            "totalYards": 131,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9990999099909991,
            "probabilityOver": 0.0009000900090009,
            "isWholeNumber": true
        },
        {
            "totalYards": 131.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9991,
            "probabilityOver": 0.0009,
            "isWholeNumber": false
        },
        {
            "totalYards": 132,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9991999199919992,
            "probabilityOver": 0.0008000800080008001,
            "isWholeNumber": true
        },
        {
            "totalYards": 132.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9992,
            "probabilityOver": 0.0008,
            "isWholeNumber": false
        },
        {
            "totalYards": 133,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9993998799759952,
            "probabilityOver": 0.000600120024004801,
            "isWholeNumber": true
        },
        {
            "totalYards": 133.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9994,
            "probabilityOver": 0.0006,
            "isWholeNumber": false
        },
        {
            "totalYards": 140,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9994999499949995,
            "probabilityOver": 0.0005000500050005,
            "isWholeNumber": true
        },
        {
            "totalYards": 140.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9995,
            "probabilityOver": 0.0005,
            "isWholeNumber": false
        },
        {
            "totalYards": 143,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9995999599959996,
            "probabilityOver": 0.00040004000400040005,
            "isWholeNumber": true
        },
        {
            "totalYards": 143.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9996,
            "probabilityOver": 0.0004,
            "isWholeNumber": false
        },
        {
            "totalYards": 145,
            "total": null,
            "occurrences": 2,
            "probabilityEqual": 0.0002,
            "probabilityUnder": 0.9997999599919984,
            "probabilityOver": 0.00020004000800160032,
            "isWholeNumber": true
        },
        {
            "totalYards": 145.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9998,
            "probabilityOver": 0.0002,
            "isWholeNumber": false
        },
        {
            "totalYards": 149,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 0.9998999899989999,
            "probabilityOver": 0.00010001000100010001,
            "isWholeNumber": true
        },
        {
            "totalYards": 149.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 0.9999,
            "probabilityOver": 0.0001,
            "isWholeNumber": false
        },
        {
            "totalYards": 201,
            "total": null,
            "occurrences": 1,
            "probabilityEqual": 0.0001,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": true
        },
        {
            "totalYards": 201.5,
            "total": null,
            "occurrences": 0,
            "probabilityEqual": 0,
            "probabilityUnder": 1,
            "probabilityOver": 0,
            "isWholeNumber": false
        }
    ],
    "yardsRangeProbabilities": [
        {
            "startYards": 0,
            "endYards": 9,
            "occurrences": 1810,
            "probabilityWithin": 0.181
        },
        {
            "startYards": 10,
            "endYards": 19,
            "occurrences": 2013,
            "probabilityWithin": 0.2013
        },
        {
            "startYards": 20,
            "endYards": 29,
            "occurrences": 1862,
            "probabilityWithin": 0.1862
        },
        {
            "startYards": 30,
            "endYards": 39,
            "occurrences": 1531,
            "probabilityWithin": 0.1531
        },
        {
            "startYards": 40,
            "endYards": 49,
            "occurrences": 1066,
            "probabilityWithin": 0.1066
        },
        {
            "startYards": 50,
            "endYards": 59,
            "occurrences": 696,
            "probabilityWithin": 0.0696
        },
        {
            "startYards": 60,
            "endYards": 69,
            "occurrences": 424,
            "probabilityWithin": 0.0424
        },
        {
            "startYards": 70,
            "endYards": 79,
            "occurrences": 248,
            "probabilityWithin": 0.0248
        },
        {
            "startYards": 80,
            "endYards": 89,
            "occurrences": 141,
            "probabilityWithin": 0.0141
        },
        {
            "startYards": 90,
            "endYards": 99,
            "occurrences": 78,
            "probabilityWithin": 0.0078
        },
        {
            "startYards": 100,
            "endYards": 109,
            "occurrences": 48,
            "probabilityWithin": 0.0048
        },
        {
            "startYards": 110,
            "endYards": 119,
            "occurrences": 17,
            "probabilityWithin": 0.0017
        },
        {
            "startYards": 120,
            "endYards": 129,
            "occurrences": 14,
            "probabilityWithin": 0.0014
        },
        {
            "startYards": 130,
            "endYards": 139,
            "occurrences": 5,
            "probabilityWithin": 0.0005
        },
        {
            "startYards": 140,
            "endYards": 149,
            "occurrences": 5,
            "probabilityWithin": 0.0005
        },
        {
            "startYards": 150,
            "endYards": 159,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 160,
            "endYards": 169,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 170,
            "endYards": 179,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 180,
            "endYards": 189,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 190,
            "endYards": 199,
            "occurrences": 0,
            "probabilityWithin": 0
        },
        {
            "startYards": 200,
            "endYards": null,
            "occurrences": 1,
            "probabilityWithin": 0.0001
        }
    ]
};

