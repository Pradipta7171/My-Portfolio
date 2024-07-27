import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-14 w-full md:w-auto md:px-8 bg-gradient-to-r from-indigo-700 to-purple-800 dark:from-indigo-800 dark:to-purple-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-900 dark:hover:to-purple-950 active:scale-105 disabled:scale-100 disabled:opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}