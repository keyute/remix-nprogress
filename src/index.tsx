import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useFetchers, useNavigation } from "@remix-run/react";
import { useEffect, useMemo } from "react";

type RemixNProgressProps = {
  minimum?: number;
  template?: string;
  easing?: string;
  speed?: number;
  trickle?: boolean;
  trickleSpeed?: number;
  showSpinner?: boolean;
  parent?: string;
  positionUsing?: string;
  barSelector?: string;
  spinnerSelector?: string;
};

export default function RemixNProgress(props: Readonly<RemixNProgressProps>) {
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

  useEffect(() => {
    NProgress.configure(props);
  }, []);

  return null;
}
