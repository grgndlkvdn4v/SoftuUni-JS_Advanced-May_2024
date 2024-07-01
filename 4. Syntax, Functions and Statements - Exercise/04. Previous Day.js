function previousDay(year, month, day) {
  const currDay = new Date(year, month - 1, day);
  const prevDay = new Date(currDay);

  prevDay.setDate(prevDay.getDate() - 1);

  const output = `${prevDay.getFullYear()}-${prevDay.getMonth() + 1}-${prevDay.getDate()}`;
  console.log(output);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
// previousDay(2024, 2, 1);
// previousDay(2024, 0, 1);
