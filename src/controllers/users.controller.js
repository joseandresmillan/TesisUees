const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) =>{ //renderiza el formulario del registro
    res.render('users/signup');
}

usersCtrl.signup = (req, res) => {
    const errors = [];
    const {name, password, confirm_password} = req.body;
    res.send('Sign Up Succesfull' )

}

usersCtrl.renderSignInForm = (req, res) => { //renderiza el formulario del ingreso
    res.render('users/signin');
}
usersCtrl.signin = (req, res) => {
    res.send('signin')
}

usersCtrl.logout = (req , res ) => {
    res.send('logout')
}

module.exports = usersCtrl;