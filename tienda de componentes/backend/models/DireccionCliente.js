module.exports = (sequelize, DataTypes) => {
  const DireccionCliente = sequelize.define('DireccionCliente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const rawValue = this.getDataValue('direccion');
        if (!rawValue) return null;
        // Parse the PostgreSQL record format
        const matches = rawValue.match(/\((.*?),(.*?),(.*?)\)/);
        if (matches) {
          return {
            calle: matches[1].replace(/^"|"$/g, ''),
            ciudad: matches[2].replace(/^"|"$/g, ''),
            codigo_postal: matches[3].replace(/^"|"$/g, '')
          };
        }
        return null;
      },
      set(value) {
        if (typeof value === 'object') {
          this.setDataValue('direccion',
            `ROW('${value.calle || ''}','${value.ciudad || ''}','${value.codigo_postal || ''}')`);
        } else {
          this.setDataValue('direccion', value);
        }
      }
    }
  }, {
    tableName: 'direccion_cliente',
    timestamps: false
  });

  DireccionCliente.associate = (models) => {
    DireccionCliente.belongsTo(models.Cliente, {
      foreignKey: 'id_cliente',
      as: 'cliente'
    });
  };

  return DireccionCliente;
};
