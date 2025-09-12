const {postsArray} = require('../data/postsArray.js')

function index(req,res) {
        res.json(postsArray)
}

function show(req, res) {
    const postID = parseInt(req.params.id)
    const thisPost = postsArray.find(post => post.id === postID)

    if (!thisPost) {
        res.status(404).json({
            success: false,
            message: 'Post non trovato' 
        })
    }

    res.json(thisPost)
    
}

function store(req, res) {
    const { title, img, tags, content } = req.body;

    //Request Error Handling
    if (!title || !content) {
        res.status(400).json({
            success: false,
            message: 'Title e Content sono obbligatori'
        })
    }

    if (typeof img !== 'string') {
        res.status(400).json({
            success: false,
            message: 'Img deve essere una stringa'
        })
    }

    // Creazione nuovo Post
    const maxID = Math.max(...postsArray.map(post => post.id))

    const newPost = {
        id: maxID + 1,
        title: title,
        content: content,
        img: img,
        tags: Array.isArray(tags) ? tags : []
    }

    postsArray.push(newPost)
    res.json({
        new_post: newPost,
        updated_array: postsArray
    })

    //IMPLEMENTAZIONE ELEMENTARE
    // const newId = postsArray.length
    // const newTitle = `Post ${newId}`
    // const newContent = `Contenuto del ${newTitle}`
    // const newImg = 'some_url'
    // const newTags = ['cucina']

    // const newPost = {
    //     id: newId,
    //     title: newTitle,
    //     content: newContent,
    //     img: newImg,
    //     tags: newTags
    // }

    // postsArray.push(newPost)
    // res.json(newPost)

}

function update(req, res) {
    res.send('Modifica del post ' + req.params.id)
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id)
}

function destroy(req, res) {
    const postID = parseInt(req.params.id)
    const postIndex = postsArray.findIndex(post => post.id === postID)

    const deletedPost = postsArray.splice(postIndex, 1)[0]
    if (!deletedPost) {
        res.status(404).json({
            success: false,
            message: 'Post non trovato' 
        })
    } 

    res.json({
        destroyed_post: deletedPost,
        updated_array: postsArray
    })
    
}


module.exports = {
    index, 
    show,
    store,
    update,
    modify,
    destroy
}
