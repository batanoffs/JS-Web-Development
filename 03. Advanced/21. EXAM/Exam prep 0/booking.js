class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);
      if (existingFlight) {
        return (`Flight ${flightNumber} to ${destination} is already available.`);
      }
  
      const newFlight = {
        flightNumber,
        destination,
        departureTime,
        price
      };
      this.flights.push(newFlight);
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
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

    cancelBooking(passengerName, flightNumber) {
        let bookingIndex = this.bookings.findIndex(
            (x) =>
                x.passengerName === passengerName &&
                x.flightNumber === flightNumber
        );
        if (bookingIndex === -1) {
            throw new Error(
                `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
            );
        }
        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings[0] === undefined) {
            throw new Error(`No bookings have been made yet.`);
        }

        // All flights
        if (criteria === "all") {
            let buffer = this.bookings.map((x) => {
                return `${x.passengerName} booked for flight ${x.flightNumber}.`;
            });
            return (
                `All bookings(${this.bookingsCount}):` +
                "\n" +
                buffer.join("\n").trim()
            );
        }
        const priceThreshold = criteria === "cheap" ? 100 : criteria === "expensive" ? 100 : null;
  
        if (priceThreshold === null) {
          throw new Error("Invalid criteria.");
        }
        // Cheap flights
        if (criteria === "cheap") {
            let buffer = this.flights.map((x) => {
                if (x.price <= 100) {
                    return `${x.passengerName} booked for flight ${x.flightNumber}.`;
                }
            });

            if (buffer[0] === undefined) {
                return "No cheap bookings found.";
            } else {
                return "Cheap bookings:" + "\n" + buffer.join("\n").trim()
            }
        }

        // Expensive flights
        if (criteria === "expensive") {
            let buffer = [];
            let array = this.flights.map((x, index) => {
                if (x.price > 100) {
                    return { price: x.price, index: index };
                }
            });

            if (array[0] === undefined) {
                return "No expensive bookings found.";
            } else {
                for (const el of array) {
                    let name = this.bookings[el.index].passengerName;
                    let number = this.bookings[el.index].flightNumber;
                    let text = `${name} booked for flight ${number}.`;
                    buffer.push(text);
                }
                return "Expensive bookings:" + "\n" + buffer.join("\n").trim();
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
