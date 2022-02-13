# Nitro

A turborepo with with the fastest tools available to build full stack JS applications and deploy instantly with vercel.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following apps/saas/packages:

### Apps
- `server`: [Express.js](https://expressjs.com/) app with auto routing
- `client`: [Vue.js](https://vuejs.org/) app built with [Vite.js](https://vitejs.dev) - modified [ vitesse fork](https://github.com/antfu/vitesse)
- `docs`: a [Vitepress](https://vitepress.vuejs.org/) app

### Packages
- `ui`: Vue component library shared by both `client` and `docs` applications
- `config`: `eslint` configurations for Vue and Node.
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting

## Setup

This repository was created with the `npx create-turbo@latest` command, and selected PNPM when choosing  package manager for this monorepo.

### Build
To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop
To develop all apps and packages, run the following command:

```
pnpm run dev
```

### Deploy
Deploy client and server apps with vercel

```
pnpm prod
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
