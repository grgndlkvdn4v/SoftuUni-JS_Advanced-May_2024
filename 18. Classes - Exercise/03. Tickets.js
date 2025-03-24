function solve(ticketDescriptionsArr, sortingCriteria) {  let TicketsArr = [];

  for (const ticket of ticketDescriptionsArr) {
    let [destination, price, status] = ticket.split('|')
    
    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination,
        this.price = Number(price),
        this.status = status
      }
    }
    
    let ticketObj = new Ticket(destination, price, status)
    TicketsArr.push(ticketObj);
  }

  sortingCriteria !== 'price' ? 
  TicketsArr.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria])) :
  TicketsArr.sort((a, b) => a[sortingCriteria] - b[sortingCriteria])

  return TicketsArr
}


console.table(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
)