const { spawnSync } = require('child_process');
const path = require('path');

test('run-sintracode prints banner and exits', () => {
  const scriptPath = path.resolve(__dirname, '..', 'run-sintracode');
  const result = spawnSync('bash', [scriptPath, '-p', 'echo test'], { encoding: 'utf8' });
  // stdout should contain the banner text
  expect(result.stdout).toMatch(/Welcome to Sintra/);
  // Process should exit with code 0
  expect(result.status).toBe(0);
});
