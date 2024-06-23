module.exports = (req, res, next) => {
    if(!req.session.isAuth) {
        return res.redirect("/account/login?returnUrl=" + req.originalUrl); 
    }

    if(!req.session.role=="öğretim elemanı") {
        req.session.message = {text: "Yetkili bir kullanıcı ile oturum açınız."};
        return res.redirect("/account/login?returnUrl=" + req.originalUrl); 
    }
    next();
}