import {
  TuiLabel
} from "./chunk-N2WZWT42.js";
import {
  TuiWithIcons,
  tuiAsDataListHost
} from "./chunk-AJND4ZJU.js";
import {
  TUI_CLEAR_WORD,
  TUI_COMMON_ICONS,
  TUI_ICON_END,
  TUI_ICON_START,
  TuiDropdownDirective,
  TuiDropdownFixed,
  TuiWithDropdownOpen,
  WA_ANIMATION_FRAME,
  WA_NAVIGATOR,
  WA_PERFORMANCE,
  WA_WINDOW,
  toSignal,
  tuiClamp,
  tuiControlValue,
  tuiCreateOptions,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiDirectiveBinding,
  tuiDropdown,
  tuiDropdownOpen,
  tuiEaseInOutQuad,
  tuiFocusedIn,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsString,
  tuiProvide,
  tuiProvideOptions,
  tuiPx,
  tuiTakeUntilDestroyed,
  tuiWithStyles,
  tuiZonefree,
  tuiZonefreeScheduler
} from "./chunk-CFYEAHUQ.js";
import {
  PolymorpheusComponent,
  PolymorpheusOutlet
} from "./chunk-3TF2NWDZ.js";
import {
  NG_VALIDATORS,
  NgControl
} from "./chunk-F4F3CEJY.js";
import {
  Meta
} from "./chunk-H2TNEJ7X.js";
import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-VAASPEVA.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Input,
  NgZone,
  Optional,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7CG3BBK5.js";
import {
  Observable,
  __async,
  __spreadProps,
  __spreadValues,
  defer,
  endWith,
  fromEvent,
  map,
  merge,
  of,
  switchMap,
  takeUntil,
  tap,
  timer
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = {
  appearance: ""
};
var TUI_APPEARANCE_OPTIONS = tuiCreateToken(TUI_APPEARANCE_DEFAULT_OPTIONS);
function tuiAppearanceOptionsProvider(token) {
  return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var TuiAppearanceStyles = class _TuiAppearanceStyles {
  static {
    this.ɵfac = function TuiAppearanceStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppearanceStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAppearanceStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-appearance"],
      decls: 0,
      vars: 0,
      template: function TuiAppearanceStyles_Template(rf, ctx) {
      },
      styles: ["[tuiAppearance]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border,border-radius,filter}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearanceStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-appearance"
      },
      styles: ["[tuiAppearance]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border,border-radius,filter}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}\n"]
    }]
  }], null, null);
})();
var TuiAppearance = class _TuiAppearance {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiAppearanceStyles);
    this.modes = computed((mode = this.mode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.state = signal(null);
    this.focus = signal(null);
    this.mode = signal(null);
    afterNextRender(() => {
      this.el.classList.toggle(
        "tui-appearance-initializing",
        // Triggering reflow so there's no transition
        !!this.el.offsetWidth && false
      );
    });
  }
  set tuiAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiAppearanceState(state) {
    this.state.set(state);
  }
  set tuiAppearanceFocus(focus) {
    this.focus.set(focus);
  }
  set tuiAppearanceMode(mode) {
    this.mode.set(mode);
  }
  static {
    this.ɵfac = function TuiAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppearance,
      selectors: [["", "tuiAppearance", ""]],
      hostAttrs: ["tuiAppearance", "", 1, "tui-appearance-initializing"],
      hostVars: 4,
      hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.appearance())("data-state", ctx.state())("data-focus", ctx.focus())("data-mode", ctx.modes());
        }
      },
      inputs: {
        tuiAppearance: "tuiAppearance",
        tuiAppearanceState: "tuiAppearanceState",
        tuiAppearanceFocus: "tuiAppearanceFocus",
        tuiAppearanceMode: "tuiAppearanceMode"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAppearance]",
      host: {
        class: "tui-appearance-initializing",
        tuiAppearance: "",
        "[attr.data-appearance]": "appearance()",
        "[attr.data-state]": "state()",
        "[attr.data-focus]": "focus()",
        "[attr.data-mode]": "modes()"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiAppearance: [{
      type: Input
    }],
    tuiAppearanceState: [{
      type: Input
    }],
    tuiAppearanceFocus: [{
      type: Input
    }],
    tuiAppearanceMode: [{
      type: Input
    }]
  });
})();
function tuiAppearance(value) {
  return tuiDirectiveBinding(TuiAppearance, "appearance", value);
}
function tuiAppearanceState(value) {
  return tuiDirectiveBinding(TuiAppearance, "state", value);
}
function tuiAppearanceFocus(value) {
  return tuiDirectiveBinding(TuiAppearance, "focus", value);
}
function tuiAppearanceMode(value) {
  return tuiDirectiveBinding(TuiAppearance, "mode", value);
}
var TuiWithAppearance = class _TuiWithAppearance {
  static {
    this.ɵfac = function TuiWithAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithAppearance,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-button.mjs
var TUI_BUTTON_DEFAULT_OPTIONS = {
  appearance: "primary",
  size: "l"
};
var [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions(TUI_BUTTON_DEFAULT_OPTIONS);
var TuiButtonStyles = class _TuiButtonStyles {
  static {
    this.ɵfac = function TuiButtonStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiButtonStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-button"],
      decls: 0,
      vars: 0,
      template: function TuiButtonStyles_Template(rf, ctx) {
      },
      styles: ['[tuiButton],[tuiIconButton]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-font-text-m);font-weight:700}[tuiButton]>img,[tuiIconButton]>img,[tuiButton]>tui-svg,[tuiIconButton]>tui-svg,[tuiButton]>tui-icon,[tuiIconButton]>tui-icon,[tuiButton]>tui-avatar,[tuiIconButton]>tui-avatar,[tuiButton]>tui-badge,[tuiIconButton]>tui-badge,[tuiButton]>[tuiBadge],[tuiIconButton]>[tuiBadge],[tuiButton]>[tuiRadio],[tuiIconButton]>[tuiRadio],[tuiButton]>[tuiSwitch],[tuiIconButton]>[tuiSwitch],[tuiButton]>[tuiCheckbox],[tuiIconButton]>[tuiCheckbox],[tuiButton][tuiIcons]:before,[tuiIconButton][tuiIcons]:before,[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{margin:var(--t-margin)}[tuiButton]>.t-loader,[tuiIconButton]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButton]>.t-loader .t-text,[tuiIconButton]>.t-loader .t-text{position:absolute}[tuiButton][data-size=xs],[tuiIconButton][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=xs] tui-svg,[tuiIconButton][data-size=xs] tui-svg,[tuiButton][data-size=xs] tui-icon,[tuiIconButton][data-size=xs] tui-icon,[tuiButton][data-size=xs]:before,[tuiIconButton][data-size=xs]:before{font-size:1rem}[tuiButton][data-size=s],[tuiIconButton][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=s] tui-svg,[tuiIconButton][data-size=s] tui-svg,[tuiButton][data-size=s] tui-icon,[tuiIconButton][data-size=s] tui-icon,[tuiButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before,[tuiIconButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before{font-size:1rem}[tuiButton][data-size=m],[tuiIconButton][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButton][data-size=m]:after,[tuiIconButton][data-size=m]:after{margin-inline-end:-.125rem}[tuiButton]._loading,[tuiIconButton]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]._loading>*,[tuiIconButton]._loading>*,[tuiButton]._loading:before,[tuiIconButton]._loading:before,[tuiButton]._loading:after,[tuiIconButton]._loading:after{opacity:0}[tuiButton]._loading>.t-loader,[tuiIconButton]._loading>.t-loader{opacity:1}[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{font-size:1rem}[tuiButton][tuiButtonVertical],[tuiIconButton][tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-font-text-ui-s)}[tuiButton][tuiButtonVertical]>*,[tuiIconButton][tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiIconButton]{gap:0;inline-size:var(--t-size);font-size:0!important;padding:0}[tuiIconButton][data-size=l]:after{margin:0}[tuiIconButton][tuiIconButton][style*="--t-icon-start:"]:after{display:none}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-button"
      },
      styles: ['[tuiButton],[tuiIconButton]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-font-text-m);font-weight:700}[tuiButton]>img,[tuiIconButton]>img,[tuiButton]>tui-svg,[tuiIconButton]>tui-svg,[tuiButton]>tui-icon,[tuiIconButton]>tui-icon,[tuiButton]>tui-avatar,[tuiIconButton]>tui-avatar,[tuiButton]>tui-badge,[tuiIconButton]>tui-badge,[tuiButton]>[tuiBadge],[tuiIconButton]>[tuiBadge],[tuiButton]>[tuiRadio],[tuiIconButton]>[tuiRadio],[tuiButton]>[tuiSwitch],[tuiIconButton]>[tuiSwitch],[tuiButton]>[tuiCheckbox],[tuiIconButton]>[tuiCheckbox],[tuiButton][tuiIcons]:before,[tuiIconButton][tuiIcons]:before,[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{margin:var(--t-margin)}[tuiButton]>.t-loader,[tuiIconButton]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButton]>.t-loader .t-text,[tuiIconButton]>.t-loader .t-text{position:absolute}[tuiButton][data-size=xs],[tuiIconButton][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=xs] tui-svg,[tuiIconButton][data-size=xs] tui-svg,[tuiButton][data-size=xs] tui-icon,[tuiIconButton][data-size=xs] tui-icon,[tuiButton][data-size=xs]:before,[tuiIconButton][data-size=xs]:before{font-size:1rem}[tuiButton][data-size=s],[tuiIconButton][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=s] tui-svg,[tuiIconButton][data-size=s] tui-svg,[tuiButton][data-size=s] tui-icon,[tuiIconButton][data-size=s] tui-icon,[tuiButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before,[tuiIconButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before{font-size:1rem}[tuiButton][data-size=m],[tuiIconButton][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButton][data-size=m]:after,[tuiIconButton][data-size=m]:after{margin-inline-end:-.125rem}[tuiButton]._loading,[tuiIconButton]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]._loading>*,[tuiIconButton]._loading>*,[tuiButton]._loading:before,[tuiIconButton]._loading:before,[tuiButton]._loading:after,[tuiIconButton]._loading:after{opacity:0}[tuiButton]._loading>.t-loader,[tuiIconButton]._loading>.t-loader{opacity:1}[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{font-size:1rem}[tuiButton][tuiButtonVertical],[tuiIconButton][tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-font-text-ui-s)}[tuiButton][tuiButtonVertical]>*,[tuiIconButton][tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiIconButton]{gap:0;inline-size:var(--t-size);font-size:0!important;padding:0}[tuiIconButton][data-size=l]:after{margin:0}[tuiIconButton][tuiIconButton][style*="--t-icon-start:"]:after{display:none}\n']
    }]
  }], null, null);
})();
var TuiButton = class _TuiButton {
  constructor() {
    this.options = inject(TUI_BUTTON_OPTIONS);
    this.nothing = tuiWithStyles(TuiButtonStyles);
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButton,
      selectors: [["a", "tuiButton", ""], ["button", "tuiButton", ""], ["a", "tuiIconButton", ""], ["button", "tuiIconButton", ""]],
      hostVars: 1,
      hostBindings: function TuiButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
      providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var TuiIcon = class _TuiIcon {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.backgroundSrc = signal(null);
    this.iconSrc = signal(this.resolve(inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || inject(TUI_ICON_END, {
      self: true,
      optional: true
    })));
  }
  set icon(icon) {
    this.iconSrc.set(this.resolve(icon));
  }
  set background(background) {
    this.backgroundSrc.set(this.resolve(background));
  }
  resolve(value) {
    return value ? `url(${this.resolver(value)})` : null;
  }
  static {
    this.ɵfac = function TuiIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcon)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIcon,
      selectors: [["tui-icon"]],
      hostVars: 4,
      hostBindings: function TuiIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon", ctx.iconSrc() || "url()")("--t-icon-bg", ctx.backgroundSrc());
        }
      },
      inputs: {
        icon: "icon",
        background: "background"
      },
      decls: 0,
      vars: 0,
      template: function TuiIcon_Template(rf, ctx) {
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-icon",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--t-icon]": 'iconSrc() || "url()"',
        "[style.--t-icon-bg]": "backgroundSrc()"
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}\n']
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    background: [{
      type: Input
    }]
  });
})();
var TuiIconPipe = class _TuiIconPipe {
  constructor() {
    this.transform = tuiInjectIconResolver();
  }
  static {
    this.ɵfac = function TuiIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiIcon",
      type: _TuiIconPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiIcon"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-services.mjs
var TuiIdService = class _TuiIdService {
  static {
    this.autoId = 0;
  }
  generate() {
    return `tui_${_TuiIdService.autoId++}${Date.now()}`;
  }
  static {
    this.ɵfac = function TuiIdService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIdService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiIdService,
      factory: _TuiIdService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function tuiInjectId() {
  return inject(TuiIdService).generate();
}
var TuiPopoverService = class _TuiPopoverService {
  constructor(items, component, options = {}) {
    this.options = options;
    this.id = inject(TuiIdService);
    this.component = new PolymorpheusComponent(component, inject(INJECTOR$1));
    this.items$ = inject(items);
  }
  open(content, options = {}) {
    return new Observable((observer) => {
      const item = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        content,
        $implicit: observer,
        component: this.component,
        createdAt: Date.now(),
        id: this.id.generate(),
        completeWith: (result) => {
          observer.next(result);
          observer.complete();
        }
      });
      this.items$.next([...this.items$.value, item]);
      return () => {
        this.items$.next(this.items$.value.filter((value) => value !== item));
      };
    });
  }
  static {
    this.ɵfac = function TuiPopoverService_Factory(__ngFactoryType__) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPopoverService,
      factory: _TuiPopoverService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0
    }, {
      type: void 0
    }, {
      type: void 0
    }];
  }, null);
})();
function tuiAsPopover(popover) {
  return tuiProvide(TuiPopoverService, popover);
}
var SCROLL_TIME = 300;
function getX(elementOrWindow) {
  return "scrollX" in elementOrWindow ? elementOrWindow.scrollX : elementOrWindow.scrollLeft;
}
function getY(elementOrWindow) {
  return "scrollY" in elementOrWindow ? elementOrWindow.scrollY : elementOrWindow.scrollTop;
}
var TuiScrollService = class _TuiScrollService {
  constructor() {
    this.performanceRef = inject(WA_PERFORMANCE);
    this.animationFrame$ = inject(WA_ANIMATION_FRAME);
    this.zone = inject(NgZone);
  }
  scroll$(elementOrWindow, scrollTop, scrollLeft = getX(elementOrWindow), duration = SCROLL_TIME) {
    ngDevMode && console.assert(duration >= 0, "duration cannot be negative");
    ngDevMode && console.assert(scrollTop >= 0, "scrollTop cannot be negative");
    ngDevMode && console.assert(scrollLeft >= 0, "scrollLeft cannot be negative");
    const initialTop = getY(elementOrWindow);
    const initialLeft = getX(elementOrWindow);
    const deltaTop = scrollTop - initialTop;
    const deltaLeft = scrollLeft - initialLeft;
    const observable = !duration ? of([scrollTop, scrollLeft]) : defer(() => of(this.performanceRef.now())).pipe(switchMap((start) => this.animationFrame$.pipe(map((now) => now - start))), map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))), map((percent) => [initialTop + deltaTop * percent, initialLeft + deltaLeft * percent]), takeUntil(timer(duration, tuiZonefreeScheduler(this.zone))), endWith([scrollTop, scrollLeft]));
    return observable.pipe(tap(([scrollTop2, scrollLeft2]) => {
      elementOrWindow.scrollTo?.(scrollLeft2, scrollTop2);
    }));
  }
  static {
    this.ɵfac = function TuiScrollService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiScrollService,
      factory: _TuiScrollService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_THEME_COLOR = tuiCreateTokenFromFactory(() => inject(Meta).getTag('name="theme-color"')?.content ?? "");
var TuiThemeColorService = class _TuiThemeColorService {
  constructor() {
    this.current = inject(TUI_THEME_COLOR);
    this.doc = inject(DOCUMENT);
    this.meta = inject(Meta);
    this.color = this.current;
  }
  get color() {
    return this.current;
  }
  set color(content) {
    this.current = content;
    this.meta.updateTag({
      name: "theme-color",
      content
    });
    this.doc.documentElement.style.setProperty("--tui-theme-color", content);
  }
  static {
    this.ɵfac = function TuiThemeColorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiThemeColorService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiThemeColorService,
      factory: _TuiThemeColorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThemeColorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiNativeValidator = "Invalid";
  }
  validate(control) {
    this.control = control;
    timer(0).pipe(tuiZonefree(this.zone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => this.handleValidation());
    return null;
  }
  handleValidation() {
    this.el.setCustomValidity?.(this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : "");
  }
  static {
    this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeValidator,
      selectors: [["", "tuiNativeValidator", ""]],
      hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
            return ctx.handleValidation();
          });
        }
      },
      inputs: {
        tuiNativeValidator: "tuiNativeValidator"
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, {
    tuiNativeValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/resize-observer/fesm2022/ng-web-apis-resize-observer.mjs
var SafeObserver = typeof ResizeObserver !== "undefined" ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
};
var WA_RESIZE_OPTION_BOX_DEFAULT = "content-box";
var RESIZE_OPTION_BOX_DEFAULT = WA_RESIZE_OPTION_BOX_DEFAULT;
var WA_RESIZE_OPTION_BOX = new InjectionToken("[WA_RESIZE_OPTION_BOX]", {
  providedIn: "root",
  factory: () => RESIZE_OPTION_BOX_DEFAULT
});
var RESIZE_OPTION_BOX = WA_RESIZE_OPTION_BOX;
var ResizeObserverService = class _ResizeObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const box = inject(RESIZE_OPTION_BOX);
    super((subscriber) => {
      const observer = new SafeObserver((entries) => subscriber.next(entries));
      observer.observe(nativeElement, {
        box
      });
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function ResizeObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ResizeObserverService,
    factory: _ResizeObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WaResizeObserver = class _WaResizeObserver {
  waResizeObserver = inject(ResizeObserverService);
  box = RESIZE_OPTION_BOX_DEFAULT;
  static ɵfac = function WaResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaResizeObserver,
    selectors: [["", "waResizeObserver", ""]],
    inputs: {
      waResizeBox: [0, "box", "waResizeBox"]
    },
    outputs: {
      waResizeObserver: "waResizeObserver"
    },
    features: [ɵɵProvidersFeature([ResizeObserverService, {
      provide: RESIZE_OPTION_BOX,
      useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || RESIZE_OPTION_BOX_DEFAULT
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserver, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waResizeObserver]",
      inputs: ["waResizeBox: box"],
      outputs: ["waResizeObserver"],
      providers: [ResizeObserverService, {
        provide: RESIZE_OPTION_BOX,
        useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || RESIZE_OPTION_BOX_DEFAULT
      }]
    }]
  }], null, null);
})();
var WA_RESIZE_OBSERVER_SUPPORT = new InjectionToken("[WA_RESIZE_OBSERVER_SUPPORT]", {
  providedIn: "root",
  factory: () => !!inject(WA_WINDOW).ResizeObserver
});

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c0 = ["vcr"];
var _c1 = [[["input"]], [["select"]], [["label"]], "*", [["tui-icon"]]];
var _c2 = ["input", "select", "label", "*", "tui-icon"];
var _c3 = (a0) => ({
  $implicit: a0
});
function TuiTextfieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiTextfieldComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.directive == null ? null : ctx_r2.directive.setValue(null));
    })("pointerdown.zoneless.prevent", function TuiTextfieldComponent_button_5_Template_button_pointerdown_zoneless_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.input == null ? null : ctx_r2.input.nativeElement == null ? null : ctx_r2.input.nativeElement.focus());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r2.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.clear(), " ");
  }
}
function TuiTextfieldComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiTextfieldComponent_input_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.computedFiller());
  }
}
var _c4 = ["tuiTextfield", ""];
var _c5 = (a0) => [a0];
function TuiSelect_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
  }
}
function TuiSelect_ng_template_1_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵproperty("value", item_r2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiSelect_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiSelect_ng_template_1_option_0_Template, 2, 2, "option", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ɵɵpureFunction1(1, _c5, ctx_r0.stringified));
  }
}
var DEFAULT = {
  appearance: "textfield",
  size: "l",
  cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = tuiCreateToken({
  appearance: signal(DEFAULT.appearance),
  size: signal(DEFAULT.size),
  cleaner: signal(DEFAULT.cleaner)
});
function tuiTextfieldOptionsProvider(options) {
  return {
    provide: TUI_TEXTFIELD_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
    useFactory: (parent) => __spreadValues({
      appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
      size: signal(parent?.size() ?? DEFAULT.size),
      cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner)
    }, options)
  };
}
var TuiTextfieldOptionsDirective = class _TuiTextfieldOptionsDirective {
  constructor() {
    this.options = inject(TUI_TEXTFIELD_OPTIONS, {
      skipSelf: true
    });
    this.appearance = signal(this.options.appearance());
    this.size = signal(this.options.size());
    this.cleaner = signal(this.options.cleaner());
  }
  set tuiTextfieldAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiTextfieldSize(size) {
    this.size.set(size);
  }
  set tuiTextfieldCleaner(enabled) {
    this.cleaner.set(enabled);
  }
  static {
    this.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldOptionsDirective,
      selectors: [["", "tuiTextfieldAppearance", ""], ["", "tuiTextfieldSize", ""], ["", "tuiTextfieldCleaner", ""]],
      inputs: {
        tuiTextfieldAppearance: "tuiTextfieldAppearance",
        tuiTextfieldSize: "tuiTextfieldSize",
        tuiTextfieldCleaner: "tuiTextfieldCleaner"
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTextfieldOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
    }]
  }], null, {
    tuiTextfieldAppearance: [{
      type: Input
    }],
    tuiTextfieldSize: [{
      type: Input
    }],
    tuiTextfieldCleaner: [{
      type: Input
    }]
  });
})();
var TuiTextfieldDropdownDirective = class _TuiTextfieldDropdownDirective {
  static {
    this.ɵfac = function TuiTextfieldDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldDropdownDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldDropdownDirective,
      selectors: [["ng-template", "tuiTextfieldDropdown", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDropdownDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldDropdown]"
    }]
  }], null, null);
})();
var TuiWithTextfieldDropdown = class _TuiWithTextfieldDropdown {
  constructor() {
    this.dropdown = tuiDropdown(null);
  }
  set template(template) {
    this.dropdown.set(template);
  }
  static {
    this.ɵfac = function TuiWithTextfieldDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithTextfieldDropdown)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithTextfieldDropdown,
      contentQueries: function TuiWithTextfieldDropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTextfieldDropdownDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithTextfieldDropdown, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    template: [{
      type: ContentChild,
      args: [TuiTextfieldDropdownDirective, {
        read: TemplateRef,
        descendants: true
      }]
    }]
  });
})();
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.filler = signal("");
    this.autoId = tuiInjectId();
    this.open = tuiDropdownOpen();
    this.focusedIn = tuiFocusedIn(tuiInjectElement());
    this.icons = inject(TUI_COMMON_ICONS);
    this.clear = toSignal(inject(TUI_CLEAR_WORD));
    this.computedFiller = computed(() => {
      const value = this.directive?.value() || "";
      const filledValue = value + this.filler().slice(value.length);
      return filledValue.length > value.length ? filledValue : "";
    });
    this.showFiller = computed(() => this.focused() && !!this.computedFiller() && (!!this.directive?.value() || !this.input?.nativeElement.placeholder));
    this.stringify = String;
    this.focused = computed(() => this.open() || this.focusedIn());
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.el = tuiInjectElement();
  }
  set fillerSetter(filler) {
    this.filler.set(filler);
  }
  get id() {
    return this.input?.nativeElement.id || this.autoId;
  }
  get size() {
    return this.options.size();
  }
  handleOption(option) {
    this.directive?.setValue(option);
    this.open.set(false);
  }
  get hasLabel() {
    return Boolean(this.label?.nativeElement?.childNodes.length);
  }
  onResize({
    contentRect
  }) {
    this.el.style.setProperty("--t-side", tuiPx(contentRect.width));
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["tui-textfield"]],
      contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiLabel, 5, ElementRef);
          ɵɵcontentQuery(dirIndex, NgControl, 5);
          ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 7);
          ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.directive = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
        }
      },
      viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
        }
      },
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.options.size());
          ɵɵclassProp("_with-label", ctx.hasLabel)("_with-template", ctx.content)("_disabled", ctx.input == null ? null : ctx.input.nativeElement.disabled);
        }
      },
      inputs: {
        stringify: "stringify",
        content: "content",
        fillerSetter: [0, "filler", "fillerSetter"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(_TuiTextfieldComponent)]), ɵɵHostDirectivesFeature([TuiDropdownFixed, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons])],
      ngContentSelectors: _c2,
      decls: 12,
      vars: 6,
      consts: [["vcr", ""], [1, "t-content", 3, "mousedown.prevent", "waResizeObserver"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", "class", "t-clear", 3, "iconStart", "click", "pointerdown.zoneless.prevent", 4, "ngIf"], [1, "t-template"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["aria-hidden", "true", "disabled", "", "class", "t-filler", 3, "value", 4, "ngIf"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", 1, "t-clear", 3, "click", "pointerdown.zoneless.prevent", "iconStart"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"]],
      template: function TuiTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c1);
          ɵɵprojection(0);
          ɵɵprojection(1, 1);
          ɵɵprojection(2, 2);
          ɵɵelementStart(3, "span", 1);
          ɵɵlistener("mousedown.prevent", function TuiTextfieldComponent_Template_span_mousedown_prevent_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.input == null ? null : ctx.input.nativeElement == null ? null : ctx.input.nativeElement.focus());
          })("waResizeObserver", function TuiTextfieldComponent_Template_span_waResizeObserver_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView($event[0] && ctx.onResize($event[0]));
          });
          ɵɵprojection(4, 3);
          ɵɵtemplate(5, TuiTextfieldComponent_button_5_Template, 2, 2, "button", 2);
          ɵɵelementContainer(6, null, 0);
          ɵɵprojection(8, 4);
          ɵɵelementEnd();
          ɵɵelementStart(9, "span", 3);
          ɵɵtemplate(10, TuiTextfieldComponent_ng_container_10_Template, 2, 1, "ng-container", 4);
          ɵɵelementEnd();
          ɵɵtemplate(11, TuiTextfieldComponent_input_11_Template, 1, 1, "input", 5);
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ctx.options.cleaner());
          ɵɵadvance(5);
          ɵɵproperty("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c3, ctx.control == null ? null : ctx.control.value));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showFiller());
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
      styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box;gap:.25rem}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);gap:0;font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .125rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .25rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.5rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, 0rem) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center;color:var(--tui-text-primary)}tui-textfield._with-template input,tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:inherit;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-textfield",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(TuiTextfieldComponent)],
      hostDirectives: [TuiDropdownFixed, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons],
      host: {
        "[attr.data-size]": "options.size()",
        "[class._with-label]": "hasLabel",
        "[class._with-template]": "content",
        "[class._disabled]": "input?.nativeElement.disabled"
      },
      template: '<ng-content select="input" />\n<ng-content select="select" />\n<ng-content select="label" />\n<span\n    class="t-content"\n    (mousedown.prevent)="input?.nativeElement?.focus()"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content />\n    <button\n        *ngIf="options.cleaner()"\n        appearance="icon"\n        size="xs"\n        tabindex="-1"\n        tuiIconButton\n        type="button"\n        class="t-clear"\n        [iconStart]="icons.close"\n        (click)="directive?.setValue(null)"\n        (pointerdown.zoneless.prevent)="input?.nativeElement?.focus()"\n    >\n        {{ clear() }}\n    </button>\n    <ng-container #vcr />\n    <ng-content select="tui-icon" />\n</span>\n<span class="t-template">\n    <ng-container *polymorpheusOutlet="content as text; context: {$implicit: control?.value}">\n        {{ text }}\n    </ng-container>\n</span>\n<input\n    *ngIf="showFiller()"\n    aria-hidden="true"\n    disabled\n    class="t-filler"\n    [value]="computedFiller()"\n/>\n',
      styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box;gap:.25rem}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);gap:0;font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .125rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .25rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.5rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, 0rem) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center;color:var(--tui-text-primary)}tui-textfield._with-template input,tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:inherit;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n']
    }]
  }], null, {
    label: [{
      type: ContentChild,
      args: [forwardRef(() => TuiLabel), {
        read: ElementRef
      }]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }],
    vcr: [{
      type: ViewChild,
      args: ["vcr", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    directive: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective), {
        static: true
      }]
    }],
    input: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective), {
        read: ElementRef,
        static: true
      }]
    }],
    stringify: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    fillerSetter: [{
      type: Input,
      args: ["filler"]
    }]
  });
})();
var TuiTextfieldBase = class _TuiTextfieldBase {
  constructor() {
    this.focused = signal(null);
    this.control = inject(NgControl, {
      optional: true
    });
    this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    this.s = tuiAppearanceState(null);
    this.m = tuiAppearanceMode(this.mode);
    this.f = tuiAppearanceFocus(computed(() => this.focused() ?? this.textfield.focused()));
    this.el = tuiInjectElement();
    this.textfield = inject(TuiTextfieldComponent);
    this.readOnly = false;
    this.invalid = null;
    this.value = toSignal(merge(fromEvent(this.el, "input"), timer(0).pipe(switchMap(() => tuiControlValue(this.control)))).pipe(map(() => this.el.value)), {
      initialValue: this.el.value
    });
  }
  set focusedSetter(focused) {
    this.focused.set(focused);
  }
  set stateSetter(state) {
    this.s.set(state);
  }
  get mode() {
    if (this.readOnly) {
      return "readonly";
    }
    if (this.invalid === false) {
      return "valid";
    }
    if (this.invalid) {
      return "invalid";
    }
    return null;
  }
  // TODO: refactor to signal inputs after Angular update
  ngOnChanges() {
    this.m.set(this.mode);
  }
  setValue(value) {
    this.el.focus();
    this.el.select();
    if (value == null) {
      this.el.ownerDocument.execCommand("delete");
    } else {
      this.el.ownerDocument.execCommand("insertText", false, this.textfield.stringify(value));
    }
  }
  static {
    this.ɵfac = function TuiTextfieldBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldBase)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldBase,
      inputs: {
        readOnly: "readOnly",
        invalid: "invalid",
        focusedSetter: [0, "focused", "focusedSetter"],
        stateSetter: [0, "state", "stateSetter"]
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldBase, [{
    type: Directive
  }], null, {
    readOnly: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    focusedSetter: [{
      type: Input,
      args: ["focused"]
    }],
    stateSetter: [{
      type: Input,
      args: ["state"]
    }]
  });
})();
var TuiTextfieldDirective = class _TuiTextfieldDirective extends TuiTextfieldBase {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldDirective_BaseFactory;
      return function TuiTextfieldDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldDirective_BaseFactory || (ɵTuiTextfieldDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldDirective)))(__ngFactoryType__ || _TuiTextfieldDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldDirective,
      selectors: [["input", "tuiTextfield", "", 3, "tuiInputCard", "", 3, "tuiInputExpire", "", 3, "tuiInputCVC", ""]],
      hostVars: 4,
      hostBindings: function TuiTextfieldDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiTextfieldDirective_input_HostBindingHandler() {
            return 0;
          })("focusin", function TuiTextfieldDirective_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiTextfieldDirective_focusout_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.textfield.id)("readOnly", ctx.readOnly);
          ɵɵclassProp("_empty", ctx.el.value === "");
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      // TODO: Remove :not in v.5
      selector: "input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])",
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "textfield.id",
        "[readOnly]": "readOnly",
        "[class._empty]": 'el.value === ""',
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0"
      }
    }]
  }], null, null);
})();
var TuiWithTextfield = class _TuiWithTextfield {
  static {
    this.ɵfac = function TuiWithTextfield_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithTextfield)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithTextfield,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiTextfieldDirective,
        inputs: ["invalid", "invalid", "focused", "focused", "readOnly", "readOnly", "state", "state"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithTextfield, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiTextfieldDirective,
        inputs: ["invalid", "focused", "readOnly", "state"]
      }]
    }]
  }], null, null);
})();
var TuiSelect = class _TuiSelect extends TuiTextfieldBase {
  constructor() {
    super(...arguments);
    this.nav = inject(WA_NAVIGATOR);
    this.placeholder = "";
  }
  setValue(value) {
    this.control?.control?.setValue(value);
    this.el.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  focus() {
    this.el.classList.add("_ios-fix");
    this.el.focus();
    this.el.classList.remove("_ios-fix");
  }
  get stringified() {
    return this.textfield.stringify(this.control?.value ?? "");
  }
  onCopy() {
    return __async(this, null, function* () {
      yield this.nav.clipboard.writeText(this.stringified);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSelect_BaseFactory;
      return function TuiSelect_Factory(__ngFactoryType__) {
        return (ɵTuiSelect_BaseFactory || (ɵTuiSelect_BaseFactory = ɵɵgetInheritedFactory(_TuiSelect)))(__ngFactoryType__ || _TuiSelect);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSelect,
      selectors: [["select", "tuiTextfield", ""]],
      hostVars: 3,
      hostBindings: function TuiSelect_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSelect_input_HostBindingHandler() {
            return 0;
          })("focusin", function TuiSelect_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiSelect_focusout_HostBindingHandler() {
            return 0;
          })("keydown.space.prevent", function TuiSelect_keydown_space_prevent_HostBindingHandler() {
            return 0;
          })("keydown.enter.prevent", function TuiSelect_keydown_enter_prevent_HostBindingHandler() {
            return 0;
          })("keydown.backspace", function TuiSelect_keydown_backspace_HostBindingHandler() {
            return ctx.setValue("");
          })("mousedown.prevent", function TuiSelect_mousedown_prevent_HostBindingHandler() {
            return ctx.focus();
          })("keydown.control.c", function TuiSelect_keydown_control_c_HostBindingHandler() {
            return ctx.onCopy();
          })("keydown.meta.c", function TuiSelect_keydown_meta_c_HostBindingHandler() {
            return ctx.onCopy();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.textfield.id);
          ɵɵclassProp("_empty", ctx.stringified === "");
        }
      },
      inputs: {
        placeholder: "placeholder"
      },
      features: [ɵɵProvidersFeature([tuiProvide(TuiTextfieldDirective, _TuiSelect)]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature],
      attrs: _c4,
      decls: 3,
      vars: 2,
      consts: [["selected", ""], ["disabled", "", "selected", "", "value", "", 4, "ngIf", "ngIfElse"], ["disabled", "", "selected", "", "value", ""], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["selected", "", 3, "value"]],
      template: function TuiSelect_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiSelect_option_0_Template, 2, 1, "option", 1)(1, TuiSelect_ng_template_1_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const selected_r3 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.placeholder && !ctx.stringified)("ngIfElse", selected_r3);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelect, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "select[tuiTextfield]",
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)],
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "textfield.id",
        "[class._empty]": 'stringified === ""',
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0",
        "(keydown.space.prevent)": "0",
        "(keydown.enter.prevent)": "0",
        "(keydown.backspace)": 'setValue("")',
        "(mousedown.prevent)": "focus()",
        "(keydown.control.c)": "onCopy()",
        "(keydown.meta.c)": "onCopy()"
      },
      template: '<option\n    *ngIf="placeholder && !stringified; else selected"\n    disabled\n    selected\n    value=""\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor="let item of [stringified]"\n        selected\n        [value]="item"\n    >\n        {{ item }}\n    </option>\n</ng-template>\n'
    }]
  }], null, {
    placeholder: [{
      type: Input
    }]
  });
})();
var TuiTextfield = [TuiLabel, TuiSelect, TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective, TuiTextfieldDropdownDirective];
var TuiTextfieldContent = class _TuiTextfieldContent {
  constructor() {
    this.ref = inject(TuiTextfieldComponent).vcr?.createEmbeddedView(inject(TemplateRef));
  }
  ngDoCheck() {
    this.ref?.detectChanges();
  }
  static {
    this.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldContent,
      selectors: [["ng-template", "tuiTextfieldContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldContent]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var TUI_LINK_DEFAULT_OPTIONS = {
  appearance: "action",
  pseudo: false
};
var TUI_LINK_OPTIONS = tuiCreateToken(TUI_LINK_DEFAULT_OPTIONS);
function tuiLinkOptionsProvider(options) {
  return tuiProvideOptions(TUI_LINK_OPTIONS, options, TUI_LINK_DEFAULT_OPTIONS);
}
var TuiLinkStyles = class _TuiLinkStyles {
  static {
    this.ɵfac = function TuiLinkStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLinkStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLinkStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-link"],
      decls: 0,
      vars: 0,
      template: function TuiLinkStyles_Template(rf, ctx) {
      },
      styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinkStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-link"
      },
      styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n']
    }]
  }], null, null);
})();
var TuiLink = class _TuiLink {
  constructor() {
    this.nothing = tuiWithStyles(TuiLinkStyles);
    this.pseudo = inject(TUI_LINK_OPTIONS).pseudo;
  }
  static {
    this.ɵfac = function TuiLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLink)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLink,
      selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
      hostAttrs: ["tuiLink", ""],
      hostVars: 2,
      hostBindings: function TuiLink_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("text-decoration-line", ctx.pseudo ? "underline" : null);
        }
      },
      inputs: {
        pseudo: "pseudo"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiLink], button[tuiLink]",
      providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        tuiLink: "",
        "[style.text-decoration-line]": 'pseudo ? "underline" : null'
      }
    }]
  }], null, {
    pseudo: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static {
    this.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMapperPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMapper",
      type: _TuiMapperPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMapper"
    }]
  }], null, null);
})();

export {
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  tuiButtonOptionsProvider,
  TuiButton,
  TuiIcon,
  TuiIconPipe,
  ResizeObserverService,
  WaResizeObserver,
  TuiNativeValidator,
  TuiIdService,
  tuiInjectId,
  TuiPopoverService,
  tuiAsPopover,
  TuiScrollService,
  TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TuiTextfieldOptionsDirective,
  TuiTextfieldDropdownDirective,
  TuiWithTextfieldDropdown,
  TuiTextfieldComponent,
  TuiTextfieldBase,
  TuiTextfieldDirective,
  TuiWithTextfield,
  TuiSelect,
  TuiTextfield,
  TuiTextfieldContent,
  coerceBooleanProperty,
  coerceArray,
  TuiMapperPipe,
  TUI_LINK_DEFAULT_OPTIONS,
  TUI_LINK_OPTIONS,
  tuiLinkOptionsProvider,
  TuiLink
};
//# sourceMappingURL=chunk-IUPTCE4W.js.map
