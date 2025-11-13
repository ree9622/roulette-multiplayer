const { spawn } = require('child_process');

// yarn dev 명령을 자식 프로세스로 실행
const child = spawn('yarn', ['dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('Error starting process:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});
