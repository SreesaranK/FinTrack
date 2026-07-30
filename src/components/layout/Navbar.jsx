import {
  FiBell,
  FiMenu,
  FiSearch,
  FiSun,
  FiChevronDown,
} from "react-icons/fi";

export default function Navbar({ openSidebar }) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={openSidebar}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition"
          >
            <FiMenu size={24} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="hidden md:block text-sm text-slate-500">
              Welcome back, Sreesaran 👋
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Search */}
          <div className="hidden lg:flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl w-80">
            <FiSearch className="text-slate-500" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Mobile Search */}
          <button className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition">
            <FiSearch size={20} />
          </button>

          {/* Theme */}
          <button className="p-2 rounded-xl hover:bg-slate-100 transition">
            <FiSun size={20} />
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-slate-100 transition">
            <FiBell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 hover:bg-slate-100 rounded-xl px-2 py-1 transition">
            <img
              src="https://ui-avatars.com/api/?name=SS&background=10b981&color=fff"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />

            <div className="hidden md:block text-left">
              <p className="font-semibold text-slate-800">
                Sreesaran
              </p>

              <p className="text-xs text-slate-500">
                Premium User
              </p>
            </div>

            <FiChevronDown className="hidden md:block text-slate-500" />
          </button>

        </div>
      </div>
    </header>
  );
}