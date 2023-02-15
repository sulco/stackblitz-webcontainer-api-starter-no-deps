/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
    'index.js': {
      file: {
        contents: 'console.log(`Hello Node ${process.version}`)',
      },
    },
    'package.json': {
      file: {
        contents: `
          {
            "name": "example-app",
            "type": "module",
            "dependencies": {
            },
            "scripts": {
              "start": "node index.js"
            }
          }`,
      },
    },
  };