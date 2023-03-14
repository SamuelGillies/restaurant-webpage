export default function contact() { 
    
    const element = document.getElementById('content'); 

    const contact = document.createElement('section'); 
    element.appendChild(contact); 
    contact.setAttribute('id','contact');

    const contactHeader = document.createElement('h1'); 
    contact.appendChild(contactHeader); 
    contactHeader.innerHTML = 'Contact'; 

    const contactDetails = document.createElement('div'); 
    contact.appendChild(contactDetails);
    contactDetails.setAttribute('id','contact--details');

    const contactAddress = document.createElement('p'); 
    contactDetails.appendChild(contactAddress); 
    contactAddress.innerHTML = '10-12 Westgate, Huddersfield HD1 1NN, UK';

    const contactEmail = document.createElement('p'); 
    contactDetails.appendChild(contactEmail); 
    contactEmail.innerHTML = 'med-one@hotmail.co.uk';

    const contactPhone = document.createElement('p'); 
    contactDetails.appendChild(contactPhone); 
    contactPhone.innerHTML = '01484 511100';

    return element; 
}; 