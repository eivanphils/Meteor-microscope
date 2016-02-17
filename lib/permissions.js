/**
 * Created by phils on 17/02/16.
 * check that the userId specified owns the documents
 */
ownsDocument = function(userId, doc){
    return doc && doc.userId === userId;
}