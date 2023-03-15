import { Request, Response } from 'express';

import ytdl from 'ytdl-core';

import * as fs from 'fs';
import { join } from 'path';

import Video from './../interfaces/Video';
import Str from './../helpers/Str';

export default class DownloadController
{
    public static async download(req: Request, res: Response): Promise<Response> {

        const video: Video = req.body;

        const videoInfo: ytdl.MoreVideoDetails = (await ytdl.getBasicInfo(video.url)).videoDetails;

        if (!ytdl.validateURL(video.url))
            return res.json({ status: false, error: 'URL invalid'});

        try {
            
            ytdl(video.url, {
                filter: format => format.container === 'mp4'
            }).pipe(
                fs.createWriteStream(
                    `${join(video.path, Str.validateName(videoInfo.title))}.mp4`
                )
            );

        } catch (err) {
            return res.json({ status: false, error: err});
        }

        return res.json({
            status: true,
            message: 'Video downloaded successfully'
        });
    }
}