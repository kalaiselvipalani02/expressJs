const isAuthenticated = (req, res, next) => {
  const isLogin = false;
  if (isLogin) {
    next();
  } else {
    res.json({
      message: "UnAuthenticated Person",
    });
  }
};

module.exports = isAuthenticated;
