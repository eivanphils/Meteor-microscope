/**
 * Created by phils on 17/02/16.
 * local colecction (client-only)
 */
Errors = new Mongo.Collection(null);

throwError = function(message){
    Errors.insert({message: message});
};