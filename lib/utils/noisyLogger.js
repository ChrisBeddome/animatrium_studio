export default function noisyLogger(message) {
  if (process.env.ENABLE_NOISY_LOGS == 'true') {
    console.log(message)
  }
};
