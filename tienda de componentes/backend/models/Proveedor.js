module.exports = (sequelize, DataTypes) => {
  const Proveedor = sequelize.define('Proveedor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    telefono: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN, allowNull: false }
  }, {
    tableName: 'proveedores',
    timestamps: false
  });

  Proveedor.associate = (models) => {
    Proveedor.hasMany(models.Compra, {
      foreignKey: 'id_proveedor',
      as: 'compras'
    });
  };

  return Proveedor;
};
