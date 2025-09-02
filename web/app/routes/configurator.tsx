import { Fragment } from "react/jsx-runtime";
import type { Route } from "../+types/root";
import { Navbar } from "~/components/navbar";
import { Sidebar } from "~/components/sidebar";
import { animates } from "~/data/animates";
import { cn } from "~/lib/cn";
import { useNavigate, useSearchParams } from "react-router";

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

  const [q] = useSearchParams({ animation: "animate-bounce" });

  function isActiveAnim(anim: string): boolean {
    return q.get("animation") === anim;
  }

  function handleAnim(field: string, anim?: string): void {
    if (!anim) q.delete(field);
    else q.set(field, anim);

    navigate(`?${q.toString()}`);
  }

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
                    <Fragment>
                      <button
                        key={anim.class}
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
        <div className="relative">
          <div className="absolute inset-0 dots-pattern opacity-70" />
          Content
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

          <div className="space-y-8 px-2">
            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Timing</h2>
                <button className="text-pink-300 text-xs font-medium hover:text-pink-500 transition-colors">
                  Reset all properties
                </button>
              </div>

              <hr className="border-gray-800/50" />

              <div className="grid gap-4 px-4">
                <div>
                  <select>
                    <option>once</option>
                    <option>twice</option>
                    <option>thrice</option>
                    <option>infinite</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="number" placeholder="duration" />
                  </div>
                  <div>
                    <input type="number" placeholder="delay" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Easing</h2>
              </div>

              <hr className="border-gray-800/50" />

              <div className="grid gap-4 px-4">
                <div>
                  <select>
                    <option>ease linear</option>
                    <option>ease in</option>
                    <option>ease out</option>
                    <option>ease in out</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Direction</h2>
              </div>

              <hr className="border-gray-800/50" />

              <div className="grid gap-4 px-4">
                <div>
                  <select>
                    <option>normal</option>
                    <option>reverse</option>
                    <option>alternate</option>
                    <option>alternate reverse</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h2 className="font-semibold">Fill mode</h2>
              </div>

              <hr className="border-gray-800/50" />

              <div className="grid gap-4 px-4">
                <div>
                  <select>
                    <option>forwards</option>
                    <option>backwards</option>
                    <option>both</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </main>
    </Fragment>
  );
}

{
  /* <div class="relative w-90">
  <div class="absolute inset-0">
    <aside class="bg-slate-900/50 border-l border-slate-800 sticky top-0 overflow-y-auto h-full max-h-dvh">
      <div class="py-6 space-y-4 px-2">
        <div class="space-y-2 px-4">
          <div class="flex items-center justify-between gap-0.5">
            <h2 class="font-semibold text-slate-400">Timing</h2>
            <div class="text-sm">Reset all properties</div>
          </div>
          <hr class="border-slate-800 mb-4" />
          <div class="grid gap-4 mb-4">
            <div class="grid grid-cols-2 gap-6">
              <a
                href={`?count=once`}
                class={cn(
                  "rounded-lg p-4 cursor-pointer transition-all flex items-center space-x-3",
                  "border bg-slate-800/50 border-slate-700/50",
                )}
              >
                <div class="grid items-center justify-center">
                  <span class="font-medium text-slate-200">XXXX</span>
                  <span class="font-medium text-slate-200">XXXX</span>
                </div>
              </a>
              <a
                href={`?count=infinite`}
                class={cn(
                  "rounded-lg p-4 cursor-pointer transition-all flex items-center space-x-3",
                  "border bg-slate-800/50 border-slate-700/50",
                )}
              >
                <div class="grid items-center justify-center">
                  <span class="font-medium text-slate-200">XXXX</span>
                  <span class="font-medium text-slate-200">XXXX</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</div>; */
}
