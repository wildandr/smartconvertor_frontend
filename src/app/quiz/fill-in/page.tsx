"use client"
// FillInQuiz.tsx

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FillInQuiz() {
  const data = {
    message: "File processed successfully",
    preview_image: "<base64 encoded image>",
    questions: [
      {
        question: "__________How are you?",
        before: "",
        after: "How are you?",
        answer: "Hey",
      },
      {
        question: "What is your name?__________",
        before: "What is your name?",
        after: "",
        answer: "Hi",
      },
      {
        question: "__________I am fine.",
        before: "",
        after: "I am fine.",
        answer: "Hello",
      },
    ],
  };

  const totalQuestions = data.questions.length;
  const correctAnswers = new Array(totalQuestions).fill("");
  const [answers, setAnswers] = useState<string[]>(correctAnswers);
  const router = useRouter();

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctCount = answers.reduce(
      (count, answer, index) =>
        answer.trim().toLowerCase() === data.questions[index].answer.toLowerCase()
          ? count + 1
          : count,
      0
    );
    const newScore = (correctCount / totalQuestions) * 100;

    // Kirim nilai skor melalui dynamic routing ke halaman FillInResult
    router.push(`/quiz/fill-in/${newScore.toFixed(2)}`);
  };

  return (
    <main className="sm:ml-64 h-[90vh]">
      <div className=" bg-[#685ACB] h-full px-8 py-12 flex flex-col gap-2 ">
        <h1 className="text-white text-2xl font-semibold">File Name_1</h1>
        <div className="mt-4 flex flex-col gap-5">
          {data.questions.map((question, index) => (
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
                  style={{ width: `${question.answer.length * 2}ch` }}
                  placeholder={question.answer
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
