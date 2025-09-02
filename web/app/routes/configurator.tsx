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
import { useClipboard } from "~/hooks/use-clipboard";

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

  const copyAnim = useClipboard();
  const copyLink = useClipboard();

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

  const generatedClasses = (delimiter: string = "\n") => {
    return [
      values.animation,
      values.count && `animate-${values.count}`,
      values.duration && `animate-duration-${values.duration}`,
      values.delay && `animate-delay-${values.delay}`,
      values.ease && `animate-${values.ease}`,
      values.direction && `animate-${values.direction}`,
      values.fill && `animate-fill-${values.fill}`,
    ]
      .filter(Boolean)
      .join(delimiter);
  };

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
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-400 text-xs font-medium text-white">
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
                className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-600 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-3.5 w-3.5"
                >
                  <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                </svg>
                Replay animation
              </button>
            </div>
          </div>
        </div>
        <Sidebar position="end" className="w-100">
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
                  className="cursor-pointer text-xs font-medium text-pink-400 transition-colors hover:underline"
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
            <BlockCode lang="css">{generatedClasses()}</BlockCode>
            <div className="mt-4 grid grid-cols-2 space-x-4">
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-100 active:scale-95"
                onClick={() => copyAnim.copy(generatedClasses(" "))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-3.5 w-3.5"
                >
                  {copyAnim.copied ? (
                    <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                  ) : (
                    <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" />
                  )}
                </svg>
                Copy classes
              </button>
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-600 active:scale-95"
                onClick={() => copyLink.copy(window.location.href)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-3.5 w-3.5"
                >
                  {copyLink.copied ? (
                    <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                  ) : (
                    <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" />
                  )}
                </svg>
                Copy link
              </button>
            </div>
          </div>
        </Sidebar>
      </main>
    </Fragment>
  );
}
