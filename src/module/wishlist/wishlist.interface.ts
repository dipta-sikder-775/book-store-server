import { Types } from "mongoose";

export interface IWishlist {
    userId: Types.ObjectId;
    bookId: Types.ObjectId;
}