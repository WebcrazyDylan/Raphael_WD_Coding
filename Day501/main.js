const homework1 = (num1 = 5, num2 = 6, num3 = 7) => {
  let s = (num1 + num2 + num3) / 2;
  let area = Math.sqrt(s * ((s - num1) * (s - num2) * (s - num3)));

  console.log("Homework 1 =" + area);
  return area;
};

document.getElementById("answer1").innerHTML = homework1(5, 6, 7);

const homework3 = (text1) => {
  let s = text1.toString();
  return s.toUpperCase();
};

document.getElementById("answer3").innerHTML = homework3(
  document.getElementsByName("q3")[0].value
);

console.log(homework3("dsfkdfslkdfsd"));
