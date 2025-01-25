import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/react";
import profilePicture from "../public/images/profile_pic.png";
import avatar from "../public/images/avatarMayank.png";
import Card from "@/components/card";
import Loader from "@/components/loader";
import ExpCard from "@/components/expCard";
import { useEffect, useState } from "react";
import BarsLoader from "@/components/loadbars";

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-4 md:gap-8">
          <div className="text-center md:text-left w-full md:w-1/2">
            <span className={title()}>Hey!, This is me&nbsp;</span>
            <span className={title({ color: "cyan" })}>Mayank Kashyap,&nbsp;</span>
            <br className="hidden md:block" />
            <span className={title()}>a Full Stack Developer</span>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              isBlurred
              alt="Mayank Kashyap profile picture"
              className="w-full max-w-[200px] md:max-w-[290px]"
              src={profilePicture.src}
              width={540}
            />
          </div>
        </div>
      </section>

      <div>
        <div className="gradient-line"></div>
      </div>

      <style jsx>{`
        .gradient-line {
          height: 4px;
          width: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, rgb(4, 201, 235), transparent);
          background-size: 200% 100%;
          animation: gradient-animation 3s infinite linear;
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: -100% 0%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .avatar-container {
          animation: move-animation 1s infinite alternate;
        }

        @keyframes move-animation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(10px);
          }
        }
      `}</style>

      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-4 md:gap-8">
          <div className="text-center md:text-left">
            <span className={title()}>About&nbsp;</span>
            <span className={title({ color: "cyan" })}>Me&nbsp;</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
          <div className="avatar-container w-full md:w-auto flex justify-center">
            <Image src={avatar.src} alt="avatar" className="w-[200px] md:w-[250px]" width={250} />
          </div>
          <div className="w-full md:w-auto">
            <Card />
          </div>
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>

      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-8 px-4 md:px-6">
        <div className="flex justify-center w-full">
          <div className="text-center">
            <span className={title()}>Work Experience &&nbsp;</span>
            <span className={title({ color: "cyan" })}>Internships&nbsp;</span>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-col md:flex-row justify-center min-w-max md:min-w-0">
            <ExpCard />
          </div>
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "-50px" }}>
        <BarsLoader />
      </div>
    </DefaultLayout>
  );
}
