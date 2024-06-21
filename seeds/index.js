const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = [
    {
        first_name: "George",
        last_name: "Hernandez",
        email: "test@example.com",
        password: "password123"
    },
    {
        first_name: "Ben",
        last_name: "Walters",
        email: "example@test.com",
        password: "123password"
    }
];

const blogData = [
    {
        title: "My First Blog",
        description: "This is my first blog post",
        user_id: 1
    }
];

const seedData = async () => {
  await sequelize.sync({force: true});

  await User.bulkCreate(userData, {
    individualHooks: true,
  })

  await Blog.bulkCreate(blogData)
  process.exit(0)
};

seedData();