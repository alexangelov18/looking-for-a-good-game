import express from 'express';

import { getLolGroups, createLolGroup, updateLolGroup, deleteLolGroup, joinLolGroup } from '../controllers/lolGroups.js';

const router = express.Router();

router.get('/', getLolGroups);
router.post('/', createLolGroup);
router.patch('/:id', updateLolGroup);
router.delete('/:id', deleteLolGroup);
router.patch('/:id/joinLolGroup', joinLolGroup);

export default router;