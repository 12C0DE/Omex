import React, { useEffect, useState } from "react";
import pLimit from "p-limit";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import type { ProjectType } from "../types/index";
import { useTheme } from "../context/ThemeContext";
import { ArrowButton } from "./index";

type ProjectModalProps = {
  open: boolean;
  closing: () => void;
  project: ProjectType;
};

export const ProjectModal = ({ open, closing, project }: ProjectModalProps) => {
  const { theme } = useTheme();
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [picArray, setPicArray] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const limit = pLimit(3);
    let active = true;

    const urls = Array.isArray(project?.images) ? project.images : [];
    if (!urls.length) {
      setPicArray([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    (async () => {
      const tasks = urls.map((url) =>
        limit(
          () =>
            new Promise<string | null>((res) => {
              const img = new Image();
              img.onload = () => res(url);
              img.onerror = () => res(null);
              img.src = url;
            }),
        ),
      );
      const loaded = (await Promise.all(tasks)).filter(Boolean) as string[];
      if (active) {
        setPicArray(loaded);
        setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [project, open]);

  return (
    <Dialog
      open={open}
      onClose={closing}
      className="relative z-50 border-black p-1 lg:p-4 sticky left-1/2 transform"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-1 lg:p-4">
        <DialogPanel
          transition
          className="w-[750px] max-w-screen space-y-4 px:4 lg:p-12 duration-300 ease-out data-closed:scale-65 data-closed:opacity-0 relative rounded-sm backdrop-blur-sm max-h-[90vh]"
          style={
            theme === "dark"
              ? {
                  backgroundColor: "rgba(26, 26, 26, 0.95)",
                  color: "white",
                  border: "1px solid white",
                }
              : {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  color: "black",
                  border: "1px solid black",
                }
          }
        >
          <div className="absolute top-1/2 left-4">
            <ArrowButton direction="left" containerRef={scrollerRef} />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 self-end hover:fill-red-400 hover:color-white-500 absolute right-1 top-1"
              onClick={closing}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {loading ? (
              <div className="flex justify-center items-center w-full h-[400px]">
                <div className="animate-spin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                    >
                      <animateTransform
                        attributeName="transform"
                        dur="2.0s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12"
                      />
                    </path>
                  </svg>
                </div>
              </div>
            ) : (
              <div
                ref={scrollerRef}
                className="w-full flex flex-row items-center gap-6 scroll-smooth overflow-x-auto scroll-x snap-x snap-mandatory"
              >
                {picArray.map((pic, index) => (
                  <div
                    key={`pic${index}`}
                    className="snap-center flex-shrink-0 w-7/8 max-w-[600px] mx-0 lg:mx-2 object-fit max-h-[75vh]"
                  >
                    <div className="w-full p-1">
                      <img src={pic} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <DialogTitle className="text-lg font-bold select-none mt-4 p-1">
              {project.title}
            </DialogTitle>
          </div>
          <div className="absolute top-1/2 right-4">
            <ArrowButton direction="right" containerRef={scrollerRef} />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
