# staticast.cecil.app

Staticast website.

## Development

```bash
composer install
npm install tailwindcss@1.9.6
npx tailwindcss build ./themes/applanding/static/styles.css -o ./static/css/styles.css
curl -LO https://cecil.app/cecil.phar
php cecil.phar serve -v
```
