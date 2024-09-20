import db from "../../config/database.js";

export const updateUserDoc = async (tableName, primaryKey, reqBody) => {
    const params = {
        TableName: tableName,
        Key: { user_id: primaryKey },
        UpdateExpression: '',
        ExpressionAttributeNames: {},
        ExpressionAttributeValues: {},
        ReturnValues: 'UPDATED_NEW',
    };

    // Initialize an array to hold the parts of the update expression
    const updateExpressionParts = [];

    // Check for each field and build the update expression if the value is provided
    if (reqBody.first_name) {
        updateExpressionParts.push('#fn = :firstName');
        params.ExpressionAttributeNames['#fn'] = 'first_name';
        params.ExpressionAttributeValues[':firstName'] = reqBody.first_name;
    }
    if (reqBody.last_name) {
        updateExpressionParts.push('#ln = :lastName');
        params.ExpressionAttributeNames['#ln'] = 'last_name';
        params.ExpressionAttributeValues[':lastName'] = reqBody.last_name;
    }
    if (reqBody.email) {
        updateExpressionParts.push('#em = :email');
        params.ExpressionAttributeNames['#em'] = 'email';
        params.ExpressionAttributeValues[':email'] = reqBody.email;
    }

    // If no fields are provided, do not proceed with the update
    if (updateExpressionParts.length === 0) {
        return { message: 'No fields to update' };
    }

    // Join the parts into a single update expression
    params.UpdateExpression = 'SET ' + updateExpressionParts.join(', ');

    try {
        const result = await db.update(params).promise();
        return { message: 'Update succeeded', data: result.Attributes };
    } catch (error) {
        console.error('Unable to update item. Error:', error);
        return new Error('Update failed');
    }
};
