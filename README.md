# 2a5 Admin

## Development

Install your environment
```bash
npm install
```

Run the database server: See 2a5-api

Run the nodejs development server:
```bash
npm run dev
```

Start coding and open [http://localhost:3002](http://localhost:3002) with your browser of choice to check the result. The system supports hot reload.

Stop it with CTRL+C


# Run with Docker

The container will join the existing 2a5 network
```bash
docker compose --env-file ./.env.development.local up -d
```

Stop it:
```bash
docker compose --env-file ./.env.development.local down
```

# Cleanup locally

Delete all generated files
```bash
rm -rf node_modules/ index.js
```

