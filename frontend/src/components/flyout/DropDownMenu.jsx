const DropDownMenu = () => {
  return (
    <div
      id="dropdownDelay"
      class="bg-indigo-500 divide-y divide-gray-100  w-64 dark:bg-gray-700 shadow-sm shadow-indigo-300"
      style={{ zIndex: 1000 }}
    >
      <ul
        class="py-2 text-sm text-white dark:text-gray-200"
        aria-labelledby="dropdownDelayButton"
      >
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-indigo-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Tenda
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-indigo-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Mikrotik
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-indigo-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Netlink
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-indigo-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Huawei
          </a>
        </li>
      </ul>
    </div>
  );
};
export default DropDownMenu;
