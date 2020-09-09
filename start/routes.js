'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => { 

  Route.resource('/accounts', 'AccountController')
  
  Route.resource('/admins', 'AdminController')

  Route.resource('/user_scores', 'UserScoreController')

  Route.resource('/admin_scores', 'AdminScoreController')

  Route.resource('/comments', 'CommentController')

  Route.resource('/posts', 'PostController')

}) .prefix('api/v1')

