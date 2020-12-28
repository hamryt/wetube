export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
};
export const upload = (req, res) => res.send("upload", { pageTitle: "Upload"});
export const videosDetail = (req, res) => res.send("videos-detail", { pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.send("edit-videos", { pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.send("delete-videos", { pageTitle: "Delete Video"});

// function alal(){
//     return true;
// }

// alal = () => true;// implicit return

// alal = () => { // 중괄호를 써주면 implicit한 return이 사라져서  return을 써줘야함
//     return true;
// };