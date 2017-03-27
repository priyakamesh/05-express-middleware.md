const {Router} =require('express');
const router = Router();

router.use(require('./home'));
// router.use(require('./see'));
// router.use(require('./eggs'));

module.exports = router;
