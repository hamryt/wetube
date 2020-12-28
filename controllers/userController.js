export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.send("logout");
export const users = (req, res) => res.send("users");
export const usersDetail = (req, res) => res.send("user-detail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.send("change-password");