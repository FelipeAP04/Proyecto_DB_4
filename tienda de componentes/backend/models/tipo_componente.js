// models/tipo_componente.js
module.exports = (sequelize, DataTypes) => {
  const TipoComponente = sequelize.define('TipoComponente', {
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  }, {
    tableName: 'tipos_componentes',
    timestamps: false,
  });

  TipoComponente.associate = models => {
    TipoComponente.hasMany(models.Componente, {
      foreignKey: 'id_tipo_componente',
      as: 'componentes'
    });
  };

  return TipoComponente;
};
