import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import GiftsController from '../controllers/gifts.js'


const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const router = express.Router();

router.get('/', GiftsController.getGifts);

router.get ('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirName, '../public/gift.html'));
})

export default router;