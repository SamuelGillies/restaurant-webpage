console.log('JS is loading correctly'); 

function component() {

    const element = document.getElementById('content'); 

    const header = document.createElement('section'); 
    header.setAttribute('id','header'); 
    element.appendChild(header); 

    const titles = document.createElement('div'); 
    header.appendChild(titles); 
    titles.setAttribute('id','header--titles');

    const titleMain = document.createElement('h1'); 
    titles.appendChild(titleMain); 
    titleMain.setAttribute('id','header--main');
    titleMain.innerHTML = 'MED-ONE'; 

    const titleSub = document.createElement('h1'); 
    titles.appendChild(titleSub); 
    titleSub.setAttribute('id','header--sub');
    titleSub.innerHTML = 'Mediterranean Cuisine in West Yorkshire'; 

    const links = document.createElement('div'); 
    header.appendChild(links); 
    links.setAttribute('id','header--links');

    const list = document.createElement('ul');
    links.appendChild(list);  
    list.setAttribute('id','header--nav');

    const listItem1 = document.createElement('li'); 
    list.appendChild(listItem1); 
    listItem1.setAttribute('id','header--nav1');
    listItem1.innerHTML = 'About';

    const listItem2 = document.createElement('li');
    list.appendChild(listItem2); 
    listItem2.setAttribute('id','header--nav2');
    listItem2.innerHTML = 'Menu';

    const listItem3 = document.createElement('li'); 
    list.appendChild(listItem3); 
    listItem3.setAttribute('id','header--nav3');
    listItem3.innerHTML = 'Contact';
    
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

    const aboutImage = document.createElement('img');
    aboutInfoBlock.appendChild(aboutImage);  
    aboutImage.setAttribute('id','about--image');
    aboutImage.setAttribute('src','../src/med-one1.png');

    const aboutText = document.createElement('p'); 
    aboutInfoBlock.appendChild(aboutText); 
    aboutText.setAttribute('id','about--text');
    aboutText.innerHTML = 'Huddersfield\'s most beloved place to eat. Chef Khalil takes pride in creating beautiful, fresh and tasty food for the people of this town. They have earned TripAdvisor’s Certificate of Excellence for being an outstanding business 5 years in a row. <br> <br> They have a wonderful staff team whose aim is to make every visit a perfect one.';

    return element;
  }
  
  document.body.appendChild(component());