# syphax-bouazzouni.github.io

Personal portfolio website for Syphax Bouazzouni, built with [Vite](https://vitejs.dev/) and React.

## Features

- ⚡️ Fast, modern, and responsive design
- 🛠️ Built with React + TypeScript
- 🐳 Dockerized for easy deployment
- 🔄 GitHub Actions for CI/CD
- 🧩 Modular and easily customizable

## Getting Started

### Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

### Production Build

Build the app for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Docker

Build the Docker image:

```sh
docker build -t syphax0/syphax-perso .
```

Run the container:

```sh
docker run -p 8080:80 syphax0/syphax-perso
```

Or use Docker Compose:

```sh
docker-compose up -d
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

## CI/CD

This project uses GitHub Actions to build and push the Docker image to Docker Hub on every push to `main`.

## Project Structure

- `src/` - React components and source code
- `public/` - Static assets
- `Dockerfile` - Docker build instructions
- `docker-compose.yml` - Docker Compose setup

## License

MIT

