const homework1 = (num1 = 5, num2 = 6, num3 = 7) => {
  let s = (num1 + num2 + num3) / 2;
  let area = Math.sqrt(s * ((s - num1) * (s - num2) * (s - num3)));

  // alert(area);
  // console.log("Homework 1 =" + area);
  return "Homework 1 =" + area;
  // return area;
};

homework1(5, 6, 7);
//document.getElementById("answer1").innerHTML = homework1(5, 6, 7);

// homework3
const homework3 = (text1) => {
  let s = text1.toString();
  s = s.toUpperCase();
  console.log("Homework 3 =" + s);
  //document.getElementById("answer3").innerHTML = s;
};

homework3("abcdef");

// document.getElementById("answer3").innerHTML = homework3(
//   document.getElementsByName("q3")[0].value
// );

//console.log(homework3("dsfkdfslkdfsd"));
