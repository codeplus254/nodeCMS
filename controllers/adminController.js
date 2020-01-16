const Post = require('./../models/PostModel').Post;

module.exports = {
    
    index: (req, res) => {
        res.render('admin/index');
    },

    getPosts: (req, res) => {
        Post.find().then(posts => {
            res.render('admin/posts/index', {posts: posts});
        })
        
    },

    createPosts: (req, res) => {
        res.render('admin/posts/create');
    },

    editPosts: (req, res) => {
        const id = req.params.id;
        console.log(id);
        Post.findById(id).then(post => {
            res.render('admin/posts/edit', {post: post});
        })
        
    },

    submitPosts: (req, res) => {
        console.log('submitting posts')
        console.log(req.body)
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
        });

        newPost.save().then(post => {
            console.log(post);
            req.flash('success-message', 'Post created successfully');
            res.redirect('/admin/posts')
        });
    },

}