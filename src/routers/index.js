const express = require('express');
const router = express.Router();

router.get('/',(req, resp)=>{
    resp.send('Welcome to Market Place CondorLabs');
});

module.exports = router;