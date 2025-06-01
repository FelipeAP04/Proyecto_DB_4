module.exports = (sequelize, DataTypes) => {
  const DetalleCompra = sequelize.define('DetalleCompra', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_compra: { type: DataTypes.INTEGER },
    id_componente: { type: DataTypes.INTEGER },
    cantidad: { type: DataTypes.FLOAT, allowNull: false },
    precio_unitario: { type: DataTypes.FLOAT, allowNull: false },
    sub_total: { type: DataTypes.FLOAT, allowNull: false }
  }, {
    tableName: 'detalle_compras',
    timestamps: false
  });

  DetalleCompra.associate = (models) => {
    DetalleCompra.belongsTo(models.Compra, {
      foreignKey: 'id_compra',
      as: 'compra'
    });

    DetalleCompra.belongsTo(models.Componente, {
      foreignKey: 'id_componente',
      as: 'componente'
    });
  };

  return DetalleCompra;
};
