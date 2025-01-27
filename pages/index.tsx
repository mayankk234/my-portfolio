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
          height: 2px;
          width: 100%;
          position: relative;
          background: rgb(4, 201, 235);
          overflow: hidden;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .gradient-line::before {
          content: '';
          position: absolute;
          left: -50%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgb(4, 201, 235));
          animation: slide 2s linear infinite;
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          25% {
            transform: scale(1.1);
            opacity: 1;
          }
          35% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          60% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        @keyframes slide {
          0% {
            left: -50%;
          }
          100% {
            left: 100%;
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
          <div className="avatar-container w-full md:w-auto flex justify-center avatar-sway">
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

      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-8 px-4 md:px-6">
        <div className="flex justify-center w-full">
          <div className="text-center">
            <span>
                <span className="skills-title">
                <span className="skill-letter">S</span>
                <span className="skill-letter">k</span>
                <span className="skill-letter">i</span>
                <span className="skill-letter">l</span>
                <span className="skill-letter">l</span>
                <span className="skill-letter">s</span>
                </span>
            </span>
          </div>
        </div>
      </section>
      <style jsx>{`
        .skill-letter {
          display: inline-block;
          animation: letterAnimation 3.6s infinite;
          font-size: 2.5rem;
          font-weight: bold;
        }
        
        .skill-letter:nth-child(1) { animation-delay: 0s; }
        .skill-letter:nth-child(2) { animation-delay: 0.6s; }
        .skill-letter:nth-child(3) { animation-delay: 1.2s; }
        .skill-letter:nth-child(4) { animation-delay: 1.8s; }
        .skill-letter:nth-child(5) { animation-delay: 2.4s; }
        .skill-letter:nth-child(6) { animation-delay: 3s; }
        
        @keyframes letterAnimation {
          0%, 15% {
            color: inherit;
            transform: scale(1);
          }
          7.5% {
            color: rgb(4, 201, 235);
            transform: scale(1.2);
          }
          15%, 100% {
            color: inherit;
            transform: scale(1);
          }
        }
        .avatar-sway {
          animation: sway 3s ease-in-out infinite;
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(15px);
          }
        }
      `}</style>
    </DefaultLayout>
  );
}
