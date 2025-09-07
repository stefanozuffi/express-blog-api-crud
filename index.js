const express = require('express')
const blogServer = express()
const port = 3000

// Listen
blogServer.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

// Elementi Statici
blogServer.use(express.static('public'))


// Creiamo l'array dei cinque post
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


// ROUTES FOR POSTS