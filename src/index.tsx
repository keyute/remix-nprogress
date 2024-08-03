import NProgress, { NProgressOptions } from "nprogress";
import "nprogress/nprogress.css";
import { useFetchers, useNavigation } from "@remix-run/react";
import { useEffect, useMemo } from "react";

export default function RemixProgressBar({
  options,
}: Readonly<{ options?: NProgressOptions }>) {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const state = useMemo(() => {
    const states = [
      navigation.state,
      ...fetchers.map((fetcher) => fetcher.state),
    ];
    if (states.some((state) => state !== "idle")) return "loading";
    return "idle";
  }, [navigation.state, fetchers]);

  useEffect(() => {
    if (state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [state]);

  if (options) {
    useEffect(() => {
      NProgress.configure(options);
    }, []);
  }

  return null;
}
