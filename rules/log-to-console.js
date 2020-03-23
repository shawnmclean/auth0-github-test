//lol
function (user, context, callback) {
  console.log(JSON.stringify({ user: user, context: context }, null, 2, 3));
  callback(null, user, context);
}
