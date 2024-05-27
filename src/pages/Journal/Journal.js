import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Cartaglitz :- We are Here</span>
        </h1>
        <div className="mb-4">
          <h2 className="font-semibold">HEAD OFFICE</h2>
          <p>
            Level 10, 18-20<br />
            Hindustan Times House<br />
            KG Marg, Connaught Place<br />
            New Delhi, India -110001
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold">Dubai - UAE</h2>
          <p>
            Suite No. 01<br />
            Abrak Business Center<br />
            Business Bay Dubai, U.A.E.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold">Harare - Zimbabwe</h2>
          <p>
            14 San Sebastian Tower<br />
            Samora Machel Avenue<br />
            Harare, Zimbabwe
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold">London - United Kingdom</h2>
          <p>
            71-75 Shelton Street<br />
            Covent Garden<br />
            London, WC2H 9JQ
          </p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold">New York - United States</h2>
          <p>
            54 State Street<br />
            Ste 804 Albany<br />
            NY -12207 U.S.A.
          </p>
        </div>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
