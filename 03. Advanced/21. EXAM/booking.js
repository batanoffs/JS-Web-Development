class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }
    addFlight(flightNumber, destination, departureTime, price) {
        let currentFlight = {
            flightNumber: flightNumber,
            destination: destination,
            tdepartureTime: departureTime,
            price: price,
        };
        if (this.flights[0] === undefined) {
            this.flights.push(currentFlight);
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        } else if (
            this.flights.find(
                (element) => element.flightNumber === flightNumber
            )
        ) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push(currentFlight);
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }
    bookFlight(passengerName, flightNumber) {
        let passenger = {
            passengerName: passengerName,
            flightNumber: flightNumber,
        };
        if (this.flights.find((el) => el.flightNumber === flightNumber)) {
            this.bookings.push(passenger);
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        } else {
            return `Flight ${flightNumber} is not available for booking.`;
        }
    }
    showBookings(criteria) {
        if (this.bookings[0] === undefined) {
            throw new Error`No bookings have been made yet.`();
        }

        if (criteria === "all") {
            let buffer = this.bookings.map((x) => {
                return `${x.passengerName} booked for flight ${x.flightNumber}.`;
            });
            return (
                `All bookings(${this.bookingsCount}):` +
                "\n" +
                buffer.join("\n")
            );
        }

        if (criteria === "cheap") {
            let buffer = this.flights.map((x) => {
                if (x.price <= 100) {
                    return `${x.passengerName} booked for flight ${x.flightNumber}.`;
                }
            });

            if (buffer[0] === undefined) {
                return "No cheap bookings found.";
            } else {
                return "Cheap bookings:" + "\n" + buffer.join("\n");
            }
        }
        if (criteria === "expensive") {
            let buffer = this.flights.map((x) => {
                if (x.price > 100) {
                    return `${x.passengerName} booked for flight ${x.flightNumber}.`;
                }
            });

            if (buffer[0] === undefined) {
                return "No expensive bookings found.";
            } else {
                return "Expensive bookings:" + "\n" + buffer.join("\n");
            }
        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));

/*Flight AA101 to Los Angeles has been added to the system.
  Flight BB202 to New York has been added to the system.
  Booking for passenger Alice on flight AA101 is confirmed.
  Booking for passenger Bob on flight BB202 is confirmed.
  Expensive bookings:
  Alice booked for flight AA101.
  Bob booked for flight BB202.
  No cheap bookings found.*/
