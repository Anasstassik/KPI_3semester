let cinemaIdCounter = 1;
let hallIdCounter = 1;
let movieIdCounter = 1;
let screeningIdCounter = 1;
let customerIdCounter = 1;
let ticketIdCounter = 1;

class Cinema {
    constructor(name, address, contact) {
        this.cinemaId = cinemaIdCounter++;
        this.name = name;
        this.address = address;
        this.contact = contact;
        this.halls = [];
    }

    addHall(hall) {
        this.halls.push(hall);
        console.log(`Hall '${hall.name}' was added to cinema '${this.name}'.`);
    }
}

class Hall {
    constructor(name, screenType, capacity) {
        this.hallId = hallIdCounter++;
        this.name = name;
        this.screenType = screenType;
        this.capacity = capacity;
    }
}

class Movie {
    constructor(name, duration, rating, releaseYear) {
        this.movieId = movieIdCounter++;
        this.name = name;
        this.duration = duration;
        this.rating = rating;
        this.releaseYear = releaseYear;
    }
}

class Customer {
    constructor(firstName, lastName, email) {
        this.customerId = customerIdCounter++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.tickets = [];
    }
    
    buyTicket(ticket) {
        this.tickets.push(ticket);
    }
}

class Screening {
    constructor(movie, hall, dateTime, price) {
        if (!movie || !hall) {
            throw new Error('Screening requires a movie and a hall!');
        }
        this.screeningId = screeningIdCounter++;
        this.dateTime = dateTime;
        this.price = price;
        this.movieId = movie.movieId;
        this.hallId = hall.hallId;
    }
}

class Ticket {
    constructor(screening, customer, row, seatNumber) {
        if (!screening || !customer) {
            throw new Error('Ticket requires a screening and a customer!');
        }
        this.ticketId = ticketIdCounter++;
        this.row = row;
        this.seatNumber = seatNumber;
        this.status = 'sold';
        this.screeningId = screening.screeningId;
        this.customerId = customer.customerId;
    }
}

const multiplexCinema = new Cinema('Multiplex Respublika', 'St. Kiltseva, b. 1', { phone: '0503566568' });
const hall1 = new Hall('Hall 1 IMAX', 'IMAX', 400);
const hall2 = new Hall('Hall 2', '3D', 250);
multiplexCinema.addHall(hall1);
multiplexCinema.addHall(hall2);

const duneMovie = new Movie('Dune: Part Two', 166, 'PG-13', 2024);
const oppenheimerMovie = new Movie('Oppenheimer', 180, 'R', 2023);

const customerStas = new Customer('Anastasiia', 'Zhuravel', 'sherloch3k@gmail.com');
const customerOlena = new Customer('Tony', 'Stark', 'ironman@gmail.com');

const screening1 = new Screening(duneMovie, hall1, '2025-10-28T20:00:00', 250);
const screening2 = new Screening(oppenheimerMovie, hall2, '2025-10-28T21:00:00', 180);

const ticket1 = new Ticket(screening1, customerStas, 10, 15);
customerStas.buyTicket(ticket1);

const ticket2 = new Ticket(screening1, customerOlena, 10, 16);
customerOlena.buyTicket(ticket2);

const ticket3 = new Ticket(screening2, customerStas, 5, 8);
customerStas.buyTicket(ticket3);

console.log('CINEMA AND ITS HALLS:');
console.log(multiplexCinema);

console.log('\nAVAILABLE MOVIES:');
console.log(duneMovie, oppenheimerMovie);

console.log('\nREGISTERED CUSTOMERS:');
console.log(customerStas);
console.log(customerOlena);

console.log('\nCREATED SCREENINGS:');
console.log(screening1, screening2);

console.log('\nSOLD TICKETS:');
console.log(ticket1, ticket2, ticket3);

console.log('\nTICKETS FOR CUSTOMER "ANASTASIIA":');
console.log(customerStas.tickets);