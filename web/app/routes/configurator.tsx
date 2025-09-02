import { Fragment } from "react/jsx-runtime";
import type { Route } from "../+types/root";
import { Navbar } from "~/components/navbar";
import { Sidebar } from "~/components/sidebar";
import { animates } from "~/data/animates";
import { cn } from "~/lib/cn";
import { useNavigate, useSearchParams } from "react-router";
import { Select } from "~/components/select";
import { Input } from "~/components/input";
import { BlockCode } from "~/components/block-code";
import { useState } from "react";
import { useAnimControl } from "~/hooks/use-anim-control";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tailwind CSS Animate" },
    {
      name: "description",
      content: "Extended animation utilities for Tailwind CSS v4",
    },
  ];
}

export default function Configurator() {
  const navigate = useNavigate();

  const { key, replay } = useAnimControl();

  const [q] = useSearchParams({
    animation: "animate-heart-beat",
    count: "once",
  });

  const [values, setValues] = useState({
    animation: q.get("animation"),
    count: q.get("count"),
    duration: q.get("duration"),
    delay: q.get("delay"),
    ease: q.get("ease"),
    direction: q.get("direction"),
    fill: q.get("fill"),
  });

  function isActiveAnim(anim: string): boolean {
    return q.get("animation") === anim;
  }

  function handleAnim(field: string, anim?: string): void {
    if (!anim) q.delete(field);
    else q.set(field, anim);

    setValues((prev) => ({
      ...prev,
      [field]: anim ?? null,
    }));

    replay();

    navigate(`?${q.toString()}`);
  }

  function handleResetAnim(): void {
    q.delete("animation");
    q.delete("count");
    q.delete("duration");
    q.delete("delay");
    q.delete("ease");
    q.delete("direction");
    q.delete("fill");

    setValues({
      animation: "animate-heart-beat",
      count: "once",
      duration: null,
      delay: null,
      ease: null,
      direction: null,
      fill: null,
    });

    replay();

    navigate(`?${q.toString()}`);
  }

  const generatedClasses = [
    values.animation,
    values.count && `animate-${values.count}`,
    values.duration && `animate-duration-${values.duration}`,
    values.delay && `animate-delay-${values.delay}`,
    values.ease && `animate-${values.ease}`,
    values.direction && `animate-${values.direction}`,
    values.fill && `animate-fill-${values.fill}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <Fragment>
      <Navbar className="max-w-full" />
      <main className="grid grid-cols-[auto_1fr_auto] grid-rows-1 min-h-dvh pt-16">
        <Sidebar>
          <div className="mb-8 px-6">
            <h1 className="text-gray-200 font-semibold text-lg mb-2">
              Animations
            </h1>
            <p className="text-gray-400 text-sm">
              Select an animation to explore
            </p>
          </div>
          <div className="space-y-8 px-2">
            {animates.map((group, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h2 className="font-semibold">{group.name}</h2>
                  <span className="w-6 h-6 bg-pink-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {group.children.length}
                  </span>
                </div>

                <hr className="border-gray-800/50" />

                {group.children.map((anim, i) => {
                  const isActive = isActiveAnim(anim.class);

                  return (
                    <Fragment key={anim.class}>
                      <button
                        onClick={() => handleAnim("animation", anim.class)}
                        className={cn(
                          "rounded-lg p-4 cursor-pointer transition-all flex items-center space-x-3 w-full",
                          isActive
                            ? "bg-gray-800 border border-gray-700 shadow-lg"
                            : "border border-transparent hover:bg-gray-800/50 hover:border-gray-700/50",
                        )}
                      >
                        <div
                          className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                            isActive
                              ? "bg-gray-600 border border-gray-500"
                              : "bg-gray-700",
                          )}
                        />

                        <div className="flex-1 text-start">
                          <span className="font-medium text-gray-200 text-sm">
                            {anim.name}
                          </span>
                        </div>

                        {isActive && (
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                      </button>

                      {group.children.length - 1 !== i && (
                        <hr className="border-gray-800/50" />
                      )}
                    </Fragment>
                  );
                })}
              </div>
            ))}
          </div>
        </Sidebar>
        <div className="relative p-16 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 dots-pattern opacity-70" />
          <div className="z-10 space-y-6">
            <div
              key={key}
              className={cn(
                "rounded-xl w-40 h-40 bg-gradient-to-r from-cyan-400 to-cyan-600",
                values.animation,
                values.count && `animate-${values.count}`,
                values.duration && `animate-duration-${values.duration}`,
                values.delay && `animate-delay-${values.delay}`,
                values.ease && `animate-${values.ease}`,
                values.direction && `animate-${values.direction}`,
                values.fill && `animate-fill-${values.fill}`,
              )}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <button
                onClick={replay}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                Replay Animation
              </button>
            </div>
          </div>
        </div>
        <Sidebar position="end" className="w-90">
          <div className="mb-8 px-6">
            <h1 className="text-gray-200 font-semibold text-lg mb-2">
              Utilities
            </h1>
            <p className="text-gray-400 text-sm">
              Select an animation to explore
            </p>
          </div>
          <div className="space-y-8 px-2 mb-8">
            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Timing</h2>
                <button
                  className="text-pink-300 text-xs font-medium hover:text-pink-500 transition-colors"
                  onClick={handleResetAnim}
                >
                  Reset all properties
                </button>
              </div>
              <div className="grid gap-4 px-4">
                <Select
                  placeholder="Select a timer"
                  items={[
                    { label: "once", value: "once" },
                    { label: "twice", value: "twice" },
                    { label: "thrice", value: "thrice" },
                    { label: "infinite", value: "infinite" },
                  ]}
                  value={values.count ?? ""}
                  onValueChange={(val) => handleAnim("count", val)}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="duration"
                      className="pe-12"
                      value={values.duration ?? ""}
                      onChange={(e) => handleAnim("duration", e.target.value)}
                    />
                    <span className="font-bold text-white border border-gray-800 bg-gray-800 rounded-sm text-xs py-1 px-2 absolute top-1.25 right-1">
                      ms
                    </span>
                  </div>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="delay"
                      className="pe-12"
                      value={values.delay ?? ""}
                      onChange={(e) => handleAnim("delay", e.target.value)}
                    />
                    <span className="font-bold text-white border border-gray-800 bg-gray-800 rounded-sm text-xs py-1 px-2 absolute top-1.25 right-1">
                      ms
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Easing</h2>
              </div>
              <div className="grid gap-4 px-4">
                <Select
                  placeholder="Select an ease"
                  items={[
                    { label: "ease linear", value: "ease-linear" },
                    { label: "ease in", value: "ease-in" },
                    { label: "ease out", value: "ease-out" },
                    { label: "ease in out", value: "ease-in-out" },
                  ]}
                  value={values.ease ?? ""}
                  onValueChange={(val) => handleAnim("ease", val)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Direction</h2>
              </div>
              <div className="grid gap-4 px-4">
                <Select
                  placeholder="Select a direction"
                  items={[
                    { label: "normal", value: "normal" },
                    { label: "reverse", value: "reverse" },
                    { label: "alternate", value: "alternate" },
                    {
                      label: "alternate reverse",
                      value: "alternate-reverse",
                    },
                  ]}
                  value={values.direction ?? ""}
                  onValueChange={(val) => handleAnim("direction", val)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Fill mode</h2>
              </div>
              <div className="grid gap-4 px-4">
                <Select
                  placeholder="Select a fill mode"
                  items={[
                    { label: "forwards", value: "forwards" },
                    { label: "backwards", value: "backwards" },
                    { label: "both", value: "both" },
                  ]}
                  value={values.fill ?? ""}
                  onValueChange={(val) => handleAnim("fill", val)}
                />
              </div>
            </div>
          </div>

          <div className="p-6">
            <BlockCode lang="css">{generatedClasses}</BlockCode>
            <div className="grid grid-cols-2 space-x-4 mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-pink-700 hover:bg-pink-600 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                Copy classes
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                Copy link
              </button>
            </div>
          </div>
        </Sidebar>
      </main>
    </Fragment>
  );
}
