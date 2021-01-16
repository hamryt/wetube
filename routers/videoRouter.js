import express from "express";
import routes from "../routes";
import { deleteVideo, getEditVideo, postEditVideo, getUpload, postUpload, videosDetail } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video Detail
videoRouter.get(routes.videosDetail(), videosDetail);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;