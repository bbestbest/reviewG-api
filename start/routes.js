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

  Route.resource('/users', 'UserController')
  Route.post('/login', 'UserController.login')

  Route.resource('/user_scores', 'UserScoreController')

  Route.resource('/admins', 'AdminController')
  Route.post('/login_admin', 'AdminController.login')

  Route.resource('/admin_scores', 'AdminScoreController')

  Route.resource('/comments', 'CommentController')

  Route.get('/posts', 'PostController.index')
  Route.get('/posts/:catagories', 'PostController.showByCatagories')
  Route.get('/posts/:catagories/:post_id', 'PostController.show')
  Route.post('/posts/', 'PostController.store')
  Route.patch('/posts/:id', 'PostController.update')
  Route.patch('/posts/:catagories/:post_id', 'PostController.updateViews')
  Route.delete('/posts/:catagories/:id', 'PostController.destroy')

  Route.get('/assets/:fileName','AssetController.show')
  Route.post('/assets', 'AssetController.upload')

}) .prefix('api/v1')

