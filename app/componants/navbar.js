"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoCartSharp, IoCloseOutline } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = ({ cart, addTocart, removetocart, subtotal, clearCart }) => {
  console.log(cart, addTocart, removetocart, subtotal, clearCart);

  const pathname = usePathname();

  const getCart = () => {
    ref.current.classList.toggle("translate-y-0");
    ref.current.classList.toggle("hidden");
  };

  const ref = useRef(null);
  const inputRef = useRef(null);
  const isActive = pathname === "/tshirt"
  
  return (
    <div className="   flex flex-col justify-center shadow-sm md:flex-row my-2 ">
      <Link href={"/."}>
        <h2 className="flex items-center font-bold absolute left-4 top-3 text-xl  sm:items-center sm:justify-center ">
          CodeWear
        </h2>
      </Link>
      <div className="flex justify-center items-center">
        <ul className="flex items-center ">
          <Link
            className=" m-2 px-8  cursor-pointer hover:bg-gray-300 hover:rounded-xl "
            href="/tshirts"
          >
            T-shirts{" "}
          </Link>
          <Link
            className=" m-2 px-8 cursor-pointer hover:bg-gray-300 hover:rounded-xl"
            href="/hoodies"
          >
            Huddies
          </Link>
          <Link
            className=" m-2 px-8 cursor-pointer hover:bg-gray-300 hover:rounded-xl "
            href="/about"
          >
            About
          </Link>
          <Link
            className=" m-2 px-8 cursor-pointer hover:bg-gray-300 hover:rounded-xl "
            href="/contact"
          >
            Contact us
          </Link>
        </ul>
      </div>
      <span>
        <IoCartSharp
          className="h-10  absolute right-52 text-xl cursor-pointer"
          onClick={getCart}
        />
      </span>

      <div
        ref={ref}
        className="bg-slate-800  absolute right-0 top-0 p-10 transition-transform duration-3000 hidden transform shadow-lg shadow-black w-96 h-full z-40"
      >
        <span className="cross absolute top-2 right-1 cursor-pointer">
          <IoCloseOutline className="text-2xl text-white" onClick={getCart} />
        </span>
        <h2 className=" text-center font-bold text-white">Shopping Cart</h2>
        <ol className="list-decimal">
          
        </ol>
        <div className="flex">
          <button className="flex mx-auto mt-5 text-black bg-yellow-400 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-500 rounded text-lg hover:text-black">
            Check-Out
          </button>
          <button
            className="flex mx-auto mt-5 text-black bg-yellow-400 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-500 rounded text-lg hover:text-black"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
