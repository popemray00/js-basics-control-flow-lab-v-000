// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  }
  else if (someValue >= 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(someCity) {
  const city = "NYC"
  const someCity = (city === "NYC") ? "Ok, sounds good." : "No go."
}
