import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill, BsDiscord } from "react-icons/bs";
import Footer from "../components/Footer";
import { Modal } from "antd";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">
                  Country {" "}
                </span>
                <span className="text-LightGray md:text-lg">Poland</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">
                  City {" "}
                </span>
                <span className="text-LightGray md:text-lg">Wroclaw</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">
                  Freelance 
                </span>
                <span className="text-LightGray md:text-lg">Available</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">
                  Email 
                </span>
                <span className="text-LightGray text-lg">
                  dev.mana1129@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">
                  GitHub {" "}
                </span>
                <span className="text-LightGray text-lg">
                  https://github.com/DannyBoy5240
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">
                  Phone {" "}
                </span>
                <span className="text-LightGray text-lg">
                  +1 (321) 257 8668
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="mailto:dev.mana1129@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://discordapp.com/users/smallboy6905"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://join.skype.com/invite/veTrpfptVxCT"
            target="_blank"
            rel="noreferrer"
          >
            <FaSkype />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://t.me/dannydev0521"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://api.whatsapp.com/send?phone=+15592823254"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/DannyBoy5240"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/Dmytro_Konovalov/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    className="input_stylings"
                    placeholder="Message"
                  />
                </div>
              </div>

              <div className="my-4">
                <button onClick={() => setIsOpen(true)} className="button">
                  {" "}
                  SEND MESSAGE{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          <a
            className="underline text-Snow"
            target=""
            href="https://github.com/DannyBoy5240"
          >
            Be the one to integrate this!
          </a>
        </div>
      </Modal>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
