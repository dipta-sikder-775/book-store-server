export interface IFileData {
    _id?: string;
    fileName: string;
    fileUrl: string;
    fileExtension: string;
    createdAt?: string;
    key: string;
    bucket: string;
    size?: number;
    etag?: string;
    mimeType?: string;
}
