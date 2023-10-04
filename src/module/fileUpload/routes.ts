import { Router } from "express";
import { deleteFileController, uploadFileController } from "./controller";



import { validateDeleteFile } from "./validators";
import fileUploadMiddleware from "../../middleware/fileUploadMiddleware";

const router = Router();

router.post(
    "/upload",
    // validateAccess,
    // checkIsUserEmailVerified,
    fileUploadMiddleware,
    uploadFileController
);

router.delete("/delete/:id", validateDeleteFile, deleteFileController);

export default router;
