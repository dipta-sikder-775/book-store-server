import { Types } from "mongoose";

export interface IBook {
title: string;
author: Types.ObjectId;
genre: string;
image: Types.ObjectId;
price: number;
publicationDate?: Date;
reviews?: string[];
}