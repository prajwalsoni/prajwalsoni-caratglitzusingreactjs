import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20 bg-red text-white">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Om Ring"
          price="35K.00"
          color="Golden"
          badge={true}
          des="prajwalsoni"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Nose Pin"
          price="80K.00"
          color="Golden"
          badge={false}
          des="prajwalsoni"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Pendant"
          price="25K.00"
          color="Mixed"
          badge={true}
          des="prajwalsoni"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Earring"
          price="20K.00"
          color="Black"
          badge={false}
          des="prajwalsoni"
        />
      </div>
    </div>
  );
};

export default BestSellers;
