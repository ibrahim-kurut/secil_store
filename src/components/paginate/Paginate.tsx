import Link from "next/link";

const Paginate = () => {
  return (
    <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 absolute bottom-5 right-5">
      <ol className="flex justify-end gap-1 text-xs font-medium">
        <li>
          <Link
            href="#"
            className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="#"
            className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            1
          </Link>
        </li>

        <Link href="#">
          <li className="block size-8 rounded-sm border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>
        </Link>

        <li>
          <Link
            href="#"
            className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            3
          </Link>
        </li>

        <li>
          <Link
            href="#"
            className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            4
          </Link>
        </li>

        <li>
          <Link
            href="#"
            className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Paginate;
