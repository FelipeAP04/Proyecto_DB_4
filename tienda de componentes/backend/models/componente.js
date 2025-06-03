// models/componente.js
module.exports = (sequelize, DataTypes) => {
  const Componente = sequelize.define('Componente', {
    codigo_serie: {
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_tipo_componente: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true,
        min: 0,
      },
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, {
    tableName: 'componentes',
    timestamps: false,
  });

  Componente.associate = models => {
    Componente.belongsTo(models.TipoComponente, {
      foreignKey: 'id_tipo_componente',
      as: 'tipo'
    });

    Componente.hasMany(models.EspecificacionComponente, {
      foreignKey: 'id_componente',
      as: 'especificaciones',
    });

    Componente.hasMany(models.Inventario, {
      foreignKey: 'id_componente',
      as: 'movimientosInventario',
    });
  };

  return Componente;
};
