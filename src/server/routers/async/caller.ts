import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import urlJoin from 'url-join';

import { appEnv } from '@/config/app';
import { serverDBEnv } from '@/config/db';
import { AI_AUTH_HEADER, JWTPayload } from '@/const/auth';
import { KeyVaultsGateKeeper } from '@/server/modules/KeyVaultsEncrypt';

import type { AsyncRouter } from './index';

export const createAsyncServerClient = async (userId: string, payload: JWTPayload) => {
  const gateKeeper = await KeyVaultsGateKeeper.initWithEnvKey();
  const headers: Record<string, string> = {
    [AI_AUTH_HEADER]: await gateKeeper.encrypt(JSON.stringify({ payload, userId })),
    Authorization: `Bearer ${serverDBEnv.KEY_VAULTS_SECRET}`,
  };

  if (process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
    headers['x-vercel-protection-bypass'] = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  }

  return createTRPCClient<AsyncRouter>({
    links: [
      httpBatchLink({
        headers,
        transformer: superjson,
        url: urlJoin(appEnv.APP_URL!, '/trpc/async'),
      }),
    ],
  });
};
