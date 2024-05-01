"use client"
// FillInQuiz.tsx

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FillInQuiz() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [sourceFile, setSourceFile] = useState<string>("");
  const totalQuestions = questions.length;
  const correctAnswers = new Array(totalQuestions).fill("");
  const [answers, setAnswers] = useState<string[]>(correctAnswers);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://157.245.152.247:8000/get_questions");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setQuestions(data.questions);
          setSourceFile(data.source_file);
        } else {
          console.error("Failed to fetch questions");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      // Buat array objek jawaban yang sesuai dengan struktur yang diharapkan oleh API
      const answersPayload = questions.map((question, index) => ({
        question: question.question,
        answer: answers[index],
      }));
  
      // Kirim data jawaban ke API
      const response = await fetch("http://157.245.152.247:8000/submit_answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: answersPayload }),
      });
  
      if (response.ok) {
        // Jika pengiriman berhasil, lanjutkan navigasi ke halaman hasil
        const correctCount = answers.reduce(
          (count, answer, index) =>
            answer.trim().toLowerCase() === questions[index].answer.toLowerCase()
              ? count + 1
              : count,
          0
        );
        const newScore = (correctCount / totalQuestions) * 100;
        router.push(`/quiz/fill-in/${newScore.toFixed(2)}`);
      } else {
        console.error("Failed to submit ");
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };
  
  
  return (
    <main className="sm:ml-64 h-[100vh]">
      <div className=" bg-[#685ACB] h-full px-8 py-12 flex flex-col gap-2 ">
        <h1 className="text-white text-2xl font-semibold">{sourceFile}</h1>
        <div className="mt-4 flex flex-col gap-5">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-white px-8 py-14 rounded-3xl border-2 border-[#320083]"
            >
              <h1 className="text-black font-medium text-xl">
                {question.before && <span>{question.before}</span>}
                {question.after === "" && <span>&nbsp;</span>}
                {/* Menampilkan garis bawah sesuai panjang jawaban */}
                <input
                  type="text"
                  className="outline-none border-none bg-transparent"
                  style={{ width: `${question.answer ? question.answer.length * 2 : 0}ch` }}

                  placeholder={(question.answer )
                  .split("")
                  .map(() => "_")
                  .join(" ")}
                
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                {question.after && <span>{question.after}</span>}
              </h1>
            </div>
          ))}
        </div>
        <div className="w-full justify-end flex mt-6">
          <button
            onClick={handleSubmit}
            className="border-2 border-[#320083] rounded-3xl bg-[#F7C93D] max-w-sm w-full py-6 text-black flex justify-center items-end "
          >
            <h1 className="font-semibold text-xl">Submit Answers</h1>
          </button>
        </div>
      </div>
    </main>
  );
}
