import AWS from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config()

AWS.config.update({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region,
    endpoint: process.env.endpoint,
});

const db = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });

export default db