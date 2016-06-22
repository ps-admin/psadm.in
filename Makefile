#===============================================================================
# vim: softtabstop=2 shiftwidth=2 noexpandtab fenc=utf-8 spelllang=en nolist
#===============================================================================
#
# NOTES
# -----
#  * hugo is used for building the app pages from templates
#  * npm is used for local development utilities, including...
#		 * uglify: used for javascript minification
#  * bower is used for frontend assets, including...
#    * jquery
#    * bootstrap 3
#    * fastclick
#    * adminlte app
#    * slimscroll
#    * chart.js
#    * datatables
#    * D3

#sass:
	#@sass assets/scss/app.scss static/css/app.css --load-path assets/foundation/scss --load-path assets/motion-ui/src

.PHONY : all server public-server setup watch-assets clean

SASS_SRC := src/scss
JS_SRC   := src/js
CSS_DIR  := static/assets/css
JS_DIR   := static/assets/js
FONT_DIR := static/assets/fonts
BIN      := node_modules/.bin
JS_LIB_FILE := $(JS_DIR)/lib.js
JS_LIBS := bower_components/jquery/dist/jquery.js \
	bower_components/bootstrap/dist/js/bootstrap.js \
FONT_LIBS := bower_components/font-awesome/fonts \
	bower_components/Ionicons/fonts

all: $(CSS_DIR)/*.css $(JS_DIR)/app.js $(JS_LIB_FILE)

$(CSS_DIR)/*.css: $(SASS_SRC)/*.scss
	@echo Compiling $@
	@mkdir -p $(@D)
	@sassc --style nested $< $@

$(JS_DIR)/app.js: $(JS_SRC)/app.js
	@echo Processing $@
	@mkdir -p $(@D)
	@$(BIN)/uglifyjs $? --compress --mangle --output $@

$(JS_LIB_FILE): $(JS_LIBS)
	cat $? > $@

fonts:
	@- $(foreach dir,$(FONT_LIBS), \
		cp $(dir)/* $(FONT_DIR)/; \
	)

clean:
	@rm static/assets/js/app.js
	@rm static/assets/js/lib.js

public-server:
	hugo server --baseURL="ML0C02NL2MDG3QP.int.iscmotorsports.com/" --port=1313 --appendPort=true --bind="10.148.13.31"

server:
	hugo server --bind="0.0.0.0"

setup:
	bower install
	npm install

watch-assets:
	watchman-make -p 'src/**/*' -t all
