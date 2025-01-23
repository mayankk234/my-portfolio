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

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-xl gap-4">
          <div>
            <span className={title()}>Hey!, This is me&nbsp;</span>
            <span className={title({ color: "cyan" })}>
              Mayank Kashyap&nbsp;
            </span>
            <br />
            <span className={title()}>Welcome to me digital portfolio.</span>
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
    </DefaultLayout>
  );
}
