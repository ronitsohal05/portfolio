import React from "react";
import TopNav from "./components/TopNav.jsx";
import ProfileStickyCard from "./components/ProfileStickyCard.jsx";
import RightSections from "./components/RightSections.jsx";

export default function App() {
  return (
    <div className="fixed inset-0 bg-[var(--bg)] text-[var(--text)]">
      <TopNav />

      <div className="h-full">
        <div className="mx-auto h-full max-w-[1180px] px-6 pt-28">
          <div className="grid h-full grid-cols-1 lg:grid-cols-[420px_1fr] gap-x-16 py-10">
            {/* LEFT RAIL */}
            <aside className="hidden lg:flex justify-center">
              <div className="w-[360px]">
                <ProfileStickyCard />
              </div>
            </aside>

            {/* RIGHT SCROLLER */}
            <main className="h-full min-h-0">
              <div
                id="right-scroll"
                className="
                  h-full min-h-0 overflow-y-auto
                  pr-3
                  [scrollbar-gutter:stable]
                  snap-y snap-mandatory scroll-smooth
                "
              >
                <div className="max-w-[760px]">
                  <RightSections />
                </div>
                <div className="h-16" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>

  );
}
