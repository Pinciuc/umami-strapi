'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const updateFieldsFromContentLink = async data => {
  if (!data.title && data.content_link.length) {
    const content_link = data.content_link[0];
    let model, content_id;

    switch (content_link.__component) {
      case 'menu-components.article-link':
        model = 'article';
        content_id = content_link.article;
        break;
      case 'menu-components.page-link':
        model = 'page';
        content_id = content_link.page;
        break;
      case 'menu-components.recipe-link':
        model = 'recipe';
        content_id = content_link.recipe;
        break;
      default:
        throw strapi.errors.badRequest('Invalid content_link.__component');
    }

    try {
      const content = await strapi.query(model).find({ id: content_id });

      if (!content.length)
        throw strapi.errors.badRequest('Invalid content content_link.id');
      if (!content[0].title)
        throw strapi.errors.badRequest('Content field Title is empty');

      // console.log(content)
      data.title = content[0].title;
    } catch (error) {
      throw strapi.errors.badRequest(error.message);
    }
  }

  if (!data.title) {
    throw strapi.errors.badRequest('Title is required');
  }
};

module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      // If so slug is manually set, create it based
      // on the required title field, otherwise pass
      // through the slug to re-slugify in case the user
      // added invalid characters that need to be stripped
      await updateFieldsFromContentLink(data);
    },
    beforeUpdate: async (params, data) => {
      // On every update, we also need to check that the user
      // didn't clear the slug - if so, regenerate it, otherwise strip
      // any invalid characters
      await updateFieldsFromContentLink(data);
    },
  },
};
