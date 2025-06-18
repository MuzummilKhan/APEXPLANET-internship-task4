document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const clearFilterButton = document.getElementById('clear-filter-button');

    // Product Data
    let products = [
        {
            id: 1,
            name: 'Product 1',
            category: 'electronics',
            price: 120,
            rating: 4.5,
            description: 'High-quality electronic device.'
        },
        {
            id: 2,
            name: 'Product 2',
            category: 'clothing',
            price: 35,
            rating: 3.8,
            description: 'Comfortable and stylish clothing item.'
        },
        {
            id: 3,
            name: 'Product 3',
            category: 'home',
            price: 75,
            rating: 4.2,
            description: 'Elegant home decoration.'
        },
         {
            id: 4,
            name: 'Product 4',
            category: 'electronics',
            price: 250,
            rating: 4.9,
            description: 'Premium electronic device with advanced features.'
        },
        {
            id: 5,
            name: 'Product 5',
            category: 'clothing',
            price: 20,
            rating: 3.5,
            description: 'Affordable and trendy clothing for everyday wear.'
        },
        {
            id: 6,
            name: 'Product 6',
            category: 'home',
            price: 90,
            rating: 4.0,
            description: 'Durable and stylish home furnishing.'
        },
        {
            id: 7,
            name: 'Product 7',
            category: 'electronics',
            price: 80,
            rating: 4.3,
            description: 'Compact and efficient electronic gadget.'
        },
        {
            id: 8,
            name: 'Product 8',
            category: 'clothing',
            price: 60,
            rating: 4.6,
            description: 'High-quality clothing for special occasions.'
        },
        {
            id: 9,
            name: 'Product 9',
            category: 'home',
            price: 150,
            rating: 4.7,
            description: 'Luxurious home decor item.'
        }
    ];

    function displayProducts(filteredProducts) {
        productList.innerHTML = ''; // Clear previous products
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-gray-50 rounded-md shadow-md p-4 hover:shadow-lg transition duration-300';
            productCard.innerHTML = `
                <h3 class="text-xl font-semibold text-blue-600 mb-2">${product.name}</h3>
                <p class="text-gray-700 leading-relaxed mb-2">${product.description}</p>
                <p class="text-gray-700 font-semibold mb-2">Price: $${product.price}</p>
                <p class="text-gray-700 mb-2">Rating: ${product.rating} ⭐</p>
            `;
            productList.appendChild(productCard);
        });
    }

    function filterAndSortProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPriceRange = priceFilter.value;
        const selectedSortOption = sortFilter.value;

        let filteredProducts = products;

        // Filter by Category
        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        // Filter by Price
        if (selectedPriceRange) {
            const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
            if (selectedPriceRange === '100-above') {
                filteredProducts = filteredProducts.filter(product => product.price >= 100);
            } else {
                filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
            }
        }

       // Sort Products
        if (selectedSortOption) {
            if (selectedSortOption === 'rating') {
                filteredProducts.sort((a, b) => b.rating - a.rating);
            } else if (selectedSortOption === 'price') {
                filteredProducts.sort((a, b) => a.price - b.price);
            }
        }
        displayProducts(filteredProducts);
    }

    // Event Listeners for Filters and Sorting
    categoryFilter.addEventListener('change', filterAndSortProducts);
    priceFilter.addEventListener('change', filterAndSortProducts);
    sortFilter.addEventListener('change', filterAndSortProducts);

    // Event listener for the clear filter button
    clearFilterButton.addEventListener('click', function() {
        categoryFilter.value = '';
        priceFilter.value = '';
        sortFilter.value = '';
        filterAndSortProducts(); // Apply the empty filters
    });

    // Initial display of products
    displayProducts(products);
});