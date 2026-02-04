import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[45vh]">
        <Image
          src="/about.jpg"
          alt="About"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Bottom Corner Text */}
        <div
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 
  text-gray-400
  bg-black/50 
  px-4 py-2 
  rounded-lg"
        >
          <h2 className="text-2xl md:text-3xl font-semibold bg-transparent">
            Digital storytellers
          </h2>
          <p className="text-sm md:text-base text-gray-300 mt-1">
            Handcrafting award winning experience
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Who / What */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Who are we */}
          <div>
            <h2
              className="
              text-3xl font-bold
              bg-gradient-to-b from-emerald-700 to-emerald-400
              text-transparent bg-clip-text
            "
            >
              Who are we?
            </h2>
            <p className="mt-4 text-gray-200 leading-relaxed">
              We are a team of designers, developers, and digital strategists
              passionate about building meaningful digital products. Our focus
              is on crafting experiences that are visually stunning, intuitive,
              and impactful.
            </p>
          </div>

          {/* What we do */}
          <div>
            <h2
              className="
              text-3xl font-bold
              bg-gradient-to-b from-emerald-700 to-emerald-400
              text-transparent bg-clip-text
            "
            >
              What we do?
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              We design and develop websites, web applications, and digital
              platforms. From branding and UI/UX to full-stack development, we
              help businesses turn ideas into scalable digital solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-blue- shadow-sm text-center hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-emerald-600">50+</h3>
            <p className="text-gray-300 mt-2">Projects</p>
          </div>

          <div className="p-6 rounded-xl bg-gray- shadow-sm text-center hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-emerald-600">10+</h3>
            <p className="text-gray-300 mt-2">Team Members</p>
          </div>

          <div className="p-6 rounded-xl bg-gray- shadow-sm text-center hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-emerald-600">5+</h3>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>

          <div className="p-6 rounded-xl bg-gray- shadow-sm text-center hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-emerald-600">100%</h3>
            <p className="text-gray-300 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
