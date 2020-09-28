function about(content) {
    const pageDiv = document.createElement('div');
    pageDiv.classList.add('page');
    content.appendChild(pageDiv);
    
    const aboutImg = document.createElement('img');
    aboutImg.src = "veganpizza.jpg";
    pageDiv.appendChild(aboutImg);
    
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = "The best vegan pizza in town!"
    pageDiv.appendChild(p1);
    p1.textContent = "Cory's is dedicated to supplying quality ingrediants and delicious pizza for all. Made in our state of the art brick ovens, this is a treat to be enjoyed by everybody, vegan or not."
    pageDiv.appendChild(p2);
}

export default about;