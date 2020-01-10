module.exports = {
    index: (req, res) => {
        res.render('default/index');
    },
    loginGET: (req, res) => {
        res.render('default/login');
    },
    loginPOST: (req, res) => {
        res.send('Congratulations, you have successfully submitted the data');
    },
    registerGET: (req, res) => {
        res.render('default/register');
    },
    registerPOST: (req, res) => {
        res.send('Successfully registered.')
    }
}