//////////////
//  Styles  //
//////////////

require('../scss/app.scss'); // Global stylesheet

//////////////
//  Images  //
//////////////

require('../images/logo.svg');
require('../images/sparky.svg');
require('../images/voodoo.svg');
require('../images/rundeck_plugins.svg');

//////////////////
//  Javascript  //
//////////////////

import 'script!jquery';

import 'what-input/what-input.js';
import 'babel!foundation-sites/js/foundation.core.js';
import 'babel!foundation-sites/js/foundation.abide.js';
import 'babel!foundation-sites/js/foundation.dropdown.js';
import 'babel!foundation-sites/js/foundation.dropdownMenu.js';
import 'babel!foundation-sites/js/foundation.responsiveMenu.js';
import 'babel!foundation-sites/js/foundation.responsiveToggle.js';
import 'babel!foundation-sites/js/foundation.tabs.js';
import 'babel!foundation-sites/js/foundation.util.box.js';
import 'babel!foundation-sites/js/foundation.util.keyboard.js';
import 'babel!foundation-sites/js/foundation.util.mediaQuery.js';
import 'babel!foundation-sites/js/foundation.util.motion.js';
import 'babel!foundation-sites/js/foundation.util.nest.js';
import 'babel!foundation-sites/js/foundation.util.timerAndImageLoader.js';
import 'babel!foundation-sites/js/foundation.util.touch.js';
import 'babel!foundation-sites/js/foundation.util.triggers.js';
//import 'foundation-sites/js/foundation.accordion.js';
//import 'foundation-sites/js/foundation.accordionMenu.js';
//import 'foundation-sites/js/foundation.drilldown.js';
//import 'foundation-sites/js/foundation.equalizer.js';
//import 'foundation-sites/js/foundation.interchange.js';
//import 'foundation-sites/js/foundation.magellan.js';
//import 'foundation-sites/js/foundation.offcanvas.js';
//import 'foundation-sites/js/foundation.orbit.js';
//import 'foundation-sites/js/foundation.reveal.js';
//import 'foundation-sites/js/foundation.slider.js';
//import 'foundation-sites/js/foundation.sticky.js';
//import 'foundation-sites/js/foundation.toggler.js';
//import 'foundation-sites/js/foundation.tooltip.js';

import * as hljs from 'babel!highlight.js/lib/index.js';

$(document).ready(function ($) {
  $(document).foundation();
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});

//hljs.initHighlightingOnLoad();
