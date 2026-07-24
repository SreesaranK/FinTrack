import { FiBell, FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 h-20 px-8 flex items-center justify-between">

      <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-2 w-96">

        <FiSearch />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />

      </div>

      <button className="relative">

        <FiBell size={22} />

        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>

      </button>

    </header>
  );
}