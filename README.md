# Remix Progress Bar

A Remix Progress Bar component made using NProgress.

## Install

```bash
npm i remix-progressbar
```

## Usage

Add the component as one of your children in the function `Layout` in `root.tsx`

```typescript jsx
import RemixProgressBar from "remix-progressbar";

export function Layout({children}: { children: React.ReactNode }) {
  return (
    // your code here
    <body>
    <RemixProgressBar/>
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
<RemixProgressBar options={{showSpinner: false}}/>
```