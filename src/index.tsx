import NProgress from "nprogress";
import { useFetchers, useNavigation, useRevalidator } from "@remix-run/react";
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
  color?: string;
  height?: string;
};

export default function RemixNProgress(props: Readonly<RemixNProgressProps>) {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const revalidator = useRevalidator();
  const state = useMemo(() => {
    const states = [
      navigation.state,
      revalidator.state,
      ...fetchers.map((fetcher) => fetcher.state),
    ];
    if (states.some((state) => state !== "idle")) return "loading";
    return "idle";
  }, [navigation.state, revalidator.state, fetchers]);

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

  const color = props.color ?? "#29d";
  const height = props.height ?? "2px";

  const css = `
/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${color};

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: ${height};
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${color};
  border-left-color: ${color};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

  return <style>{css}</style>;
}
