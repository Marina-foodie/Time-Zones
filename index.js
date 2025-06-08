function showTimezone(event) {
  if (event.target.value === "Paris 🇫🇷") {
    alert(Paris);
  }

  if (event.target.value === "Tokyo 🇯🇵") {
    alert(Tokyo);
  }

  if (event.target.value === "Sydney 🇦🇺") {
    alert(Sydney);
  }
}

let timezone = document.querySelector("#city");
timezone.addEventListener("change", showTimezone);

let Paris = moment()
  .tz("Europe/Paris")
  .format("[It is] dddd, MMMM D, YYYY h:mm A [in Europe/Paris.]");
let ParisElement = document.querySelector("#Paris");

let Tokyo = moment()
  .tz("Asia/Tokyo")
  .format("[It is] dddd, MMMM D, YYYY h:mm A [in Asia/Tokyo.]");
let TokyoElement = document.querySelector("#Tokyo");

let Sydney = moment()
  .tz("Australia/Sydney")
  .format("[It is] dddd, MMMM D, YYYY h:mm A [in Australia/Sydney.]");
let SydneyElement = document.querySelector("#Sydney");
