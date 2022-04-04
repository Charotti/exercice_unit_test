// function even(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//Even bonus
// function even(n) {
//   return parseInt(n) % 2 === 0;
// }

//formatDate

function formDate(d) {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}/${month}/${year}`;
}

module.exports = formDate;
