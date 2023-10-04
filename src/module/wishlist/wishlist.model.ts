import { Schema, model } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const wishlistSchema = new Schema<IWishlist>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    bookId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Book'
    },
},{timestamps: true});

export const Wishlist = model<IWishlist>('Wishlist', wishlistSchema)