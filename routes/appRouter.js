import { ShortUrl } from '../models/url.models.js';
import generateShortId from 'ssid';

import express from 'express';
export const router = express.Router();

router.post('/short', async (req, res) => {
    const shortId = generateShortId(8);
    const resUrl = new ShortUrl({
        fullUrl: req.body.data,
        shortenedUrl: shortId,
    });
    try {
        const document = await ShortUrl.findOne({ fullUrl: req.body.data });
        if (document) {
            res.json({ shortUrl: document.shortenedUrl });
            return;
        }
        await resUrl.save();
        res.json({ shortUrl: shortId });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    const myId = req.params.id;
    const doc = await ShortUrl.findOne({ shortenedUrl: myId });
    if (!doc) {
        res.status(404).send({ error: 'url not found' });
        return;
    }
    res.redirect(doc.fullUrl);
});
