"use strict";
// var util = require("util");
// var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var pkg = require("../../package.json");
var _ = require("lodash");
var proptypes = require("prop-types");

var apisauce = require("apisauce");
var history = require("history");
var react = require("react");
var reactAddonsPerf = require("react-addons-perf");
var reactDom = require("react-dom");
var reactRedux = require("react-redux");
var reactRouter = require("react-router");
var reactRouterDom = require("react-router-dom");
var reactRouterRedux = require("react-router-redux");
var redux = require("redux");
var reduxBeacon = require("redux-beacon");
var reduxForm = require("redux-form");
var reduxThunk = require("redux-thunk");
var seamlessImmutable = require("seamless-immutable");

// var KickoffGenerator = (module.exports = function KickoffGenerator(
//   args,
//   options
// ) {
//   yeoman.Base.apply(this, arguments);
// });

// util.inherits(KickoffGenerator, yeoman.Base);

var Generator = require("yeoman-generator");

class GeneratorReact extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  welcome() {
    var kickoffWelcome =
      chalk.white("\n  ██╗  ██╗██╗ ██████╗██╗  ██╗ ") +
      chalk.yellow("██████╗ ███████╗███████╗") +
      chalk.white("\n  ██║ ██╔╝██║██╔════╝██║ ██╔╝") +
      chalk.yellow("██╔═══██╗██╔════╝██╔════╝") +
      chalk.white("\n  █████╔╝ ██║██║     █████╔╝ ") +
      chalk.yellow("██║   ██║█████╗  █████╗") +
      chalk.white("\n  ██╔═██╗ ██║██║     ██╔═██╗ ") +
      chalk.yellow("██║   ██║██╔══╝  ██╔══╝") +
      chalk.white("\n  ██║  ██╗██║╚██████╗██║  ██╗") +
      chalk.yellow("╚██████╔╝██║     ██║") +
      chalk.white("\n  ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ") +
      chalk.yellow("╚═════╝ ╚═╝     ╚═╝") +
      "\n\n  " +
      chalk.white.bold("A generator for the React Kickoff") +
      "\n\n  ";

    this.log(kickoffWelcome);
  }

  askFor() {
    var prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Your Project name",
        default: "Your project name",
        store: true
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Description",
        default: "Project description",
        store: true
      },
      {
        type: "input",
        name: "repoUrl",
        message: "What is the git repo url for this project?",
        store: true
      },
      {
        type: "confirm",
        name: "aphrodite",
        message:
          "Would you like to enable aphrodite (or Radium - select only one of this)?"
      },
      {
        type: "confirm",
        name: "radium",
        message:
          "Would you like to enable Radium (or Aphrodite - select only one of this)?"
      },
      {
        type: "confirm",
        name: "i18next",
        message: "Would you like to enable i18next?"
      },
      // {
      //   type: "confirm",
      //   name: "lodash",
      //   message: "Would you like to enable lodash?"
      // },
      {
        type: "confirm",
        name: "mobileDetect",
        message: "Would you like to enable mobile-detect?"
      },
      {
        type: "confirm",
        name: "moment",
        message: "Would you like to enable moment?"
      },
      {
        type: "confirm",
        name: "nukaCarousel",
        message: "Would you like to enable nuka-carousel?"
      },
      {
        type: "confirm",
        name: "numeral",
        message: "Would you like to enable numeral?"
      },
      {
        type: "confirm",
        name: "postcss",
        message: "Would you like to enable postcss?"
      },
      {
        type: "confirm",
        name: "reactAlert",
        message: "Would you like to enable react-alert?"
      },
      {
        type: "confirm",
        name: "reactModal",
        message: "Would you like to enable react-modal?"
      },
      {
        type: "confirm",
        name: "reactGoogleMaps",
        message: "Would you like to enable react-google-maps?"
      },
      {
        type: "confirm",
        name: "reactResponsive",
        message: "Would you like to enable react-responsive?"
      },
      {
        type: "confirm",
        name: "reactScroll",
        message: "Would you like to enable react-scroll?"
      },
      {
        type: "confirm",
        name: "reactShare",
        message: "Would you like to enable react-share?"
      },
      {
        type: "confirm",
        name: "reactVirtualized",
        message: "Would you like to enable react-virtualized?"
      },
      {
        type: "confirm",
        name: "recharts",
        message: "Would you like to enable recharts?"
      },
      {
        type: "confirm",
        name: "reselect",
        message: "Would you like to enable reselect?"
      }
    ];

    return this.prompt(prompts).then(
      function(answers) {
        for (var key in answers) {
          this[key] = answers[key];
        }

        function hasFeature(feat, prop) {
          return prop && prop.indexOf(feat) !== -1;
        }

        this.includeAphrodite = hasFeature("aphrodite", answers.aphrodite);
        this.includeRadium = hasFeature("radium", answers.radium);
        this.includeInext = hasFeature("i18next", answers.i18next);
        // this.includeLodash = hasFeature("lodash", answers.lodash);
        this.includeMobileDetect = hasFeature(
          "mobileDetect",
          answers.mobileDetect
        );
        this.includeMoment = hasFeature("moment", answers.moment);
        this.includeNukaCarousel = hasFeature(
          "nukaCarousel",
          answers.nukaCarousel
        );
        this.includeNumeral = hasFeature("numeral", answers.numeral);
        this.includePostcss = hasFeature("postcss", answers.postcss);
        this.includeReactAlert = hasFeature("reactAlert", answers.reactAlert);
        this.includeReactModal = hasFeature("reactModal", answers.reactModal);
        this.includeReactGoogleMaps = hasFeature(
          "reactGoogleMaps",
          answers.reactGoogleMaps
        );
        this.includeReactResponsive = hasFeature(
          "reactResponsive",
          answers.reactResponsive
        );
        this.includeReactScroll = hasFeature(
          "reactScroll",
          answers.reactScroll
        );
        this.includeReactShare = hasFeature("reactShare", answers.reactShare);
        this.includeReactVirtualized = hasFeature(
          "reactVirtualized",
          answers.reactVirtualized
        );
        this.includeRecharts = hasFeature("recharts", answers.recharts);
        this.includeReselect = hasFeature("reselect", answers.reselect);
      }.bind(this)
    );
  }

  addFiles() {
    this.fs.copyTpl(
      this.templatePath("_index.html"),
      this.destinationPath("index.html"),
      {
        projectName: this.projectName,
        projectNameSlugified: _.kebabCase(this.projectName)
      }
    );
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        projectName: this.projectName,
        projectNameSlugified: _.kebabCase(this.projectName),
        projectDescription: this.projectDescription,
        repoUrl: this.repoUrl,
        includeAphrodite: this.includeAphrodite,
        includeRadium: this.includeRadium,
        includeInext: this.includeInext,
        // includeLodash: this.includeLodash,
        includeMobileDetect: this.includeMobileDetect,
        includeMoment: this.includeMoment,
        includeNukaCarousel: this.includeNukaCarousel,
        includeNumeral: this.includeNumeral,
        includePostcss: this.includePostcss,
        includeReactAlert: this.includeReactAlert,
        includeReactModal: this.includeReactModal,
        includeReactGoogleMaps: this.includeReactGoogleMaps,
        includeReactResponsive: this.includeReactResponsive,
        includeReactScroll: this.includeReactScroll,
        includeReactShare: this.includeReactShare,
        includeReactVirtualized: this.includeReactVirtualized,
        includeRecharts: this.includeRecharts,
        includeReselect: this.includeReselect
      }
    );
    this.copy("src", "src");
    this.copy("src/index.js", "src/index.js");
    this.copy("src/app", "src/app");
    this.copy("src/app/assets", "src/app/assets");
    this.copy("src/app/components", "src/app/components");
    this.copy("src/app/components/Routes", "src/app/components/Routes");
    this.copy(
      "src/app/components/Routes/components",
      "src/app/components/Routes/components"
    );
    this.copy(
      "src/app/components/Routes/components/AuthenticatedRoute.js",
      "src/app/components/Routes/components/AuthenticatedRoute.js"
    );
    this.copy(
      "src/app/components/Routes/constants.js",
      "src/app/components/Routes/constants.js"
    );
    this.copy(
      "src/app/components/Routes/index.js",
      "src/app/components/Routes/index.js"
    );
    this.copy("src/app/screens", "src/app/screens");
    this.copy("src/app/index.js", "src/app/index.js");
    this.copy("src/app/styles.js", "src/app/styles.js");
    this.copy("src/config", "src/config");
    this.copy("src/config/api.js", "src/config/api.js");
    this.copy("src/config/i18n.js", "src/config/i18n.js");
    this.copy("src/config/perf.js", "src/config/perf.js");
    this.copy("src/constants", "src/constants");
    this.copy("src/redux", "src/redux");
    this.copy("src/redux/store.js", "src/redux/store.js");
    this.copy("src/services", "src/services");
    this.copy("src/utils", "src/utils");
    this.copy("src/utils/colors.js", "src/utils/colors.js");
    this.copy("gitignore", ".gitignore");

    if (this.includeNumeral) {
      this.copy("src/config/numeral.js", "src/config/numeral.js");
    }
    if (this.includeReduxBeacon) {
      this.copy(
        "src/services/AnalyticsService.js",
        "src/services/AnalyticsService.js"
      );
    }
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: true
    });
  }

  // configuring() {
  //   return (
  //     Promise.resolve()
  //       // .then(() => reactNativeCliInstall.bind(this)())
  //       // .then(() => reactNativeInit.bind(this)())
  //       .then(() => installDependencies.bind(this)())
  //   );
  // }
  //
  // writing() {
  //   appSetup.bind(this)();
  // }
  //
  // install() {
  //   return (
  //     Promise.resolve()
  //       .then(() => bundleInstall.bind(this)())
  //       // .then(() => reactNativeLink.bind(this)())
  //       .then(() => gitInitialization.bind(this)())
  //   );
  // }
  //
  // end() {
  //   nextSteps.bind(this)();
  // }
}

// generators.Base.extend({
//   install: function() {
//     this.installDependencies({
//       npm: false,
//       bower: true,
//       yarn: true
//     });
//   }
// });

module.exports = ReactNativeBootstrap;

// KickoffGenerator.prototype.install = function packageFiles() {
// 	opn('http://trykickoff.com/learn/checklist.html');
// 	this.installDependencies();
// };
