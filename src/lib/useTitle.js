import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | J2911 Resources LLC` : "J2911 Resources LLC | ICT, Education, Business and Policy Consulting";
  }, [title]);
}
