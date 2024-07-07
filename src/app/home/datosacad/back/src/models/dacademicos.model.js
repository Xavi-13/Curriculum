const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('curriculum', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

class DatosAcademicos extends Model {}

DatosAcademicos.init({
  iddatoacademico: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  idpersona: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion_perfil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idinstitucion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idnivelacademico: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  iddisciplina: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechainicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechatermino: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ididioma: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nivelidioma: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'DatosAcademicos',
  tableName: 'datosacademicos',
  timestamps: false,
  freezeTableName: true,
  underscored: true,
});

module.exports = DatosAcademicos;

async function conectarBaseDatos() {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');
  } catch (e) {
    console.log('No se pudo conectar a la base de datos', e);
  }
}

conectarBaseDatos();
