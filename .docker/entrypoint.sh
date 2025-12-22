#!/bin/sh

echo "Waiting for database..."
./.docker/wait-for-it.sh db:5432 -- echo "Database is up"

until nc -z db 5432; do
  sleep 1
done

echo "Running migrations..."
npm run typeorm migration:run -- -d src/shared/infra/typeorm/data-source.ts

echo "Starting application..."
npm run dev
