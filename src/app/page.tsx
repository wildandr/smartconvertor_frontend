"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleScanButtonClick = () => {
    router.push("/scan");
};
  return (
    <main className="h-[100vh] sm:ml-64">
        <div className="bg-[#685ACB] h-full px-8 py-12  ">
          <div className="border-2 border-[#320083] rounded-3xl bg-gradient-to-r from-[#F8C63A] to-[#FDA717] px-5 pt-6 pb-10 text-black">
            <h1 className="font-medium text-2xl">Welcome back, Puti!</h1>
            <h1 className="font-medium mt-2">Let's do some quizzes!</h1>
          </div>
          <div className="border-2 border-[#320083] rounded-3xl bg-white p-5 mt-3 text-black flex items-center justify-between ">
            <h1 className="font-medium text-xl">
              Got some materials to drill?
            </h1>
            <button className="border-[2.5px] border-[#320083] py-3 px-10 rounded-3xl bg-[#4ADA85] hover:bg-[#39B46C] w-full max-w-[20rem]" onClick={handleScanButtonClick}>
              <p className="font-semibold text-[#320083] text-xl ">
                + Scan Now!
              </p>
            </button>
          </div>
          <div className="flex gap-14 mt-6">
            <div className="w-2/3 ">
              <h1 className="text-white font-medium text-lg">
                Resume Your Quiz
              </h1>
              <div className="flex items-center mt-2 gap-4">
                <div className="border-2 border-[#320083] w-1/2 rounded-xl bg-white p-2">
                  <Image
                    className="w-full"
                    src="/card.png"
                    alt="Quiz 1"
                    width={200}
                    height={200}
                  />
                  <h1 className=" text-lg text-[#3F3672] font-semibold mx-2">
                    Cells
                  </h1>
                  <h1 className=" text-lg text-[#3F3672] font-semibold mx-2">
                    Biology
                  </h1>
                  <div className="flex items-center mt-2">
                    <div className="max-w-[70%] w-full mx-2  bg-gray-200 rounded-full h-2.5 ">
                      <div className="bg-[#F8C63A] h-2.5 rounded-full w-[60%]"></div>
                    </div>
                    <h1 className="text-[#3F3672] ml-2 text-base font-semibold ">
                      60%
                    </h1>
                  </div>
                </div>
                <div className="border-2 border-[#320083] w-1/2 rounded-xl bg-white p-2">
                  <Image
                    className="w-full"
                    src="/card.png"
                    alt="Quiz 1"
                    width={200}
                    height={200}
                  />
                  <h1 className=" text-lg text-[#3F3672] font-semibold mx-2">
                    Cells
                  </h1>
                  <h1 className=" text-lg text-[#3F3672] font-semibold mx-2">
                    Biology
                  </h1>
                  <div className="flex items-center mt-2">
                    <div className="max-w-[70%] w-full mx-2  bg-gray-200 rounded-full h-2.5 ">
                      <div className="bg-[#F8C63A] h-2.5 rounded-full w-[60%]"></div>
                    </div>
                    <h1 className="text-[#3F3672] ml-2 text-base font-semibold ">
                      60%
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 ">
              <h1 className="text-white font-medium text-lg">Social</h1>
              <div className="border-2 mt-2 border-[#320083] w-full rounded-xl  flex flex-col gap-4 bg-white p-4 text-[#3F3672] font-semibold">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-[100%]"
                    src="/avatar.png"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                  <h1 className="">User</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-[100%]"
                    src="/avatar.png"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                  <h1 className="">User</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-[100%]"
                    src="/avatar.png"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                  <h1 className="">User</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-[100%]"
                    src="/avatar.png"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                  <h1 className="">User</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-[100%]"
                    src="/avatar.png"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                  <h1 className="">User</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-[100%]"
                    src="/avatar.png"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                  <h1 className="">User</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className="w-10 h-10 rounded-[100%]"
                    src="/avatar.png"
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                  <h1 className="">User</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
