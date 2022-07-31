async function login() {
  const response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 'lee',
      password: '1234',
    }),
  }).then((res) => {
    return res.json();
  });
}

async function register() {
  const response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: 'lee',
      password: '1234',
    }),
  }).then((res) => res.json());
}

async function board() {
  const response = await fetch('http://localhost:8080/api/board').then((res) =>
    res.json()
  );
}

(function () {
  const loginBtn = document.querySelector('.login');

  loginBtn.addEventListener('click', login);
})();
