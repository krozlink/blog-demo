const mongodb = require('mongodb').MongoClient;

let conn = null;
const CONNECTION_STRING = '<CONNECTION STRING>';
const DB_NAME = "<DB NAME>"

async function checkConnection() {
  if(conn === null) {
    console.log('connecting');
    try{
      const db = await mongodb.connect(CONNECTION_STRING);
      conn = db.db(DB_NAME);
    } catch (error) {
      console.error(error);
    }  
  }
}

async function post(args) {
  await checkConnection();
  
  const resp = await conn.collection('posts').findOne({
    'id': args.id
  });

  return resp;
}

async function posts(args) {
  await checkConnection();
  const resp = await conn.collection('posts').find({}).toArray();

  return resp;
}

module.exports = {
  post,
  posts,
};