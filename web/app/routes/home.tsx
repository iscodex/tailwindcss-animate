import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";
import { Footer } from "~/components/footer";
import { Particles } from "~/components/particles";
import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { BlockCode } from "~/components/block-code";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tailwind CSS Animate" },
    {
      name: "description",
      content: "Extended animation utilities for Tailwind CSS v4",
    },
  ];
}

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <section className="relative min-h-[65dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 dots-pattern opacity-70"></div>

          <Particles />

          <div className="relative text-center max-w-5xl mx-auto px-6">
            <div className="animate-fade-in animate-delay-none">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-b from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                Tailwind CSS
                <span className="block">Animate</span>
              </h1>
            </div>

            <div className="animate-fade-in animate-delay-[0.1s]">
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Extended animation utilities for Tailwind CSS v4.
                <span className="text-gray-300">Zero configuration</span>, ready
                to use.
              </p>
            </div>

            <div className="animate-fade-in animate-delay-[0.15s] flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink
                to="#installation"
                className="bg-gray-200 text-gray-950 px-8 py-3 rounded-lg font-medium hover:bg-white transition-all duration-200"
              >
                Get Started
              </NavLink>
              <NavLink
                to="/configurator"
                className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 hover:border-gray-600 transition-all duration-200"
              >
                Try Configurator
              </NavLink>
            </div>
          </div>
        </section>

        <section id="installation" className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="animate-fade-in-up text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
                Quick Installation
              </h2>
              <p className="text-gray-400 text-lg">
                Get started with tailwindcss-animate in seconds
              </p>
            </div>

            <div className="animate-fade-in-up space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <span className="w-6 h-6 bg-pink-500 text-white text-sm font-bold rounded-full flex items-center justify-center mr-3">
                    1
                  </span>
                  <h3 className="text-white font-semibold">
                    Install the package
                  </h3>
                </div>
                <BlockCode lang="bash">{`npm install @iscodex/tailwindcss-animate`}</BlockCode>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <span className="w-6 h-6 bg-pink-500 text-white text-sm font-bold rounded-full flex items-center justify-center mr-3">
                    2
                  </span>
                  <h3 className="text-white font-semibold">
                    Import in your CSS
                  </h3>
                </div>
                <BlockCode lang="css">
                  {`
                    @import "tailwindcss";
                    @import "@iscodex/tailwindcss-animate";
                  `}
                </BlockCode>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <span className="w-6 h-6 bg-pink-500 text-white text-sm font-bold rounded-full flex items-center justify-center mr-3">
                    3
                  </span>
                  <h3 className="text-white font-semibold">Start animating</h3>
                </div>
                <BlockCode lang="html">
                  {`<div className="animate-wiggle animate-infinite">Hello World</div>`}
                </BlockCode>

                <div className="flex justify-center mt-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-lg animate-wiggle animate-infinite">
                    Hello World
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
                Animation Examples
              </h2>
              <p className="text-gray-400 text-lg">
                See the animations in action
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-6 animate-swing animate-infinite flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
                </div>

                <h3 className="text-gray-200 font-semibold mb-2">Swing</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Playful swing motion
                </p>
                <BlockCode lang="css">{`animate-swing`}</BlockCode>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-6 animate-heart-beat animate-infinite flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
                </div>
                <h3 className="text-gray-200 font-semibold mb-2">Heart beat</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Playful heart beat motion
                </p>
                <BlockCode lang="css">{`animate-heart-beat`}</BlockCode>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-6 animate-wobble animate-infinite flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
                </div>
                <h3 className="text-gray-200 font-semibold mb-2">Wobble</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Playful wobble motion
                </p>
                <BlockCode lang="css">{`animate-wobble`}</BlockCode>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/configurator"
                className="group/link inline-flex items-center space-x-2 text-gray-300 hover:text-gray-200 transition-colors"
              >
                <span>Try configurator</span>
                <svg
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
