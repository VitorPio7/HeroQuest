#!/bin/sh
#!/bin/sh

echo "Waiting for database..."

until nc -z db 5432; do
  sleep 1
done

echo "Database is up!"

echo "Running migrations..."
npm run typeorm migration:run -- -d src/shared/infra/typeorm/data-source.ts

npm run dev



