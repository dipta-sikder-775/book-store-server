import { NextFunction, Request, Response } from "express";
import { IWishlist } from "./wishlist.interface";
import { Wishlist } from "./wishlist.model";

export const createWishlist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, bookId } = req.body;
        const wishlist: IWishlist = {
            userId,
            bookId
        }
        const existWishlist = await Wishlist.findOne({userId, bookId})
        if(existWishlist){
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: 'Already wishlist added',
            })
        }
        const result = await Wishlist.create(wishlist)
        res.status(201).send({
            success: true,
            statusCode: 201,
            message: 'Wishlist created',
            data: result
        })

    }
    catch (err) {
        next(err)
    }
}
export const getWishlist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {_id} = req.user;
        const result = await Wishlist.find({ userId: _id }).populate({
            path: 'userId',
            select: '-password -createdAt -__v -updatedAt'
          }).populate({
            path: 'bookId',
            populate: [
              {
                path: 'author',
                select: '-password -createdAt -__v -updatedAt'
              },
              {
                path: 'image'
              }
            ]
          });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Wishlist get success',
            data: result
        })

    }
    catch (err) {
        next(err)
    }
}
export const deleteWishlist = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        
        const result = await Wishlist.findByIdAndDelete(id)
        if(!result){
            return res.status(400).send({
                success: false,
                statusCode: 400,
                message: 'Wishlist not found',
            })
        }
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Wishlist deleted',
            data: result
        })

    }
    catch (err) {
        next(err)
    }
}

