// imports/api/items.js

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'; 

const Items = new Mongo.Collection('items');


Meteor.methods({
  'Items.addOne': ({ name }) => {
    return Items.insert({ name });
  },
});


// ADD THIS
Meteor.publish('items', () => {
  return Items.find();
});

export default Items;
