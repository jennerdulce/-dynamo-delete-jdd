'use strict';

const clientsModel = require('./schema.js');


exports.handler = async (event) => {
  console.log('EVENT', event)
  try {
    const id = event.queryStringParameters.id
    await clientsModel.delete({"id": id})
    const strigifiedId = JSON.stringify(id)
    return {
      statusCode: 201,
      body: `ID: ${strigifiedId} HAS SUCESSFULLY BEEN DELETED!`
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }
}