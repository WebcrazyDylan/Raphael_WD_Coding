document.addEventListener("DOMContentLoaded", function () {
  let animals = [
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
    "원숭이",
    "닭",
    "개",
    "돼지"
  ];
  let year = getParameter("year") == "" ? 1 : getParameter("year");
  let id = `rtan${year}`;
  let animal = animals[year - 1];
  document.getElementById(id).style.display = "block";
  document.getElementsByClassName("rtan")[0].innerHTML = animal;
  document.getElementsByClassName(
    "rtan"
  )[0].style.backgroundImage = `url('./images/yearS${year}.png')`;
  document.getElementsByTagName(
    "h1"
  )[0].innerHTML = `2021년 ${animal}띠의 운세는!`;
});
function getParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
