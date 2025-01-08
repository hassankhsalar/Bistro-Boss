import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../components/Cover";
import menucover from '../../assets/menu/banner3.jpg';
import PopularMenu from "../../components/PopularMenu";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import desserimg from '../../assets/menu/dessert-bg.jpeg';
import pizzaimg from '../../assets/menu/pizza-bg.jpg';
import soupimg from '../../assets/menu/soup-bg.jpg';
import saladimg from '../../assets/menu/salad-bg.jpg';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* main menu item */}
      <Cover img={menucover} title="Our Menu"></Cover>
      <SectionTitle subHeading="Todays Offer" heading="Dont miss "></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory items={dessert} title="dessert" img={desserimg}></MenuCategory>
      {/* pizza */}
      <MenuCategory items={pizza} title="pizza" img={pizzaimg}></MenuCategory>

      <MenuCategory items={salad} title="salad" img={saladimg}></MenuCategory>

      <MenuCategory items={soup} title="soup" img={soupimg}></MenuCategory>


    </div>
  );
};

export default Menu;
