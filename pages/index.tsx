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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex">
          <div>
            <span className={title()}>Work Experience &&nbsp;</span>
            <span className={title({ color: "cyan" })}>Internships&nbsp;</span>
          </div>
        </div>
        <div>
          <div>
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
