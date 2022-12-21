export default function requireEnvVar(variableName) {
  return process.env[variableName] || (() => { throw new Error(`Please add ${variableName} to .env`) })()
};
