import NextAuthNode from '@/libs/next-auth';
import { getAuthConfig } from '@/config/auth'
import NextAuth from 'next-auth'
import WeChat from 'next-auth/providers/wechat'
import Github from 'next-auth/providers/github'

// 导入服务器配置
const {
  WECHAT_CLIENT_ID, WECHAT_CLIENT_SECRET,  // WeChat
  GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET,                 // GitHub
  // 之后做个浙大通行证的
} = getAuthConfig();

// 登录
const nextAuth = NextAuth({
  providers: [
    WeChat({
      clientId: WECHAT_CLIENT_ID,
      clientSecret: WECHAT_CLIENT_SECRET,
      platformType: "OfficialAccount"
    }),
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
});

export const { GET, POST } = NextAuthNode.handlers;
