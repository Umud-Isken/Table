let products = [
    {
        nameOfProducts: "Snickers",
        priceOfproduct: 2,
        quant: 200,
        img: "https://bazarstore.az/cdn/shop/products/30051264_95382d74-6a4a-4ce9-a956-9dbea353395f.jpg?v=1693807763"
    },
    {
        nameOfProducts: "Bounty",
        priceOfproduct: 3,
        quant: 201,
        img: "https://bazarstore.az/cdn/shop/products/30006821.jpg?v=1693467140"
    },
    {
        nameOfProducts: "KitKat",
        priceOfproduct: 6,
        quant: 202,
        img: "https://bazarstore.az/cdn/shop/files/195aee9a35959dcba5b0893d6c5eb3bd.webp?v=1694759039"
    },
    {
        nameOfProducts: "Mars",
        priceOfproduct: 1,
        quant: 203,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJe5XM9O9y7loD6hPVi5x9k6E8hiieBnpxXg&s"
    },
    {
        nameOfProducts: "Milkway",
        priceOfproduct: 0.5,
        quant: 204,
        img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Milky-Way-UK-Wrapper-Small.jpg"
    },
];

function renderItems() {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''

    products.forEach(product => {
        let pr = `
            <tr>
                <th>${product.nameOfProducts}</th>
                <th>${product.priceOfproduct}</th>
                <th>${product.quant}</th>
                <th><img style="width:10%;" src="${product.img}" alt=""></th>
            </tr>
        `;
        tableBody.innerHTML += pr; 
    });
}

renderItems();

let priceSort = document.getElementById("priceSort");

priceSort.addEventListener("change", function() {
    if (priceSort.value === "cheap") {
        products.sort(function(a, b) {
            return a.priceOfproduct - b.priceOfproduct; 
        });
    } else if (priceSort.value === "expensive") {
        products.sort(function(a, b) {
            return b.priceOfproduct - a.priceOfproduct; 
        });
    }
    renderItems(); 
});


priceSort.addEventListener("change", function() {
    if (priceSort.value === "exprnsivekol") {
        products.sort(function(a, b) {
            return a.quant - b.quant; 
        });
    } else if (priceSort.value === "cheapkol") {
        products.sort(function(a, b) {
            return b.quant - a.quant; 
        });
    }
    renderItems(); 
});