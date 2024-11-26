# Remix NProgress

A Remix Progress Bar component made using NProgress validated for Remix + Vite.

## React Router v7

Starting with version 2.0.0, this module supports React Router v7 and will no longer work with Remix v2.
If you are looking for a version that supports Remix v2, please use version 1.1.0.

## Install

```bash
npm i remix-nprogress
```

## Usage

Add the component as one of your children in the function `Layout` in `root.tsx`

```typescript jsx
import RemixNProgress from "remix-nprogress";

export function Layout({children}: { children: React.ReactNode }) {
  return (
    // your code here
    <body>
    <RemixNProgress/>
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
<RemixNProgress showSpinner={false}/>
```
