"use client";

import Paginate from "@/components/paginate/Paginate";
import TableBody from "@/components/table/TableBody";
import Link from "next/link";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

const Collections = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex gap-5 my-5 relative">
      {/* Sidebar */}
      <div
        className={`border border-gray-400 mx-2 rounded w-[25%] h-[calc(100vh-150px)] px-2 bg-white shadow-lg transition-all 
          ${sidebarOpen ? "w-[25%]" : "hidden md:block"}`}
      >
        <p className="uppercase font-bold mb-4">menu</p>
        <ul className="space-y-4">
          <li>
            <Link
              href="#"
              className="flex items-center gap-2 capitalize"
              onClick={handleMenuClick}
            >
              <FaHome />
              dashboard
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center gap-2 capitalize"
              onClick={handleMenuClick}
            >
              <AiOutlineProduct />
              urunler
            </Link>
          </li>

          <p className="capitalize text-gray-500">satis</p>
          <li>
            <Link
              href="#"
              className="flex items-center gap-2 capitalize"
              onClick={handleMenuClick}
            >
              <MdOutlineShoppingCart />
              koleksiyon
            </Link>
          </li>
        </ul>
      </div>

      {/* setting icon*/}
      <button
        className={`absolute left-2 top-5 p-2 bg-gray-200 rounded-full shadow-lg transition-transform hover:scale-110 
          ${sidebarOpen ? "hidden" : "block md:hidden"}`}
        onClick={() => setSidebarOpen(true)}
      >
        <IoMdSettings size={25} />
      </button>

      {/* Table */}
      <div
        className={`border border-gray-400 mr-2 py-20 rounded transition-all 
          ${
            sidebarOpen ? "w-[75%]" : "w-full"
          } h-[calc(100vh-150px)] overflow-auto`}
      >
        <div className="px-5">
          <div className="overflow-x-auto rounded-t-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right capitalize">
                <tr>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    baslik
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    urun kosullari
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    satis kanali
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                    islemler
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <TableBody />
            </table>
          </div>

          {/* Pagination */}
          <Paginate />
        </div>
      </div>
    </div>
  );
};

export default Collections;
