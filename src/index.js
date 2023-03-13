console.log('JS is working correctly'); 

function component() {
    const element = document.createElement('div');
    element.setAttribute('id','content');

    const header = element.createElement('section'); 
    header.setAttribute('id','header');

    const titles = header.createElement('div'); 
    titles.setAttribute('id','header--titles');

    const titleMain = titles.createElement('h1'); 
    titleMain.setAttribute('id','header--main');
    titleMain.innerHTML = 'MED-ONE'; 

    const titleSub = titles.createElement('h1'); 
    titleSub.setAttribute('id','header--sub');
    titleSub.innerHTML = 'Mediterranean Cuisine in West Yorkshire'; 

    const links = header.createElement('div'); 
    links.setAttribute('id','header--links');

    const list = links.createElement('ul'); 
    list.setAttribute('id','header--nav');

    const listItem1 = links.createElement('li'); 
    listItem1.setAttribute('id','header--nav1');
    listItem1.innerHTML = 'About';

    const listItem2 = links.createElement('li'); 
    listItem2.setAttribute('id','header--nav2');
    listItem2.innerHTML = 'Menu';

    const listItem3 = links.createElement('li'); 
    listItem3.setAttribute('id','header--nav3');
    listItem3.innerHTML = 'Contact';
    
    const about = element.createElement('section'); 
    about.setAttribute('id','about');

    const aboutContent = about.createElement('div'); 
    aboutContent.setAttribute('id','about--content');

    const aboutTitle = aboutContent.createElement('h1'); 
    aboutTitle.setAttribute('id','about--main');
    aboutTitle.innerHTML = 'About';

    const aboutInfoBlock = aboutContent.createElement('div'); 
    aboutInfoBlock.setAttribute('id','about--infoblock');

    const aboutImage = aboutInfoBlock.createElement('img'); 
    aboutImage.setAttribute('id','about--image');
    aboutImage.setAttribute('src','../src/med-one1.png');

    const aboutText = aboutInfoBlock.createElement('p'); 
    aboutText.setAttribute('id','about--text');
    aboutTitle.innerHTML = 'Huddersfield\'s most beloved place to eat. Chef Khalil takes pride in creating beautiful, fresh and tasty food for the people of this town. They have earned TripAdvisor’s Certificate of Excellence for being an outstanding business 5 years in a row. <br> + <br> They have a wonderful staff team whose aim is to make every visit a perfect one.';

    return element;
  }
  
  document.body.appendChild(component());