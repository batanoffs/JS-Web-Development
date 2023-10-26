function databaseOfTickets(data, crit) {
    class Ticket {
        constructor(d, p, s) {
            this.destination = d;
            this.price = p;
            this.status = s;
        }
    }
    const clonedData = [...data];
    const splitList = clonedData.map((x) => x.split("|"));
    const ticketList = splitList.map(
        ([d, p, s]) => new Ticket(d, Number(p), s)
    );

    const sortedTickets = ticketList.sort((a, b) => {
        return typeof a[crit] === `number`
            ? a[crit] - b[crit]
            : a[crit].localeCompare(b[crit]);
    });

    return sortedTickets;
}

console.table(
    databaseOfTickets(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "destination"
    )
);
