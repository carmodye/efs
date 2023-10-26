
const { exec } = require('child_process')

const execPromise = async (command) => {
	console.log(command)
	return new Promise((resolve, reject) => {
		const ls = exec(command, function (error, stdout, stderr) {
		  if (error) {
		    console.log('Error: ', error)
		    reject(error)
		  }
		  console.log('stdout: ', stdout);
		  console.log('stderr: ' ,stderr);
		})
		
		ls.on('exit', function (code) {
		  console.log('Finished: ', code);
		  resolve()
		})
	})
}

// The Lambda handler
exports.lambdaHandler = async function (eventObject, context) {
	await execPromise('ls -l /mnt/efs')
}
