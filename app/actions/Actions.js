var Fynx = require('fynx');
var Component = require('component');

var actions = Fynx.createActions([
  'articlesHotLoad',
  'articlesHotLoadMore',
  'articlesHotRefresh',
  'articlesHotRefreshed',
  'articleLoad',
  'userLoad'
]);

module.exports = actions;

// Required here so actions are bundled with the app
require('./ArticlesActions');
require('./UsersActions');