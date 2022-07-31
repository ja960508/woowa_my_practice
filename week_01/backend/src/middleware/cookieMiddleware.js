export default function cookieMiddleware(req, res, next) {
  const cookies = {};

  if (!req.headers.cookie) {
    next();
  }

  const cookieString = req.headers.cookie
    .split(';')
    .map((item) => item.split('='));

  for (const item of cookieString) {
    cookies[item[0]] = item[1];
  }

  req.cookies = { ...cookies };

  next();
}
