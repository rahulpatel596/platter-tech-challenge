const products = [
    {
        id: "1",
        title: "OUTSIDE VIBES T-SHIRT",
        price: "$704.95",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-1.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
        saleTag: "Save 15%",
    },
    {
        id: "2",
        title: "RAY-BAN GLASSES",
        price: "$204.95",
        rating: 4,
        reviewCount: 1234,
        image: './images/product-2.jpg',
        secondaryImage: './images/product-1.jpg',
        badge: "MOST POPULAR",
    },
    {
        id: "3",
        title: "BANANA",
        price: "$10.95",
        rating: 3,
        reviewCount: 1234,
        image: './images/product-3.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
    {
        id: "4",
        title: "BMW",
        price: "$123,777",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-4.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
    {
        id: "5",
        title: "PUMA SHOE",
        price: "$204.95",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-5.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
    {
        id: "6",
        title: "SONY WIRELESS",
        price: "$504.95",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-6.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
    {
        id: "7",
        title: "NIKE SHOE ONE",
        price: "$204.95",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-7.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
    {
        id: "8",
        title: "NIKE SHOE TWO",
        price: "$204.95",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-8.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
    {
        id: "9",
        title: "RAY-BAN TWO",
        price: "$204.95",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-9.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
    {
        id: "10",
        title: "NIKE SHOE THREEE",
        price: "$104.95",
        rating: 4.5,
        reviewCount: 1234,
        image: './images/product-10.jpg',
        secondaryImage: './images/product-2.jpg',
        badge: "BEST SELLER",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

const renderProducts = () => {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    addHoverEffect()
}

const addHoverEffect = () => {
    const images = productsGrid.querySelectorAll('.product-image');
    images.forEach((img) => {
        const primarySrc = img.getAttribute('data-primary');
        const secondarySrc = img.getAttribute('data-secondary');

        img.addEventListener('mouseover', () => {
            img.src = secondarySrc;
        });

        img.addEventListener('mouseout', () => {
            img.src = primarySrc;
        });
    });
}

const createProductCard = (product) => {
    let starsHtml = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(product?.rating)) {
            starsHtml += `<span class="fas fa-star"></span>`;
        } else if (i - product?.rating <= 0.5) {
            starsHtml += `<span class="fas fa-star-half-alt "></span>`;
        } else {
            starsHtml += `<span class=" far fa-star"></span>`;
        }
    }

    let badge = ""
    if (product?.badge) {
        badge += `<div class="text-[10px] z-10 absolute top-[0.5rem] left-[0.5rem] rounded-xl border border-black text-xs px-2 py-1 bg-white">${product?.badge}</div>`
    }

    let saleTag = ""
    if (product?.saleTag) {
        saleTag += `<div class="text-[10px] bg-[#5C553A] z-10 absolute top-[0.5rem] right-[0.5rem] rounded-xl border border-black text-xs px-2 py-1 text-white">${product?.saleTag}</div>`
    }

    let productCard = ""
    productCard += `
        <article class="cursor-pointer min-w-[158px] md:min-w-[355px] ">
            <div class="relative w-full">
                    <div>${badge}</div>
                    <div>${saleTag}</div>
                    <div class="w-full h-full">
                    <img class="product-image w-full aspect-square object-cover rounded-xl"
                        src="${product?.image}"
                        data-primary="${product?.image}"
                        data-secondary="${product?.secondaryImage}"
                        alt="${product?.title}"
                    />
                    </div>
            </div>
            <div class="text-black px-3 pt-3 flex gap-2 flex-col">
                <div>
                    <h3 class="text-base md:text-lg">${product?.title}</h3>
                </div>
                <div class="text-[11px] md:text-xs font-[Poppins]">
                    ${starsHtml}
                    <span class="text-[#707070]">${product?.reviewCount} Reviews</span>
                </div>
                <div>
                        <span class="text-base font-medium font-[Poppins]">${product?.price}</span>
                </div>
            </div>
        </article>
    `;
    return productCard
}