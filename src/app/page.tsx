import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1
              className="
  text-4xl md:text-5xl lg:text-6xl 
  font-bold leading-tight
  bg-gradient-to-b from-emerald-800 via-emerald-500 to-white
  text-transparent bg-clip-text
"
            >
              Better Design for Your Digital Products.
            </h1>

            <p className="mt-6 text-theme-secondary text-lg max-w-xl">
              Turning your idea into reality. We bring together the best teams
              from the global tech industry.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                className="
                px-6 py-3 rounded-lg 
                bg-gradient-to-r from-green-500 to-emerald-600
                text-white font-medium
                hover:opacity-90 transition
              "
              >
                See our works
              </button>

              <Link
                href="/contact"
                className="
                px-6 py-3 rounded-lg 
                border border-gray-300 dark:border-gray-600
                text-theme-muted font-semibold
                hover:bg-gray-900 transition
                hover:text-theme-secondary cursor-pointer
              "
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/hero.png"
              alt="Hero"
              width={400}
              height={400}
              className="drop-shadow-xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
