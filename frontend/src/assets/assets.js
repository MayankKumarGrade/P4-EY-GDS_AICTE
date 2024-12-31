import m1 from './m1.1.jpg'
import m2 from './m2.1.jpg'
import m3 from './m3.1.jpg'
import m4 from './m4.1.jpg'
import m5 from './m5.1.jpg'
import m6 from './m6.1.jpg'
import m7 from './m7.1.jpg'
import m8 from './m8.1.jpg'
import m9 from './m9.1.jpg'
import m10 from './m10.1.jpg'
import w11 from './w1.1.jpg'
import w12 from './w1.2.jpg'
import w13 from './w1.3.jpg'
import w21 from './w2.1.jpg'
import w22 from './w2.2.jpg'
import w31 from './w3.1.jpg'
import w32 from './w3.2.jpg'
import w41 from './w4.1.jpg'
import w42 from './w4.2.jpg'
import w51 from './w5.1.jpg'
import w52 from './w5.2.jpg'
import w61 from './w6.1.jpg'
import w62 from './w6.2.jpg'
import w71 from './w7.1.jpg'
import w72 from './w7.2.jpg'
import w81 from './w8.1.jpg'
import w91 from './w9.1.jpg'
import w101 from './w10.1.jpg'

import logo from './logo.png'
import hero from './hero.jpg'


export const assets = {
    logo,
    hero,
}

export const products = [
    {
        _id: "ms001",
        name: "Maroon Oversized T-Shirt for Men",
        description: "Upgrade your casual wardrobe with this stylish maroon oversized T-shirt, designed for comfort and effortless style. Made from 100% cotton with a soft, knitted fabric, this T-shirt features a classic round neck and short, regular sleeves.",
        price: 399,
        image: [m1],
        category: "Men",
        subcategory: "Oversized T-Shirts",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345451,
        bestseller: true
    },
    {
        _id: "ms002",
        name: "Women Rayon Blend Anarkali Printed Kurta",
        description: "Have a Variety of Kurta Set in Your Collection to Accommodate Changing Weather Conditions Western Wear, Party Wear, Birthday Wear, Outdoor Wear, Summer Special Western Wear, Beach, Holiday This Shirt Separately Too, This Kurta Set Gives You a Comfortable and Soft Feel, So You Can Wear It All Day Long.",
        price: 799,
        image: [w11, w12, w13],
        category: "Women",
        subcategory: "Ethnic wear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345461,
        bestseller: false
    },
    {
        _id: "ms003",
        name: "Brown Solid Opaque Casual Shirt for Men",
        description: "Add a touch of comfort and style to your casual wardrobe with this brown solid opaque shirt. Crafted from 100% cotton, it features a spread collar, a button placket, and two flap pockets for a functional yet stylish look.",
        price: 299,
        image: [m2],
        category: "Men",
        subcategory: "Casual Shirts",
        sizes: ['S', 'M', 'L', 'XL'],
        date:  1716621345452,
        bestseller: false
    },
    {
        _id: "ms004",
        name: "Women Viscose Suit Set with Dupatta",
        description: "Elevate your style with this elegant straight-fit Salwar Suit set, designed in soft, breathable viscose fabric. The white kurta features a beautiful floral print, paired with a comfortable pant and a stunning printed Chanderi dupatta.",
        price: 699,
        image: [w21, w22],
        category: "Women",
        subcategory: "Ethnic Wear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345462,
        bestseller: false
    },
    {
        _id: "ms005",
        name: "Navy Blue and White Floral Printed Casual Shirt for Men",
        description: "Elevate your casual style with this navy blue and white floral printed shirt. Made from soft, breathable viscose rayon, it features a Cuban collar and a button placket for a relaxed yet stylish look. ",
        price: 399,
        image: [m3],
        category: "Men",
        subcategory: "Floral Shirts",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345453,
        bestseller: false
    },
    {
        _id: "ms006",
        name: "Floral Printed Rayon Blend One-Piece Dress for Women",
        description: "Step into summer in style with this soft rayon blend one-piece dress, designed with a vibrant floral print for a chic and comfortable look. The midi-length dress features a front open collar with button detailing, perfect for a variety of occasions.",
        price: 599,
        image: [w31, w32],
        category: "Women",
        subcategory: "Party Dresses",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345463,
        bestseller: false
    },
    {
        _id: "ms007v",
        name: "Grey Solid Slim Fit Formal Shirt for Men",
        description: "This grey solid formal shirt offers a sharp, sophisticated look with a modern slim fit. Designed with a spread collar, button placket, and one patch pocket, it blends functionality and style seamlessly.",
        price: 499,
        image: [m4],
        category: "Men",
        subcategory: "Formal Shirts",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345454,
        bestseller: false
    },
    {
        _id: "ms008",
        name: "Chikankari Anarkali Kurti – Elegant & Versatile",
        description: "Embrace timeless elegance with this beautifully crafted Anarkali Kurti, made from intricate Chikankari fabric. Featuring a regular fit, this long Anarkali gown with 3/4 sleeves is perfect for both casual and formal occasions. ",
        price: 999,
        image:  [w41, w42],
        category: "Women",
        subcategory: "Anarkali Kurtis",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345464,
        bestseller: false
    },
    {
        _id: "ms009",
        name: "Relaxed-Fit Pullover Sweatshirt for Men",
        description: "Stay comfortable and stylish with this relaxed-fit pullover sweatshirt. Made from a soft cotton blend (60% cotton, 40% polyester), it features a round neck, long sleeves, and dropped shoulders for a laid-back, casual look.",
        price: 599,
        image: [m5],
        category: "Men",
        subcategory: "Sweatshirts & Hoodies",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345455,
        bestseller: false
    },
    {
        _id: "ms010",
        name: "Viscose Rayon Relaxed Fit Kurti – Comfortable & Stylish",
        description: "Crafted from luxurious viscose rayon, this kurti offers the perfect balance of comfort and style. The relaxed fit provides versatility, making it easy to style for any occasion.",
        price: 999,
        image: [w51, w52],
        category: "Women",
        subcategory: "Office Wear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345465,
        bestseller: false
    },
    {
        _id: "ms011",
        name: "Black Printed Hooded Sweatshirt for Men",
        description: "Stay cozy and stylish with this black printed hoodie, designed for both comfort and a casual, sporty look. Made from a soft 60% cotton and 40% polyester blend with 280 GSM fleece, it features a bold typography print and a functional kangaroo pocket.",
        price: 366,
        image: [m6],
        category: "Men",
        subcategory: "Hoodies & Sweatshirts",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345456,
        bestseller: false
    },
    {
        _id: "ms012",
        name: "Paithani Silk Blend Saree with Woven Design",
        description: "Add a touch of tradition and elegance to your wardrobe with this stunning Paithani saree, crafted from luxurious silk blend fabric. The intricate woven design in vibrant red adds a classic appeal, making it perfect for festive occasions, weddings, or parties.",
        price: 1299,
        image: [w61, w62],
        category: "Women",
        subcategory: "Traditional Wear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345466,
        bestseller:true
    },
    {
        _id: "ms013",
        name: "Black, Charcoal Grey, and White Colourblocked Sweatshirt for Men",
        description: "Make a bold style statement with this black, charcoal grey, and white colourblocked sweatshirt. Featuring a mock collar and front zip closure, this sweatshirt offers a modern, sporty look.",
        price: 466,
        image: [m7],
        category: "Men",
        subcategory: "Sweatshirts & Hoodies",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345457,
        bestseller: true
    },
    {
        _id: "ms014",
        name: "Elegant Banarasi Silk Saree with Tassels & Latkans",
        description: "Step into tradition with this exquisite green Banarasi silk saree, designed with a rich woven pattern and ethnic motifs for a classic touch. The saree features stunning zari borders and decorative tassels and latkans that enhance its charm, making it perfect for weddings, festive occasions, and other traditional events.",
        price: 2999,
        image: [w71, w72],
        category: "Women",
        subcategory: "Sarees",
        sizes: ['S', 'M', 'L', 'XL'],
        date:1716621345467,
        bestseller: false
    },
    {
        _id: "ms015",
        name: "Off-White Self-Design Pullover for Men",
        description: "This off-white self-design pullover adds a touch of subtle texture to your casual wardrobe. Crafted from soft acrylic fabric, it features a round neck, long sleeves, and a ribbed hem for a comfortable and fitted look.",
        price: 689,
        image: [m8],
        category: "Men",
        subcategory: "Knitwear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345458,
        bestseller: false
    },
    {
        _id: "ms016",
        name: "Green, Pink & Gold-Toned Kalamkari Printed Lehenga Choli with Dupatta",
        description: "Celebrate tradition and elegance with this stunning lehenga choli set featuring intricate Kalamkari prints in vibrant green, pink, and gold tones. The lehenga comes in a ready-to-wear style with a flared hem, while the blouse, in unstitched silk fabric, features a flattering V-neck and short sleeves.",
        price: 3999,
        image: [w81],
        category: "Women",
        subcategory: "Lehenga Choli",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345468,
        bestseller: true
    },
    {
        _id: "ms017",
        name: "Black Solid Formal Regular-Fit Two-Piece Suit for Men",
        description: "This black solid formal two-piece suit is the perfect choice for any occasion requiring a sharp, polished look. The bandhgala blazer features a mandarin collar, long sleeves, a full button placket, and three functional pockets for added convenience. ",
        price: 699,
        image: [m9],
        category: "Men",
        subcategory: "Suits & Blazers",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345459,
        bestseller: false
    },
    {
        _id: "ms018",
        name: "Off-White Floral Embroidered Kurta with Palazzos and Dupatta",
        description: "This elegant and off-white kurta set is designed to make a statement at any festive occasion. The floral-embroidered kurta features a straight silhouette, a V-neck, and three-quarter flared sleeves, offering a perfect blend of comfort and style.",
        price: 999,
        image: [w91],
        category: "Women",
        subcategory: "Traditional Wear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345469,
        bestseller: false
    },
    {
        _id: "ms019",
        name: "Green and Navy Blue Checked Tailored-Fit Blazer for Men",
        description: "Make a bold style statement with this green and navy blue checked tailored-fit blazer. Featuring a classic notched lapel collar, long sleeves, and a full button placket, this blazer offers a sophisticated yet contemporary look.",
        price: 999,
        image: [m10],
        category: "Men",
        subcategory: "Tailored Blazers",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345460,
        bestseller: false
    },
    {
        _id: "ms020",
        name: "White & Blue Printed Straight Kurti with Ethnic Motifs",
        description: "This beautiful white and blue straight kurti features intricate ethnic motifs, adding a touch of traditional charm to your daily wardrobe. Made from soft, pure cotton, it ensures comfort throughout the day. ",
        price: 999,
        image: [w101],
        category: "Women",
        subcategory: "Casual Wear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345470,
        bestseller: false
    }
]