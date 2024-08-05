"use client";


function Page() {
  return (
    <div className="h-full w-full relative  items-center justify-center dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-7xl lg:text-[6rem] font-bold mb-5 pt-48 leading-none text-black">
          My Video Edits
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 p-4">
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/D8nmX-LsfLU?si=mhHP3Tb1Zehley-o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/nZgBjx69-Uc?si=wfQ4rfH9M5qqZ897" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


        <iframe width="560" height="315" src="https://www.youtube.com/embed/gOTHEGpM_Cs?si=0-89D2oO-ZKvzgvW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


          
        </div>
      </div>
    </div>
  );
}

export default Page;
