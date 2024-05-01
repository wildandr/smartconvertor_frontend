import Image from "next/image";
export default function Navbar() {
    return (
        <main className="sm:ml-64 bg-white">
        <div className="px-6 py-10 flex items-center">
        <form className="rounded  w-2/3 ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <svg
                className="w-4 h-4 text-[#F3F9FB] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#F3F9FB"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#008ECC"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm  text-gray-900  focus:outline-[#8C7BFF] rounded-lg bg-[#F3F9FB] font-normal"
              placeholder="Search Here"
            />
          </div>
        </form>
        <div className="flex items-center gap-14 max-w-[30rem] justify-end  w-full">
          <Image src="/comment.png" alt="Quiz" width={52} height={52} />
          <Image src="/alarm.png" alt="Quiz" width={42} height={42} />
          <a
            href="#"
            className="ms-2 text-[#4ADA85] text-xl font-semibold hover:text-gray-900 "
          >
            Premium
          </a>
          <Image src="/profile.png" alt="Quiz" width={52} height={52} />
        </div>
      </div>
      </main>
    );
}