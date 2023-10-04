import { Router } from "express";
import userRouter from "../module/user/user.index";
import bookRouter from "../module/book/book.index";
import fileUploadRoutes from "../module/fileUpload";
import wishlistRouter from "../module/wishlist/wishlist.index";

const router = Router();

router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/file', fileUploadRoutes)
router.use('/wishlist', wishlistRouter)

export default router;