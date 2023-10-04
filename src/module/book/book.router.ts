import { Router } from "express";
import { verifyBook, verifyBookReview, verifyBookUpdate } from "./book.validation";
import { createBook, createReview, deleteBook, getBookById, getBooks, getLeatestBooks, updateBook } from "./book.controller";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyParams } from "../../middleware/varifyParams";

const router = Router();

router.post('/create-book',verifyJwt, verifyBook, createBook)
router.patch('/update-book/:id',verifyParams, verifyJwt, verifyBookUpdate, updateBook)
router.get('/get-books', getBooks)
router.get('/get-leatest-books', getLeatestBooks)
router.get('/get-single-book/:id', getBookById)
router.delete('/delete-book/:id', verifyParams, verifyJwt, deleteBook)
router.post('/review-book/:id', verifyParams, verifyJwt, verifyBookReview, createReview)


export default router;