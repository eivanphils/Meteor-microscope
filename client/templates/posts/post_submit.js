Template.postSubmit.events({
    'submit form': function(e){
        e.preventDefault();

        var post = {
            url:$(e.target).find('[name="url"]').val(),
            title:$(e.target).find('[name="title"]').val()
        };

        var errors = validatePost(post);
        if (errors.title || errors.url)
            return Session.set('postSubmitErrors', errors);

        Meteor.call('postInsert', post, function(error, result) {
            // display the error to the user and abort
            if (error)
                return throwError(error.reason);
            
            if(result.postExists)
                throwError('This link has been posted');
                Router.go('postPage', {_id: result._id});
        });

    }
});

Template.postSubmit.onCreated(function(){
    Session.set('postSubmitErrors',{});
});

Template.postSubmit.helpers({
    errorMessage: function(yield){
        return Session.get('postSubmitErrors')[yield];
    },
    errorClass: function(yield){
        return !!Session.get('postSubmitErrors')[yield] ? 'has-error' : '';
    }
});
