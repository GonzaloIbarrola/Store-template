// URL API.
const url = 'https://fakestoreapi.com/products';

async function getData(renderData) {
  const data = await fetch(url);
  const json = await data.json();
  localStorage.setItem('products', JSON.stringify(json));
  console.log(json);
  renderData(json);
}

export { getData };
