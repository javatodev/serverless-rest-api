'use strict';

module.exports.readTodos = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Reading todos from DB.'
        }
        ),
    };
  };