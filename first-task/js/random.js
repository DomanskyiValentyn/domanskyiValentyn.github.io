function getRandom(max){
  return Math.floor(Math.random() * max);
  }
  var random = getRandom(110);
  var element = document.getElementById('nav_calendar_notification');
  if(random != 0){
    element.innerHTML = random;
    if(random >= 10){
      element.setAttribute("style", "padding: 6px 7px")
    }
    if(random > 99){
      element.innerHTML = "99+";
    }
  }
  else{
    element.setAttribute("style", "display: none;");
  }