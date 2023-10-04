import { Router } from "express";
import { verifyWishlist } from "./wishlist.validation";
import { createWishlist, deleteWishlist, getWishlist } from "./wishlist.controller";
import { verifyJwt } from "../../middleware/verifyJwt";

const router =Router();

router.post('/create-wishlist',verifyJwt, verifyWishlist, createWishlist)
router.get('/get-wishlist',verifyJwt,  getWishlist)
router.delete('/delete-wishlist/:id', verifyJwt, deleteWishlist)


export default router;