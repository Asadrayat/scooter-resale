import React from "react";
import Achieve from "../../Achieve/Achieve";
import Dealin from "../../Dealin/Dealin";
import Sellyour from "../../Sellyour/Sellyour";
import AdvertisedItem from "../AdvertisedItem/AdvertisedItem";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ProductCatagories from "../ProductHome/ProductCatagories";
import Testimonial from "../Testimonial/Testimonial";
import Why from "../Why/Why";
import Client from "../Clients/Clients";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Dealin></Dealin>
      <div className="w-11/12  lg:max-w-[1440px] mx-auto">
        <ProductCatagories></ProductCatagories>
        <AdvertisedItem></AdvertisedItem>
        <Sellyour></Sellyour>
        <Why></Why>
      </div>
      <div>
        <Achieve></Achieve>
      </div>
      <div>
        <Client />
      </div>
      <div className="w-11/12  lg:max-w-[1440px] mx-auto">
        <Testimonial></Testimonial>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
