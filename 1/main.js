const products = [
    {title: 'Notebook', price: 2000},
    {title: 'Mouse', price: 20},
    {title: 'Keyboard', price: 35},
    {title: 'Gamepad', price: 48},
    {title: 'Chair', price: 100},
	{title: 'Table', price: 200},
];

const renderProduct = (title="Без названия", price="Бесплатно") => `<div class="product-item"><h3>${title}</h3><p>${price}</p></div>`

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
//	На этом уровне получил массив. Его нужно распаковать без запятых.
//	console.log(productList);
    document.querySelector('.products').innerHTML = productList.join('');
};

renderPage(products);

