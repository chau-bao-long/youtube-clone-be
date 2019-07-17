const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server-express');
const { to } = require('await-to-js');

const { User } = require('../models');
const saltRounds = 10;

const resolvers = {
  Query: {
    userById: async (_, { id }) => User.findByPk(id),
    users: () => User.findAll(),
  },
  Mutation: {
    createUser: async (_, { input }, __) => {
      const hash = await bcrypt.hash(input.password, saltRounds);
      const [err, user] =  await to(User.create({ ...input, password: hash }));
      if (err) throw new UserInputError(err.message, err);
      return user;
    },
  },
};

module.exports = resolvers;
