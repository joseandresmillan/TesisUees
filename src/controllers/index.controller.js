
const indexCtrl = {}; //Guardo las funciones en un objeto las cuales renderizaran las urls

indexCtrl.renderIndex = (req,res)  =>  {
    res.render('index')
}

indexCtrl.renderSvc = (req,res) => {
    res.render('svc')
};

module.exports = indexCtrl; //exporto el objeto y lo utilizo en index.routes.js