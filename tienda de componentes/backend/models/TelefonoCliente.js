module.exports = (sequelize, DataTypes) => {
  const TelefonoCliente = sequelize.define('TelefonoCliente', {
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
  }, {
    tableName: 'telefono_cliente',
    timestamps: false,
  });

  TelefonoCliente.associate = (models) => {
    TelefonoCliente.belongsTo(models.Cliente, {
      foreignKey: 'id_cliente',
      as: 'cliente',
    });
  };

  return TelefonoCliente;
};
