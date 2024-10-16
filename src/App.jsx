import { useEffect, useState } from "react";
import House from "./House";

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
      <section className="houseList ml-10 mt-8 flex flex-row flex-wrap gap-6">
        {houses.length > 0 &&
          houses.map((house) => <House house={house} key={house.id} />)}
      </section>
    </>
  );
}

export default App;
