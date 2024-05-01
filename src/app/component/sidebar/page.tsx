"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Sidebar() {
    const router = useRouter();
    const handleHomeButtonClick = () => {
        router.push("/");
    };
    const handleScanButtonClick = () => {
        router.push("/scan");
    };
    const handleQuizButtonClick = () => {
        router.push("/quiz");
    };
    const handleAboutUsButtonClick = () => {
      router.push("/about");
    };
    const handleHelpButtonClick = () => {
      router.push("/help");
    };
return (
    <main>
         <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-7 py-4 overflow-y-auto bg-white">
          <Image src="/logo2.png" alt="Logo" width={300} height={300} />
          <ul className="space-y-4 font-medium">
            <li>
              <a
                href="#"
                onClick={handleHomeButtonClick}
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  className="text-gray-400 group-hover:text-gray-900 focus:text-gray-900"
                >
                  <path d="M4 4H24V24H4zM26 4H46V24H26zM4 26H24V46H4zM26 26H46V46H26z"></path>
                </svg>
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleScanButtonClick}
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                >
                  <path d="M24.707,7.793l-5.5-5.5C19.019,2.105,18.765,2,18.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V8.5C25,8.235,24.895,7.981,24.707,7.793z M17,23h-7c-0.552,0-1-0.448-1-1s0.448-1,1-1h7c0.552,0,1,0.448,1,1S17.552,23,17,23z M20,19H10c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.552,0,1,0.448,1,1S20.552,19,20,19z M20,15H10c-0.552,0-1-0.448-1-1s0.448-1,1-1 h10c0.552,0,1,0.448,1,1S20.552,15,20,15z M19,9c-0.552,0-1-0.448-1-1V3.904L23.096,9H19z"></path>
                </svg>
                <span className="ms-3">Scan</span>
              </a>
            </li>
            <li>
              <a
                href="#" onClick={handleQuizButtonClick}
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <Image src="/lightbulb.png" alt="Quiz" width={22} height={22} />
                <span className="ms-3">Quiz</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <Image src="/user.png" alt="Quiz" width={22} height={22} />
                <span className="ms-3">Social</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleAboutUsButtonClick}
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 1 C 11.214844 1 0 10.960938 0 23.199219 C 0 29.113281 2.574219 34.644531 7.261719 38.835938 C 6.394531 41.394531 4.171875 43.15625 2.519531 44.464844 C 1.003906 45.664063 -0.09375 46.53125 0.234375 47.757813 L 0.339844 48.160156 L 0.699219 48.367188 C 1.609375 48.886719 2.820313 49.152344 4.308594 49.152344 C 9.257813 49.152344 16.371094 46.3125 19.503906 44.945313 C 21.285156 45.316406 23.054688 45.5 24.898438 45.5 C 38.6875 45.5 49.898438 35.539063 49.898438 23.300781 C 49.898438 11.003906 38.730469 1 25 1 Z M 26.601563 34 C 26.601563 34.199219 26.5 34.398438 26.199219 34.398438 L 23.902344 34.398438 L 23.902344 34.300781 C 23.699219 34.300781 23.5 34.199219 23.5 33.902344 L 23.5 20.5 C 23.5 20.300781 23.601563 20.101563 23.902344 20.101563 L 26.199219 20.101563 C 26.402344 20.101563 26.601563 20.199219 26.601563 20.5 Z M 26.601563 15.800781 C 26.601563 16 26.5 16.199219 26.199219 16.199219 L 23.800781 16.199219 C 23.601563 16.199219 23.402344 16.101563 23.402344 15.800781 L 23.402344 13.199219 C 23.402344 13 23.5 12.800781 23.800781 12.800781 L 26.199219 12.800781 C 26.402344 12.800781 26.601563 12.898438 26.601563 13.199219 Z"></path>
                </svg>
                <span className="ms-3">About Us</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <Image src="/gear.png" alt="Quiz" width={22} height={22} />
                <span className="ms-3">Setting</span>
              </a>
            </li>
          </ul>
          <div className="h-[0.12rem] bg-gray-300 rounded-sm mt-40"></div>
          <ul className="space-y-2 font-medium mt-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <Image src="/signout.png" alt="Quiz" width={22} height={22} />
                <span className="ms-3">Sign Out</span>
              </a>
            </li>
            <li>
              <a
                href="#"

                onClick={handleHelpButtonClick}
                className="flex items-center p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-[#8C7BFF] group focus:border-2 focus:text-gray-900 focus:border-black"
              >
                <Image src="/help.png" alt="Quiz" width={22} height={22} />
                <span className="ms-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </main>
);
}
