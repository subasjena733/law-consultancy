function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div>
         <h1 className="text-xl font-bold text-yellow-400">
            Kar & Associates
          </h1>

          <p className="text-sm font-semibold">
            Justice Bandana Kar
          </p>

          <p className="text-xs text-gray-300">
            Retired Judge
          </p>
        </div>
        <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition duration-150 active:scale-95 hover:brightness-110 shadow-md hover:shadow-lg">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}

export default Navbar;