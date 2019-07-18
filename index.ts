const UserAgent = require('./lib/useragent');

export default async (ctx, next) => {
  const { header } = ctx.request;
  const source = header['user-agent'];

  ctx.userAgent = new UserAgent(source, header);

  await next();
};
