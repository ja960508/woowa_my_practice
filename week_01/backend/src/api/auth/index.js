import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  console.log(req.userData);
  const nickName = req.userData?.nickName;

  console.log(nickName);

  res
    .status(200)
    .cookie('session', 'sessionId', {
      maxAge: 1000 * 60 * 60 * 30,
      sameSite: 'None',
      secure: true,
    })
    .json({ nickName });
});

router.post('/register', (req, res) => {
  const { body } = req;

  res.status(200).json(body);
});

export default router;
