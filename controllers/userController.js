import routes from "../routes"

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
    const{
        body: { name, email, password, password2 }
    } = req;
    if(password !== password2){
        res.status(400);
    } else {
        // To Do: Register User
        // TO Do : Log In
        res.redirect(routes.home);
    }
}
export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
    res.redirect(routes.home); 
}

export const logout = (req, res) => {
    res.redirect(routes.home);
};

export const users = (req, res) => res.send("users");
export const usersDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.send("change-password");