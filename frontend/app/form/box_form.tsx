import React from "react";
import Image from "next/image";
import cardHeaderImage from "@/assets/abstract-blur-empty-green-gradient-studio-well-use-as-backgroundwebsite-templateframebusiness-report.jpg";
import profilePic from "@/assets/33e4425f-3a3f-466d-93d2-78b807429841.jpg";
import { BsCapsulePill } from "react-icons/bs";
import { FaFileWaveform } from "react-icons/fa6";
import Pull_blockchain from "./Pull_blockchain";

export const BoxForm = () => {
  const healthData = [
    {
      followers: "TODO",
      name: "Alergias",
    },
    {
      icon: <FaFileWaveform />,
      name: "Historial",
    },
    {
      icon: <BsCapsulePill />,
      name: "Medicación",
    },
  ];
  return (
    <div className="px-2 text-base flex justify-center items-center h-[100dvh]">
      <div className="text-xl h-[380px] md:h-[480px] w-full md:w-[470px] bg-white shadow-2xl rounded-3xl">
        <div>
          <Image
            src={cardHeaderImage}
            alt={"header"}
            className="rounded-t-3xl w-full"
          />
        </div>
        <div className="flex justify-center -mb-12">
          <Image
            src={profilePic}
            alt={"profile"}
            className="rounded-full relative bottom-[4.2rem] border-[5px] border-white w-10 md:w-48"
          />
        </div>
        <div className="flex flex-col justify-center items-center font-extrabold text-2xl">
          <div className="gap-4">
            <Pull_blockchain /> <span className="font-light text-gray-400">A+</span>
          </div>
          <div className="text-base font-normal text-gray-400 track mt-2">
            01/01/1982
          </div>
        </div>

        <hr className="bg-black my-6" />
        <div className="flex justify-around text-center pb-20">
          {healthData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="font-extrabold text-xl  ">{item.icon}</div>
              <div className="font-light text-sm text-gray-400  tracking-widest	">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
