import React from "react";
import Card from "./Components/Card/Card";

function App() {
  return (
    <>
      {/* <div className="App">
        <h1 className="text-4xl font-bold bg-red-100">Hello world!</h1>
      </div>

      <div className="flex justify-between flex-row items-center w-1/2 mx-auto h-24 bg-orange-500 mt-20 rounded-xl px-8">
        <div className="flex justify-center items-center bg-blue-500 w-16 h-16 text-white font-bold underline rounded-lg">
          1
        </div>
        <div className="flex justify-center items-center bg-red-500 w-16 h-16 text-white font-bold underline rounded-full">
          2
        </div>
        <div className="flex justify-center items-center bg-green-500 w-16 h-16 text-white font-bold underline rounded-2xl">
          3
        </div>
      </div> */}
      <div className="flex justify-center items-center">
        <Card
          price="30"
          text="Replay muška majica kratkih rukava. Okrugli izrez. Pamuk. Teget boja."
          images={
            "https://www.n-sport.net/UserFiles/products/big/09/12/muska-majica-replay-316522832P-098.jpg"
          }
          title={"Replay Maica"}
        />
        <Card
          price="40"
          text="Replay muška majica kratkih rukava. Okrugli izrez. Pamuk. Teget boja."
          images={
            "https://img.ep-cdn.com/images/500/500/kg/kgkupgqfiytzjsnldglr.jpg"
          }
          title={"Replay Maica"}
        />
      </div>
    </>
  );
}

export default App;

// karktica slika  naslov cena
