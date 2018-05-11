
module.exports = {

    name: "Wordpress Widget Twitter",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
