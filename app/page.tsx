import Link from "next/link";
import Image from "../public/4089054.jpg";

export default function Home() {
  return (
    <div className="lg:flex h-screen w-full overflow-hidden">
      <div className="lg:flex w-1/2 justify-center items-center hidden">
        <img src={Image.src} alt="classroom-animated-image" />
      </div>
      <div className="lg:mt-20 mt-12 flex flex-col">
        <div className="lg:text-5xl text-2xl md:text-4xl ml-8 font-bold lg:ml-16 text-[#252525]">
          Welcome to
        </div>
        <div className="lg:text-5xl md:text-4xl text-2xl ml-8 font-bold lg:ml-16 mt-3 text-[#252525]">
          Classroom Management
        </div>
        <div className="lg:text-5xl md:text-4xl text-2xl ml-8 font-bold lg:ml-16 mt-3 text-[#252525]">
          System
        </div>
        <div className="lg:mt-14 lg:w-[40rem] lg:ml-16 tracking-normal md:text-lg mt-8 w-[92%] ml-8 text-left">
          Streamline school administration, class scheduling, and add students and teachers. Evaluate performance and offer feedback. Access records, examine markings, and communicate with ease.
        </div>

        <div className="flex justify-center">
          <button className="lg:mt-20 mt-10 bg-purple-500 w-fit pl-4 pr-4 pt-2 pb-2 rounded text-[#ffffff] font-semibold md:mt-14">
            LOGIN
          </button>
        </div>
        <div className="flex lg:mt-16 mt-10 md:mt-14 justify-center">
          Don't have an account?
          <div>
            <Link href={`/`}>Sign up</Link>
          </div>
        </div>

        <div className="flex md:justify-center md:items-center lg:hidden mt-10 w-[90%] ml-8 md:mt-14">
          <img src={Image.src} alt="classroom-animated-image" />
        </div>
      </div>
    </div>
  );
}