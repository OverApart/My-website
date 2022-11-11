function clock() {
  const zegar = new Date();
  var year = zegar.getFullYear();
  var month = zegar.getMonth();
  var days = zegar.getDate();
  var hours = zegar.getHours();
  var minutes = zegar.getMinutes();
  var seconds = zegar.getSeconds();

  month = (Number(month) + 1).toString();

  if (month < 10) month = "0" + month;
  if (days < 10) days = "0" + days;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  document.querySelector(".clock").innerHTML =
    year +
    "/" +
    month +
    "/" +
    days +
    " | " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  setTimeout(clock, 1000);
}
