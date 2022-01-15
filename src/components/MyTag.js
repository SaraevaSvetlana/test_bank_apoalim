export const myFetch = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const listTableInitial =   {
                "ok": true,
                "errorCode": null,
                "errorMessage": null,
                "body":[{"Mobile" : "053-111-2222", "Diners" : 1},
                    {"Mobile" : "053-222-3333", "Diners" : 1},
                    {"Mobile" : "053-333-4444", "Diners" : 2},
                    {"Mobile" : "053-444-5555", "Diners" : 2},
                    {"Mobile" : "053-555-6666", "Diners" : 2},
                    {"Mobile" : "053-666-7777", "Diners" : 3},
                    {"Mobile" : "053-777-8888", "Diners" : 3},
                    {"Mobile" : "053-888-9999", "Diners" : 4},
                    {"Mobile" : "053-999-0000", "Diners" : 4},
                    {"Mobile" : "054-111-2222", "Diners" : 5},
                    {"Mobile" : "054-222-3333", "Diners" : 6},
                    {"Mobile" : "054-333-4444", "Diners" : 1},
                    {"Mobile" : "054-444-5555", "Diners" : 2},
                    {"Mobile" : "053-555-6666", "Diners" : 3}]

            };

            resolve(listTableInitial);

        }, 1000)
    })
}