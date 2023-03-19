import { Router } from 'express';


const router =  Router();


router.get('/', (req, res) =>{
    console.log(req.body());
    return res.send('óla, mundo!');
});


router.post('/teste', (req, res) =>{
    console.log(req.body);
    return res.json(req.body);
});

export { router };
