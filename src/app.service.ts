import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  shellbackegroundtask(): void {
    setInterval(() => {
      const { exec } = require('child_process');
      exec('ls | grep js', (err, stdout, stderr) => {
        if (err) {
          //some err occurred
          console.error(err)
        } else {
          // the *entire* stdout and stderr (buffered)
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        }
      });
    }, 5000);
  }
}
