const itemsObject = [
    {
        itemPic: "berry.png",
        itemName: "Berry & Bright",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["Delicious berries and wholesome ingredients such as carrots and bilberries to brighten up your day: Tart cherry, Carrot, Blackberry, Pomegranate, Bilberry, Cranberry, Acai"], 
        itemPrice: "5€",
    },

    {
        itemPic: "green.png",
        itemName: "Clean & Green",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: "A refreshing boost in a bottle with those daily vitamins and minerals you need for a great day : Kale, Cucumber, Apple, Spinach, Mint, Celery, Lime, Parsleyn", 
        itemPrice: "5€",
    },

    {
        itemPic: "red.png",
        itemName: "Restoration Red",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A combination of red fruits to bring you flavor and sustenance : Tomato, Tart cherry, Beet, Strawberry, Apple, Lime"], 
        itemPrice: "5€",
    },

    {
        itemPic: "tropical.png",
        itemName: "Tropical Glow",
        itemTags: ["Juice, Vegan, Organic, Gluten-free"],
        itemDescription: ["A blend of tropical fruit with revitalizing coconut water : Pineapple, Orange, Banana, Apple Mango, Passionfruit, Coconut water"], 
        itemPrice: "5€",
    },

    {
        itemPic: "marble.png",
        itemName: "Moist Marble Cake",
        itemTags: ["Dessert, Vegetarian"],
        itemDescription: ["Fall for our super marble cake: Flour, Milk, Butter, Eggs, Sugar, and Chocolate"], 
        itemPrice: "3,90€",
    },

    {
        itemPic: "fruits.png",
        itemName: "Fuit Ninja",
        itemTags: ["Dessert", "Vegan"],
        itemDescription: ["Our exotic fruit salad brings a touch of freshness with its chunks of fresh mango, pomegranate and pineapple"], 
        itemPrice: "4,90€",
    },

    {
      itemPic: "mushroom.png",
      itemName: "Shimeji and Shitake",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Stir-fry mushrooms in olive oil with saké and soy sauce."],
      itemPrice: "€6"
    },
    {
      itemPic: "sunomono.png",
      itemName: "Sunomono",
      itemTags: ["starter", "vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Cumcuber salad marinated in rice vinegar."],
      itemPrice: "€4"
    },
    {
      itemPic: "sweetpotato.png",
      itemName: "Sweet potato chips",
      itemTags: ["starter","vegan", "vegetarian", "dairyfree", "gluten-free"],
      itemDescription: ["Baked sweet potato chips."],
      itemPrice: "€4"
    },
    {
      itemPic: "shrimp.png",
      itemName: "Honey Garlic and Pineapple Shrimp Skewers",
      itemTags: ["starter","dairyfree", "gluten-free"],
      itemDescription: ["Succulent shrimp and juicy pineapple chunks grilled, coated in a sweet and savory honey garlic glaze"],
      itemPrice: "€8"
    },

    {
        itemPic: "musubi.png",
        itemName: "Spam Musubi with Egg",
        itemTags: ["side dish","dairyfree", "gluten-free"],
        itemDescription: ["Spam Musubi with Egg is a delicious Hawaiian dish consisting of grilled Spam, a slice of omelette, and sticky rice, wrapped in a sheet of nori seaweed."],
        itemPrice: "€4"
      },
    {
    itemPic: "edamame.png",
    itemName: "Edamame",
    itemTags: ["side","vegan", "vegetarian", "dairy-free","gluten-free"],
    itemDescription: "immature green soybeans",
    itemPrice: "4,6",  },
   {
    itemPic: "salmonpoke.png",
    itemName: "Salmon Poke ",
    itemTags: ["main course", "fish"],
    itemDescription:
      "Choice of base, fresh salmon, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds.Served with the sauce of your choice.",
    itemPrice: "12,95",
  },

  {
    itemPic: "tunapoke.png",
    itemName: "Tuna Poke",
    itemTags: ["main course", "fish"],
    itemDescription:
      "Choice of marinated tuna, mango or pineapple, radish, cucumber, red cabbage, avocado, edamame, sesame seeds.Served with the sauce of your choice.",
    itemPrice: "12,95",
  },

  {
    itemPic: "falafelpoke.png",
    itemName: "Falafel Poke ",
    itemTags: ["main course", "vegetarian", "gluten-free"],
    itemDescription:
      "Choice of base, falafels depending , grenade , radish, carrot, avocado, edamame, cucumber, red cabbage, sesame seeds and raspberry.Served with the sauce of your choice",
    itemPrice: "10,95",
  },

  {
    itemPic: "veggiechicken.png",
    itemName: "Veggie Chicken Poke ",
    itemTags: ["main course", "vegan", "vegetarian", "gluten-free"],
    itemDescription:
      "Vinegared rice base, veggie chicken, avocado, mango, edamame, cucumber, cashew nuts, thai cebette and sesame.",
    itemPrice: "11,95",
  },
  ];
  
  const dishesContainer = document.querySelector(".cardCollection");
  
  const displayCollection = (
    itemPic,
    itemName,
    itemTags,
    itemDescription,
    itemPrice
  ) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const image = document.createElement("img");
    image.src = itemPic;
    card.appendChild(image);
  
    const name = document.createElement("h2");
    name.textContent = itemName;
    card.appendChild(name);
  
    const tags = document.createElement("p");
    tags.textContent = itemTags;
    card.appendChild(tags);
  
    const description = document.createElement("p");
    description.textContent = itemDescription;
    card.appendChild(description);
  
    const price = document.createElement("p");
    price.textContent = itemPrice;
    card.appendChild(price);
  
    dishesContainer.appendChild(card);
  };
  
  const generateItemsObject = () => {
    itemsObject.forEach((dishes) => {
      displayCollection(
        dishes.itemPic,
        dishes.itemName,
        dishes.itemTags,
        dishes.itemDescription,
        dishes.itemPrice
      );
    });
  };
  
  generateItemsObject();
  
////////// Darkmodeswitch //////////////

  const checkbox = document.getElementById("checkbox");
  //The const checkbox = document.getElementById("checkbox"); line selects the checkbox element from the HTML document by its id attribute. It assigns the element to the checkbox constant, allowing us to refer to it later in the code.

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light")
  });
  //The checkbox.addEventListener("change", () => { ... }); line adds an event listener to the checkbox element. It listens for the "change" event, which occurs when the checkbox is checked or unchecked. When the event is triggered, the provided callback function is executed.
  
  //The arrow function () => { ... } is the callback function that runs when the checkbox's "change" event occurs.
  
  //Inside the callback function, document.body.classList.toggle("light") toggles the "light" class on the body element. The classList property provides access to the class attributes of an element. The toggle() method adds the "light" class to the body element if it is not present, and removes it if it is already present. This way, each time the checkbox is checked or unchecked, the "light" class is added or removed from the body element, effectively toggling the light mode.