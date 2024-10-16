function App() {
  return (
    <>
      <header>
        <img src="logo.svg" alt="home logo" className="ml-3 mt-3" />
      </header>
      <section className="searchArea ml-3 mt-3">
        <div className="flex-row">
          <input
            type="text"
            className="w-1/3 rounded-lg border border-solid border-violet-400 p-2 focus:border-violet-700 focus-visible:border-violet-700 text-slate-800"
          />
          <button
            type="button"
            className="ml-2 rounded-lg bg-violet-400 p-2 text-white hover:bg-violet-300 transition-colors duration-200 ease-in-out"
          >
            篩選
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
