// Import models
const Blog = require("./blog");
const User = require("./user");

// Define model associations
User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog };