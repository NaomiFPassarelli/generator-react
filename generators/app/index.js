// var Generator = require("yeoman-generator");
//
// module.exports = class extends Generator {};
//
//
// module.exports = class extends Generator {
//   // The name `constructor` is important here
//   constructor(args, opts) {
//     // Calling the super constructor is important so our generator is correctly set up
//     super(args, opts);
//
//     // Next, add your custom code
//     this.option('babel'); // This method adds support for a `--babel` flag
//   }
// };
//
//
// module.exports = class extends Generator {
//   method1() {
//     this.log('method 1 just ran');
//     generator.log('Hey! Welcome to my awesome generator');
//   }
//
//   method2() {
//     this.log('method 2 just ran');
//   }
// };




'use strict';
var util            = require('util');
var yeoman          = require('yeoman-generator');
var chalk           = require('chalk');
// var updateNotifier  = require('update-notifier');
var pkg             = require('../../package.json');
// var opn             = require('opn');
var _               = require('lodash');
var proptypes 			= require('prop-types');

var KickoffGenerator = module.exports = function KickoffGenerator(args, options) {
	yeoman.Base.apply(this, arguments);
};


util.inherits(KickoffGenerator, yeoman.Base);


KickoffGenerator.prototype.askFor = function () {

	// Checks for available update and returns an instance
	// var notifier = updateNotifier({
	// 	packageName: pkg.name,
	// 	packageVersion: pkg.version,
	// 	updateCheckInterval: 1000 * 60 // Every hour
	// });

	var kickoffWelcome = chalk.white('\n  ██╗  ██╗██╗ ██████╗██╗  ██╗ ') + chalk.yellow('██████╗ ███████╗███████╗') + chalk.white('\n  ██║ ██╔╝██║██╔════╝██║ ██╔╝') + chalk.yellow('██╔═══██╗██╔════╝██╔════╝') + chalk.white('\n  █████╔╝ ██║██║     █████╔╝ ') + chalk.yellow('██║   ██║█████╗  █████╗') + chalk.white('\n  ██╔═██╗ ██║██║     ██╔═██╗ ') + chalk.yellow('██║   ██║██╔══╝  ██╔══╝') + chalk.white('\n  ██║  ██╗██║╚██████╗██║  ██╗') + chalk.yellow('╚██████╔╝██║     ██║') + chalk.white('\n  ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ') + chalk.yellow('╚═════╝ ╚═╝     ╚═╝') + '\n\n  ' + chalk.white.bold('A generator for the React Kickoff') + '\n\n  ';

	// Have Yeoman greet the user.
	this.log(kickoffWelcome);

	// notifier.notify();
	// if (notifier.update) {
	// 	// Check for npm package update and print message if needed
	// 	var updateMessage = chalk.yellow('   ╭────────────────────────────────────────────────╮\n   │') + ' Update available: '  + chalk.green(notifier.update.latest) + chalk.gray(' (current: ' + pkg.version + ')') + '       '+ chalk.yellow('│\n   │') + ' Run ' + chalk.cyan('npm update -g ' + pkg.name) + ' to update. ' + chalk.yellow('│\n   ╰────────────────────────────────────────────────╯\n');
	//
	// 	this.log(updateMessage);
	// }


	var prompts = [
		{
      type: 'input',
      name: 'projectName',
			message: 'Your Project name',
			default: 'Your project name'
		},
		{
      type: 'input',
      name: 'projectDescription',
			message: 'Description',
			default: 'Project description'
		},
		{
      type: 'input',
      name: 'repoUrl',
			message: 'What is the git repo url for this project?',
      store: true /*no estaba*/
		},
		// {
    //   type: 'checkbox',
		// 	name: 'features',
		// 	message: 'Which features would you like?',
		// 	choices: [
		// 		{
		// 			name: 'Use Kickoff Statix for static templating and rapid prototyping?',
		// 			value: 'statix'
		// 		},
		// 		{
		// 			name: 'Provide Flexbox feature-detect? Needed if you use our grid in non-flexbox supporting browsers',
		// 			value: 'flexboxFallback',
		// 			default: false,
		// 		},
		// 	],
		// 	store: true
		// },
		// {
    //   type: 'checkbox',
		// 	name: 'jsLibs',
		// 	message: 'Which Javascript libraries would you like to use?',
		// 	choices: [
		// 		{
		// 			name: 'lodash',
		// 			value: 'lodash'
		// 		},
		// 		{
		// 			name: 'lazysizes - High performance (jankfree) lazy loader for images (including responsive images)',
		// 			value: 'lazysizes'
		// 		},
		// 		{
		// 			name: 'Axios - Promise based HTTP client',
		// 			value: 'axios'
		// 		},
		// 		{
		// 			name: 'Flickity carousel - Touch, responsive, flickable galleries',
		// 			value: 'flickity'
		// 		},
		// 		{
		// 			name: 'attach.js - Attaches JavaScript to HTML without messy selectors',
		// 			value: 'attach'
		// 		},
		// 		{
		// 			name: 'dominus - Lean DOM Manipulation',
		// 			value: 'dominus'
		// 		},
		// 		{
		// 			name: 'jQuery',
		// 			value: 'jquery'
		// 		},
		// 		{
		// 			name: 'trak.js - Universal event tracking API',
		// 			value: 'trak'
		// 		},
		// 		{
		// 			name: 'Swiftclick - Eliminates the 300ms click event delay on touch devices',
		// 			value: 'swiftclick'
		// 		},
		// 		{
		// 			name: 'Use Modernizr?',
		// 			value: 'modernizr'
		// 		}
		// 	],
		// 	store: true
		// }
		{
      type    : 'confirm',
      name    : 'aphrodite',
      message : 'Would you like to enable aphrodite (or Radium - select only one of this)?'
    },
		{
      type    : 'confirm',
      name    : 'radium',
			message : 'Would you like to enable Radium (or Aphrodite - select only one of this)?'
    },
		{
      type    : 'confirm',
      name    : 'i18next',
      message : 'Would you like to enable i18next?'
    },
		{
      type    : 'confirm',
      name    : 'lodash',
      message : 'Would you like to enable lodash?'
    },
		{
      type    : 'confirm',
      name    : 'mobile-detect',
      message : 'Would you like to enable mobile-detect?'
    },
		{
      type    : 'confirm',
      name    : 'moment',
      message : 'Would you like to enable moment?'
    },
		{
      type    : 'confirm',
      name    : 'nuka-carousel',
      message : 'Would you like to enable nuka-carousel?'
    },
		{
      type    : 'confirm',
      name    : 'numeral',
      message : 'Would you like to enable numeral?'
    },
		{
      type    : 'confirm',
      name    : 'postcss',
      message : 'Would you like to enable postcss?'
    },
		{
      type    : 'confirm',
      name    : 'react-alert',
      message : 'Would you like to enable react-alert?'
    },
		{
      type    : 'confirm',
      name    : 'react-modal',
      message : 'Would you like to enable react-modal?'
    },
		{
      type    : 'confirm',
      name    : 'react-google-maps',
      message : 'Would you like to enable react-google-maps?'
    },
		{
      type    : 'confirm',
      name    : 'react-redux',
      message : 'Would you like to enable react-redux?'
    },
		{
      type    : 'confirm',
      name    : 'react-responsive',
      message : 'Would you like to enable react-responsive?'
    },
		{
      type    : 'confirm',
      name    : 'react-scroll',
      message : 'Would you like to enable react-scroll?'
    },
		{
      type    : 'confirm',
      name    : 'react-share',
      message : 'Would you like to enable react-share?'
    },
		{
      type    : 'confirm',
      name    : 'react-virtualized',
      message : 'Would you like to enable react-virtualized?'
    },
		{
      type    : 'confirm',
      name    : 'recharts',
      message : 'Would you like to enable recharts?'
    },
		{
      type    : 'confirm',
      name    : 'redux-beacon',
      message : 'Would you like to enable redux-beacon?'
    },
		{
      type    : 'confirm',
      name    : 'reselect',
      message : 'Would you like to enable reselect?'
    }
	];

	return this.prompt(prompts).then(function (answers) {
		for (var key in answers) {
			this[key] = answers[key];
		}

		// var jsLibs = answers.jsLibs;
		// var features = answers.features;

		function hasFeature(feat, prop) {
			return prop && prop.indexOf(feat) !== -1;
		}

		// JS Libs
		// this.includeTrak       = hasFeature('trak', jsLibs);
		// this.includeJquery     = hasFeature('jquery', jsLibs);
		// this.includeSwiftclick = hasFeature('swiftclick', jsLibs);
		// this.includeAxios = hasFeature('axios', jsLibs);
		// this.includeLodash = hasFeature('lodash', jsLibs);
		// this.includeLazysizes = hasFeature('lazysizes', jsLibs);
		// this.includeFlickity = hasFeature('flickity', jsLibs);
		// this.includeAttach = hasFeature('attach', jsLibs);
		// this.includeDominus = hasFeature('dominus', jsLibs);
		// this.includeModernizr  = hasFeature('modernizr', jsLibs);

		// Features
		// this.includeStatix     = hasFeature('statix', features);
		// this.flexboxFallback   = hasFeature('flexboxFallback', features);


		this.includeAphrodite = hasFeature('aphrodite', answers.aphrodite);
		this.includeRadium = hasFeature('radium', answers.radium);
		this.includeI18next = hasFeature('i18next', answers.i18next);
		this.includeLodash = hasFeature('lodash', answers.lodash);
		this.includeMobileDetect = hasFeature('mobile-detect', answers.mobile-detect);
		this.includeMoment = hasFeature('moment', answers.moment);
		this.includeNukaCarousel = hasFeature('nuka-carousel', answers.nuka-carousel);
		this.includeNumeral = hasFeature('numeral', answers.numeral);
		this.includePostcss = hasFeature('postcss', answers.postcss);
		this.includeReactAlert = hasFeature('react-alert', answers.react-alert);
		this.includeReactModal = hasFeature('react-modal', answers.react-modal);
		this.includeReactRedux = hasFeature('react-redux', answers.react-redux);
		this.includeReactResponsive = hasFeature('react-responsive', answers.react-responsive);
		this.includeReactScroll = hasFeature('react-scroll', answers.react-scroll);
		this.includeReactShare = hasFeature('react-share', answers.react-share);
		this.includeReactVirtualized = hasFeature('react-virtualized', answers.react-virtualized);
		this.includeRecharts = hasFeature('recharts', answers.recharts);
		this.includeReduxBeacon = hasFeature('redux-beacon', answers.redux-beacon);
		this.includeReselect = hasFeature('reselect', answers.reselect);
	}.bind(this));
};


/**
 * Info
 * http://yeoman.io/generator/actions_actions.html
 * http://yeoman.io/authoring/file-system.html
 */
KickoffGenerator.prototype.packageFiles = function packageFiles() {

	this.fs.copyTpl(
		this.templatePath('_index.html'),
		this.destinationPath('index.html'),
		{
			projectName: this.projectName,
			projectNameSlugified: _.kebabCase(this.projectName),
			// modernizr: this.includeModernizr,
			// flexboxFallback: this.flexboxFallback,
		}
	);

	// if (!this.includeStatix) {
	// 	this.fs.copyTpl(
	// 		this.templatePath('styleguide/_index.html'),
	// 		this.destinationPath('styleguide/index.html'),
	// 		{
	// 			projectName: this.projectName,
	// 			projectNameSlugified: _.kebabCase(this.projectName),
	// 			// modernizr: this.includeModernizr,
	// 			flexboxFallback: this.flexboxFallback,
	// 		}
	// 	);
	// }


	// CSS, SCSS, images source directory
	// this.directory('assets/dist/css', 'assets/dist/css');
	// this.directory('assets/src/scss', 'assets/src/scss');
	// this.directory('assets/src/img', 'assets/src/img');
	// this.directory('assets/src/svg', 'assets/src/svg');


	// Javascript
	this.fs.copyTpl(
		this.templatePath('assets/src/js/_script.js'),
		this.destinationPath('assets/src/js/script.js'),
		{
			projectName: this.projectName,
			devNames: this.devNames,
			// includeSwiftclick: this.includeSwiftclick,
			// includeTrak: this.includeTrak,
			// includeJquery: this.includeJquery,
			// includeAxios: this.includeAxios,
			// includeLodash: this.includeLodash,
			// includeLazysizes: this.includeLazysizes,
			// includeFlickity: this.includeFlickity,
			// includeDominus: this.includeDominus,
			// includeAttach: this.includeAttach,
			// statix: this.includeStatix,
		}
	);
	// this.fs.copyTpl(
	// 	this.templatePath('assets/src/js/styleguide.js'),
	// 	this.destinationPath('assets/src/js/styleguide.js'),
	// 	{}
	// );
	// this.fs.copyTpl(
	// 	this.templatePath('assets/src/js/README.md'),
	// 	this.destinationPath('assets/src/js/README.md'),
	// 	{}
	// );
	// this.directory('assets/src/js/modules', 'assets/src/js/modules');
	// this.directory('assets/src/js/standalone', 'assets/src/js/standalone');
	// this.directory('assets/src/js/utils', 'assets/src/js/utils');

	// TOOLING FILES
	// this.copy('gulpfile.js', 'gulpfile.js');
	// this.fs.copyTpl(
	// 	this.templatePath('.kickoff/config.js'),
	// 	this.destinationPath('.kickoff/config.js'),
	// 	{
	// 		statix: this.includeStatix,
	// 	}
	// );
	this.fs.copyTpl(
		this.templatePath('.kickoff/index.js'),
		this.destinationPath('.kickoff/index.js'),
		{}
	);
	this.fs.copyTpl(
		this.templatePath('.kickoff/readme.md'),
		this.destinationPath('.kickoff/readme.md'),
		{}
	);
	// Gulp + webpack tasks
	// this.fs.copyTpl(
	// 	this.templatePath('.kickoff/tasks/clean.js'),
	// 	this.destinationPath('.kickoff/tasks/clean.js'),
	// 	{
	// 		statix: this.includeStatix,
	// 	}
	// );
	// this.fs.copyTpl(
	// 	this.templatePath('.kickoff/tasks/compile.js'),
	// 	this.destinationPath('.kickoff/tasks/compile.js'),
	// 	{
	// 		statix: this.includeStatix,
	// 	}
	// );
	// this.fs.copyTpl(
	// 	this.templatePath('.kickoff/tasks/copy.js'),
	// 	this.destinationPath('.kickoff/tasks/copy.js'),
	// 	{
	// 		statix: this.includeStatix,
	// 	}
	// );
	this.fs.copyTpl(
		this.templatePath('.kickoff/tasks/css.js'),
		this.destinationPath('.kickoff/tasks/css.js'),
		{}
	);
	this.fs.copyTpl(
		this.templatePath('.kickoff/tasks/default.js'),
		this.destinationPath('.kickoff/tasks/default.js'),
		{}
	);
	this.fs.copyTpl(
		this.templatePath('.kickoff/tasks/images.js'),
		this.destinationPath('.kickoff/tasks/images.js'),
		{}
	);
	this.fs.copyTpl(
		this.templatePath('.kickoff/tasks/javascript.js'),
		this.destinationPath('.kickoff/tasks/javascript.js'),
		{}
	);
	// this.fs.copyTpl(
	// 	this.templatePath('.kickoff/tasks/serve.js'),
	// 	this.destinationPath('.kickoff/tasks/serve.js'),
	// 	{
	// 		statix: this.includeStatix,
	// 	}
	// );
	this.fs.copyTpl(
		this.templatePath('.kickoff/tasks/svg.js'),
		this.destinationPath('.kickoff/tasks/svg.js'),
		{}
	);
	this.fs.copyTpl(
		this.templatePath('.kickoff/tasks/test.js'),
		this.destinationPath('.kickoff/tasks/test.js'),
		{}
	);
	// this.fs.copyTpl(
	// 	this.templatePath('.kickoff/tasks/watch.js'),
	// 	this.destinationPath('.kickoff/tasks/watch.js'),
	// 	{
	// 		statix: this.includeStatix,
	// 	}
	// );
	this.fs.copyTpl(
		this.templatePath('.kickoff/tasks/webpack.config.js'),
		this.destinationPath('.kickoff/tasks/webpack.config.js'),
		{}
	);


	// Package.json
	this.fs.copyTpl(
		this.templatePath('_package.json'),
		this.destinationPath('package.json'),
		{
			projectName: this.projectName,
			projectNameSlugified: _.kebabCase(this.projectName),
			projectDescription: this.projectDescription,
			devNames: this.devNames,
			// includeSwiftclick: this.includeSwiftclick,
			// includeTrak: this.includeTrak,
			// includeJquery: this.includeJquery,
			// includeAxios: this.includeAxios,
			// includeLodash: this.includeLodash,
			// includeLazysizes: this.includeLazysizes,
			// includeFlickity: this.includeFlickity,
			// includeDominus: this.includeDominus,
			// includeAttach: this.includeAttach,
			// statix: this.includeStatix,
			repoUrl: this.repoUrl,
		}
	);

	this.fs.copyTpl(
		this.templatePath('_readme.md'),
		this.destinationPath('readme.md'),
		{
			projectName: this.projectName,
			projectDescription: this.projectDescription,
			devNames: this.devNames,
		}
	);

	this.fs.copyTpl(
		this.templatePath('_humans.txt'),
		this.destinationPath('humans.txt'),
		{
			projectName: this.projectName,
			projectDescription: this.projectDescription,
			devNames: this.devNames,
		}
	);

	this.copy('npmrc', '.npmrc');
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitignore', '.gitignore');
	this.copy('gitattributes', '.gitattributes');
	this.copy('robots.txt', 'robots.txt');

	// if (this.includeStatix) {
	// 	this.directory('statix/dist', 'statix/dist');
	//
	// 	this.directory('statix/src/data', 'statix/src/data');
	// 	this.directory('statix/src/helpers', 'statix/src/helpers');
	//
	// 	this.directory('statix/src/templates/views', 'statix/src/templates/views');
	// 	this.directory('statix/src/templates/layouts', 'statix/src/templates/layouts');
	// 	this.directory('statix/src/templates/partials', 'statix/src/templates/partials');
	//
	// 	this.fs.copyTpl(
	// 		this.templatePath('statix/src/templates/_html_start.hbs'),
	// 		this.destinationPath('statix/src/templates/partials/html_start.hbs'),
	// 		{
	// 			projectName: this.projectName,
	// 			projectNameSlugified: _.kebabCase(this.projectName),
	// 			projectDescription: this.projectDescription,
	// 			// modernizr: this.includeModernizr,
	// 			// flexboxFallback: this.flexboxFallback,
	// 		}
	// 	);
	//
	// 	// Styleguide
	// 	this.fs.copyTpl(
	// 		this.templatePath('statix/src/templates/_index.hbs'),
	// 		this.destinationPath('statix/src/templates/views/styleguide/index.hbs'),
	// 		{
	// 			projectName: this.projectName,
	// 		}
	// 	);
	// 	this.copy('statix/src/templates/styleguide-layout.hbs', 'statix/src/templates/layouts/styleguide.hbs');
	// }

	this.copy('bower.json', 'bower.json');
};


// KickoffGenerator.prototype.install = function packageFiles() {
// 	opn('http://trykickoff.com/learn/checklist.html');
// 	this.installDependencies();
// };
