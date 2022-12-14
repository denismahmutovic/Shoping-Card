import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-around items-center bg-black w-3/3 h-12 w-full ">
      <img
        src="https://www.n-sport.net/themes/nsport/web/assets/images/banks/visa.svg"
        width={60}
        alt="ss"
      />
      <img
        src="https://www.n-sport.net/themes/nsport/web/assets/images/banks/mastercard.svg"
        width={51}
        alt="ss"
      />
      <img
        src="https://www.n-sport.net/themes/nsport/web/assets/images/banks/banca-intesa.svg"
        width={70}
        alt="ss"
      />
      <img
        src="https://www.n-sport.net/themes/nsport/web/assets/images/banks/mastercardsec.svg"
        width={50}
        alt="ss"
      />
      <p className="text-white font-serif">Denis Mahmutovic @2020</p>
    </div>
  );
}
