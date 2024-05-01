"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function FillInResult({ params }: { params: { score: string } }) {
  const { score } = params;
  const [correctAnswers, setCorrectAnswers] = useState<any[]>([]);
  const router = useRouter();

  const handleDone = () => {
    router.push("/scan");
  }

  useEffect(() => {
    const fetchCorrectAnswers = async () => {
      try {
        const response = await fetch("http://157.245.152.247:8000/get_answers");
        if (response.ok) {
          const data = await response.json()
          console.log(data);
          setCorrectAnswers(data);
        } else {
          console.error("Failed to fetch correct answers");
        }
      } catch (error) {
        console.error("Error fetching correct answers:", error);
      }
    };

    fetchCorrectAnswers();
  }, []);

  return (
    <main className="sm:ml-64 h-[110vh]">
      <div className="bg-[#685ACB] h-full px-24 py-12 flex flex-col gap-2 ">
        <div className="w-full border-2 border-[#320083] px-28 py-8 rounded-3xl bg-gradient-to-r from-[#F8C63A] to-[#FDA717] text-black flex items-center justify-between">
          <h1 className="font-medium text-[3rem]">Way to go! <br /> you scored</h1>
          <h1 className="text-black text-[6rem] font-semibold">{score}%</h1>
        </div>
        <div className="mt-8">
          <h2 className="text-white text-xl font-semibold mb-4">Answers :</h2>
          <div className="grid grid-cols-1 gap-4">
            {correctAnswers.map((answer, index) => (
              <div key={index} className={`bg-white px-8 py-4 rounded-3xl border-2 border-[#320083] ${answer.is_correct ? 'border-green-500' : 'border-red-600'}`}>
                <p className="text-black font-medium text-lg">Question: {answer.question}</p>
                <p className="text-black font-medium text-lg">Correct Answer: {answer.correct_answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 w-full flex justify-end">
          <button
            onClick={handleDone}
            className=" mt-4 border-2 border-[#320083] rounded-3xl bg-[#F7C93D] max-w-sm w-full py-6 text-black flex justify-center items-end "
          >
            <h1 className="font-semibold text-xl">Done</h1>
          </button>
          </div>
        </div>
      </div>
    </main>
  );
}
