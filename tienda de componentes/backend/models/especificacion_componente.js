// models/especificacion_componente.js
module.exports = (sequelize, DataTypes) => {
  const EspecificacionComponente = sequelize.define('EspecificacionComponente', {
    id_componente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    especificacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    valor: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'especificaciones_componente',
    timestamps: false,
  });

  EspecificacionComponente.associate = models => {
    EspecificacionComponente.belongsTo(models.Componente, {
      foreignKey: 'id_componente',
      as: 'componente'
    });
  };

  return EspecificacionComponente;
};
