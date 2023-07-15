import { QueryInterface } from 'sequelize';
import { DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      // Create Films table
      await queryInterface.createTable(
        'Films',
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        },
        { transaction }
      );

      // Rest of the code...
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      // Rest of the code...
    });
  },
};
