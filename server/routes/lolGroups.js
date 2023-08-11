import express from 'express';

import { getLolGroups, getLolGroupsBySearch, createLolGroup, updateLolGroup, deleteLolGroup, joinLolGroup } from '../controllers/lolGroups.js';

import auth from '../middleware/auth.js';



const router = express.Router();

router.get('/', getLolGroups);
router.get('/search', getLolGroupsBySearch);
router.post('/', auth, createLolGroup);
router.patch('/:id', auth, updateLolGroup);
router.delete('/:id', auth, deleteLolGroup);
router.patch('/:id/joinLolGroup', auth, joinLolGroup);

export default router;