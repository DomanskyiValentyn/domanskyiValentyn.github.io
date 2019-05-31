var header_breadcrumbs_arrow = document.createElement('p').innerHTML = '<span class="header_breadcrumbs_arrow"><svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.13514 0L4.85176e-08 0.98587L3.72973 4.22516L4.85176e-08 7.46445L1.13514 8.45032L6 4.22516L1.13514 0Z" fill="#0AD69C"/></svg></span>';
for(let elem of document.getElementById('header_breadcrumbs').getElementsByTagName('p')) {
  elem.classList.add('header_breadcrumbs_items');
  elem.innerHTML += header_breadcrumbs_arrow;
}