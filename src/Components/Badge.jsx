import { IoCartOutline } from "react-icons/io5";
const Badge = () => {
  return (
    <div>
      <button
        type="button"
        className="relative inline-flex items-center p-3 text-center  rounded-lg  font-bold"
      >
        <IoCartOutline />

        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          0
        </div>
      </button>
    </div>
  );
};

export default Badge;
