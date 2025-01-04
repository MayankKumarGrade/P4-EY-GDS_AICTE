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
import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'

import logo from './logo.png'
import hero from './hero.jpg'
import paypal from './paypal.png'
import razorpay from './razorpay.png'
import stripe from './stripe.png'
import aboutus from './aboutus.jpg'
import contactus from './contactus.jpg'


export const assets = {
    logo,
    hero,
    paypal,
    razorpay,
    stripe,
    aboutus,
    contactus
}

export const products = [
    {
        _id: "ms001",
        name: "Maroon Oversized T-Shirt for Men",
        description: "Upgrade your casual wardrobe with this stylish maroon oversized T-shirt, designed for comfort and effortless style. Made from 100% cotton with a soft, knitted fabric, this T-shirt features a classic round neck and short, regular sleeves.",
        price: 399,
        image: [m1],
        category: "Men",
        subcategory: "Topwear",
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
        subcategory: "Bodywear",
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
        subcategory: "Topwear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345452,
        bestseller: false
    },
    {
        _id: "ms004",
        name: "Women Viscose Suit Set with Dupatta",
        description: "Elevate your style with this elegant straight-fit Salwar Suit set, designed in soft, breathable viscose fabric. The white kurta features a beautiful floral print, paired with a comfortable pant and a stunning printed Chanderi dupatta.",
        price: 699,
        image: [w21, w22],
        category: "Women",
        subcategory: "Bodywear",
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
        subcategory: "Topwear",
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
        subcategory: "Topwear",
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
        subcategory: "Topwear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345454,
        bestseller: false
    },
    {
        _id: "ms008",
        name: "Chikankari Anarkali Kurti – Elegant & Versatile",
        description: "Embrace timeless elegance with this beautifully crafted Anarkali Kurti, made from intricate Chikankari fabric. Featuring a regular fit, this long Anarkali gown with 3/4 sleeves is perfect for both casual and formal occasions. ",
        price: 999,
        image: [w41, w42],
        category: "Women",
        subcategory: "Bodywear",
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
        subcategory: "Topwear",
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
        subcategory: "Topwear",
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
        subcategory: "Topwear",
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
        subcategory: "Bodywear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345466,
        bestseller: true
    },
    {
        _id: "ms013",
        name: "Black, Charcoal Grey, and White Colourblocked Sweatshirt for Men",
        description: "Make a bold style statement with this black, charcoal grey, and white colourblocked sweatshirt. Featuring a mock collar and front zip closure, this sweatshirt offers a modern, sporty look.",
        price: 466,
        image: [m7],
        category: "Men",
        subcategory: "Topwear",
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
        subcategory: "Bodywear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345467,
        bestseller: false
    },
    {
        _id: "ms015",
        name: "Off-White Self-Design Pullover for Men",
        description: "This off-white self-design pullover adds a touch of subtle texture to your casual wardrobe. Crafted from soft acrylic fabric, it features a round neck, long sleeves, and a ribbed hem for a comfortable and fitted look.",
        price: 689,
        image: [m8],
        category: "Men",
        subcategory: "Topwear",
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
        subcategory: "Bodywear",
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
        subcategory: "Bodywear",
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
        subcategory: "Bodywear",
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
        subcategory: "Bodywear",
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
        subcategory: "Bodywear",
        sizes: ['S', 'M', 'L', 'XL'],
        date: 1716621345470,
        bestseller: false
    },
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img6],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img7],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img9],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img10],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 120,
        image: [p_img11],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img12],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img13],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img14],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img15],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img16],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img17],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img18],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img19],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false
    },
    {
        _id: "aaaat",
        name: "Women Palazzo Pants with Waist Belt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img20],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img21],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Women Palazzo Pants with Waist Belt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img23],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img24],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img25],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img26],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img27],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img28],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img29],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img30],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img31],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img32],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img33],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img34],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img35],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img36],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img37],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img38],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "aaabm",
        name: "Men Printed Plain Cotton Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img39],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img40],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img41],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img42],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img43],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img44],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img45],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img46],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img47],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 330,
        image: [p_img48],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img49],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 340,
        image: [p_img50],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448, bestseller: false
    },
    {
        _id: "aaaby",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img51],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 350,
        image: [p_img52],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestseller: false
    }
]