function menu(content) {
    const pageDiv = document.createElement('div');
    pageDiv.classList.add('page');
    pageDiv.innerHTML = `
    <h3 class="menu-type">Pizzas</h3>
    <p class="item">Plain</p>
    <p class="description">The classic- Vegan Mozz, Tomato Sauce, and New York style dough. $12.50</p>
    <p class="item">Pepperoni</p>
    <p class="description">Vegan pepperoni on top of our plain pie. $15.00</p>
    <p class="item">Chicken</p>
    <p class="description">Vegan chicken on top of our plain pie. $15.00</p>
    <p class="item">Veggie</p>
    <p class="description">Broccoli, Spinach, Mushrooms, and Peppers on top of a plain pie. $15.00</p>

    <h3 class="menu-type">Pasta</h3>
    <p class="item">Penne Vodka</p>
    <p class="description">Penne with our vodka sauce. Won't get you drunk, but definitely will get you full. $10.50</p>
    <p class="item">Spaghetti and Meatballs</p>
    <p class="description">These vegan meatballs make the classic back on the menu for vegans. $12.00</p>
    `;
    content.appendChild(pageDiv);
}

export default menu;