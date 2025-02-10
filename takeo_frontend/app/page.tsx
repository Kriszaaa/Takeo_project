import Image from "next/image";
import Link from "next/link";
import top_bg from "@/assets/takeo_background_top.png";
import bottom_bg from "@/assets/takeo_background_bottom.png";
import ImageSlider from "@/app/_component/imageSlide";

export default function Intro() {
  return (
    <>
      <div className="top width-full h-[1000px]">
        <div className="absolute -z-10 w-screen">
          <Image
            src={top_bg}
            alt="Takeo"
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-between p-4">
            <Link href="/" legacyBehavior>
              <span className="text-2xl font-bold">Takeo</span>
            </Link>
            <Link href="/authentification" legacyBehavior>
              <button className="text-2xl font-bold">Register / Login</button>
            </Link>
        </div>
        <div className="content flex justify-evenly ">
          <div className="float-left w-1/2 p-10 left-5">
            <span className="text-6xl">Difference ages,<br/>Difference experiences,<br/>Difference thoughts.<br/>
            What’s the point of thought <br/>you get from this book.</span>
          </div>
          <div className="float-center p-10">
            <ImageSlider />
          </div>
        </div>
      </div>
      <div className="middle width-full h-[868px] bg-white flex justify-center items-center">
        <span className="text-3xl align-center">“ Takeo is where takeaways become echoes—insights that resonate beyond the pages.”</span>
      </div>
      <div className="bottom w-screen h-[1000px] flex justify-center items-center">
        <div className="absolute -z-10 w-screen">
          <Image
            src={bottom_bg}
            alt="Takeo"
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-lg bg-white p-10 w-[75%] shadow-2xl ">
          <span className="text-2xl">This is the essence of Takeo—a platform where readers capture and share the single most important takeaway they gained from a book. By bringing together these individual insights, Takeo creates an echo of thoughts, revealing the diverse ways people interpret the same text. With a vast library of books, users can compare their perspectives, discover new angles, and engage in meaningful discussions.</span>
        </div>
      </div>
      
    </>
  );
}
