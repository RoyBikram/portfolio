"use client";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "./hook/useOutsideClick";

export function ExpandableMessageSend() {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-10'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className='fixed inset-0  grid place-items-center z-[100]'>
            <motion.button
              key={``}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6'
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`mainCardContainer`}
              ref={ref}
              className='w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden'
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='text-neutral-600 text-xs md:text-sm lg:text-base flex flex-col items-start   dark:text-neutral-400'
                style={{
                  alignSelf: "start",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                  paddingTop: "30px",
                }}
              >
                Your email
              </motion.div>
              <motion.input
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId={`email`}
                style={{
                  width: "90%",
                  height: "50px",
                  backgroundColor: "#272727",
                  borderRadius: "10px",
                  borderColor: "rgb(117,46,252)",
                  borderWidth: "2px",
                }}
              />
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='text-neutral-600 text-xs md:text-sm lg:text-base flex flex-col items-start   dark:text-neutral-400'
                style={{
                  alignSelf: "start",
                  paddingLeft: "30px",
                  paddingBottom: "10px",
                  paddingTop: "30px",
                }}
              >
                Describe your project
              </motion.div>
              <motion.textarea
                layoutId={`message`}
                style={{
                  width: "90%",
                  height: "150px",
                  backgroundColor: "#272727",
                  borderRadius: "10px",
                  borderColor: "rgb(117,46,252)",
                  borderWidth: "2px",
                }}
              />

              <motion.button
                layoutId={`submitButton`}
                className='px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-gray-100 text-black mt-4 md:mt-0 flex w-50 overflow-hidden justify-center'
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <SendRoundedIcon />
              </motion.button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className='max-w-2xl mx-auto w-full gap-4'>
        <motion.div
          layoutId={`mainCardContainer`}
          key={`mainCardContainer`}
          onClick={() => setActive(true)}
          className='p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer'
        >
          <motion.textarea
            layoutId={`message`}
            style={{
              width: "90%",
              height: "50px",
              backgroundColor: "#272727",
              borderRadius: "10px",
              borderColor: "rgb(117,46,252)",
              borderWidth: "2px",
            }}
          />
          <motion.button
            layoutId={`submitButton`}
            className='px-4 py-2 text-sm rounded-full font-bold bg-gray-100 text-black mt-4 md:mt-0 flex w-14 overflow-hidden justify-center'
            style={{
              marginLeft: "10px",
            }}
          >
            <SendRoundedIcon />
          </motion.button>
        </motion.div>
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4 text-black'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  );
};
