'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
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
  //   console.log('recipe model find()')
  //   let entities;
  //   if (ctx.query._q) {
  //     entities = await strapi.services.restaurant.search(ctx.query);
  //   } else {
  //     entities = await strapi.services.restaurant.find(ctx.query);
  //   }

  //   return entities.map(entity => {
  //     console.log(entity);
  //     addCalculatedFields(entity);
  //     console.log(entity);
  //     return sanitizeEntity(entity, {
  //       model: strapi.models.restaurant,
  //     });
  //   });
  // },

  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  // async findOne(ctx) {
  //   console.log('recipe model findOne()');
  //   const { id } = ctx.params;

  //   const entity = await strapi.services.restaurant.findOne({ id });
  //   console.log(entity);
  //   addCalculatedFields(entity);
  //   console.log(entity);
  //   return sanitizeEntity(entity, { model: strapi.models.restaurant });
  // },
};
