import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

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

interface UpdateItemModelProps {
  setUpdateItemModel: (value: boolean) => void;
  selectedItem: Product | null;
}

const UpdateItemModel: React.FC<UpdateItemModelProps> = ({
  setUpdateItemModel,
  selectedItem,
}) => {
  // Function to format product conditions
  const formatProductConditions = (data: ProductConditions): string => {
    const parts = [];

    if (data.colors?.length) {
      parts.push(`Colors: ${data.colors.join(", ")}`);
    }
    if (data.sizes?.length) {
      parts.push(`Sizes: ${data.sizes.join(", ")}`);
    }
    if (data.labels?.length) {
      parts.push(`Labels: ${data.labels.join(", ")}`);
    }

    return parts.join("; ");
  };

  const [title, setTile] = useState(selectedItem?.title);
  const [productConditions, setProductConditions] = useState(
    formatProductConditions(selectedItem?.productConditions || {})
  );
  const [salesChannel, setSalesChannel] = useState(selectedItem?.salesChannel);

  const fd = {
    title,
    productConditions,
    salesChannel,
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdateItemModel(false);
    console.log(fd);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-200 w-96 md:w-1/2 h-1/2 z-10 rounded p-5 shadow shadow-gray-300 relative">
        <div className="flex justify-end">
          <span
            onClick={() => setUpdateItemModel(false)}
            className="text-red-500 cursor-pointer"
          >
            <IoCloseCircleOutline size={25} />
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 p-5 rounded flex flex-col gap-5 mt-5"
        >
          <label
            htmlFor="title"
            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="title"
              placeholder="title"
              defaultValue={selectedItem?.title}
              onChange={(e) => setTile(e.target.value)}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Title
            </span>
          </label>

          <label
            htmlFor="urun kosullari"
            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="urun kosullari"
              placeholder="urun kosullari"
              defaultValue={
                selectedItem
                  ? formatProductConditions(selectedItem.productConditions)
                  : ""
              }
              onChange={(e) => setProductConditions(e.target.value)}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              urun kosullari
            </span>
          </label>

          <label
            htmlFor="satis kanali"
            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="satis kanali"
              placeholder="satis kanali"
              defaultValue={selectedItem?.salesChannel}
              onChange={(e) => setSalesChannel(e.target.value)}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden sm:text-sm"
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              satis kanali
            </span>
          </label>
          <div className="flex justify-between gap-5 w-fit absolute bottom-5 right-5">
            <button
              onClick={() => setUpdateItemModel(false)}
              className="bg-red-400 px-3 py-1 rounded hover:bg-red-500 cursor-pointer capitalize"
            >
              cancel
            </button>
            <button className="bg-green-400 px-3 py-1 rounded hover:bg-green-500 cursor-pointer capitalize">
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItemModel;
