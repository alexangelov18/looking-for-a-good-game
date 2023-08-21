import express from 'express';

import { getLolGroups, getLolGroupsBySearch, createLolGroup, updateLolGroup, deleteLolGroup, joinLolGroup, getLolGroup, commentLolGroup } from '../controllers/lolGroups.js';

import auth from '../middleware/auth.js';



const router = express.Router();

router.get('/search', getLolGroupsBySearch);
router.get('/', getLolGroups);
router.get('/:id', getLolGroup)
router.post('/', auth, createLolGroup);
router.patch('/:id', auth, updateLolGroup);
router.delete('/:id', auth, deleteLolGroup);
router.patch('/:id/joinLolGroup', auth, joinLolGroup);
router.post('/:id/commentLolGroup', auth, commentLolGroup);

export default router;  