import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import {
  UserRound,
  ShoppingCart,
  Heart,
  Gamepad2,
  ChevronDown,
  Search as SearchIcon
} from "lucide-react";


function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (

    <nav className=" text-black border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-wide"
        >

          <Gamepad2
            size={30}
            className="text-black"
          />

          <span>
            PS<span className="">Gamestar</span>
          </span>

        </Link>


        {/* ================= NAVIGATION ================= */}

        <div className="flex items-center gap-8 font-semibold">

          {/* Home */}

          <Link
            to="/"
            className="hover:text-lime-400 transition"
          >
            Menu
          </Link>


          {/* Games Dropdown */}

          <Games />


        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-3">

        <button  
        value={Search}
        onClick={() => setSearchOpen(!searchOpen)}>
          <SearchIcon size={22} />
        </button>


          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="p-2.5 rounded-full hover:bg-gray-800 hover:text-lime-400 transition"
            title="Wishlist"
          >
            <Heart size={22} />
          </Link>


          {/* User / Login */}

          <Link
            to="/login"
            className="p-2.5 rounded-full hover:bg-gray-800 hover:text-lime-400 transition"
            title="Login"
          >
            <UserRound size={23} />
          </Link>


          {/* Cart */}

          <Link
            to="/cart"
            className="p-2.5 rounded-full hover:bg-gray-800 hover:text-lime-400 transition"
            title="Cart"
          >
            <ShoppingCart size={23} />
          </Link>


        </div>

      </div>
      {/* ================= SEARCH BOX ================= */} 
      {searchOpen && ( <div className="max-w-7xl mx-auto px-6 pb-5"> 
        <Search /> 
        </div> )}

    </nav>

  );
}



/* ================================================= */
/*                    GAMES MENU                     */
/* ================================================= */

function Games() {

  const [open, setOpen] = useState(false);


  return (

    <div className="relative">


      {/* Games Button */}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-lime-400 transition"
      >

        Games

        <ChevronDown
          size={17}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>


      {/* Dropdown */}

      {open && (

        <div className="absolute left-0 top-full mt-3 w-32 bg-white text-black rounded-lg shadow-xl overflow-hidden z-50">


          <Link
            to="/ps5"
            className="block px-4 py-2.5 hover:bg-gray-200 transition"
            onClick={() => setOpen(false)}
          >
            PS5
          </Link>


          <Link
            to="/ps4"
            className="block px-4 py-2.5 hover:bg-gray-200 transition"
            onClick={() => setOpen(false)}
          >
            PS4
          </Link>


          <Link
            to="/ps3"
            className="block px-4 py-2.5 hover:bg-gray-200 transition"
            onClick={() => setOpen(false)}
          >
            PS3
          </Link>


          <Link
            to="/ps2"
            className="block px-4 py-2.5 hover:bg-gray-200 transition"
            onClick={() => setOpen(false)}
          >
            PS2
          </Link>


          <Link
            to="/ps1"
            className="block px-4 py-2.5 hover:bg-gray-200 transition"
            onClick={() => setOpen(false)}
          >
            PS1
          </Link>


          <Link
            to={'Psp'}
            className="block px-4 py-2.5 hover:bg-gray-200 transition"
            // onClick={() => setOpen(false)}
          >
            PSP
          </Link>


        </div>

      )}

    </div>

  );

}


export default Nav;