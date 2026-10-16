#!/bin/sh
set -e

export PORT="${PORT:-10000}"
DB_FILE="${DB_DATABASE:-/var/www/html/database/database.sqlite}"

touch "$DB_FILE"
chown www-data:www-data "$DB_FILE" "$(dirname "$DB_FILE")"

php artisan package:discover --ansi
php artisan migrate --force
php artisan db:seed --force
php artisan config:cache
php artisan route:cache

chown -R www-data:www-data storage bootstrap/cache

exec apache2-foreground
