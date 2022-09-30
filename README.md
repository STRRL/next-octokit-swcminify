Mininum Reproduction Environment for https://github.com/vercel/next.js/discussions/30237#discussioncomment-3768734

Way to reproduce:

```bash
yarn install
next build && next start
```

Way to bypass: set `swcMinify: false` in `next.config.js`.
