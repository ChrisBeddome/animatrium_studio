import { DataTypes } from "sequelize";

import sequelize from "../lib/dbConnect.js";
const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    price: { 
      type: DataTypes.DECIMAL(8, 2),
      allowNull: true
    },
    imageUrl: { 
      type: DataTypes.STRING, 
      allowNull: true 
    },
  },
  {
    underscored: true,
  }
);

export default Product;