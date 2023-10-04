import { NextFunction, Request, Response } from "express";
import { FileUpload } from "./model";
import createError from "http-errors";

import { IFileData } from "./types";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../../config/s3";

export const uploadFileController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log(req.files)
        console.log(req.body)
        const file = req.files as any;
        const filesToBeUploaded: IFileData = {
            fileName: file[0].originalname,
            fileUrl: file[0].location,
            fileExtension: file[0].originalname,
            bucket: file[0].bucket,
            key: file[0].key,
            size: file[0].size,
            etag: file[0].etag,
            mimeType: file[0].mimetype,
        };
        const uploadedFilesToDb = await FileUpload.create(filesToBeUploaded);

        res.status(200).json({
            message: "File uploaded successfully",
            data: uploadedFilesToDb,
        });
    } catch (error) {
        next(error);
    }
};

// delete file

export const deleteFileController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;

    try {
        const file = await FileUpload.findById(id);

        if (!file) {
            return next(createError.NotFound("File not found"));
        }

        const bucket = file.bucket;
        const key = file.key;

        const input = {
            Bucket: bucket,
            Key: key,
        };

        const command = new DeleteObjectCommand(input);

        await s3.send(command);

        // delete file from cloudinary

        // delete file from db

        await FileUpload.findByIdAndDelete(id);

        res.status(200).json({
            message: "File deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
