import { data } from "../../../data/collections";

interface ProductConditions {
  colors?: string[];
  sizes?: string[];
  labels?: string[];
}

const formatProductConditions = (conditions: ProductConditions): string => {
  const parts = [];

  if (conditions.colors && conditions.colors.length > 0) {
    parts.push(`Renkler: ${conditions.colors.join(" _ ")}`);
  }

  if (conditions.sizes && conditions.sizes.length > 0) {
    parts.push(`Bedenler: ${conditions.sizes.join(" _ ")}`);
  }

  if (conditions.labels && conditions.labels.length > 0) {
    parts.push(`Etiketler: ${conditions.labels.join(" _ ")}`);
  }

  return parts.join("; ");
};

const TableBody = () => {
  return (
    <>
      {data?.map((item, i) => {
        return (
          <tbody key={i} className="divide-y divide-gray-200">
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
                    onClick={() => console.log(item)}
                  >
                    edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded"
                    onClick={() => console.log(item)}
                  >
                    delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default TableBody;
