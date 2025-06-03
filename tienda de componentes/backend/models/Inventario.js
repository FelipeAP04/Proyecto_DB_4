module.exports = (sequelize, DataTypes) => {
  const Inventario = sequelize.define('Inventario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_componente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'componentes',
        key: 'id'
      },
      onDelete: 'RESTRICT', 
      onUpdate: 'CASCADE'
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_movimiento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'inventario',
    timestamps: false 
  });

  Inventario.associate = (models) => {
    Inventario.belongsTo(models.Componente, {
      foreignKey: 'id_componente',
      as: 'componente'
    });
  };

  return Inventario;
};
