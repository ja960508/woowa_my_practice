function sessionMiddleware(req, res, next) {
  const sessionId = 'jooam';
  const session = req.cookies;

  if (!session) {
    next();
  }

  req.userData = { nickName: sessionId };

  next();
}

export default sessionMiddleware;
