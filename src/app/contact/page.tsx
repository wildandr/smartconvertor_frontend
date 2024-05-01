import Link from "next/link";
import Image from "next/image";

export default function QuizMenu() {
  return (
    <main className="sm:ml-64 h-[90vh]">
      <div className=" bg-[#685ACB] h-full px-8 py-12 flex flex-col gap-2 justify-center items-center">
        <h1 className="text-[2rem] font-semibold">Your scan is ready!</h1>
        <h1 className="text-[2rem] font-semibold">
          What kind of quiz do you prefer?
        </h1>
        <div className=" mt-6 w-[80%] flex justify-center gap-8 ">
         
          <div className="w-1/3">
            <div className="border-2 border-[#320083] flex justify-center rounded-2xl bg-[#F7C93D] hover:bg-[#C6A233] p-4 w-full text-2xl text-black font-medium">
              <Link href="/quiz/fill-in" className="">
                <Image
                  src="/fillin.png"
                  alt="flashcards"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <h1 className="text-white font-semibold text-2xl w-full text-center mt-2">Fill-in-the-blank</h1> 
          </div>
          <div className="w-1/3">
            <div className="border-2 border-[#320083] flex justify-center rounded-2xl bg-[#F7C93D] hover:bg-[#C6A233] p-4 w-full text-2xl text-black font-medium">
              <Link href="/quiz/create" className="">
                <Image
                  src="/flashcards.png"
                  alt="flashcards"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <h1 className="text-white font-semibold text-2xl w-full text-center mt-2">Flashcards</h1> 
          </div>
          <div className="w-1/3">
            <div className="border-2 border-[#320083] flex justify-center rounded-2xl bg-[#F7C93D] hover:bg-[#C6A233] p-4 w-full text-2xl text-black font-medium">
              <Link href="/quiz/create" className="">
                <Image
                  src="/multiple.png"
                  alt="multiple choice"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
            <h1 className="text-white font-semibold text-2xl w-full text-center mt-2">Multiple-choice</h1> 
          </div>
        </div>
      </div>
    </main>
  );
}
