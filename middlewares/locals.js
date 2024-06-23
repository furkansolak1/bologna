module.exports = function(req, res, next) {
    res.locals.isAuth= req.session.isAuth;

    res.locals.fullname = req.session.fullname;
    res.locals.isIdareci= req.session.role == "idareci"?true:false;
    res.locals.isOgretimElemani = req.session.role == "öğretim elemanı"?true:false;
    next();
}