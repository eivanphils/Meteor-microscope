Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        //Solo postear si el usuario esta logeado
        return !! userId;
    }
});
