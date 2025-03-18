import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const products = {
  list: [
    {
      id: "1",
      name: "Mikrotik RB-PoE Injector",
      price: "1,000",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2020/07/Mikrotik-RB-PoE-Injector-400x400.jpg"
    },
    {
      id: "2",
      name: "Mikrotik RB-260GSP",
      price: "6,500",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2018/12/Mikrotik-RB260GSP.jpg"
    },
    {
      id: "3",
      name: "MikrotiK Router Power Box Pro",
      price: "13,000",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2020/11/Mikrotik-Powerbox-Pro-RB960PGS-PB-400x400.png"
    },
    {
      id: "4",
      name: "Mikrotik RouterBoard 4011iGS+RM",
      price: "47,000",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2019/05/MikroTik-CCR1009-7G-1C-1SPC-Cloud-Core-Router.jpg"
    },
    {
      id: "5",
      name: "Mikrotik RBGPOE Injector",
      price: "800",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2024/06/poe-injector-400x400.jpg"
    },
    {
      id: "6",
      name: "Mikrotik RBGPOE-CON-HP",
      price: "1,000",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2024/06/MIKROTIK-RBGPOE-400x400.png"
    },
    {
      id: "7",
      name: "Huawei ONT GPON Router",
      price: "1,700",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2020/10/Huawei-ONT-GPON-Router-400x400.jpg"
    },
    {
      id: "8",
      name: "Tp-Link TL-WR840N 300Mbps Wireless Router",
      price: "1,500",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2018/12/TL-WR840N-400x400.jpg"
    },
    {
      id: "9",
      name: "Mikrotik hAP Lite TC RB941-2nD-TC",
      price: "3,200",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2019/05/Mikrotik-RB941-2nD-TC-Kenya.jpg"
    },
    {
      id: "10",
      name: "Tp-Link 300Mbps 4G LTE Wireless Router TL-MR6400",
      price: "6,500",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2018/12/TL-MR6400-400x400.jpg"
    },
    {
      id: "11",
      name: "TP-Link TL-MR3420 3G/4G Wireless Router",
      price: "3000",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2018/10/TP-Link-TL-MR3420-3G-4G-Wireless-Router-400x400.jpg"
    },
    {
      id: "12",
      name: "Tp-link TL-MR100 300Mbps Wireless 4G LTE Router",
      price: "6,000",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2021/10/Tp-link-TL-MR100-300-Mbps-Wireless-4G-LTE-Router-400x400.jpg"
    },
    {
      id: "13",
      name: "Tp-Link TL-R470T+ Load balance Router",
      price: "4,000",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2018/12/TL-R470-400x400.jpg"
    },
    {
      id: "14",
      name: "TP-LINK 300Mbps Wi-Fi Router TL-WR820N",
      price: "1,500",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2020/07/tl-wr820n-400x400.jpg"
    },
    {
      id: "15",
      name: "Tenda F6 Wireless N300 Easy Setup Router",
      price: "1,600",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2024/07/Tenda-F6-400x400.png"
    },
    {
      id: "16",
      name: "TENDA AC5 1200 SMART DUAL-BAND WIFI ROUTER",
      price: "3,500",
      src: "https://ctcsolutions.co.ke/wp-content/uploads/2025/01/AC5s-tenda-400x400.webp"
    }
  ]
};

const Routers = () => {
  return (
    <div className="font-[sans-serif] bg-white p-4 mx-auto max-w-[1400px]">
      <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-8">
        Routers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {products.list.map((product) => (
          <Link to={"/product/" + product.id} key={product.id}>
            <div className="group overflow-hidden cursor-pointer relative border">
              <div className="bg-gray-100 w-full overflow-hidden">
                <img
                  src={product.src}
                  alt="Product 1"
                  className="w-full object-cover object-top hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-4 relative">
                <div
                  className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
                >
                  <button
                    type="button"
                    title="Add to wishlist"
                    className="bg-transparent outline-none border-none"
                  >
                    <HeartIcon className="size-6 text-indigo-700 transition delay-150 duration-300 ease-in-out hover:fill-indigo-700" />
                  </button>
                  <button
                    type="button"
                    title="Add to cart"
                    className="bg-transparent outline-none border-none"
                  >
                    <ShoppingBagIcon className="size-6 text-indigo-700 transition delay-150 duration-300 ease-in-out hover:fill-indigo-700" />
                  </button>
                </div>
                <div className="z-20 relative bg-white">
                  <h6 className="text-sm font-semibold text-gray-800 truncate">
                    {product.name}
                  </h6>
                  <h6 className="text-sm text-gray-600 mt-2">
                    Ksh {product.price}
                  </h6>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Routers;
