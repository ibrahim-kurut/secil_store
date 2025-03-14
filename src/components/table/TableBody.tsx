"use client";

import { useState, useCallback } from "react";
import { data as initialData } from "../../../data/collections";
import swal from "sweetalert";
import UpdateItemModel from "./UpdateItemModel";

interface ProductConditions {
  colors?: string[];
  sizes?: string[];
  labels?: string[];
}

interface Product {
  id: number;
  title: string;
  productConditions: ProductConditions;
  salesChannel: string;
}
const formatProductConditions = (conditions: ProductConditions): string => {
  const parts = [];

  if (conditions.colors?.length) {
    parts.push(`Renkler: ${conditions.colors.join(" _ ")}`);
  }
  if (conditions.sizes?.length) {
    parts.push(`Bedenler: ${conditions.sizes.join(" _ ")}`);
  }
  if (conditions.labels?.length) {
    parts.push(`Etiketler: ${conditions.labels.join(" _ ")}`);
  }

  return parts.join("; ");
};

const TableBody = () => {
  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const [updateItemModel, setUpdateItemModel] = useState(false);

  // handle update items
  const handleUpdateItem = (item: Product) => {
    setSelectedItem(item);
    setUpdateItemModel(true);
  };

  const handleDelete = useCallback(
    (id: number) => {
      swal({
        title: `Are you sure ?`,
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: ["Cancel", "Ok"],
        dangerMode: true,
      }).then((isOk) => {
        if (isOk) {
          const updatedData = data.filter((item) => item.id !== id);
          setData(updatedData);
          swal("The product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("The product has not been deleted!");
        }
      });
    },
    [data]
  );

  return (
    <>
      {data.map((item) => (
        <tbody key={item.id} className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
              {item.title}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-gray-700">
              {formatProductConditions(item.productConditions)}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-gray-700">
              {item.salesChannel}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-gray-700">
              <div className="flex gap-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded"
                  aria-label="Edit Product"
                  onClick={() => handleUpdateItem(item)}
                >
                  edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded cursor-pointer"
                  aria-label="Delete Product"
                  onClick={() => handleDelete(item.id)}
                >
                  delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      ))}
      {updateItemModel && (
        <UpdateItemModel
          setUpdateItemModel={setUpdateItemModel}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
};

export default TableBody;
