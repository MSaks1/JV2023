let navItemsHtml = document.querySelector('#navItems');
let navItemsList = [
    {
        pealkiri:'Home',
        viide: 'index.html',
    },
    {
        pealkiri: 'Upcoming treks',
        viide: 'treks.html'
    },
    {
        pealkiri: 'Treks for family',
        viide: 'family.html'
    },
    {
        pealkiri: 'Contact us',
        viide: 'contact.html'
    }
];

for (let i = 0; i < navItemsList.length; i++) {
    navItemsHtml.innerHTML += `<a href="${navItemsList[i].viide}">${navItemsList[i].pealkiri}</a>`;
}