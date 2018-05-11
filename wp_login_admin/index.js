
module.exports = {

    name: "Wordpress Login Admin",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_login_admin.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
