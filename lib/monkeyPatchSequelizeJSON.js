import Sequelize from 'sequelize';

// next.js/packages/next/lib/is-serializable-props.ts does not support date objects
// All of our models have date objects in the form of createdAt and updatedAt
// JSON.parse(JSON.stringify(instance)) is a hack to fix this issue

export default function patch() {
  const original = Sequelize.Model.prototype.toJSON;
  if (!Sequelize.MONKEYED) {
    Sequelize.Model.prototype.toJSON = function() {
      return JSON.parse(JSON.stringify(original.call(this)));
    }
  }
  Sequelize.MONKEYED = true;
};

