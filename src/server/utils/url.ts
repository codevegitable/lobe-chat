import urlJoin from 'url-join';

const isVercelPreview = process.env.VERCEL === '1' && process.env.VERCEL_ENV !== 'production';

const vercelPreviewUrl = `https://${process.env.VERCEL_URL}`;

// 需要修改成到时候的域名
const siteUrl = isVercelPreview ? vercelPreviewUrl : 'https://lobechat.com';

export const getCanonicalUrl = (...paths: string[]) => urlJoin(siteUrl, ...paths);
