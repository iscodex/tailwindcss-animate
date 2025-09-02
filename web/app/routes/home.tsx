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
        <section className="relative flex min-h-[65dvh] items-center justify-center overflow-hidden">
          <div className="dots-pattern absolute inset-0 opacity-70"></div>

          <Particles />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="animate-fade-in animate-delay-none">
              <h1 className="mb-6 bg-gradient-to-b from-cyan-500 to-pink-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
                Tailwind CSS
                <span className="block">Animate</span>
              </h1>
            </div>

            <div className="animate-fade-in animate-delay-[0.1s]">
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
                Extended animation utilities for Tailwind CSS v4.
                <span className="text-gray-300">Zero configuration</span>, ready
                to use.
              </p>
            </div>

            <div className="animate-fade-in animate-delay-[0.15s] flex flex-col justify-center gap-4 sm:flex-row">
              <NavLink
                to="#installation"
                className="rounded-lg bg-gray-200 px-8 py-3 font-medium text-gray-950 transition-all duration-200 hover:bg-white"
              >
                Get Started
              </NavLink>
              <NavLink
                to="/configurator"
                className="rounded-lg border border-gray-700 px-8 py-3 font-medium text-gray-300 transition-all duration-200 hover:border-gray-600 hover:bg-gray-900"
              >
                Try Configurator
              </NavLink>
            </div>
          </div>
        </section>

        <section id="installation" className="bg-gray-900/50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="animate-fade-in-up mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-200 md:text-4xl">
                Quick Installation
              </h2>
              <p className="text-lg text-gray-400">
                Get started with tailwindcss-animate in seconds
              </p>
            </div>

            <div className="space-y-6">
              <div className="animate-fade-in-up animate-delay-[400ms] rounded-xl border border-gray-800 bg-gray-900 p-6">
                <div className="mb-3 flex items-center">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">
                    1
                  </span>
                  <h3 className="font-semibold text-white">
                    Install the package
                  </h3>
                </div>
                <BlockCode lang="bash">{`npm install @iscodex/tailwindcss-animate`}</BlockCode>
              </div>

              <div className="animate-fade-in-up animate-delay-[500ms] rounded-xl border border-gray-800 bg-gray-900 p-6">
                <div className="mb-3 flex items-center">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">
                    2
                  </span>
                  <h3 className="font-semibold text-white">
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

              <div className="animate-fade-in-up animate-delay-[600ms] rounded-xl border border-gray-800 bg-gray-900 p-6">
                <div className="mb-3 flex items-center">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">
                    3
                  </span>
                  <h3 className="font-semibold text-white">Start animating</h3>
                </div>
                <BlockCode lang="html">
                  {`<div className="animate-wiggle animate-infinite">Hello World</div>`}
                </BlockCode>

                <div className="mt-4 flex justify-center">
                  <div className="animate-wiggle animate-infinite rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-white">
                    Hello World
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="animate-fade-in-up mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-200 md:text-4xl">
                Animation Examples
              </h2>
              <p className="text-lg text-gray-400">
                See the animations in action
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="animate-fade-in-up animate-delay-[400ms] rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                <div className="animate-swing animate-infinite mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-700">
                  <div className="h-6 w-6 rounded-md bg-gray-400"></div>
                </div>

                <h3 className="mb-2 font-semibold text-gray-200">Swing</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Playful swing motion
                </p>
                <BlockCode lang="css">{`animate-swing`}</BlockCode>
              </div>

              <div className="animate-fade-in-up animate-delay-[500ms] rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                <div className="animate-heart-beat animate-infinite mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-700">
                  <div className="h-6 w-6 rounded-md bg-gray-400"></div>
                </div>
                <h3 className="mb-2 font-semibold text-gray-200">Heart beat</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Playful heart beat motion
                </p>
                <BlockCode lang="css">{`animate-heart-beat`}</BlockCode>
              </div>

              <div className="animate-fade-in-up animate-delay-[600ms] rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                <div className="animate-wobble animate-infinite mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-700">
                  <div className="h-6 w-6 rounded-md bg-gray-400"></div>
                </div>
                <h3 className="mb-2 font-semibold text-gray-200">Wobble</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Playful wobble motion
                </p>
                <BlockCode lang="css">{`animate-wobble`}</BlockCode>
              </div>
            </div>

            <div className="animate-fade-in-up mt-12 text-center">
              <a
                href="/configurator"
                className="group/link inline-flex items-center space-x-2 text-gray-300 transition-colors hover:text-gray-200"
              >
                <span>Try configurator</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
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
