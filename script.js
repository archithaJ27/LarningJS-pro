const loadAPI = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => getProducts(data))
        .catch((error) => console.error("Error fetching data:", error));
};

const displayProduct = (product) => {
    return (`
        <div class="product">
            <img src="${product.image}" alt="${product.title}">
            <h2>Title: ${product.title}</h2>
            <h2>Price: $${product.price}</h2>
            <h3>Rating: ${product.rating.rate} ⭐</h3>
        </div>
    `);
};

const getProducts = (products) => {
    const displayUI = products.map((product) => displayProduct(product));
    console.log(displayUI);
    const container = document.getElementById("products");
    if (container) {
        container.innerHTML = displayUI.join(" ");
    } else {
        console.error("Element with id 'products' not found!");
    }
};

// Call API function
loadAPI();
