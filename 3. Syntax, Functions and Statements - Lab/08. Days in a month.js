function daysOfMonth(month, year) {

  let date = new Date(year, month, 0);
  const monthDays = date.getDate();

  // console.log(date);
  console.log(monthDays);
}

daysOfMonth(1, 2012)
daysOfMonth(2, 2021)