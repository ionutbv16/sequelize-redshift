
module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      brand: {
        type: Sequelize.STRING
      }
    });
    /*
    Brand.sync().then(() => {
      console.log('New table created');
  })*/
    return Brand;
  };
