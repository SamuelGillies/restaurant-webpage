import header from './header.js';
import about from './about.js'; 
import menu from './menu.js';
import contact from './contact.js'; 
import clear from './clear.js'; 
import './style.css'; 

document.body.appendChild(header());
document.body.appendChild(about());

document.getElementById('header--nav1').addEventListener('click', function() {
    document.body.appendChild(clear());
    document.body.appendChild(about());
});
document.getElementById('header--nav2').addEventListener('click', function() {
    document.body.appendChild(clear());
    document.body.appendChild(menu());
});
document.getElementById('header--nav3').addEventListener('click', function() {
    document.body.appendChild(clear());
    document.body.appendChild(contact());
});