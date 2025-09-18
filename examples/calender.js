// Calendar Display: Display a month calendar using nested loops.

function displayCalendar(month, year) {
  const daysInWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const daysInMonth = new Date(year, month, 0).getDate(); // month is 1-based
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0 = Sunday

  console.log(`\n📅 ${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}`);
  console.log(daysInWeek.join(' '));

  let day = 1;

  // Outer loop: weeks (up to 6 rows)
  for (let i = 0; i < 6; i++) {
    let week = '';

    // Inner loop: days in week
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        week += '   '; // empty space before first day
      } else if (day <= daysInMonth) {
        week += day.toString().padStart(2, '0') + ' ';
        day++;
      } else {
        week += '   '; // empty space after last day
      }
    }

    console.log(week);
    if (day > daysInMonth) break; // stop if all days printed
  }
}

// Example usage:
displayCalendar(9, 2025); // September 2025