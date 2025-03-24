function solve(tickets, sortCriteria) {

  let ticketsList = [];

  class Ticket {
    constructor (destination, price, status) {
      this.destination = destination,
      this.price = Number(price),
      this.status = status
    }

    static sortList(arr, sortCriteria) {
      switch (sortCriteria) {
        case 'price':
          arr.sort((a,b) => a[sortCriteria] - b[sortCriteria])
          break;
      
        default:
          arr.sort((a,b) => a[sortCriteria].localeCompare(b[sortCriteria]) )
          break;
      }
      return arr
    }
  }

  for (const ticket of tickets) {
    let [destination, price, status] = ticket.split("|");
    let currTicket = new Ticket(destination, price, status);
    ticketsList.push(currTicket);
  }

  // switch (sortCriteria) {
  //   case 'price':
  //     ticketsList.sort((a,b) => a[sortCriteria] - b[sortCriteria])
  //     break;
  
  //   default:
  //     ticketsList.sort((a,b) => a[sortCriteria].localeCompare(b[sortCriteria]) )
  //     break;
  // }

  Ticket.sortList(ticketsList, sortCriteria)
  return ticketsList
}

let result = solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],  "destination"
);

console.table(result);

