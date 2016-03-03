/**
 * Created by phils on 2/03/16.
 */
Template.postPage.helpers({
    comments: function(){
        return Comments.find({postId: this._id});
    }
});