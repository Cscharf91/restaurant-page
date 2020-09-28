function contact(content) {
    const pageDiv = document.createElement('div');
    pageDiv.classList.add('page');
    pageDiv.innerHTML = `
    <h3 class="menu-type">Contact</h3>
    <p class="contact-info">This page was made by Cory Scharf using HTML, CSS, Javascript and Webpack. <a href="https://github.com/Cscharf91/restaurant-page">Click Here</a> to see the code.</p>
    `;
    content.appendChild(pageDiv);
}

export default contact;