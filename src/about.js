import image from './med-one1.png'; 

export default function about() {

    const element = document.getElementById('content'); 

    const about = document.createElement('section'); 
    element.appendChild(about); 
    about.setAttribute('id','about');

    const aboutContent = document.createElement('div'); 
    about.appendChild(aboutContent); 
    aboutContent.setAttribute('id','about--content');

    const aboutTitle = document.createElement('h1'); 
    aboutContent.appendChild(aboutTitle); 
    aboutTitle.setAttribute('id','about--main');
    aboutTitle.innerHTML = 'About';

    const aboutInfoBlock = document.createElement('div'); 
    aboutContent.appendChild(aboutInfoBlock); 
    aboutInfoBlock.setAttribute('id','about--infoblock');

    const aboutImage = new Image(); 
    aboutImage.src = image; 
    aboutInfoBlock.appendChild(aboutImage);
    aboutImage.setAttribute('id','about--image');
  
    const aboutText = document.createElement('p'); 
    aboutInfoBlock.appendChild(aboutText); 
    aboutText.setAttribute('id','about--text');
    aboutText.innerHTML = 'Huddersfield\'s most beloved place to eat. Chef Khalil takes pride in creating beautiful, fresh and tasty food for the people of this town. They have earned TripAdvisor’s Certificate of Excellence for being an outstanding business 5 years in a row. <br> <br> They have a wonderful staff team whose aim is to make every visit a perfect one.';

    return element; 

}; 