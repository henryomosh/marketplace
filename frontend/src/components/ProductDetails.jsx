import { useParams } from "react-router-dom";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

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

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.list.find((product) => product.id === id);
  return (
    <div class="font-sans mx-12 bg-gray-100 ">
      <div class="grid items-start grid-cols-1 lg:grid-cols-2">
        <div class="col-span-1 grid grid-cols-1 lg:sticky top-0 gap-0.5 mb-4 px-12 py-12">
          <div class="overflow-hidden border-2 border-gray-200">
            <img
              src={product.src}
              alt="Product"
              class="w-full aspect-[3/4] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
            />
          </div>
        </div>

        <div class="py-6 px-8 max-lg:max-w-2xl">
          <div>
            <h2 class="text-xl font-bold text-gray-800">{product.name}</h2>
            <p class="text-sm text-gray-500 mt-2">Well-Versed Commerce</p>
          </div>

          <div class="flex items-center space-x-1 mt-4">
            <StarIcon class="text-yellow-50 fill-yellow-900 size-7" />
            <StarIcon class="text-yellow-50 fill-yellow-900 size-7" />
            <StarIcon class="text-yellow-50 fill-yellow-900 size-7" />
            <StarIcon class="text-yellow-50 fill-yellow-900 size-7" />
            <StarIcon class="text-gray-50 size-7 fill-gray-600" />
            <button
              type="button"
              class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 mr-1"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path
                  d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                  data-original="#000000"
                />
                <path
                  d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                  data-original="#000000"
                />
                <path
                  d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                  data-original="#000000"
                />
              </svg>
              87 Reviews
            </button>
          </div>

          <div class="mt-6">
            <div class="flex items-center flex-wrap gap-4">
              <p class="text-gray-800 text-4xl font-bold">
                Ksh {product.price}
              </p>
              <p class="text-gray-400 text-sm mt-2">
                <span class="ml-1">Tax excluded</span>
              </p>
            </div>
          </div>
          <div class="mt-6 space-y-4">
            <button
              type="button"
              class="w-full px-4 py-4 border border-indigo-800 bg-indigo-800 hover:bg-indigo-900 text-white text-sm font-semibold rounded-md"
            >
              <span class="flex items-center justify-center">
                <ShoppingCartIcon className="size-6 mr-4 text-white"></ShoppingCartIcon>
                <span>Add to Cart</span>
              </span>
            </button>
          </div>

          <div class="mt-6">
            <div>
              <h3 class="text-xl font-bold text-gray-800">
                Product Description
              </h3>
              <p class="text-sm text-gray-500 mt-4">
                The Ubiquiti Ethernet Surge Protector Gen 2 is a cost-effective
                solution for protecting sensitive, 3rd party Ethernet devices
                from damaging electrostatic discharges and surges. Since all
                Ubiquiti airMAX® devices already have robust ESD protection
                built in, adding the ETH-SP to the installation provides an
                additional layer of protection to the network. The ETH-SP is
                engineered to protect any Power-over-Ethernet (PoE) or non-PoE
                device with connection speeds of up to 1 Gbps. Two passive,
                surge-protected RJ45 connections provide maximum equipment
                compatibility.
              </p>
            </div>
            <h6 class="text-lg font-bold text-gray-800 pt-6"> Features: </h6>
            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-500">
              <li>Compatible with Gigabit Networks</li>
              <li>Additional ESD Protection</li>
              <li>Plug and Play Installation</li>
              <li>
                You can add your own designs, paintings, or embroidery to make
                it your own.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
