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
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiMapbox } from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


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
        .skill-icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: rgba(4, 201, 235, 0.1);
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .skill-icon-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(4, 201, 235, 0.2);
        }

        .skill-label {
          margin-top: 0.75rem;
          font-size: 1rem;
          font-weight: 500;
          color: inherit;
        }
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
        <div className="w-full overflow-x-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 max-w-4xl mx-auto">
            <div className="skill-icon-container">
              <i className="fab fa-html5 text-6xl" style={{ color: '#E34F26' }}><IoLogoHtml5 /></i>
              <span className="skill-label">HTML5</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-css3-alt text-6xl" style={{ color: '#1572B6' }}><IoLogoCss3 /></i>
              <span className="skill-label">CSS</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-bootstrap text-6xl" style={{ color: '#7952B3' }}><FaBootstrap /></i>
              <span className="skill-label">Bootstrap</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-js text-6xl" style={{ color: '#F7DF1E' }}><IoLogoJavascript /></i>
              <span className="skill-label">JavaScript</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><SiTypescript /></i>
              <span className="skill-label">TypeScript</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><FaReact /></i>
              <span className="skill-label">React</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><FaNode /></i>
              <span className="skill-label">Node.js</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><RiNextjsFill/></i>
              <span className="skill-label">Next.js</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><SiExpress /></i>
              <span className="skill-label">Express.js</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><FaJava /></i>
              <span className="skill-label">Java</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><SiPhp /></i>
              <span className="skill-label">Php</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><FaLaravel /></i>
              <span className="skill-label">Laravel</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><SiMysql /></i>
              <span className="skill-label">Sql</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><SiMongodb /></i>
              <span className="skill-label">MongoDB</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><RiFirebaseFill /></i>
              <span className="skill-label">Firebase</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><SiMapbox /></i>
              <span className="skill-label">Mapbox</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><BsStripe /></i>
              <span className="skill-label">Stripe</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><TbBrandReactNative /></i>
              <span className="skill-label">ReactNative</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><SiExpo /></i>
              <span className="skill-label">Expo</span>
            </div>
            <div className="skill-icon-container">
              <i className="fab fa-typescript text-6xl" style={{ color: '#3178C6' }}><FaGitAlt /></i>
              <span className="skill-label">Git</span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .skill-icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: rgba(4, 201, 235, 0.1);
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .skill-icon-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(4, 201, 235, 0.2);
        }

        .skill-label {
          margin-top: 0.75rem;
          font-size: 1rem;
          font-weight: 500;
          color: inherit;
        }
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
