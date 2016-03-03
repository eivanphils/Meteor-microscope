/**
 *@author eivanphils
 * @version 1.0
 * Configuracion que carga los datos  de 1 post con 2 comentarios de diferentes usuarios
 */
if (Posts.find().count() === 0) {

  var now = new Date().getTime();

  //create two users
  var philsId = Meteor.users.insert({
    profile: { name:'Phils Garcia' }
  });
  var phils = Meteor.users.findOne(philsId);
  var joseId = Meteor.users.insert({
    profile: { name: 'Jose Lopez'}
  });
  var jose = Meteor.users.findOne(joseId);

  var meteorPost = Posts.insert({
    title: 'Meteor',
    userId: phils._id,
    author: phils.profile.name,
    url: 'http://meteor.com',
    submitted: new Date( now - 7 * 3600 * 1000)
  });

  Comments.insert({
    postId: meteorPost,
    userId: phils._id,
    author: phils.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'this is a great framework'
  });

  Comments.insert({
    postId: meteorPost,
    userId: jose._id,
    author: jose.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'ohhh Meteor, it\' wondrefull!!!'
  });

  Posts.insert({
    title: 'Google',
    userId: jose._id,
    author: jose.profile.name,
    url: 'http://google.com',
    submitted: new Date( now - 10 * 3600 * 1000)
  });

  Posts.insert({
    title: 'Linkedin',
    userId: jose._id,
    author: jose.profile.name,
    url: 'http://linkedin.com',
    submitted: new Date( now - 12 * 3600 * 1000)
  });
}