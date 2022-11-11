const label = document.getElementById("Tekstpesel");

function SprawdzenieDaty() {
  var inputValue = document.getElementById("pesel").value;

  var year = inputValue.charAt(0) + inputValue.charAt(1);
  var month = inputValue.charAt(2) + inputValue.charAt(3);
  var days = inputValue.charAt(4) + inputValue.charAt(5);
  var gender = inputValue.charAt(9);

  if (
    Number(month) >= 33 ||
    inputValue.length > 11 ||
    inputValue.length < 11 ||
    Number(days) > 31
  ) {
    label.innerHTML =
      '<span style="color: #aa0000;" > Nieprawidłowy numer Pesel!</span>';
  } else {
    if (Number(month) > 13 && Number(month) < 32) {
      year = "20" + year;
      month = (Number(month) - 20).toString();
      if (Number(month) < 10) month = "0" + month;
    } else {
      year = "19" + year;
    }
    if (Number(gender) % 2 == 0) {
      gender = "Kobieta";
    } else {
      gender = "Mężczyzna";
    }
    label.innerHTML = `Data Urodzenia: ${days} ${month} ${year} Płeć: ${gender}`;
  }
}
