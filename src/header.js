export default function header() {

    const element = document.getElementById('header--root'); 

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
    
    return element; 
}; 