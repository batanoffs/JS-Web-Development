class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    findPlayer(name) {
        return this.invitedPlayers.find((pl) => pl.name === name);
    }

    newAdditions(footballPlaters) {
        let buff = "You successfully invite ";
        let nameArr = [];
        footballPlaters.forEach((data) => {
            let [name, age, playerValue] = data.split("/");
            playerValue = Number(playerValue);
            let currentPlayer = this.findPlayer(name);
            if (!currentPlayer) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue,
                });
                nameArr.push(name);
            } else if (currentPlayer.playerValue < playerValue) {
                currentPlayer.playerValue = playerValue;
            }
        });
        return (buff += nameArr.join(", ") + ".");
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");
        let currentPlayer = this.findPlayer(name);
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.playerValue > playerOffer) {
            let priceDifference = Math.abs(
                playerOffer - currentPlayer.playerValue
            );
            throw new Error(
                `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
            );
        }
        currentPlayer.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let currentPlayer = this.findPlayer(name);
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.age >= age) {
            return `${name} is above age limit!`;
        }
        if (age - currentPlayer.age <= 5) {
            let ageDifference = age - currentPlayer.age;
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else if (age - currentPlayer.age > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
    }

    transferWindowResult() {
        let buff = "Players list:\n"
        this.invitedPlayers.forEach( pl => {
            buff += `Player ${pl.name}-${pl.playerValue}\n`
        })
        return buff.trim();
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//     fTeam.newAdditions([
//         "Kylian Mbappé/23/160",
//         "Lionel Messi/35/50",
//         "Pau Torres/25/52",
//     ])
// );

// OUTPUT
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//     fTeam.newAdditions([
//         "Kylian Mbappé/23/160",
//         "Lionel Messi/35/50",
//         "Pau Torres/25/52",
//     ])
// );
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// OUTPUT
// console.log(`You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// `);
// console.log(
//     `Congratulations! You sign a contract with Lionel Messi for 60 million dollars.`
// );
// console.log(
//     `Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.`
// );
// console.log(`Uncaught Error: Barbukov is not invited to the selection list!
// `);

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());