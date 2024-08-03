# Remix NProgress

A Remix Progress Bar component made using NProgress.

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
