'use client'
import Image from "next/image";
import { Tabs } from "../../components/ui/tabs";

function page() {
    const tabs = [
        {
          title: "ComeingSoon",
          value: "a",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>LLm App</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "ComeingSoon",
          value: "b",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>LLm App</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "ComeingSoon",
          value: "c",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>LLm App</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "ComeingSoon",
          value: "d",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>LLm App</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "ComeingSoon",
          value: "e",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>LLm App</p>
              <DummyContent />
            </div>
          ),
        },
      ];
  return (
    <div className="h-screen w-fulldark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start pt-40 px-4">
        <Tabs tabs={tabs} />
        </div>
      
    </div>
  )
}


const DummyContent = () => {
    return (
      <Image
        src="/linear.webp"
        alt="Comeing Soon..."
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

export default page
