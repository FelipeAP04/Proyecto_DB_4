module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    tableName: 'clientes',
    timestamps: false,
  });

  Cliente.associate = (models) => {
    Cliente.hasMany(models.TelefonoCliente, {
      foreignKey: 'id_cliente',
      as: 'telefonos',
    });
    Cliente.hasOne(models.DireccionCliente, {
      foreignKey: 'id_cliente',
      as: 'direccionCliente',
    });
  };

  return Cliente;
};
