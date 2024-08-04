"use client";
import MuxPlayer from "@mux/mux-player-react";

function Page() {
  return (
    <div className="h-full w-full relative  items-center justify-center dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-7xl lg:text-[6rem] font-bold mb-5 pt-48 leading-none text-black">
          My Video Edits
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 p-4">
          <MuxPlayer
            streamType="on-demand"
            playbackId="4Makp6qIFB92KEdROGwY9WrMeO95Vq9q01ood8SPRyvY"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />

          <MuxPlayer
            streamType="on-demand"
            playbackId="s01o00sLcvxv6022e5HSxz3pr00A7aYLjXplvrzdaEVDv2o"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
          <MuxPlayer
            streamType="on-demand"
            playbackId="s01o00sLcvxv6022e5HSxz3pr00A7aYLjXplvrzdaEVDv2o"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
          <MuxPlayer
            streamType="on-demand"
            playbackId="s01o00sLcvxv6022e5HSxz3pr00A7aYLjXplvrzdaEVDv2o"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
