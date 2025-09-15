const {postsArray} = require('../data/postsArray.js')

function index(req,res) {

        let resArray = postsArray
        if (req.query.tag) {
            resArray = postsArray.filter(post => post.tags.includes(req.query.tag))
            console.log(req.query.tag)
        }
        res.json(resArray)
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
    console.log(postsArray);
    
    res.status(201).json(newPost)

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


    if (postIndex === -1) {
        res.status(404).json({
            success: false,
            message: 'Post non trovato' 
        })
    } 

    postsArray.splice(postIndex, 1)
    console.log(postsArray)

    res.sendStatus(204)
    
}


module.exports = {
    index, 
    show,
    store,
    update,
    modify,
    destroy
}
