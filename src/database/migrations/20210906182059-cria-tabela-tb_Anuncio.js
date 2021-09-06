module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_AnuncioWebmotors', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      marca: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      modelo: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      versao: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      ano: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quilometragem: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      observacao: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('tb_AnuncioWebmotors');
  },
};
