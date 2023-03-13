export default function contact() { 
    
    const element = document.getElementById('content'); 

    const contact = document.createElement('section'); 
    element.appendChild(contact); 
    contact.setAttribute('id','contact');

    return element; 
}; 