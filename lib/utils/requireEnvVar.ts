export default function requireEnvVar(variableName: string): string {
  return process.env[variableName] || (() => { throw new Error(`Please add ${variableName} to .env`) })()
};
