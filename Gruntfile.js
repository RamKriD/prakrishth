const dotenv = require("dotenv");

const envConfig = dotenv.config({ path: ".env" }).parsed;

module.exports = (grunt) => {
  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks("grunt-contrib-clean");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    exec: {
      buildDev: "npm run dev",
      buildProd: "npm run build",
      buildUIWatch: "npm run watch",
      serveDev: "npm run start",
    },
    clean: {
      dist: ["./client/dist"],
    },
  });

  grunt.registerTask("uiWatch", () => {
    if (envConfig.NODE_ENV === "development") {
      grunt.task.run(["clean", "exec:buildUIWatch"]);
    } else {
      console.log("Watch can run only in development environment");
    }
  });

  grunt.registerTask("serveDev", () => {
    if (envConfig.NODE_ENV === "development") {
      grunt.task.run(["exec:serveDev"]);
    } else {
      console.log("Dev Server can run only in development environment");
    }
  });

  grunt.registerTask("default", () => {
    if (envConfig.NODE_ENV === "development") {
      grunt.task.run(["clean", "exec:buildDev"]);
    } else if (envConfig.NODE_ENV === "production") {
      grunt.task.run(["clean", "exec:buildProd"]);
    } else {
      console.log(
        "Invalid environment. Please update env file to set correct environment"
      );
    }
  });
};
