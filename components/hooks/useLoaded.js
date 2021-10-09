import { useEffect, useState } from "react";

//Use this for Warning: Prop `className` did not match
export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};
