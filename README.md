# Remix Router NProgress

A React Router Progress Bar component made using NProgress.

## React Router v7

Starting with version 2.0.0, this module supports React Router v7 and will no longer work with Remix v2.
If you are looking for a version that supports Remix v2, please use `remix-nprogress@1.1.0`.

## Install

```bash
npm i react-router-nprogress
```

## Usage

Add the component as one of your children in the function `Layout` in `root.tsx`

```typescript jsx
import ReactRouterNProgress from "react-router-nprogress";

export function Layout({children}: { children: React.ReactNode }) {
  return (
    // your code here
    <body>
    <ReactRouterNProgress/>
    {children}
    <ScrollRestoration/>
    <Scripts/>
    </body>
  );
}
```

## Configure

You may configure how you want your progress bar to look like by passing in `options`

For example, to disable the spinner

```typescript jsx
<ReactRouterNProgress showSpinner={false}/>
```
