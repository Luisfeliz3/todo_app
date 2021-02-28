const  router = require('express').Router();

const todo = ["get Food", "Gym", "Code"];



router.get('/todo',(req, res)=>{
     return res.json(todo)
} )

router.post('/todo',(req, res)=>{
    todo.push(req.body);
    return res.json(todo);
} )


router.use((req,res)=>{

    res.redirect('/todo')

})

module.exports = router;