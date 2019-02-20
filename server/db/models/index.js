const User = require('./user')
const Class = require('./class')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.belongsToMany(Class, {through: 'roster', as: 'instructor'})
User.belongsToMany(Class, {through: 'roster', as: 'student'})

Class.belongsToMany(User, {through: 'roster'})
// Class.belongsToMany(User, {as: 'Students'})
// Class.belongsToMany(User, {as: 'instructors'})

module.exports = {
  Class,
  User
}
