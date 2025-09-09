const express = require('express')
const router = express.Router()

const postsArray = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Contenuto del post 1',
        img: 'images/ciambellone.jpeg',
        tags: ['cucina', 'dolci', 'colazione']
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Contenuto del post 2',
        img: 'images/cracker_barbabietola.jpeg',
        tags: ['cucina', 'salato', 'snack']
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Contenuto del post 3',
        img: 'images/pane_fritto_dolce.jpeg',
        tags: ['cucina', 'dolci', 'snack']
    },
    {
        id: 4,
        title: 'Post 4',
        content: 'Contenuto del post 4',
        img: 'images/pasta_barbabietola.jpeg',
        tags: ['cucina', 'salato', 'primi']
    },
    {
        id: 5,
        title: 'Post 5',
        content: 'Contenuto del post 5',
        img: 'images/torta_paesana.jpeg',
        tags: ['cucina', 'dolci', 'dessert']
    }
   
]

//Index
router.get('/', (req, res) => {
    res.json(postsArray)
})
//Show
router.get('/:id', (req, res) => {
    const postID = parseInt(req.params.id)
    const thisPost = postsArray.find(post => post.id === postID)
    res.json(thisPost)
})
//Store
router.post('/', (req, res) => {
    res.send('Creazione nuovo post')
} )
//Update
router.put('/:id', (req, res) => {
    res.send('Modifica del post ' + req.params.id)
})
//Modify
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale del post ' + req.params.id)
})
//Destroy
router.delete('/:id', (req, res) => {
    res.send('Cancellazione del post ' + req.params.id)
})




module.exports = router 