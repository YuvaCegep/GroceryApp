const offers = [
  {
    id: 1,
    name: "Offers One",
    image: require("../assets/banner_image_one.jpg"),
  },
  {
    id: 2,
    name: "Offers two",
    image: require("../assets/banner_image_two.jpg"),
  },
  {
    id: 3,
    name: "Offers three",
    image: require("../assets/banner_image_three.jpg"),
  },

  {
    id: 4,
    name: "Offers four",
    image: require("../assets/banner_image_one.jpg"),
  },

  {
    id: 5,
    name: "Offers five",
    image: require("../assets/banner_image_two.jpg"),
  },

  {
    id: 6,
    name: "Offers six",
    image: require("../assets/banner_image_three.jpg"),
  },

  {
    id: 7,
    name: "Offers seven",
    image: require("../assets/banner_image_one.jpg"),
  },

  {
    id: 8,
    name: "Offers eight",
    image: require("../assets/banner_image_two.jpg"),
  },

  {
    id: 9,
    name: "Offers nine",
    image: require("../assets/banner_image_three.jpg"),
  },

  {
    id: 10,
    name: "Offers ten",
    image: require("../assets/banner_image_one.jpg"),
  },
];

const catList = [
  {
    id: 1,
    catName: "Fruits and Vegetabeles",
    image: require("../assets/fruits_vegetables.jpg"),
  },
  {
    id: 2,
    catName: "Beverages",
    image: require("../assets/beverages.png"),
  },
  {
    id: 3,
    catName: "Dairy Products",
    image: require("../assets/dairy.jpg"),
  },
  {
    id: 4,
    catName: "Grains",
    image: require("../assets/foodgrain.jpg"),
  },
  {
    id: 5,
    catName: "Frozen Veg",
    image: require("../assets/frozen.jpg"),
  },
];

const headingList = [
  {
    categoryHeading: "Category",
  },
  {
    categoryHeading: "Popular",
  },
  {
    categoryHeading: "Whats New",
  },
  {
    categoryHeading: "Recent Item",
  },
];

const product = [
  {
    catId: 1,
    itemName: "Apple",
    itemImage: require("../assets/apple.jpg"),
    itemPrice: 25,
  },
  {
    catId: 1,
    itemName: "orange",
    itemImage: require("../assets/orange.jpg"),
    itemPrice: 35,
  },
  {
    catId: 1,
    itemName: "Banana",
    itemImage: require("../assets/banana.jpg"),
    itemPrice: 25,
  },
  {
    catId: 1,
    itemName: "Blueberry",
    itemImage: require("../assets/blueberry.jpg"),
    itemPrice: 25,
  },
  {
    catId: 1,
    itemName: "Grapes",
    itemImage: require("../assets/grapes.jpg"),
    itemPrice: 25,
  },
  {
    catId: 1,
    itemName: "Papaya",
    itemImage: require("../assets/papaya.jpg"),
    itemPrice: 25,
  },
  {
    catId: 1,
    itemName: "Cherry",
    itemImage: require("../assets/cherry.jpg"),
    itemPrice: 25,
  },
  {
    catId: 1,
    itemName: "Mango",
    itemImage: require("../assets/mango.jpg"),
    itemPrice: 25,
  },

  // ----------------------------------

  {
    catId: 2,
    itemName: "Berry Magaritta",
    itemImage: require("../assets/berryMagaritta.jpg"),
    itemPrice: 25,
  },
  {
    catId: 2,
    itemName: "Cappucino",
    itemImage: require("../assets/cappucino.jpg"),
    itemPrice: 25,
  },
  {
    catId: 2,
    itemName: "Machiato",
    itemImage: require("../assets/machiato.jpg"),
    itemPrice: 25,
  },
  {
    catId: 2,
    itemName: "Watermelon Squash",
    itemImage: require("../assets/watermelonSquash.jpg"),
    itemPrice: 25,
  },

  {
    catId: 2,
    itemName: "Mocha",
    itemImage: require("../assets/mocha.jpg"),
    itemPrice: 25,
  },

  // ----------------------------------------------------------------

  {
    catId: 3,
    itemName: "Brown egg",
    itemImage: require("../assets/brownegg.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 3,
    itemName: "Cheese",
    itemImage: require("../assets/cheesse.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 3,
    itemName: "Egg",
    itemImage: require("../assets/egg.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 3,
    itemName: "Grate Cheese",
    itemImage: require("../assets/gratecheese.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 3,
    itemName: "Milk Powder",
    itemImage: require("../assets/milkpowder.jpeg"),
    itemPrice: 25,
  },

  // ------------------------------------------------------------

  {
    catId: 4,
    itemName: "Sorghum",
    itemImage: require("../assets/Sorghum.jpeg"),
    itemPrice: 25,
  },
  {
    catId: 4,
    itemName: "Buck Wheat",
    itemImage: require("../assets/Buckwheat.jpeg"),
    itemPrice: 25,
  },
  {
    catId: 4,
    itemName: "Millets",
    itemImage: require("../assets/Millets.jpeg"),
    itemPrice: 25,
  },
  {
    catId: 4,
    itemName: "Oats",
    itemImage: require("../assets/oats.jpeg"),
    itemPrice: 25,
  },
  {
    catId: 4,
    itemName: "Corn",
    itemImage: require("../assets/corn.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 4,
    itemName: "Barley",
    itemImage: require("../assets/barley.jpeg"),
    itemPrice: 25,
  },
  {
    catId: 4,
    itemName: "Rice",
    itemImage: require("../assets/rice.jpeg"),
    itemPrice: 25,
  },

  // ---------------------------------------------------------

  {
    catId: 5,
    itemName: "Frozen Beetroots",
    itemImage: require("../assets/frozen_one.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 5,
    itemName: "Frozen Babycarrots",
    itemImage: require("../assets/frozen_two.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 5,
    itemName: "Frozen brocoli",
    itemImage: require("../assets/frozen_three.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 5,
    itemName: "Frozen Greenpeas",
    itemImage: require("../assets/frozen_four.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 5,
    itemName: "Frozen Okra",
    itemImage: require("../assets/frozen_five.jpeg"),
    itemPrice: 25,
  },

  {
    catId: 5,
    itemName: "Frozen beans",
    itemImage: require("../assets/frozen_six.jpeg"),
    itemPrice: 25,
  },
];

const cart = [];

const orders = [];

const admin = {
  username: "Admin",
  password: "123",
};

export { offers, catList, headingList, product, cart, orders };
