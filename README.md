# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Cloudflare Tunnel

This repo includes a Docker Compose setup for running a Cloudflare Tunnel connector without committing the tunnel token.

1. Create a tunnel in Cloudflare Zero Trust and copy the connector token.
2. Create the local environment file:

```sh
cp docker/cloudflare/.env.example docker/cloudflare/.env
```

3. Edit `docker/cloudflare/.env` and replace the placeholder with the copied token.
4. Start the tunnel:

```sh
cd docker/cloudflare
docker compose up -d
```

In the Cloudflare tunnel public hostname settings, route the hostname to the service that serves this portfolio. If the app is running directly on port 3000, use `http://localhost:3000`. If it is running from the included Dockerfile's Nginx image on a mapped port, use that mapped local port instead.

The tunnel container uses host networking so `localhost:3000` resolves to the host machine's published portfolio port when deployed on a Linux server.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
