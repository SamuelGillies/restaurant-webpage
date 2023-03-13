export default function menu() {
    
    const element = document.getElementById('content'); 

    const menu = document.createElement('section'); 
    element.appendChild(menu); 
    menu.setAttribute('id','menu');

    const menuBlock = document.createElement('div'); 
    menu.appendChild(menuBlock); 
    menuBlock.setAttribute('id','menu--block');

    const menuTitle = document.createElement('h1'); 
    menuBlock.appendChild(menuTitle); 
    menuTitle.innerHTML = 'Menu'; 

    const menuContainer = document.createElement('div'); 
    menuBlock.appendChild(menuContainer); 
    menuContainer.setAttribute('id','menu--container');

    const menuItem1 = document.createElement('div'); 
    const menuItem1Title = document.createElement('h3'); 
    const menuItem1Desc = document.createElement('p'); 
    const menuItem1Price = document.createElement('p'); 
    menuContainer.appendChild(menuItem1); 
    menuItem1.appendChild(menuItem1Title); 
    menuItem1.appendChild(menuItem1Desc); 
    menuItem1.appendChild(menuItem1Price); 
    menuItem1.setAttribute('id','menu--item1');
    menuItem1.setAttribute('class','menu--item');
    menuItem1Title.innerHTML = 'Lamb Maqluba';
    menuItem1Desc.innerHTML = 'Rice cooked with grilled lamb and a selection of vegetables topped with fresh parsley and toasted pine nuts. Served with tzatziki dip, side salad and pickles.';
    menuItem1Price.innerHTML = '£17.95';

    const menuItem2 = document.createElement('div'); 
    const menuItem2Title = document.createElement('h3'); 
    const menuItem2Desc = document.createElement('p'); 
    const menuItem2Price = document.createElement('p'); 
    menuContainer.appendChild(menuItem2); 
    menuItem2.appendChild(menuItem2Title); 
    menuItem2.appendChild(menuItem2Desc); 
    menuItem2.appendChild(menuItem2Price); 
    menuItem2.setAttribute('id','menu--item2');
    menuItem2.setAttribute('class','menu--item');
    menuItem2Title.innerHTML = 'Butter Bean Stew';
    menuItem2Desc.innerHTML = 'Butter beans with diced beef, peppers and onions in tomato sauce. Served with rice, side salad and pickles.';
    menuItem2Price.innerHTML = '£14.95'; 

    const menuItem3 = document.createElement('div'); 
    const menuItem3Title = document.createElement('h3'); 
    const menuItem3Desc = document.createElement('p'); 
    const menuItem3Price = document.createElement('p'); 
    menuContainer.appendChild(menuItem3); 
    menuItem3.appendChild(menuItem3Title); 
    menuItem3.appendChild(menuItem3Desc); 
    menuItem3.appendChild(menuItem3Price); 
    menuItem3.setAttribute('id','menu--item3');
    menuItem3.setAttribute('class','menu--item');
    menuItem3Title.innerHTML = 'Med-One Goulash';
    menuItem3Desc.innerHTML = 'Diced beef, peppers, aubergine and courgette in tomato sauce, topped with bread. Served with rice, pickles and side salad.';
    menuItem3Price.innerHTML = '£15.95';

    const menuItem4 = document.createElement('div'); 
    const menuItem4Title = document.createElement('h3'); 
    const menuItem4Desc = document.createElement('p'); 
    const menuItem4Price = document.createElement('p'); 
    menuContainer.appendChild(menuItem4); 
    menuItem4.appendChild(menuItem4Title); 
    menuItem4.appendChild(menuItem4Desc); 
    menuItem4.appendChild(menuItem4Price); 
    menuItem4.setAttribute('id','menu--item4');
    menuItem4.setAttribute('class','menu--item');
    menuItem4Title.innerHTML = 'Chicken Shawarma';
    menuItem4Desc.innerHTML = 'Grilled chicken slices with pepper, onion and parsley. Served with rice, garlic sauce, side salad and pickles.';
    menuItem4Price.innerHTML = '£14.95';

    const menuItem5 = document.createElement('div'); 
    const menuItem5Title = document.createElement('h3'); 
    const menuItem5Desc = document.createElement('p'); 
    const menuItem5Price = document.createElement('p'); 
    menuContainer.appendChild(menuItem5); 
    menuItem5.appendChild(menuItem5Title); 
    menuItem5.appendChild(menuItem5Desc); 
    menuItem5.appendChild(menuItem5Price); 
    menuItem5.setAttribute('id','menu--item5');
    menuItem5.setAttribute('class','menu--item');
    menuItem5Title.innerHTML = 'Med-One Kufta';
    menuItem5Desc.innerHTML = 'Minced lamb patties with onion, pepper, tomato and parsley, topped with vegetable tomato sauce. Served with rice, pickles and side salad.';
    menuItem5Price.innerHTML = '£15.95';

    const menuItem6 = document.createElement('div'); 
    const menuItem6Title = document.createElement('h3'); 
    const menuItem6Desc = document.createElement('p'); 
    const menuItem6Price = document.createElement('p'); 
    menuContainer.appendChild(menuItem6); 
    menuItem6.appendChild(menuItem6Title); 
    menuItem6.appendChild(menuItem6Desc); 
    menuItem6.appendChild(menuItem6Price); 
    menuItem6.setAttribute('id','menu--item6');
    menuItem6.setAttribute('class','menu--item');
    menuItem6Title.innerHTML = 'Med-One Moussaka';
    menuItem6Desc.innerHTML = 'Baked aubergine stuffed with minced lamb, onion, pepper, parsley and tomato. Topped with cheese and garlic sauce. Served with rice, pickles, side salad and tzaziki dip.';
    menuItem6Price.innerHTML = '£14.95';

    return element; 

};