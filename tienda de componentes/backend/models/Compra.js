module.exports = (sequelize, DataTypes) => {
  const Compra = sequelize.define('Compra', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'compras',
    timestamps: false,
  });

  Compra.associate = (models) => {
    Compra.belongsTo(models.Proveedor, {
      foreignKey: 'id_proveedor',
      as: 'proveedor',
    });

    Compra.hasMany(models.DetalleCompra, {
      foreignKey: 'id_compra',
      as: 'detalles',
    });
  };

  return Compra;
};
