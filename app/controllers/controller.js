
const db = require("../models/index.js");
const Brand = db.brands;
const Op = db.Sequelize.Op;

exports.list = async (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  const data = await Brand.findAll({ where: condition })
  res.send(data);
};

exports.update = async (req, res) => {
  const id = 2;
  const data = await Brand.update({brand: 'Brand updated sequelize'}, {
    where: { id }
  })
  res.send({
    message: "Brand was updated successfully."
  });
};

exports.delete = (req, res) => {
  const id = 4;
  const data = Brand.destroy({
    where: { id }
  })
  res.send({
    message: "Brand was deleted successfully."
  });
};

exports.insert = async (req, res) => {
  const data = await db.sequelize.query('INSERT INTO brands (brand) values (\'brands FR2\')')
  res.send({response: data});
};
