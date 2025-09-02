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
import { useMediaQuery } from "~/hooks/use-media-query";
import { ScreenSizeBlocker } from "~/components/screen-size-blocker";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Configurator - Tailwind CSS Animate" },
    {
      name: "description",
      content: "Extended animation utilities for Tailwind CSS v4",
    },
  ];
}

export default function Configurator() {
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(width <= 64rem)");

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

  if (isMobile) return <ScreenSizeBlocker />;

  return (
    <Fragment>
      <Navbar className="max-w-full" />
      <main className="grid min-h-dvh grid-cols-[auto_1fr_auto] grid-rows-1 pt-16">
        <Sidebar>
          <div className="mb-8 px-6">
            <h1 className="mb-2 text-lg font-semibold text-gray-200">
              Animations
            </h1>
            <p className="text-sm text-gray-400">
              Select an animation to explore
            </p>
          </div>
          <div className="space-y-8 px-2">
            {animates.map((group, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h2 className="font-semibold">{group.name}</h2>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-xs font-medium text-white">
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
                          "flex w-full cursor-pointer items-center space-x-3 rounded-lg p-4 transition-all",
                          isActive
                            ? "border border-gray-700 bg-gray-800 shadow-lg"
                            : "border border-transparent hover:border-gray-700/50 hover:bg-gray-800/50",
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                            isActive
                              ? "border border-gray-500 bg-gray-600"
                              : "bg-gray-700",
                          )}
                        />

                        <div className="flex-1 text-start">
                          <span className="text-sm font-medium text-gray-200">
                            {anim.name}
                          </span>
                        </div>

                        {isActive && (
                          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
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
        <div className="relative flex items-center justify-center overflow-hidden p-16">
          <div className="dots-pattern absolute inset-0 opacity-70" />
          <div className="z-10 space-y-6">
            <div
              key={key}
              className={cn(
                "h-40 w-40 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-600",
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
                className="cursor-pointer rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-600"
              >
                Replay Animation
              </button>
            </div>
          </div>
        </div>
        <Sidebar position="end" className="w-90">
          <div className="mb-8 px-6">
            <h1 className="mb-2 text-lg font-semibold text-gray-200">
              Utilities
            </h1>
            <p className="text-sm text-gray-400">
              Select an animation to explore
            </p>
          </div>
          <div className="mb-8 space-y-8 px-2">
            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Timing</h2>
                <button
                  className="text-xs font-medium text-pink-300 transition-colors hover:text-pink-500"
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
                    <span className="absolute top-1.25 right-1 rounded-sm border border-gray-800 bg-gray-800 px-2 py-1 text-xs font-bold text-white">
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
                    <span className="absolute top-1.25 right-1 rounded-sm border border-gray-800 bg-gray-800 px-2 py-1 text-xs font-bold text-white">
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
            <div className="mt-4 grid grid-cols-2 space-x-4">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-pink-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-pink-600"
              >
                Copy classes
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="cursor-pointer rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-600"
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
