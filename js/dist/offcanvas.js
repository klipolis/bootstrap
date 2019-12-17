/*!
  * Bootstrap offcanvas.js v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./dom/data.js'), require('./dom/event-handler.js'), require('./dom/selector-engine.js')) :
  typeof define === 'function' && define.amd ? define(['./dom/data.js', './dom/event-handler.js', './dom/selector-engine.js'], factory) :
  (global = global || self, global.OffCanvas = factory(global.Data, global.EventHandler, global.SelectorEngine));
}(this, (function (Data, EventHandler, SelectorEngine) { 'use strict';

  Data = Data && Data.hasOwnProperty('default') ? Data['default'] : Data;
  EventHandler = EventHandler && EventHandler.hasOwnProperty('default') ? EventHandler['default'] : EventHandler;
  SelectorEngine = SelectorEngine && SelectorEngine.hasOwnProperty('default') ? SelectorEngine['default'] : SelectorEngine;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.0): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var MILLISECONDS_MULTIPLIER = 1000;

  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href');
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var _window$getComputedSt = window.getComputedStyle(element),
        transitionDuration = _window$getComputedSt.transitionDuration,
        transitionDelay = _window$getComputedSt.transitionDelay;

    var floatTransitionDuration = parseFloat(transitionDuration);
    var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  var getjQuery = function getjQuery() {
    var _window = window,
        jQuery = _window.jQuery;

    if (jQuery && !document.body.hasAttribute('data-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'offcanvas';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.offcanvas';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var ESCAPE_KEYCODE = 27; // ESC

  var DATA_BODY_ACTIONS = 'data-body';
  var Selector = {
    DATA_DISMISS: '[data-dismiss="offcanvas"]',
    DATA_TOGGLE: '[data-toggle="offcanvas"]'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY
  };
  var ClassName = {
    BLUR_BODY: 'offcanvas-blur',
    DISABLED: 'disabled',
    OPEN: 'offcanvas-open',
    TOGGLING: 'offcanvas-toggling',
    SHOW: 'show',
    STOP_OVERFLOW: 'offcanvas-freeze'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var OffCanvas =
  /*#__PURE__*/
  function () {
    function OffCanvas(element) {
      this._element = element;
      this._isShown = element.classList.contains(ClassName.SHOW);
      this._bodyOptions = element.getAttribute(DATA_BODY_ACTIONS);

      this._handleClosing();

      Data.setData(element, DATA_KEY, this);
    } // Getters


    var _proto = OffCanvas.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide(relatedTarget) : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown) {
        return;
      }

      var showEvent = EventHandler.trigger(this._element, Event.SHOW, {
        relatedTarget: relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      document.body.classList.add(ClassName.TOGGLING);

      if (this._bodyOptions === 'blur') {
        document.body.classList.add(ClassName.BLUR_BODY);
      }

      if (this._bodyOptions !== 'scroll') {
        document.body.classList.add(ClassName.STOP_OVERFLOW);
      }

      this._element.removeAttribute('aria-hidden');

      this._element.classList.add(ClassName.SHOW);

      setTimeout(function () {
        _this._element.setAttribute('aria-expanded', true);

        _this._element.setAttribute('aria-offcanvas', true);

        document.body.classList.add(ClassName.OPEN);
        document.body.classList.remove(ClassName.TOGGLING);

        _this._enforceFocus();

        EventHandler.trigger(_this._element, Event.SHOWN, {
          relatedTarget: relatedTarget
        });
      }, getTransitionDurationFromElement(this._element));
    };

    _proto.hide = function hide(relatedTarget) {
      var _this2 = this;

      if (!this._isShown) {
        return;
      }

      var hideEvent = EventHandler.trigger(this._element, Event.HIDE, {
        relatedTarget: relatedTarget
      });

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      if (!document.body.classList.contains(ClassName.TOGGLING)) {
        document.body.classList.remove(ClassName.OPEN);
      }

      if (this._bodyOptions === 'blur') {
        document.body.classList.remove(ClassName.BLUR_BODY);
      }

      if (this._bodyOptions !== 'scroll') {
        document.body.classList.remove(ClassName.STOP_OVERFLOW);
      }

      document.body.classList.add(ClassName.TOGGLING);

      this._element.classList.remove(ClassName.SHOW);

      this._element.blur();

      setTimeout(function () {
        document.body.classList.remove(ClassName.TOGGLING);

        _this2._element.setAttribute('aria-hidden', true);

        _this2._element.setAttribute('aria-expanded', false);

        _this2._element.removeAttribute('aria-offcanvas');

        EventHandler.trigger(_this2._element, Event.HIDDEN, {
          relatedTarget: relatedTarget
        });
      }, getTransitionDurationFromElement(this._element));
    } // Private
    ;

    _proto._enforceFocus = function _enforceFocus() {
      this._element.setAttribute('tabindex', '0');

      this._element.focus();

      this._element.setAttribute('tabindex', 1);
    };

    _proto._handleClosing = function _handleClosing() {
      var _this3 = this;

      EventHandler.on(this._element, Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this3.hide(event);
      });
      EventHandler.on(document, 'keydown', function (event) {
        if (event.which === ESCAPE_KEYCODE) {
          _this3.hide(event.target);
        }
      });
      EventHandler.on(document, Event.CLICK_DATA_API, function (event) {
        var target = SelectorEngine.findOne(getSelectorFromElement(event.target));

        if (!_this3._element.contains(event.target) && target !== _this3._element) {
          _this3.hide(event.target);
        }
      });
    } // Static
    ;

    OffCanvas.jQueryInterface = function jQueryInterface(config) {
      return this.each(function () {
        var data = Data.getData(this, DATA_KEY) || new OffCanvas(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    OffCanvas.getInstance = function getInstance(element) {
      return Data.getData(element, DATA_KEY);
    };

    _createClass(OffCanvas, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return OffCanvas;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].indexOf(this.tagName) > -1) {
      event.preventDefault();
    }

    if (this.disabled || this.classList.contains(ClassName.DISABLED)) {
      return;
    }

    var target = SelectorEngine.findOne(getSelectorFromElement(this));
    var data = Data.getData(target, DATA_KEY) || new OffCanvas(target);
    data.toggle(this);
  });
  var $ = getjQuery();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  /* istanbul ignore if */

  if ($) {
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    $.fn[NAME] = OffCanvas.jQueryInterface;
    $.fn[NAME].Constructor = OffCanvas;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return OffCanvas.jQueryInterface;
    };
  }

  return OffCanvas;

})));
//# sourceMappingURL=offcanvas.js.map
