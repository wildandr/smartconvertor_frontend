"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
export default function Scan() {
  const router = useRouter();
  const toPdf = () => {
    router.push("/scan/pdf"); // Navigate to the scan page
  };
 
  return (
    <main className="sm:ml-64 bg-[#685ACB] h-[100vh]">
        <div className="  px-8 py-12 ">
          <h1 className="text-xl font-medium my-2">Scan</h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2 w-1/4 ">
              <a href="#" onClick={toPdf} className="border-2 border-[#320083] rounded-3xl bg-[#F7C93D] w-full py-8 text-black flex justify-center">
                <Image src="/pdf.png" alt="Quiz" width={110} height={110} />
              </a>
              <h1 className="text-white text-2xl font-semibold">PDF</h1>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/4 ">
              <div className="border-2 border-[#320083] rounded-3xl bg-[#F7C93D] w-full py-8 text-black flex justify-center">
                <Image src="/ppt.png" alt="Quiz" width={110} height={110} />
              </div>
              <h1 className="text-white text-2xl font-semibold">PPT</h1>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/4 ">
              <div className="border-2 border-[#320083] rounded-3xl bg-[#F7C93D] w-full py-8 text-black flex justify-center">
                <Image src="/docs.png" alt="Quiz" width={110} height={110} />
              </div>
              <h1 className="text-white text-2xl font-semibold">Docs</h1>
            </div>
            <div className="flex flex-col items-center gap-2 w-1/4 ">
              <div className="border-2 border-[#320083] rounded-3xl bg-[#F7C93D] w-full py-8 text-black flex justify-center">
                <Image src="/notes.png" alt="Quiz" width={110} height={110} />
              </div>
              <h1 className="text-white text-2xl font-semibold">Notes</h1>
            </div>
          </div>
          <h1 className="text-xl font-medium mt-8 mb-4">Documents</h1>
          <div className="flex items-center gap-4 w-full">
          <div className="border-2 border-[#320083] w-1/3 rounded-xl bg-white p-2">
          <h1 className=" text-xl text-[#3F3672] font-semibold mx-2">
                    Scanned_1
                  </h1>
                  <Image
                    className="w-full"
                    src="/card.png"
                    alt="Quiz 1"
                    width={200}
                    height={200}
                  />
                </div>
          <div className="border-2 border-[#320083] w-1/3 rounded-xl bg-white p-2">
          <h1 className=" text-xl text-[#3F3672] font-semibold mx-2">
                    Scanned_2
                  </h1>
                  <Image
                    className="w-full"
                    src="/card.png"
                    alt="Quiz 1"
                    width={200}
                    height={200}
                  />
                </div>
          <div className="border-2 border-[#320083] w-1/3 rounded-xl bg-white p-2">
          <h1 className=" text-xl text-[#3F3672] font-semibold mx-2">
                    Scanned_3
                  </h1>
                  <Image
                    className="w-full"
                    src="/card.png"
                    alt="Quiz 1"
                    width={200}
                    height={200}
                  />
                </div>
                </div>
        </div>

    </main>
  );
}
