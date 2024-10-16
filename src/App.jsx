import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getHouses = async () => {
      const res = await fetch("http://localhost:3000/houses");

      const data = await res.json();

      console.log(data);
    };

    getHouses();
  }, []);

  return (
    <>
      <header>
        <img src="logo.svg" alt="home logo" className="ml-3 mt-3" />
      </header>
      <section className="searchArea ml-3 mt-3">
        <div className="flex-row">
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
    </>
  );
}

export default App;
