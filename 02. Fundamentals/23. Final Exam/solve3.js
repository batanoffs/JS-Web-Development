function solve(input) {
    let mapRecords = new Map();

    for (let entry of input) {
        let token = entry.split(": ");
        let command = token[0];
        let userName = token[1];
        let count = Number(token[2]);

        if (command !== "Log out") {
            switch (command) {
                case `New follower`:
                    if (!mapRecords.has(userName)) {
                        mapRecords.set(userName, 0);
                    }
                    break;

                case `Like`:
                    if (!mapRecords.has(userName)) {
                        mapRecords.set(userName, count);
                    } else {
                        let newCount = mapRecords.get(userName) + count;
                        mapRecords.set(userName, newCount);
                    }
                    break;

                case `Comment`:
                    if (!mapRecords.has(userName)) {
                        mapRecords.set(userName, 1);
                    } else {
                        count = mapRecords.get(userName) + 1;
                        mapRecords.set(userName, count);
                    }
                    break;

                case `Blocked`:
                    if (mapRecords.has(userName)) {
                        mapRecords.delete(userName);
                    } else {
                        console.log(`${userName} doesn't exist.`);
                    }
                    break;
            }
        }
    }
    let count = mapRecords.size;
    console.log(`${count} followers`);

    for (const user of mapRecords.entries()) {
        console.log(user.join(": "));
    }
}

solve([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out",
]);

solve([
    "Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out",
]);
