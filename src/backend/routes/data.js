const express = require('express');
const router = express.Router();

const sampleData = [
    {
        id: 1,
        title: 'Running',
        description: 'At least 1 mile',
    },
    {
        id: 2,
        title: 'Cycling',
        description: 'Around the neighborhod',
    },
]

router.get('/', (req, res) => {
    res.json(sampleData);
});

module.exports = router;