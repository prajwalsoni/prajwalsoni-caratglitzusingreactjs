import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  download
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Pendants"
          price="35000.00"
          color="Golden"
          badge={true}
          des="prajwalsoni"
        />
        <Product
             _id= "2011"
             img= {download}
             productName= "Pendants"
             price= "35000.00"
             color= "Golden"
             badge= {true}
             des= "prajwalsoni"
        />
        
        <Product
          _id="1102"
          img={spfTwo}
          productName="MangalSutra"
          price="18000.00"
          color="Golden"
          badge={true}
          des="prajwalsoni"
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Mangalsutra"
          price="25000.00"
          color="Golden"
          badge={true}
          des="prajwalsoni"
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Pendant"
          price="220000.00"
          color="Golden"
          badge={true}
          des="prajwalsoni"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
