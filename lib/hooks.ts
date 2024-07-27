import { useInView } from "react-intersection-observer";
import { useContextSection } from "@/context/activeSection";
import { useEffect } from "react";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, toggleTime } = useContextSection();

  useEffect(() => {
    if (inView && Date.now() - toggleTime > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, toggleTime, sectionName]);

  return {
    ref,
  };
}
