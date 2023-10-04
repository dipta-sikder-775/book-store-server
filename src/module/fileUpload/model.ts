import { Schema, model } from "mongoose";
import { IFileData } from "./types";

const fileUploadSchema = new Schema<IFileData>(
    {
        fileName: {
            type: String,
            required: true,
        },
        fileUrl: {
            type: String,
            required: true,
        },
        fileExtension: {
            type: String,
            required: true,
        },
        bucket: {
            type: String,
            required: true,
        },
        key: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 0,
        },
        etag: {
            type: String,
        },
        mimeType: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const FileUpload = model<IFileData>("FileUpload", fileUploadSchema);
