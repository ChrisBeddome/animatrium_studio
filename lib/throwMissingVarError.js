
export default function throwMissingVarError(variableName) {
  throw new Error(`Please add ${variableName} to .env.local`);
};