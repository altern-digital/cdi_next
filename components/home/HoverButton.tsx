"use client";
import React from "react";

// From: components/home/hover_button.tsx

export function HoverButton() {
  return (
    <div className="w-full sm:w-1/3 px-0 float-left min-h-[1px]">
      <div className="w-full px-4">
        <div>
          <div className="relative mb-8 text-center bg-[#333] transition-all duration-200 rounded overflow-hidden group">
            <a
              href="https://www.lumiambience.com/supply-and-install-services/"
              className="block text-[#ccc] no-underline bg-transparent"
            >
              <div className="relative">
                {/* Vertical number */}
                <div className="absolute left-4 bottom-5 -rotate-90">
                  <span className="absolute text-[15px] font-normal text-white/60 w-[240px] text-left transition-all duration-200">
                    03
                  </span>
                </div>
                {/* Arrow box (show on hover) */}
                <div className="absolute bottom-0 right-0 hidden group-hover:flex items-center justify-center w-[50px] h-[50px] bg-[#7d6741] transition-all duration-200 text-center">
                  <svg
                    className="w-6 h-6 text-white mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <img
                  alt="Supply and Install Services"
                  sizes="(min-width: 781px) 360px, calc(100vw - 30px)"
                  src="https://www.lumiambience.com/wp-content/uploads/2020/09/Supply-and-Install-Services-360x500.jpg"
                  srcSet="https://www.lumiambience.com/wp-content/uploads/2020/09/Supply-and-Install-Services-270x380.jpg 270w, https://www.lumiambience.com/wp-content/uploads/2020/09/Supply-and-Install-Services-540x750.jpg 540w"
                  className="w-full h-auto align-middle border-0"
                />
              </div>
              <div className="relative px-6 py-8 z-10 shadow-[rgba(0,0,0,0.05)_-10px_10px_0px_0px] transition-all duration-200">
                <h4 className="font-normal text-[1.32em] leading-[1.2em] text-white tracking-[-0.3px] m-0 transition-all duration-200">
                  Supply and Install Services
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
