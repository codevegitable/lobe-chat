docker run -it -d --name lobe-chat-database -p 3210:3210 `
-e DATABASE_URL=postgres://postgres:20041001@host.docker.internal:5432/postgres `
-e KEY_VAULTS_SECRET=9R81co8KSZvZf3A8jOtMev6uarW4rd0RQB7EMOMiX2g= `
-e NEXT_AUTH_SECRET=3904039cd41ea1bdf6c93db0db96e250 `
-e NEXT_AUTH_SSO_PROVIDERS=auth0 `
-e AUTH_AUTH0_ID=xxxxxx `
-e AUTH_AUTH0_SECRET=cSX_xxxxx `
-e AUTH_AUTH0_ISSUER=https://lobe-chat-demo.us.auth0.com `
-e APP_URL=http://host.docker.internal:3210 `
-e NEXTAUTH_URL=http://host.docker.internal:3210/api/auth `
-e S3_ACCESS_KEY_ID=xxxxxxxxxx `
-e S3_SECRET_ACCESS_KEY=xxxxxxxxxx `
-e S3_ENDPOINT=https://xxxxxxxxxx.r2.cloudflarestorage.com `
-e S3_BUCKET=lobechat `
-e S3_PUBLIC_DOMAIN=https://s3-for-lobechat.your-domain.com `
lobehub/lobe-chat-database
