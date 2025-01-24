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


export default Card;