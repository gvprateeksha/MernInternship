import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

import React from 'react'

const Demo =async () =>  {

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const filter = {};

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('aiml').collection('students');
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();


console.log(result);

  return (
    <div>
        
       <h1>Students</h1>
    </div>
  )
}

export default Demo
