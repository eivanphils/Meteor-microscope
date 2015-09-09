Posts = new Mongo.Collection('posts');

Post.allow({
    insert: function(userId, doc){
        //Solo postear si el usuario esta logeado
        return !! userId;
    }
});
