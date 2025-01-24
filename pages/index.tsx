import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/react";
import profilePicture from "../public/images/profile_pic.png";
import avatar from "../public/images/avatarMayank.png";
import React from "react";

const Card = () => {
  return (
    <aside
      className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono"
      style={{ maxWidth: "1000px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4">
        <p className="text-cyan-400" style={{ marginBottom: "10px" }}>
          $ npm install next
        </p>
        <p className="text-white" style={{ marginBottom: "10px" }}>
          + I’m Mayank Kashyap, a passionate Full-Stack Developer dedicated to
          creating innovative digital solutions. With expertise in technologies
          such as React, Node.js, Firebase, and Stripe, I have worked on
          projects ranging from order management dashboards to mobile
          applications for drivers. My approach combines strong technical skills
          with creativity to solve problems and enhance user experiences.
        </p>
        <p className="text-white" style={{ marginBottom: "10px" }}>
          Throughout my career, I’ve had the opportunity to collaborate with
          teams at companies like Grauns LTD and Accenture Spain, tackling
          complex challenges that have helped me grow both professionally and
          personally. Currently, I’m specializing in Artificial Intelligence and
          Big Data, aiming to integrate emerging technologies into software
          development.
        </p>
        <p className="text-cyan-400">
          $When I’m not coding, I enjoy exploring new tech tools, learning
          languages, and honing my teamwork skills. I firmly believe that
          technology has the power to transform lives, and I’m excited to be
          part of this change.
        </p>
      </div>
    </aside>
  );
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-xl gap-4">
          <div>
            <span className={title()}>Hey!, This is me&nbsp;</span>
            <span className={title({ color: "cyan" })}>
              Mayank Kashyap,&nbsp;
            </span>
            <br />
            <span className={title()}>a Full Stack Developer</span>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 ml-0 md:ml-8">
            <Image
              isBlurred
              alt="Mayank Kashyap profile picture"
              className="md:m-5 lg:m-5 xl:m-5"
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

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-xl gap-4">
          <div>
            <span className={title()}>About&nbsp;</span>
            <span className={title({ color: "cyan" })}>Me&nbsp;</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="avatar-container">
            <Image src={avatar.src} alt="avatar" width={250} />
          </div>
          <Card />
        </div>
      </section>
      <div>
        <div className="gradient-line"></div>
      </div>
    </DefaultLayout>
  );
}
