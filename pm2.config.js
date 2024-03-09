module.exports = {
    apps : [{
      name: "next-app",
      script: "npm",
      args: "start",
      cwd: "./",
      watch: true,
      env: {
        NODE_ENV: "production",
      }
    }]
  };
  