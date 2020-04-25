import React from "react";

const menuOrder = [
  "Pizzas",
  "Wings",
  "Topperstix",
  "Toppertots",
  "Desserts",
  "Sauces",
  "Drinks",
];

const pizzas = [
  "Ragin' Pepperoni",
  "Toppers Classic",
  "Veggie Classic",
  "Smoky BBQ Chicken",
  "Maui Topper",
  "Meat Topper",
  "Mac 'n Cheese",
  "Loaded Tot-zza",
  "Jalapeño Popper Topper",
  "Build your own ZA",
];

const pDesc = [
  "Homemade pizza sauce topped with 100% real Wisconsin mozzarella cheese, pepperoni, old school pepperoni and diced pepperoni.",
  "Homemade pizza sauce topped with 100% real Wisconsin mozzarella cheese, pepperoni, hand-pinched italian sausage, onions, green peppers and mushrooms.",
  "Homemade pizza sauce topped with 100% real Wisconsin mozzarella cheese, green peppers, mushrooms, black olives, tomatoes and onions.",
  "Smoky BBQ sauce topped with 100% real Wisconsin mozzarella cheese, chicken, onions, applewood smoked bacon and drizzled with smoky BBQ sauce.",
  "Semi-sweet BBQ sauce topped with 100% real Wisconsin mozzarella cheese, Canadian bacon, pineapple and applewood smoked bacon.",
  "Homemade pizza sauce topped with 100% real Wisconsin mozzarella cheese, pepperoni, Canadian bacon, hand-pinched italian sausage and applewood smoked bacon.",
  "Creamy cheese sauce layered with macaroni noodles, cheddar cheese, and 100% real Wisconsin mozzarella cheese.",
  "Ranch sauce topped with 100% real Wisconsin mozzarella cheese, tater tots, applewood smoked bacon, green onions and drizzled with nacho cheese.",
  "Cream cheese sauce topped with 100% real Wisconsin mozzarella cheese, cheddar cheese and fire roasted jalapeños.",
  "Your choice of crust, sauce, cheese, and toppings.",
];

const wings = [
  "Boom boom wings",
  "Smoky BBQ",
  "Parmesan Garlic",
  "Mild Buffalo",
  "Hot Buffalo",
  "Oven-roasted",
];

const wDesc = [
  "Our oven roasted wings, tossed in boom boom sauce. This sweet, spicy, and garlicky flavor is perfect on wings.",
  "Our oven roasted wings, tossed in smoky BBQ sauce. An amazing combination of sweet and smoky.",
  "Our oven roasted wings, tossed in parmesan garlic sauce. A classic svaory favorite.",
  "Our oven roasted wings, tossed in mild buffalo sauce. It is sniffles hot, but not tears in your eyes hot.",
  "Our oven roasted wings, tossed in hot buffalo sauce. For those who are not afraid of the burn.",
  "Our oven roasted wings. Served sauceless, but not soulless.",
];

const topStix = [
  "Original Topperstix",
  "3-cheese Garlicstix",
  "Jalapeño Popperstix",
  "Cinnamonstix",
  "Baconstix",
  "Pepperonistix",
  "Nachostix",
];
const tDesc = [
  "Our cheesy, buttery and garlicky Topperstix are perfect for sharing… or not. Your secret is safe with us. Your choice of dipping sauce. Made with 100% real Wisconsin mozzarella cheese.",
  "Our delicious Original Topperstix topped with roasted garlic, asiago and cheddar cheese. Made with 100% real Wisconsin mozzarella cheese.",
  "Our delicious Original Topperstix topped with diced pepperoni, fire roasted jalapenos, cheddar cheese and cream cheese drizzle. Made with 100% real Wisconsin mozzarella cheese.",
  "Our craveable dessert stix are made with cinnamon sugar and drizzled with our delicious cream cheese icing.",
  "Our delicious Original Topperstix topped with loads of applewood smoked bacon. Made with 100% real Wisconsin mozzarella cheese.",
  "Our delicious Original Topperstix topped with loads of diced pepperoni. Made with 100% real Wisconsin mozzarella cheese.",
  "Our delicious Original Topperstix topped with ground beef, pepper jack, fire-roasted jalapenos, diced tomatoes and nacho cheese drizzle. Made with 100% real Wisconsin mozzarella Cheese.",
];
const sides = ["Naked Tots", "C-B-D Tots", "Cowboy Tots", "Tot-chos"];

const sDesc = [
  "Crispy golden tater tots served with your choice of a dipping sauce.",
  "Cheesy-bacon-delight tots! Crispy golden brown tater tots, covered in nacho cheese sauce and applewood smoked bacon (CBD not actually included).",
  "Crispy golden brown tater tots, covered in nacho cheese sauce, smoky BBQ sauce and topped with applewood smoked bacon.",
  "Crispy golden brown tater tots, covered in nacho cheese sauce, topped with tomatoes, ground beef and fire roasted jalapenos. Served with a sour cream dipping sauce.",
];

const desserts = [
  "Cinnamon Swirl Monkey Bread",
  "Raspberry Cheesecake Monkey Bread",
  "Chocolate and Cream Monkey Bread",
];

const dDesc = [
  "Bite-sized pieces of freshly made dough, sprinkled with cinnamon and sugar, then baked and covered in cream cheese icing.",
  "Bite-sized pieces of freshly made dough, sprinkled with cinnamon and sugar, then baked and drenched in cream cheese icing and raspberry topping.",
  "Bite-sized pieces of freshly made dough, sprinkled with cinnamon and sugar, then baked and drenched in cream cheese and chocolate icing.",
];
const sauceCups = [
  "Boom Boom Sauce",
  "Ranch",
  "Garlic Sauce",
  "Nacho Cheese",
  "Marinara",
  "Chipotle Ranch",
  "Ketchup",
  "Parmesan Garlic",
  "Sour Cream",
  "Bleu Cheese",
  "Hot Buffalo",
  "Mild Buffalo",
  "Smoky BBQ",
  "Cream Cheese Icing",
  "Chocolate Frosting",
];

const drinks = [
  "Coke",
  "Diet Coke",
  "Cherry Coke",
  "Sprite",
  "Mellow Yellow",
  "Barq's Root Beer",
  "Lemonade",
  "Dasani",
];

export class MenuVisual extends React.Component {
  constructor(props) {
    super(props);
    this.sendPizzaInfo = this.sendPizzaInfo.bind(this);
    this.getPizzaInfo = this.getPizzaInfo.bind(this);
  }

  sendPizzaInfo(k) {
    this.props.start();
    let info = this.getPizzaInfo(k);
    info[0] += pizzas[k];
    this.props.onClick(info[0], info[1], 1);
    alert("Added the " + info[0] + " to your order!");
  }

  getPizzaInfo(k) {
    var result = "";
    let prices = [10, 12, 14];
    var price = 0;
    let sizeInfo = document.getElementsByName("pizzaSize" + k);
    let crustInfo = document.getElementsByName("pizzaCrust" + k);
    for (let i = 0; i < sizeInfo.length; ++i) {
      if (sizeInfo[i].type === "radio") {
        if (sizeInfo[i].checked) {
          result += sizeInfo[i].value;
          price = prices[i];
        }
      }
    }
    for (let i = 0; i < crustInfo.length; ++i) {
      if (crustInfo[i].type === "radio") {
        if (crustInfo[i].checked) {
          result += " " + crustInfo[i].value + " ";
        }
      }
    }
    return [result, price];
  }

  render() {
    var menuItemList = [];
    var menuList = [];
    var pizzaList = [];
    var wingsList = [];
    var stixList = [];
    var sidesList = [];
    var dessertsList = [];
    var saucesList = [];
    var drinksList = [];
    let menuGroup = [
      pizzaList,
      wingsList,
      stixList,
      sidesList,
      dessertsList,
      saucesList,
      drinksList,
    ];
    for (let i = 0; i < sauceCups.length; ++i) {
      if (i < menuOrder.length) {
        menuList.push(
          <div key={i} className="menuItemTitle">
            {menuOrder[i]}
          </div>
        );
      }
      if (i < pizzas.length) {
        pizzaList.push(
          <div key={i} className="flavor">
            <div className="flavorInfo">
              <div className="flavorTitle">{pizzas[i]}</div>
              <div className="flavorDesc">{pDesc[i]}</div>
              <div className="flavorOptions">
                <form>
                  <div>
                    <input
                      type="radio"
                      id="small"
                      name={"pizzaSize" + i}
                      value="Small"
                    />
                    <label htmlFor="small">{"Small (4 slices)"}</label>
                    <input
                      type="radio"
                      id="medium"
                      name={"pizzaSize" + i}
                      value="Medium"
                    />
                    <label htmlFor="medium">{"Medium (8 Slices)"}</label>
                    <input
                      type="radio"
                      id="large"
                      name={"pizzaSize" + i}
                      value="Large"
                      defaultChecked
                    />
                    <label htmlFor="large">{"Large (8 Slices)"}</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="thin"
                      name={"pizzaCrust" + i}
                      value="Thin"
                    />
                    <label htmlFor="thin">{"Thin"}</label>
                    <input
                      type="radio"
                      id="hTossed"
                      name={"pizzaCrust" + i}
                      value="Hand-Tossed"
                      defaultChecked
                    />
                    <label htmlFor="hTossed">{"Hand-Tossed"}</label>
                    <input
                      type="radio"
                      id="tBoy"
                      name={"pizzaCrust" + i}
                      value="Tallboy"
                    />
                    <label htmlFor="tBoy">{"Tallboy"}</label>
                  </div>
                  {/*
                  <input
                    type="number"
                    id={"quantityP" + i}
                    name="quantity"
                    min="1"
                    placeholder="1"
                    required
                  />
                  <label htmlFor={"quantityP" + i}>
                    <button
                      onClick={() => {
                        var x = document.getElementById("quantityP" + i);
                        x.value = x.value + 1;
                      }}
                    >
                      {"+"}
                    </button>
                    <button
                      onClick={() => {
                        var x = document.getElementById("quantityP" + i);
                        x.value = x.value - 1;
                      }}
                    >
                      {"-"}
                    </button>
                  </label>*/}
                </form>
              </div>
              <button className="addCart" onClick={() => this.sendPizzaInfo(i)}>
                {"Add to Cart"}
              </button>
            </div>
          </div>
        );
      }
      if (i < wings.length) {
        wingsList.push(
          <div key={i} className="flavor">
            <div className="flavorInfo">
              <div className="flavorTitle">{wings[i]}</div>
              <div className="flavorDesc">{wDesc[i]}</div>
              <div className="flavorOptions"></div>
              <button className="addCart" onClick={() => this.props.onClick()}>
                {"Add to Cart"}
              </button>
            </div>
          </div>
        );
      }
      if (i < topStix.length) {
        stixList.push(
          <div key={i} className="flavor">
            <div className="flavorInfo">
              <div className="flavorTitle">{topStix[i]}</div>
              <div className="flavorDesc">{tDesc[i]}</div>
              <div className="flavorOptions"></div>
              <button className="addCart" onClick={() => this.props.onClick()}>
                {"Add to Cart"}
              </button>
            </div>
          </div>
        );
      }
      if (i < sides.length) {
        sidesList.push(
          <div key={i} className="flavor">
            <div className="flavorInfo">
              <div className="flavorTitle">{sides[i]}</div>
              <div className="flavorDesc">{sDesc[i]}</div>
              <div className="flavorOptions"></div>
              <button className="addCart" onClick={() => this.props.onClick()}>
                {"Add to Cart"}
              </button>
            </div>
          </div>
        );
      }
      if (i < desserts.length) {
        dessertsList.push(
          <div key={i} className="flavor">
            <div className="flavorInfo">
              <div className="flavorTitle">{desserts[i]}</div>
              <div className="flavorDesc">{dDesc[i]}</div>
              <div className="flavorOptions"></div>
              <button className="addCart" onClick={() => this.props.onClick()}>
                {"Add to Cart"}
              </button>
            </div>
          </div>
        );
      }
      if (i < drinks.length) {
        drinksList.push(
          <div key={i} className="flavor">
            <div className="flavorInfo">
              <div className="flavorTitle">{drinks[i]}</div>
              <div className="flavorOptions"></div>
              <button className="addCart" onClick={() => this.props.onClick()}>
                {"Add to Cart"}
              </button>
            </div>
          </div>
        );
      }
      saucesList.push(
        <div key={i} className="flavor">
          <div className="flavorInfo">
            <div className="flavorTitle">{sauceCups[i]}</div>
            <div className="flavorOptions"></div>
            <button className="addCart" onClick={() => this.props.onClick()}>
              {"Add to Cart"}
            </button>
          </div>
        </div>
      );
    }
    for (let i = 0; i < menuOrder.length; ++i) {
      menuItemList.push(
        <div key={i} className="menuItemGroup">
          {menuList[i]}
          {menuGroup[i]}
        </div>
      );
    }
    return (
      <div>
        <div className="pageHeader">
          {"Have some food allergy? Don't worry, we "}
          <a
            href="https://www.toppers.com/Portals/0/Pages/Allergens/Toppers%20Pizza%20Common%20Allergens1.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"can accomodate"}
          </a>
          {" for that!"}
        </div>
        {menuItemList}
      </div>
    );
  }
}
