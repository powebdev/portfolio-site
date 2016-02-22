var exports = module.exports = {};

exports.myInfo = {
	name: 'PO TONG',
	title: 'WEB DEVELOPER',
	bio: 'Hello, my name is Po, and I am a web developer who is versed in technologies from both front-end and back-end development. During my last job, I was tasked with implementing a data acquisition program and it sparked my desire of pursuing a career in software development. I had been tinkering with coding as a hobby before that, and working on the project on a daily basis made my realize this is something I can and want to do day in and day out. So, driven by this new found passion, armed with some basic knowledge of coding, and the vast amount of resources available online, I jumped right into the field of web development. I chose the field of web development because of how fast everything is progressing and the amount of technologies available out there. I find that fasinating and look forward to learn new things everyday.',
	email: 'potong616@gmail.com',
	github: 'https://github.com/powebdev',
	linkedin: 'https://www.linkedin.com/in/potong',
	pic: 'img/po.png'
};

exports.skills = [
	{
		name: 'Node.js',
		url: 'https://nodejs.org/',
		icon: 'img/icons/nodejs.svg',
		description: 'I just wanted to use npm at first.'
	},
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		icon: 'img/icons/javascript.svg',
		description: 'JavaScript'
	},
	{
		name: 'Sass',
		url: 'http://sass-lang.com/',
		icon: 'img/icons/sass.svg',
		description: 'Syntatically Awesome Style Sheet'
	},
	{
		name: 'HTML5',
		url: 'http://www.w3schools.com/html/html5_intro.asp',
		icon: 'img/icons/html5.svg',
		description: 'HTML5'
	},
	{
		name: 'CSS3',
		url: 'http://www.w3schools.com/css/css_intro.asp',
		icon: 'img/icons/css3.svg',
		description: 'CSS3'
	},
	{
		name: 'Jade',
		url: 'http://jade-lang.com/',
		icon: null,
		description: 'Jade'
	},
	{
		name: 'Python',
		url: 'https://www.python.org/',
		icon: 'img/icons/python.svg',
		description: 'To fly, import antigravity'
	},
	{
		name: 'jQuery',
		url: 'https://jquery.com/',
		icon: 'img/icons/jquery.svg',
		description: 'jQuery'
	},
	{
		name: 'AJAX',
		url: 'https://developer.mozilla.org/en-US/docs/AJAX',
		icon: null,
		description: 'Asynchronous JavaScript and XML'
	},
	{
		name: 'Jasmine',
		url: 'http://jasmine.github.io/',
		icon: null,
		description: 'Behavior-Driven JavaSCript'
	},
	{
		name: 'Mocha',
		url: 'https://mochajs.org/',
		icon: null,
		description: 'JS test framework'
	},
	{
		name: 'Gulp',
		url: 'http://gulpjs.com/',
		icon: 'img/icons/gulp.svg',
		description: 'Build All The Things!'
	},
	{
		name: 'Java',
		url: 'http://www.oracle.com/technetwork/java/index.html',
		icon: 'img/icons/java.svg',
		description: 'Java'
	},
	{
		name: 'SQLite',
		url: 'https://www.sqlite.org/',
		icon: null,
		description: 'SQLite'
	},
	{
		name: 'PostgreSQL',
		url: 'http://www.postgresql.org/',
		icon: 'img/icons/postgresql.svg',
		description: 'PostgreSQL'
	},
	{
		name: 'Google App Engine',
		url: 'https://cloud.google.com/appengine/',
		icon: null,
		description: 'GAE'
	},
	{
		name: 'Flask',
		url: 'http://flask.pocoo.org/',
		icon: null,
		description: 'Flask'
	},
	{
		name: 'Django',
		url: 'https://www.djangoproject.com/',
		icon: 'img/icons/django.svg',
		description: 'The D is silent'
	},
	{
		name: 'OAuth',
		url: 'http://oauth.net/',
		icon: null,
		description: 'OAuth'
	},
	{
		name: 'Linux',
		url: 'https://www.linux.com/',
		icon: 'img/icons/linux.svg',
		description: 'Mostly Ubuntu'
	},
	{
		name: 'Polymer',
		url: 'https://www.polymer-project.org/',
		icon: null,
		description: 'Make your own elements'
	},
	{
		name: 'Bootstrap',
		url: 'http://getbootstrap.com/',
		icon: 'img/icons/bootstrap.svg',
		description: 'Bootstrap'
	},
	{
		name: 'GIMP',
		url: 'https://www.gimp.org/',
		icon: 'img/icons/gimp.svg',
		description: 'GNU Image Manipulation Program'
	},
	{
		name: 'Inkscape',
		url: 'https://inkscape.org/',
		icon: 'img/icons/inkscape.svg',
		description: 'Inkscape'
	},
	{
		name: 'Git',
		url: 'https://git-scm.com/',
		icon: 'img/icons/git.svg',
		description: 'Git'
	},
	{
		name: 'Android',
		url: 'http://developer.android.com/index.html',
		icon: 'img/icons/android.svg',
		description: 'Android'
	},
];

exports.projects = [
	{
		name: 'Video Game Database',
		image: 'img/projects/vgdb.png',
		url: {liveSite: null, github: 'https://github.com/powebdev/catalog_project'},
		technologies: ['Python', 'Flask'],
		description: 'A database driven website for cataloging your favorite video games.'
	},
	{
		name: 'Website Optimization',
		image: 'img/projects/webperf.png',
		url: {liveSite: null, github: 'https://github.com/powebdev/webperf'},
		technologies: ['JavaScript'],
		description: 'Optimization of existing website with the help of PageSpeed Insights and Chrome Dev Tools.'
	},
	{
		name: 'Frogger',
		image: 'img/projects/frogger.png',
		url: {liveSite: null, github: 'https://github.com/powebdev/js_frogger'},
		technologies: ['JavaScript'],
		description: 'Recreation of the classic arcade game Frogger.'
	},
	{
		name: 'Conference App',
		image: 'img/projects/conference.png',
		url: {liveSite: 'https://project-4-conference-app-1152.appspot.com/', github: 'https://github.com/powebdev/p4_conference'},
		technologies: ['Python', 'Google App Engine'],
		description: 'A website using Google App Engine PaaS.'
	},
	{
		name: 'Portfolio Site',
		image: 'img/projects/portfolio.png',
		url: {liveSite: 'http://www.powebdev.com', github: 'https://github.com/powebdev/portfolio-site'},
		technologies: ['JavaScript', 'Node.js', 'Sass'],
		description: 'This is where you are right now.'
	}
];
