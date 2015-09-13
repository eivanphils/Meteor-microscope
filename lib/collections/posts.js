Posts = new Mongo.Collection('posts');

Meteor.methods({
    postInsert: function(postAttributes){
        check(Meteor.userId(), String);
        check(postAttributes,{
            title: String,
            ulr: String
        });
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.name,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return{
            _id: postId
        };
    }
});
