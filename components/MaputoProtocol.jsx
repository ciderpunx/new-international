'use client';
import TitlePara from "../utils/TitlePara";
import Quote from "../utils/Quote";
const MaputoProtocol = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:gap-12">
      <TitlePara
        key="maputo protocol Ratification Map"
        textCenter
        title="maputo protocol Ratification Map"
      />
      <div className="relative aspect-video w-full md:aspect-video">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            // poster='/'
            controls
            // contloop='true'
            mutedrols="true"
            muted
            width="100%"
            height="100%"
          >
            <source src="Map Loop Animation.mp4" type="video/mp4" />
          </video>
          {/* {/* <video src={loop_video} controls='false'></video> */}
        </div>
      </div>
    </section>
  );
};
export default MaputoProtocol;
