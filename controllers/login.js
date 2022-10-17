const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

async function index(req, res) {
  //check if the username is an admin first
  if (await loginService.IsAdmin(req.session.username)) {
      res.render("../views/admin.ejs", { username: req.session.username })
  }

  //redirect to normal page
  else {
    res.render("../views/index.ejs", { username: req.session.username })
  }
}

function loginForm(req, res) { res.render("login", {}) }

function registerForm(req, res) { res.render("register", {}) }

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  const { username, password } = req.body

  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    res.redirect('/')
  }
  else
    res.redirect('/login?error=2')
}

async function register(req, res) {
  const { firstname, lastname, username, password, phonenum, city } = req.body
  try {
    await loginService.register(firstname, lastname, username, password, phonenum, city, false)
    req.session.username = username
    res.redirect('/')

  }
  catch (e) {
    console.log(e)
    res.redirect('/register?error=3')
  }
}

module.exports = {
  login,
  loginForm,
  register,
  registerForm,
  logout,
  index,
  isLoggedIn
}