import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import Image from "next/image";

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-2 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-3 rounded-xl overflow-hidden flex md:block">
          <div className="flex items-center md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="">
                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 font-sans italic hover:not-italic lg:h-auto">
                  <span className="text-Snow sm:text-xl xl:text-2xl font-bold ml-6">
                    {" "}
                    I am a
                    <span className="inline-block pl-2">
                      <Typewriter
                        options={{
                          strings: [
                            "Front-end Developer",
                            "Back-end Developer",
                            "Blockchain Developer",
                            "Mobile App Developer",
                            "CMS Developer",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-16 h-16 bottom-3 relative hidden md:block">
                <Image className="top-2" src="/images/pen.png" alt="pen" fill />
              </div>
            </div>

            <div className="w-24 h-32 mr-4 relative hidden md:block">
              <Image
                className="absolute top-2 w-full h-full"
                src="/images/logo.png"
                alt="emoji"
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
