import { pool } from '../config/database.js'

const getGifts = async (req, res) => {
    try {
        const gifts = await pool.query('SELECT * FROM gifts ORDER BY id ASC');
        res.status(200).json(gifts.rows);
    } catch (err) {
        console.error('Error fetching gifts', err);
        res.status(409).json({ error: err.message });
    }
}

export default { getGifts }