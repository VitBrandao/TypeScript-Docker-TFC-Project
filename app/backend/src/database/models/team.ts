// 'use strict';
// const {
//   Model
// } = require('sequelize');
import { DataTypes, Model } from "sequelize";
import db from '.';

export default class Team extends Model {
  id: number;
  teamName: string;
}
Team.init({
  id: {
    autoIncrement: true,
    allowNull:false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize:db,
  modelName: 'Team',
  tableName: 'teams',
  timestamps: false,
});