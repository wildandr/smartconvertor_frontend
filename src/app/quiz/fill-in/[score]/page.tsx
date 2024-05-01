// fill-in/FillInResult.tsx
import React from 'react';

export default function FillInResult({ params }: { params: { score: string } }) {
  const { score } = params;
  console.log(score);

  return (
    <main className="sm:ml-64 h-[90vh]">
      <div className="bg-[#685ACB] h-full px-24  py-12 flex flex-col gap-2 ">
      <div className=" w-full border-2 border-[#320083] px-28 py-8 rounded-3xl bg-gradient-to-r from-[#F8C63A] to-[#FDA717] text-black flex items-center justify-between">
        <h1 className="font-medium text-[3rem]">Way to go! <br></br> you scored</h1>
      <h1 className="text-black text-[6rem] font-semibold">{score}%</h1>
          </div>
      
      </div>
    </main>
  );
}
