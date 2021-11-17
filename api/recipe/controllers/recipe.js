'use strict';

// const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

// const PATH_PREFIX = 'recipes/';

// const addCalculatedFields = entity => {
//   entity.pathPrefix = PATH_PREFIX;
//   entity.path = PATH_PREFIX + entity.slug;
// };

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  // async find(ctx) {
  //   console.log('recipe controller find()')
  //   let entities;
  //   if (ctx.query._q) {
  //     entities = await strapi.services.recipe.search(ctx.query);
  //   } else {
  //     entities = await strapi.services.recipe.find(ctx.query);
  //   }

  //   return entities.map(entity => {
  //     addCalculatedFields(entity);
  //     return sanitizeEntity(entity, {
  //       model: strapi.models.recipe,
  //     });
  //   });
  // },

  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  // async findOne(ctx) {
  //   console.log('recipe controller findOne()');
  //   const { id } = ctx.params;
  //   const entity = await strapi.services.recipe.findOne({ id });
  //   addCalculatedFields(entity);
  //   return sanitizeEntity(entity, { model: strapi.models.recipe });
  // },
};
