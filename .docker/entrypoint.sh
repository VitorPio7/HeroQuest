#!/bin/sh

echo "Waiting for database..."
./.docker/wait-for-it.sh db:5432 -- echo "Database is up"

echo "Running migrations..."
npm run typeorm migration:run -- -d src/shared/infra/typeorm/data-source.ts

echo "Starting application..."
npm run dev
