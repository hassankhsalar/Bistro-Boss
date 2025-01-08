import { useState } from "react";
import orderimg from "../../assets/shop/order.jpg";
import Cover from "../../components/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../../components/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const {category} = useParams();



  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover img={orderimg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Pizza</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={dessert}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
