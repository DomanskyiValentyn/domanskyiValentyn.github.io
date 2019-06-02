var body_messeges = document.getElementById ('network_dashboard_messages');
var header_back = document.getElementById ('header_back');
function network_dashboard_messages_active(){
  body_messeges.setAttribute('class', 'activet')
  header_back.style.opacity = '1';
}
function network_dashboard_messages_back(){
  body_messeges.removeAttribute('class', 'activet')
  header_back.style.opacity = '0';
}