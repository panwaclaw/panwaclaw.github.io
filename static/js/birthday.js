function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

let birthday = new Date(2000, 5, 25);
let age = calculate_age(birthday);
let now = new Date();
if (now.getDate() == birthday.getDate() && now.getMonth() == birthday.getMonth()) {
  $('#age').html(`<a onclick="confetti.start(5000)">${age}!</a>`);
} else {
  $('#age').text(age);
}