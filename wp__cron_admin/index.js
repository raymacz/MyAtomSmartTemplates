
module.exports = {

    name: "Wordpress Cron Admin",

    directory: false,

    params: ["Title"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "RBTM_cron_admin.php",           sourceTemplateFile: "index.template"    }
        ]
      });

    }

}
