import { useEffect, useState } from "react";

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const res = await fetch("http://localhost:3000/houses");

      const data = await res.json();

      if (data.length > 0) {
        setHouses(data);
      }
    };

    getHouses();
  }, []);

  return (
    <>
      <header>
        <img src="logo.svg" alt="home logo" className="ml-10 mt-5" />
      </header>
      <section className="searchArea ml-10 mt-3">
        <div className="flex flex-row">
          <input
            type="text"
            className="w-1/3 rounded-lg border border-solid border-violet-400 p-2 text-slate-800 focus:border-violet-700 focus-visible:border-violet-700"
          />
          <button
            type="button"
            className="ml-2 rounded-lg bg-violet-400 p-2 text-white transition-colors duration-200 ease-in-out hover:bg-violet-300"
          >
            篩選
          </button>
        </div>
      </section>
      <section className="houseList ml-10 mt-3">
        {houses.length > 0 &&
          houses.map((house, index) => {
            return (
              <div className="w-1/3 rounded-3xl bg-violet-100 pb-6" key={index}>
                <img
                  src={house.photo}
                  className="h-64 w-full rounded-t-3xl object-cover"
                ></img>
                <h1 className="ml-3 mt-3 text-lg font-bold text-violet-700">
                  {house.name}
                </h1>
                <div className="ml-3 mt-2 flex flex-row items-center gap-3">
                  <img className="h-5" src="location-pin.svg"></img>
                  <h1 className="text-violet-700">
                    {house.city}, {house.state}
                  </h1>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default App;
