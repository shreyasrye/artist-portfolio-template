import express from 'express';

const resumePath = './resume.pdf';
const router = express.Router();

router.get('/view', (req, res) => {
    try {
        console.log('Resume path:', resumePath);
        res.sendFile(resumePath);
    } catch (error) {
        res.status(500).send('Error: Unable to view resume');
    }
});

router.get('/download', (req, res) => {
    try {
        console.log('Resume path:', resumePath);
        res.download(resumePath, 'resume.pdf');
    } catch (error) {
        res.status(500).send('Error: Unable to download resume');
    }
});

export default router;
