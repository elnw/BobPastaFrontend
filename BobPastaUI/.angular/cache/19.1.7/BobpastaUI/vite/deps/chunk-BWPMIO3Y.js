import {
  TuiAppearance,
  TuiButton,
  TuiLink,
  TuiMapperPipe,
  TuiPopoverService,
  TuiWithAppearance,
  coerceBooleanProperty,
  tuiAppearanceOptionsProvider,
  tuiAsPopover,
  tuiButtonOptionsProvider,
  tuiLinkOptionsProvider
} from "./chunk-IUPTCE4W.js";
import {
  TuiIcons,
  TuiWithIcons
} from "./chunk-AJND4ZJU.js";
import {
  DAYS_IN_WEEK,
  EMPTY_CLIENT_RECT,
  MAX_YEAR,
  MIN_YEAR,
  TUI_ANIMATIONS_SPEED,
  TUI_ASSETS_PATH,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DATE_FORMAT,
  TUI_DAY_TYPE_HANDLER,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_IS_IOS,
  TUI_IS_MOBILE,
  TUI_LAST_DAY,
  TUI_LAST_DISPLAYED_DAY,
  TUI_MONTHS,
  TUI_NUMBER_FORMAT,
  TUI_PLATFORM,
  TUI_REDUCED_MOTION,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_THEME,
  TUI_TRUE_HANDLER,
  TUI_VERSION,
  TUI_VIEWPORT,
  TuiActiveZone,
  TuiBreakpointService,
  TuiDay,
  TuiDayRange,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdowns,
  TuiFontSize,
  TuiFormatDateService,
  TuiMonth,
  TuiMonthRange,
  TuiPortalService,
  TuiPortals,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRectAccessor,
  TuiScrollControls,
  TuiScrollIntoView,
  TuiScrollRef,
  TuiScrollbar,
  TuiValidationError,
  TuiVisualViewportService,
  TuiYear,
  WA_ANIMATION_FRAME,
  WA_WINDOW,
  WINDOW,
  takeUntilDestroyed,
  toSignal,
  tuiAsDriver,
  tuiAsPortal,
  tuiAsRectAccessor,
  tuiAsVehicle,
  tuiBlurNativeFocused,
  tuiClamp,
  tuiContainsOrAfter,
  tuiCreateOptions,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiFadeIn,
  tuiFallbackAccessor,
  tuiFormatNumber,
  tuiGetActualTarget,
  tuiGetClosestFocusable,
  tuiGetDuration,
  tuiGetNativeFocused,
  tuiGetViewportWidth,
  tuiHeightCollapse,
  tuiHost,
  tuiIfMap,
  tuiInRange,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsNativeFocused,
  tuiIsNumber,
  tuiIsObscured,
  tuiIsPresent,
  tuiIsSafari,
  tuiIsString,
  tuiNullableSame,
  tuiOverrideOptions,
  tuiParentAnimation,
  tuiPointToClientRect,
  tuiPositionAccessorFor,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiRectAccessorFor,
  tuiScaleIn,
  tuiSizeBigger,
  tuiSlideIn,
  tuiSlideInTop,
  tuiStringHashToHsl,
  tuiToAnimationOptions,
  tuiTypedFromEvent,
  tuiWatch,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefreeScheduler
} from "./chunk-CFYEAHUQ.js";
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  injectContext
} from "./chunk-3TF2NWDZ.js";
import {
  PreventEventPlugin
} from "./chunk-JSFDAYJN.js";
import {
  EVENT_MANAGER_PLUGINS
} from "./chunk-H2TNEJ7X.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-VAASPEVA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Injectable,
  Injector,
  Input,
  NgZone,
  Optional,
  Output,
  Pipe,
  Renderer2,
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  assertInInjectionContext,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7CG3BBK5.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  ReplaySubject,
  Subject,
  __decorate,
  __objRest,
  __spreadProps,
  __spreadValues,
  combineLatest,
  debounce,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  fromEvent,
  identity,
  ignoreElements,
  isObservable,
  map,
  merge,
  of,
  race,
  repeat,
  share,
  shareReplay,
  skip,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
var ICONS = {
  info: "@tui.info",
  positive: "@tui.circle-check",
  negative: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info",
  /* TODO @deprecated remove in v5 */
  success: "@tui.circle-check",
  /* TODO @deprecated remove in v5 */
  error: "@tui.circle-x"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l"
};
var [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] = tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
var TuiNotificationStyles = class _TuiNotificationStyles {
  static {
    this.ɵfac = function TuiNotificationStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNotificationStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-notification"],
      decls: 0,
      vars: 0,
      template: function TuiNotificationStyles_Template(rf, ctx) {
      },
      styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);padding:1rem;font:var(--tui-font-text-m);line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-left) solid transparent;border-inline-end:var(--t-right) solid transparent;--t-left: 0;--t-right: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-left: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-right: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0 -.25rem 0 auto;color:var(--tui-text-tertiary)!important}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .625rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-left: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-left: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-top:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}[tuiNotification]{cursor:pointer}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-notification"
      },
      styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);padding:1rem;font:var(--tui-font-text-m);line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-left) solid transparent;border-inline-end:var(--t-right) solid transparent;--t-left: 0;--t-right: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-left: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-right: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0 -.25rem 0 auto;color:var(--tui-text-tertiary)!important}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .625rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-left: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-left: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-top:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}[tuiNotification]{cursor:pointer}\n']
    }]
  }], null, null);
})();
var TuiNotification = class _TuiNotification {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(TuiNotificationStyles);
    this.icons = inject(TuiIcons);
    this.appearance = this.options.appearance;
    this.icon = this.options.icon;
    this.size = this.options.size;
  }
  ngOnInit() {
    this.refresh();
  }
  ngOnChanges() {
    this.refresh();
  }
  refresh() {
    this.icons.iconStart = tuiIsString(this.icon) ? this.icon : this.icon(this.appearance);
  }
  static {
    this.ɵfac = function TuiNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotification)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNotification,
      selectors: [["tui-notification"], ["a", "tuiNotification", ""], ["button", "tuiNotification", ""]],
      hostVars: 1,
      hostBindings: function TuiNotification_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        appearance: "appearance",
        icon: "icon",
        size: "size"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiWithIcons, TuiWithAppearance]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotification, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-notification,a[tuiNotification],button[tuiNotification]",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    appearance: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-title.mjs
var TuiTitleStyles = class _TuiTitleStyles {
  static {
    this.ɵfac = function TuiTitleStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTitleStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTitleStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-title"],
      decls: 0,
      vars: 0,
      template: function TuiTitleStyles_Template(rf, ctx) {
      },
      styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitleStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-title"
      },
      styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"]
    }]
  }], null, null);
})();
var TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(TuiTitleStyles);
    this.size = "";
  }
  static {
    this.ɵfac = function TuiTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTitle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTitle,
      selectors: [["", "tuiTitle", ""]],
      hostAttrs: ["tuiTitle", ""],
      hostVars: 1,
      hostBindings: function TuiTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size || null);
        }
      },
      inputs: {
        size: [0, "tuiTitle", "size"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTitle]",
      host: {
        tuiTitle: "",
        "[attr.data-size]": "size || null"
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTitle"]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPopoverService);
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopoverDirective_BaseFactory;
      return function TuiPopoverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPopoverDirective_BaseFactory || (ɵTuiPopoverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopoverDirective,
      standalone: false,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-alert.mjs
function TuiAlertComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiAlertComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r2, ɵɵsanitizeHtml);
  }
}
function TuiAlertComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function TuiAlertComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.item.$implicit.complete());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r3.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.close(), " ");
  }
}
function TuiAlerts_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
    ɵɵpipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", item_r1.component.component)("ngComponentOutletInjector", ɵɵpipeBind2(1, 2, item_r1, ctx_r1.mapper));
  }
}
function TuiAlerts_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiAlerts_div_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r3);
  }
}
var TUI_ALERT_DEFAULT_OPTIONS = {
  autoClose: 3e3,
  label: "",
  closeable: true,
  data: void 0
};
var TUI_ALERT_OPTIONS = tuiCreateTokenFromFactory(() => __spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_NOTIFICATION_OPTIONS)));
var TUI_ALERT_POSITION = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) ? "1rem 1rem 0 auto" : "2rem 3rem 0 auto");
var TUI_ALERTS = tuiCreateToken(new BehaviorSubject([]));
var TUI_ALERTS_GROUPED = tuiCreateTokenFromFactory(() => combineLatest([of(/* @__PURE__ */ new Map()), inject(TUI_ALERTS)]).pipe(map(([map2, alerts]) => {
  map2.forEach((_, key) => map2.set(key, []));
  alerts.forEach((alert) => {
    const key = alert.component.component;
    const value = map2.get(key) || [];
    map2.set(key, [...value, alert]);
  });
  return Array.from(map2.values());
})));
function tuiAlertOptionsProvider(options) {
  return {
    provide: TUI_ALERT_OPTIONS,
    useFactory: () => __spreadValues(__spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_ALERT_OPTIONS, {
      optional: true,
      skipSelf: true
    }) || inject(TUI_NOTIFICATION_OPTIONS)), options)
  };
}
var TuiAlertComponent = class _TuiAlertComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.close = toSignal(inject(TUI_CLOSE_WORD));
    this.position = inject(TUI_ALERT_POSITION);
    this.item = injectContext();
    this.animation = this.position.endsWith("auto") ? __spreadProps(__spreadValues({}, this.options), {
      value: "right"
    }) : __spreadProps(__spreadValues({}, this.options), {
      value: "left"
    });
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
  static {
    this.ɵfac = function TuiAlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlertComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAlertComponent,
      selectors: [["tui-alert"]],
      hostAttrs: ["role", "alert"],
      hostVars: 5,
      hostBindings: function TuiAlertComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options)("@tuiSlideIn", ctx.animation)("@tuiHeightCollapse", ctx.animation);
          ɵɵstyleProp("margin", ctx.position);
        }
      },
      decls: 6,
      vars: 9,
      consts: [["size", "m", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart", "click", 4, "ngIf"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
      template: function TuiAlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-notification", 0)(1, "span", 1);
          ɵɵtemplate(2, TuiAlertComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
          ɵɵelementStart(3, "span", 3);
          ɵɵtemplate(4, TuiAlertComponent_span_4_Template, 1, 1, "span", 4);
          ɵɵelementEnd()();
          ɵɵtemplate(5, TuiAlertComponent_button_5_Template, 2, 2, "button", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("t-closeable", ctx.item.closeable);
          ɵɵproperty("appearance", ctx.item.appearance)("icon", ctx.item.icon);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.item.closeable);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      styles: ["[_nghost-%COMP%]{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}[_nghost-%COMP%]:not(:first-child){margin-top:.75rem!important}[_nghost-%COMP%]:not(:last-child){margin-bottom:0!important}.t-closeable[_ngcontent-%COMP%]{padding-inline-end:2.5rem}"],
      data: {
        animation: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alert",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse],
      host: {
        role: "alert",
        "[style.margin]": "position",
        "[@tuiFadeIn]": "options",
        "[@tuiSlideIn]": "animation",
        "[@tuiHeightCollapse]": "animation"
      },
      template: '<tui-notification\n    size="m"\n    [appearance]="item.appearance"\n    [class.t-closeable]="item.closeable"\n    [icon]="item.icon"\n>\n    <span tuiTitle>\n        <ng-container *polymorpheusOutlet="item.label as text; context: item">\n            {{ text }}\n        </ng-container>\n        <span tuiSubtitle>\n            <span\n                *polymorpheusOutlet="item.content as text; context: item"\n                [innerHTML]="text"\n            ></span>\n        </span>\n    </span>\n    <button\n        *ngIf="item.closeable"\n        tuiIconButton\n        type="button"\n        [iconStart]="icons.close"\n        (click)="item.$implicit.complete()"\n    >\n        {{ close() }}\n    </button>\n</tui-notification>\n',
      styles: [":host{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}:host:not(:first-child){margin-top:.75rem!important}:host:not(:last-child){margin-bottom:0!important}.t-closeable{padding-inline-end:2.5rem}\n"]
    }]
  }], null, null);
})();
var TuiAlertService = class _TuiAlertService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiAlertService_BaseFactory;
      return function TuiAlertService_Factory(__ngFactoryType__) {
        return (ɵTuiAlertService_BaseFactory || (ɵTuiAlertService_BaseFactory = ɵɵgetInheritedFactory(_TuiAlertService)))(__ngFactoryType__ || _TuiAlertService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiAlertService,
      factory: () => (() => new _TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS))
    }]
  }], null, null);
})();
var TuiAlert = class _TuiAlert extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiAlert_BaseFactory;
      return function TuiAlert_Factory(__ngFactoryType__) {
        return (ɵTuiAlert_BaseFactory || (ɵTuiAlert_BaseFactory = ɵɵgetInheritedFactory(_TuiAlert)))(__ngFactoryType__ || _TuiAlert);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAlert,
      selectors: [["ng-template", "tuiAlert", ""]],
      inputs: {
        options: [0, "tuiAlertOptions", "options"],
        open: [0, "tuiAlert", "open"]
      },
      outputs: {
        openChange: "tuiAlertChange"
      },
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiAlertService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlert, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiAlert]",
      inputs: ["options: tuiAlertOptions", "open: tuiAlert"],
      outputs: ["openChange: tuiAlertChange"],
      providers: [tuiAsPopover(TuiAlertService)]
    }]
  }], null, null);
})();
var TuiAlerts = class _TuiAlerts {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.alerts$ = inject(TUI_ALERTS_GROUPED);
    this.trackBy = identity;
    this.mapper = (useValue) => Injector.create({
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }],
      parent: this.injector
    });
  }
  static {
    this.ɵfac = function TuiAlerts_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlerts)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAlerts,
      selectors: [["tui-alerts"]],
      decls: 2,
      vars: 4,
      consts: [["class", "t-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "t-wrapper"], [3, "ngComponentOutlet", "ngComponentOutletInjector", 4, "ngFor", "ngForOf"], [3, "ngComponentOutlet", "ngComponentOutletInjector"]],
      template: function TuiAlerts_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiAlerts_div_0_Template, 2, 2, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 2, ctx.alerts$))("ngForTrackBy", ctx.trackBy);
        }
      },
      dependencies: [CommonModule, NgComponentOutlet, NgForOf, AsyncPipe, TuiMapperPipe],
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"],
      encapsulation: 2,
      data: {
        animation: [tuiParentAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlerts, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alerts",
      imports: [CommonModule, TuiMapperPipe],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiParentAnimation],
      template: '<div\n    *ngFor="let group of alerts$ | async; trackBy: trackBy"\n    class="t-wrapper"\n    @tuiParentAnimation\n>\n    <ng-container\n        *ngFor="let item of group"\n        [ngComponentOutlet]="item.component.component"\n        [ngComponentOutletInjector]="item | tuiMapper: mapper"\n    />\n</div>\n',
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
  static {
    this.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHoveredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHoveredService,
      factory: _TuiHoveredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = inject(TuiHoveredService);
  }
  static {
    this.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHovered)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHovered,
      selectors: [["", "tuiHoveredChange", ""]],
      outputs: {
        tuiHoveredChange: "tuiHoveredChange"
      },
      features: [ɵɵProvidersFeature([TuiHoveredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, {
    tuiHoveredChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-let.mjs
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var TuiLet = class _TuiLet {
  constructor() {
    inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef), new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiLet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLet,
      selectors: [["", "tuiLet", ""]],
      inputs: {
        tuiLet: "tuiLet"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLet]"
    }]
  }], function() {
    return [];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-repeat-times.mjs
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TuiRepeatTimes = class _TuiRepeatTimes {
  constructor() {
    this.viewContainer = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
  static {
    this.ɵfac = function TuiRepeatTimes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRepeatTimes)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRepeatTimes,
      selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
      inputs: {
        tuiRepeatTimesOf: "tuiRepeatTimesOf"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimes, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], null, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-auto-color.mjs
var TuiAutoColorPipe = class _TuiAutoColorPipe {
  transform(text) {
    return tuiStringHashToHsl(text);
  }
  static {
    this.ɵfac = function TuiAutoColorPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoColorPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiAutoColor",
      type: _TuiAutoColorPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoColorPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiAutoColor"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-calendar-sheet.mjs
var getMonthStartDaysOffset = (month, firstDayOfWeek) => {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};
var getDayFromMonthRowCol = ({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) => {
  ngDevMode && console.assert(Number.isInteger(rowIndex));
  ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
  ngDevMode && console.assert(Number.isInteger(colIndex));
  ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
  let day = rowIndex * DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new TuiDay(month.year, month.month, day);
};
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class _TuiCalendarSheetPipe {
  constructor() {
    this.firstDayOfWeek = inject(TUI_FIRST_DAY_OF_WEEK);
    this.currentMonth = null;
    this.currentSheet = [];
  }
  transform(month, showAdjacentDays = false) {
    if (this.currentMonth?.monthSame(month)) {
      return this.currentSheet;
    }
    const sheet = [];
    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.firstDayOfWeek
        });
        const isPrevMonthDay = (day2, relativeToMonth = month) => day2.year < relativeToMonth.year || day2.month < relativeToMonth.month;
        const isNextMonthDay = (day2, relativeToMonth = month) => day2.year > relativeToMonth.year || day2.month > relativeToMonth.month;
        if (isPrevMonthDay(day) && !showAdjacentDays) {
          continue;
        }
        if (isNextMonthDay(day) && !showAdjacentDays) {
          break;
        }
        row.push(day);
      }
      sheet.push(row);
    }
    this.currentSheet = sheet.filter((row) => row.length);
    this.currentMonth = month;
    return this.currentSheet;
  }
  static {
    this.ɵfac = function TuiCalendarSheetPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheetPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiCalendarSheet",
      type: _TuiCalendarSheetPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiCalendarSheet"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-fallback-src.mjs
var TuiFallbackSrcPipe = class _TuiFallbackSrcPipe {
  constructor() {
    this.el = tuiInjectElement();
  }
  transform(src, fallback) {
    return fromEvent(this.el, "error", {
      capture: true
    }).pipe(map(() => fallback), startWith(src || fallback));
  }
  static {
    this.ɵfac = function TuiFallbackSrcPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFallbackSrcPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFallbackSrc",
      type: _TuiFallbackSrcPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFallbackSrcPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFallbackSrc"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-flag.mjs
var TuiFlagPipe = class _TuiFlagPipe {
  constructor() {
    this.staticPath = inject(TUI_ASSETS_PATH);
  }
  transform(countryIsoCode) {
    if (!countryIsoCode) {
      return null;
    }
    return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
  }
  static {
    this.ɵfac = function TuiFlagPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFlagPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFlag",
      type: _TuiFlagPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlagPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFlag"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-date.mjs
var TuiFormatDatePipe = class _TuiFormatDatePipe {
  constructor() {
    this.service = inject(TuiFormatDateService);
  }
  transform(timestampOrDate) {
    return this.service.format(timestampOrDate.valueOf());
  }
  static {
    this.ɵfac = function TuiFormatDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatDatePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatDate",
      type: _TuiFormatDatePipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDatePipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatDate"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-number.mjs
var TuiFormatNumberPipe = class _TuiFormatNumberPipe {
  constructor() {
    this.numberFormat = inject(TUI_NUMBER_FORMAT);
  }
  /**
   * Formats number adding thousand separators and correct decimal separator
   * padding decimal part with zeroes to given length
   * @param value number
   * @param settings See {@link TuiNumberFormatSettings}
   */
  transform(value, settings = {}) {
    return this.numberFormat.pipe(map((format) => tuiFormatNumber(value, __spreadValues(__spreadProps(__spreadValues({}, format), {
      precision: Number.isNaN(format.precision) ? Infinity : format.precision
    }), settings))));
  }
  static {
    this.ɵfac = function TuiFormatNumberPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatNumberPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatNumber",
      type: _TuiFormatNumberPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatNumberPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatNumber"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-initials.mjs
var TuiInitialsPipe = class _TuiInitialsPipe {
  transform(text) {
    return text.toUpperCase().split(" ").map(([char]) => char).join("").slice(0, 2);
  }
  static {
    this.ɵfac = function TuiInitialsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInitialsPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiInitials",
      type: _TuiInitialsPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInitialsPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiInitials"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-month.mjs
var TuiMonthPipe = class _TuiMonthPipe {
  constructor() {
    this.months$ = inject(TUI_MONTHS);
  }
  transform({
    month
  }) {
    return this.months$.pipe(map((months) => months[month] || months[0]));
  }
  static {
    this.ɵfac = function TuiMonthPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMonthPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMonth",
      type: _TuiMonthPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMonthPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMonth"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-order-week-days.mjs
function convertToSundayFirstWeekFormat(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex] || "", ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class _TuiOrderWeekDaysPipe {
  constructor() {
    this.firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);
  }
  transform(mondayFirstWeekDays$) {
    return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [...weekDays.slice(this.firstDayOfWeekIndex), ...weekDays.slice(0, this.firstDayOfWeekIndex)]));
  }
  static {
    this.ɵfac = function TuiOrderWeekDaysPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOrderWeekDaysPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiOrderWeekDays",
      type: _TuiOrderWeekDaysPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiOrderWeekDays"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-spin-button.mjs
var _c0 = ["*"];
function TuiSpinButton_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵlistener("click", function TuiSpinButton_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftClick());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 2);
    ɵɵprojection(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 3);
    ɵɵlistener("click", function TuiSpinButton_ng_container_0_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightClick());
    });
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("t-hidden", ctx_r1.leftComputedDisabled);
    ɵɵproperty("iconStart", ctx_r1.icons.decrement)("tabIndex", ctx_r1.focusable ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[0], " ");
    ɵɵadvance(3);
    ɵɵclassProp("t-hidden", ctx_r1.rightComputedDisabled);
    ɵɵproperty("iconStart", ctx_r1.icons.increment)("tabIndex", ctx_r1.focusable ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[1], " ");
  }
}
var TuiSpinButton = class _TuiSpinButton {
  constructor() {
    this.icons = inject(TUI_SPIN_ICONS);
    this.spinTexts$ = inject(TUI_SPIN_TEXTS);
    this.focusable = true;
    this.disabled = false;
    this.leftDisabled = false;
    this.rightDisabled = false;
    this.leftClick = new EventEmitter();
    this.rightClick = new EventEmitter();
  }
  onLeftClick() {
    if (!this.leftComputedDisabled) {
      this.leftClick.emit();
    }
  }
  onRightClick() {
    if (!this.rightComputedDisabled) {
      this.rightClick.emit();
    }
  }
  get leftComputedDisabled() {
    return this.disabled || this.leftDisabled;
  }
  get rightComputedDisabled() {
    return this.disabled || this.rightDisabled;
  }
  static {
    this.ɵfac = function TuiSpinButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSpinButton)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSpinButton,
      selectors: [["tui-spin-button"]],
      hostBindings: function TuiSpinButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown.zoneless.prevent", function TuiSpinButton_mousedown_zoneless_prevent_HostBindingHandler() {
            return 0;
          })("keydown.arrowLeft.prevent", function TuiSpinButton_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.onLeftClick();
          })("keydown.arrowRight.prevent", function TuiSpinButton_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.onRightClick();
          });
        }
      },
      inputs: {
        focusable: "focusable",
        disabled: "disabled",
        leftDisabled: "leftDisabled",
        rightDisabled: "rightDisabled"
      },
      outputs: {
        leftClick: "leftClick",
        rightClick: "rightClick"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["appearance", "flat", "automation-id", "tui-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click", "iconStart", "tabIndex"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click", "iconStart", "tabIndex"]],
      template: function TuiSpinButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiSpinButton_ng_container_0_Template, 7, 10, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.spinTexts$));
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiButton],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSpinButton, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-spin-button",
      imports: [AsyncPipe, NgIf, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mousedown.zoneless.prevent)": "(0)",
        "(keydown.arrowLeft.prevent)": "onLeftClick()",
        "(keydown.arrowRight.prevent)": "onRightClick()"
      },
      template: '<ng-container *ngIf="spinTexts$ | async as texts">\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__left"\n        size="xs"\n        tuiIconButton\n        type="button"\n        [class.t-hidden]="leftComputedDisabled"\n        [iconStart]="icons.decrement"\n        [tabIndex]="focusable ? 0 : -1"\n        (click)="onLeftClick()"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class="t-content t-calendar-title">\n        <ng-content />\n    </span>\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__right"\n        size="xs"\n        tuiIconButton\n        type="button"\n        [class.t-hidden]="rightComputedDisabled"\n        [iconStart]="icons.increment"\n        [tabIndex]="focusable ? 0 : -1"\n        (click)="onRightClick()"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n',
      styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"]
    }]
  }], null, {
    focusable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    leftDisabled: [{
      type: Input
    }],
    rightDisabled: [{
      type: Input
    }],
    leftClick: [{
      type: Output
    }],
    rightClick: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-calendar.mjs
var _c02 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function TuiCalendarSheet_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵproperty("textContent", day_r1);
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const markers_r5 = ɵɵnextContext().ngIf;
    ɵɵstyleProp("background", (markers_r5 == null ? null : markers_r5[1]) || "");
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "div", 11);
    ɵɵtemplate(2, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_div_2_Template, 1, 2, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const markers_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵstyleProp("background", markers_r5 == null ? null : markers_r5[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", markers_r5.length > 1);
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵpipe(1, "tuiMapper");
    ɵɵlistener("click", function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().tuiLet;
      const ctx_r3 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r3.onItemClick(item_r3));
    })("tuiHoveredChange", function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().tuiLet;
      const ctx_r3 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r3.onItemHovered($event && item_r3));
    });
    ɵɵtext(2);
    ɵɵtemplate(3, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_Template, 3, 3, "div", 9);
    ɵɵpipe(4, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().tuiLet;
    const ctx_r3 = ɵɵnextContext(4);
    ɵɵclassProp("t-cell_disabled", ctx_r3.disabledItemHandler(item_r3))("t-cell_today", ctx_r3.itemIsToday(item_r3))("t-cell_unavailable", ctx_r3.itemIsUnavailable(item_r3));
    ɵɵattribute("data-range", ctx_r3.getItemRange(item_r3))("data-type", ɵɵpipeBind2(1, 10, item_r3, ctx_r3.dayTypeHandler));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r3.day, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBindV(4, 13, ɵɵpureFunction5(19, _c02, item_r3, ctx_r3.toMarkers, ctx_r3.itemIsToday(item_r3), ctx_r3.getItemRange(item_r3), ctx_r3.markerHandler)));
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template, 5, 25, "div", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.tuiLet;
    const ctx_r3 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3 && (!ctx_r3.itemIsUnavailable(item_r3) || ctx_r3.showAdjacent));
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r6 = ctx.$implicit;
    const rowIndex_r7 = ɵɵnextContext().$implicit;
    const sheet_r8 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiLet", sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7][colIndex_r6]);
  }
}
function TuiCalendarSheet_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r7 = ctx.$implicit;
    const sheet_r8 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", (sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7].length) || 0);
  }
}
function TuiCalendarSheet_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_Template, 2, 1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sheet_r8 = ctx.tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", sheet_r8.length);
  }
}
function TuiCalendarSpin_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.value.formattedYear, " ");
  }
}
function TuiCalendarSpin_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TuiCalendarSpin_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onYearClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.value.formattedYear, " ");
  }
}
function TuiCalendarYear_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function TuiCalendarYear_div_0_ng_container_1_div_1_Template_div_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).tuiLet;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.yearClick.emit(item_r2));
    })("tuiHoveredChange", function TuiCalendarYear_div_0_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const item_r2 = ɵɵrestoreView(_r1).tuiLet;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemHovered($event, item_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.tuiLet;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassProp("t-cell_disabled", ctx_r2.isDisabled(item_r2))("t-cell_today", ctx_r2.itemIsToday(item_r2));
    ɵɵproperty("tuiScrollIntoView", ctx_r2.scrollItemIntoView(item_r2));
    ɵɵattribute("data-range", ctx_r2.getItemRange(item_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiCalendarYear_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarYear_div_0_ng_container_1_div_1_Template, 2, 7, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r4 = ctx.$implicit;
    const rowIndex_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("tuiLet", ctx_r2.getItem(rowIndex_r5, colIndex_r4));
  }
}
function TuiCalendarYear_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiCalendarYear_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 4);
  }
}
function TuiCalendar_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 2)(1, "tui-calendar-year", 3);
    ɵɵlistener("yearClick", function TuiCalendar_tui_scrollbar_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.month.year)("max", ctx_r1.computedMax.year)("min", ctx_r1.computedMin.year)("value", ctx_r1.value);
  }
}
function TuiCalendar_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-spin", 4);
    ɵɵlistener("valueChange", function TuiCalendar_ng_template_1_Template_tui_calendar_spin_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationValueChange($event));
    })("yearClick", function TuiCalendar_ng_template_1_Template_tui_calendar_spin_yearClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationYearClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-calendar-sheet", 5);
    ɵɵpipe(2, "tuiMapper");
    ɵɵlistener("dayClick", function TuiCalendar_ng_template_1_Template_tui_calendar_sheet_dayClick_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDayClick($event));
    })("hoveredItemChange", function TuiCalendar_ng_template_1_Template_tui_calendar_sheet_hoveredItemChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHoveredItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.computedMaxViewedMonth)("min", ctx_r1.computedMinViewedMonth)("value", ctx_r1.month);
    ɵɵadvance();
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler, ctx_r1.disabledItemHandlerMapper, ctx_r1.computedMin, ctx_r1.computedMax))("hoveredItem", ctx_r1.hoveredItem)("markerHandler", ctx_r1.markerHandler)("month", ctx_r1.month)("showAdjacent", ctx_r1.showAdjacent)("value", ctx_r1.value);
  }
}
var TUI_CALENDAR_SHEET_DEFAULT_OPTIONS = {
  rangeMode: false
};
var TUI_CALENDAR_SHEET_OPTIONS = tuiCreateToken(TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
function tuiCalendarSheetOptionsProvider(options) {
  return tuiProvideOptions(TUI_CALENDAR_SHEET_OPTIONS, options, TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
}
var TuiCalendarSheet = class _TuiCalendarSheet {
  constructor() {
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.today = TuiDay.currentLocal();
    this.unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
    this.dayTypeHandler = inject(TUI_DAY_TYPE_HANDLER);
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.value = null;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.single = true;
    this.hoveredItemChange = new EventEmitter();
    this.dayClick = new EventEmitter();
    this.toMarkers = (day, today, range, markerHandler) => {
      if (today || ["active", "end", "start"].includes(range || "")) {
        return null;
      }
      const markers = markerHandler?.(day);
      return markers?.length ? markers : null;
    };
  }
  /**
   * @deprecated TODO(v5): delete it. It is used nowhere except unit tests
   */
  itemIsInterval(day) {
    const {
      value,
      hoveredItem
    } = this;
    if (!(value instanceof TuiDayRange)) {
      return false;
    }
    if (!value.isSingleDay) {
      return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
    }
    if (hoveredItem === null) {
      return false;
    }
    const range = TuiDayRange.sort(value.from, hoveredItem);
    return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
  }
  onItemHovered(item) {
    this.updateHoveredItem(item || null);
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (!value) {
      return null;
    }
    if (value instanceof TuiDay && !this.computedRangeMode) {
      return value.daySame(item) ? "active" : null;
    }
    if (value instanceof TuiDayRange && value.isSingleDay) {
      return value.from.daySame(item) ? "active" : null;
    }
    if (!(value instanceof TuiDay) && !(value instanceof TuiDayRange)) {
      return value.find((day) => day.daySame(item)) ? "active" : null;
    }
    const range = this.getRange(value, hoveredItem);
    if (range.isSingleDay && range.from.daySame(item)) {
      return "active";
    }
    if (range.from.daySame(item)) {
      return "start";
    }
    if (range.to.daySame(item)) {
      return "end";
    }
    return range.from.dayBefore(item) && range.to.dayAfter(item) ? "middle" : null;
  }
  get computedRangeMode() {
    return !this.single || this.options.rangeMode;
  }
  get isRangePicking() {
    return this.computedRangeMode ? this.value instanceof TuiDay : (
      /**
       * Only for backward compatibility!
       * TODO(v5): replace with `this.options.rangeMode && this.value instanceof TuiDay`
       */
      this.value instanceof TuiDayRange && this.value.isSingleDay
    );
  }
  itemIsToday(item) {
    return this.today.daySame(item);
  }
  itemIsUnavailable(item) {
    return !this.month.monthSame(item);
  }
  onItemClick(item) {
    this.dayClick.emit(item);
  }
  getRange(value, hoveredItem) {
    if (value instanceof TuiDay) {
      return TuiDayRange.sort(value, hoveredItem ?? value);
    }
    return value.isSingleDay ? TuiDayRange.sort(value.from, hoveredItem ?? value.to) : value;
  }
  updateHoveredItem(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
  static {
    this.ɵfac = function TuiCalendarSheet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSheet,
      selectors: [["tui-calendar-sheet"]],
      hostVars: 2,
      hostBindings: function TuiCalendarSheet_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking);
        }
      },
      inputs: {
        month: "month",
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        value: "value",
        hoveredItem: "hoveredItem",
        showAdjacent: "showAdjacent",
        single: "single"
      },
      outputs: {
        hoveredItemChange: "hoveredItemChange",
        dayClick: "dayClick"
      },
      decls: 6,
      vars: 9,
      consts: [[1, "t-row", "t-row_weekday"], ["class", "t-cell", 3, "textContent", 4, "ngFor", "ngForOf"], [4, "tuiLet"], [1, "t-cell", 3, "textContent"], ["automation-id", "tui-calendar-sheet__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-sheet__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-sheet__cell", "class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "t-cell_unavailable", "click", "tuiHoveredChange", 4, "ngIf"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "click", "tuiHoveredChange"], ["class", "t-dots", 4, "ngIf"], [1, "t-dots"], [1, "t-dot"], ["class", "t-dot", 3, "background", 4, "ngIf"]],
      template: function TuiCalendarSheet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiCalendarSheet_div_1_Template, 1, 1, "div", 1);
          ɵɵpipe(2, "tuiOrderWeekDays");
          ɵɵpipe(3, "async");
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiCalendarSheet_div_4_Template, 2, 1, "div", 2);
          ɵɵpipe(5, "tuiCalendarSheet");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 4, ɵɵpipeBind1(2, 2, ctx.unorderedWeekDays$)));
          ɵɵadvance(3);
          ɵɵproperty("tuiLet", ɵɵpipeBind2(5, 6, ctx.month, true));
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiLet, TuiMapperPipe, TuiOrderWeekDaysPipe, TuiRepeatTimes],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell[_ngcontent-%COMP%]{inline-size:2.25rem}[data-type=weekday][_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-type=weekend][_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}`],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarSheet.prototype, "getRange", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheet, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-sheet",
      imports: [CommonModule, TuiCalendarSheetPipe, TuiHovered, TuiLet, TuiMapperPipe, TuiOrderWeekDaysPipe, TuiRepeatTimes],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isRangePicking"
      },
      template: `<div class="t-row t-row_weekday">
    <div
        *ngFor="let day of unorderedWeekDays$ | tuiOrderWeekDays | async"
        class="t-cell"
        [textContent]="day"
    ></div>
</div>
<div *tuiLet="month | tuiCalendarSheet: true as sheet">
    <div
        *tuiRepeatTimes="let rowIndex of sheet.length"
        automation-id="tui-calendar-sheet__row"
        class="t-row"
    >
        <ng-container *tuiRepeatTimes="let colIndex of sheet[rowIndex]?.length || 0">
            <ng-container *tuiLet="sheet[rowIndex]?.[colIndex] as item">
                <div
                    *ngIf="item && (!itemIsUnavailable(item) || showAdjacent)"
                    automation-id="tui-calendar-sheet__cell"
                    class="t-cell"
                    [attr.data-range]="getItemRange(item)"
                    [attr.data-type]="item | tuiMapper: dayTypeHandler"
                    [class.t-cell_disabled]="disabledItemHandler(item)"
                    [class.t-cell_today]="itemIsToday(item)"
                    [class.t-cell_unavailable]="itemIsUnavailable(item)"
                    (click)="onItemClick(item)"
                    (tuiHoveredChange)="onItemHovered($event && item)"
                >
                    {{ item.day }}
                    <div
                        *ngIf="
                            item
                                | tuiMapper
                                    : toMarkers
                                    : itemIsToday(item)
                                    : getItemRange(item)
                                    : markerHandler as markers
                        "
                        class="t-dots"
                    >
                        <div
                            class="t-dot"
                            [style.background]="markers?.[0]"
                        ></div>
                        <div
                            *ngIf="markers.length > 1"
                            class="t-dot"
                            [style.background]="markers?.[1] || ''"
                        ></div>
                    </div>
                </div>
            </ng-container>
        </ng-container>
    </div>
</div>
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:2.25rem}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;bottom:0;display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}
`]
    }]
  }], null, {
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    single: [{
      type: Input
    }],
    hoveredItemChange: [{
      type: Output
    }],
    dayClick: [{
      type: Output
    }],
    getRange: []
  });
})();
var TuiCalendarSpin = class _TuiCalendarSpin {
  constructor() {
    this.value = TuiMonth.currentLocal();
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.valueChange = new EventEmitter();
    this.yearClick = new EventEmitter();
  }
  onYearClick() {
    this.yearClick.next(this.value);
  }
  append(date) {
    const value = this.value.append(date);
    if (this.min.monthSameOrAfter(value)) {
      this.updateValue(this.min);
    } else {
      this.updateValue(this.max.monthSameOrBefore(value) ? this.max : value);
    }
  }
  updateValue(value) {
    if (this.value.monthSame(value)) {
      return;
    }
    this.value = value;
    this.valueChange.emit(value);
  }
  static {
    this.ɵfac = function TuiCalendarSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSpin)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSpin,
      selectors: [["tui-calendar-spin"]],
      inputs: {
        value: "value",
        min: "min",
        max: "max"
      },
      outputs: {
        valueChange: "valueChange",
        yearClick: "yearClick"
      },
      decls: 7,
      vars: 10,
      consts: [["button", ""], [3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], [4, "ngIf", "ngIfElse"], ["id", "year-btn", "automation-id", "tui-primitive-year-month-pagination__year-button", "tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiCalendarSpin_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "tui-spin-button", 1);
          ɵɵlistener("leftClick", function TuiCalendarSpin_Template_tui_spin_button_leftClick_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.append({
              month: -1
            }));
          })("rightClick", function TuiCalendarSpin_Template_tui_spin_button_rightClick_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.append({
              month: 1
            }));
          });
          ɵɵtext(1);
          ɵɵpipe(2, "tuiMonth");
          ɵɵpipe(3, "async");
          ɵɵtemplate(4, TuiCalendarSpin_ng_container_4_Template, 2, 1, "ng-container", 2)(5, TuiCalendarSpin_ng_template_5_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const button_r4 = ɵɵreference(6);
          ɵɵproperty("focusable", false)("leftDisabled", ctx.value.monthSameOrBefore(ctx.min))("rightDisabled", ctx.value.monthSameOrAfter(ctx.max));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 8, ɵɵpipeBind1(2, 6, ctx.value)), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.min.year === ctx.max.year)("ngIfElse", button_r4);
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiLink, TuiMonthPipe, TuiSpinButton],
      styles: ["[_nghost-%COMP%]{display:block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSpin, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-spin",
      imports: [AsyncPipe, NgIf, TuiLink, TuiMonthPipe, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-spin-button\n    [focusable]="false"\n    [leftDisabled]="value.monthSameOrBefore(min)"\n    [rightDisabled]="value.monthSameOrAfter(max)"\n    (leftClick)="append({month: -1})"\n    (rightClick)="append({month: 1})"\n>\n    {{ value | tuiMonth | async }}\n    <ng-container *ngIf="min.year === max.year; else button">\n        {{ value.formattedYear }}\n    </ng-container>\n    <ng-template #button>\n        <button\n            id="year-btn"\n            automation-id="tui-primitive-year-month-pagination__year-button"\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="onYearClick()"\n        >\n            {{ value.formattedYear }}\n        </button>\n    </ng-template>\n</tui-spin-button>\n',
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    yearClick: [{
      type: Output
    }]
  });
})();
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var TuiCalendarYear = class _TuiCalendarYear {
  constructor() {
    this.hoveredItem = null;
    this.currentYear = TuiMonth.currentLocal().year;
    this.value = null;
    this.initialItem = this.currentYear;
    this.min = MIN_YEAR;
    this.max = MAX_YEAR;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.yearClick = new EventEmitter();
  }
  isDisabled(item) {
    return this.max && this.max < item || this.min && this.min > item || this.disabledItemHandler(item);
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (value instanceof TuiYear) {
      return value.year === item ? "active" : null;
    }
    if (tuiIsNumber(value)) {
      return value === item ? "active" : null;
    }
    if (!(value instanceof TuiMonthRange)) {
      return value?.find((day) => day.year === item) ? "active" : null;
    }
    const hovered = this.isSingle ? hoveredItem : null;
    const from = Math.min(value.from.year, hovered ?? value.to.year);
    const to = Math.max(value.from.year, hovered ?? value.to.year);
    if (from === to && value.from.year === value.to.year && from === item) {
      return "active";
    }
    if (from === item) {
      return "start";
    }
    if (to === item) {
      return "end";
    }
    return from < item && item < to ? "middle" : null;
  }
  onItemHovered(hovered, item) {
    this.updateHoveredItem(hovered, item);
  }
  get isSingle() {
    return this.value instanceof TuiMonthRange ? this.value.from.monthSame(this.value.to) : this.value instanceof TuiDayRange && this.value.isSingleDay;
  }
  get rows() {
    return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
  }
  scrollItemIntoView(item) {
    return this.initialItem === item;
  }
  getItem(rowIndex, colIndex) {
    return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
  }
  itemIsToday(item) {
    return this.currentYear === item;
  }
  get calculatedMin() {
    const initial = this.initialItem - LIMIT;
    const min = this.min ?? MIN_YEAR;
    return min > initial ? min : initial;
  }
  get calculatedMax() {
    const initial = this.initialItem + LIMIT;
    const max = this.max ?? MAX_YEAR;
    return max < initial ? max + 1 : initial;
  }
  updateHoveredItem(hovered, item) {
    this.hoveredItem = hovered ? item : null;
  }
  static {
    this.ɵfac = function TuiCalendarYear_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarYear)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarYear,
      selectors: [["tui-calendar-year"]],
      hostVars: 2,
      hostBindings: function TuiCalendarYear_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isSingle);
        }
      },
      inputs: {
        value: "value",
        initialItem: "initialItem",
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler"
      },
      outputs: {
        yearClick: "yearClick"
      },
      decls: 1,
      vars: 1,
      consts: [["automation-id", "tui-calendar-year__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-year__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-year__cell", "class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "tuiScrollIntoView", "click", "tuiHoveredChange", 4, "tuiLet"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiScrollIntoView"]],
      template: function TuiCalendarYear_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendarYear_div_0_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("tuiRepeatTimesOf", ctx.rows);
        }
      },
      dependencies: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;inline-size:16rem}.t-cell[_ngcontent-%COMP%]{inline-size:4rem;border-block-start-width:.5rem;border-block-end-width:.5rem}`],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarYear, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-year",
      imports: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isSingle"
      },
      template: '<div\n    *tuiRepeatTimes="let rowIndex of rows"\n    automation-id="tui-calendar-year__row"\n    class="t-row"\n>\n    <ng-container *tuiRepeatTimes="let colIndex of 4">\n        <div\n            *tuiLet="getItem(rowIndex, colIndex) as item"\n            automation-id="tui-calendar-year__cell"\n            class="t-cell"\n            [attr.data-range]="getItemRange(item)"\n            [class.t-cell_disabled]="isDisabled(item)"\n            [class.t-cell_today]="itemIsToday(item)"\n            [tuiScrollIntoView]="scrollItemIntoView(item)"\n            (click)="yearClick.emit(item)"\n            (tuiHoveredChange)="onItemHovered($event, item)"\n        >\n            {{ item }}\n        </div>\n    </ng-container>\n</div>\n',
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;inline-size:16rem}.t-cell{inline-size:4rem;border-block-start-width:.5rem;border-block-end-width:.5rem}
`]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    initialItem: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    yearClick: [{
      type: Output
    }]
  });
})();
var TuiCalendar = class _TuiCalendar {
  constructor() {
    this.day = null;
    this.view = "month";
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.minViewedMonth = TUI_FIRST_DAY;
    this.maxViewedMonth = TUI_LAST_DAY;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.markerHandler = null;
    this.dayClick = new EventEmitter();
    this.monthChange = new EventEmitter();
    this.hoveredItemChange = new EventEmitter();
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
  }
  set value(value) {
    this.day = value;
    if (this.showAdjacent && value instanceof TuiDay && value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) {
      this.month = value;
    }
  }
  set initialView(view) {
    this.view = view;
  }
  get value() {
    return this.day;
  }
  onPaginationValueChange(month) {
    this.updateViewedMonth(month);
  }
  onDayClick(day) {
    this.dayClick.emit(day);
  }
  onHoveredItemChange(day) {
    this.updateHoveredDay(day);
  }
  get computedMin() {
    return this.min ?? TUI_FIRST_DAY;
  }
  get computedMax() {
    return this.max ?? TUI_LAST_DAY;
  }
  get computedMinViewedMonth() {
    const min = this.computedMin;
    const minViewed = this.minViewedMonth ?? TUI_FIRST_DAY;
    return minViewed.monthSameOrAfter(min) ? minViewed : min;
  }
  get computedMaxViewedMonth() {
    const max = this.computedMax;
    const maxViewed = this.maxViewedMonth ?? TUI_LAST_DAY;
    return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
  }
  get isInYearView() {
    return this.view === "year";
  }
  onPaginationYearClick() {
    this.view = "year";
  }
  onPickerYearClick(year) {
    this.view = "month";
    this.updateViewedMonth(new TuiMonth(year, this.month.month));
  }
  updateViewedMonth(month) {
    if (this.month.monthSame(month)) {
      return;
    }
    this.month = month;
    this.monthChange.emit(month);
  }
  updateHoveredDay(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
  static {
    this.ɵfac = function TuiCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendar,
      selectors: [["tui-calendar"]],
      inputs: {
        month: "month",
        disabledItemHandler: "disabledItemHandler",
        min: "min",
        max: "max",
        minViewedMonth: "minViewedMonth",
        maxViewedMonth: "maxViewedMonth",
        hoveredItem: "hoveredItem",
        showAdjacent: "showAdjacent",
        markerHandler: "markerHandler",
        value: "value",
        initialView: "initialView"
      },
      outputs: {
        dayClick: "dayClick",
        monthChange: "monthChange",
        hoveredItemChange: "hoveredItemChange"
      },
      decls: 3,
      vars: 2,
      consts: [["calendar", ""], ["automation-id", "tui-calendar__scrollbar", "class", "t-scrollbar", 4, "ngIf", "ngIfElse"], ["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "yearClick", "initialItem", "max", "min", "value"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "valueChange", "yearClick", "max", "min", "value"], ["automation-id", "tui-calendar__calendar", 3, "dayClick", "hoveredItemChange", "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value"]],
      template: function TuiCalendar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendar_tui_scrollbar_0_Template, 2, 4, "tui-scrollbar", 1)(1, TuiCalendar_ng_template_1_Template, 3, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const calendar_r4 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.isInYearView)("ngIfElse", calendar_r4);
        }
      },
      dependencies: [NgIf, TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{display:block;min-block-size:18.25rem;inline-size:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar[_ngcontent-%COMP%]{block-size:18.25rem;inline-size:16.875rem}.t-pagination[_ngcontent-%COMP%]{margin-bottom:1rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar",
      imports: [NgIf, TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-scrollbar\n    *ngIf="isInYearView; else calendar"\n    automation-id="tui-calendar__scrollbar"\n    class="t-scrollbar"\n>\n    <tui-calendar-year\n        automation-id="tui-calendar__year"\n        [initialItem]="month.year"\n        [max]="computedMax.year"\n        [min]="computedMin.year"\n        [value]="value"\n        (yearClick)="onPickerYearClick($event)"\n    />\n</tui-scrollbar>\n<ng-template #calendar>\n    <tui-calendar-spin\n        automation-id="tui-calendar__pagination"\n        class="t-pagination"\n        [max]="computedMaxViewedMonth"\n        [min]="computedMinViewedMonth"\n        [value]="month"\n        (valueChange)="onPaginationValueChange($event)"\n        (yearClick)="onPaginationYearClick()"\n    />\n    <tui-calendar-sheet\n        automation-id="tui-calendar__calendar"\n        [disabledItemHandler]="disabledItemHandler | tuiMapper: disabledItemHandlerMapper : computedMin : computedMax"\n        [hoveredItem]="hoveredItem"\n        [markerHandler]="markerHandler"\n        [month]="month"\n        [showAdjacent]="showAdjacent"\n        [value]="value"\n        (dayClick)="onDayClick($event)"\n        (hoveredItemChange)="onHoveredItemChange($event)"\n    />\n</ng-template>\n',
      styles: [":host{display:block;min-block-size:18.25rem;inline-size:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar{block-size:18.25rem;inline-size:16.875rem}.t-pagination{margin-bottom:1rem}\n"]
    }]
  }], null, {
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minViewedMonth: [{
      type: Input
    }],
    maxViewedMonth: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    dayClick: [{
      type: Output
    }],
    monthChange: [{
      type: Output
    }],
    hoveredItemChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    initialView: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    const el = this.el.nativeElement.tagName.includes("-") ? this.el.nativeElement.querySelector(this.options.query) : this.el.nativeElement;
    return el || this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: NaN,
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = tuiCreateToken();
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, TUI_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    if (this.autoFocus) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
  static {
    this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoFocus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAutoFocus,
      selectors: [["", "tuiAutoFocus", ""]],
      inputs: {
        autoFocus: [2, "tuiAutoFocus", "autoFocus", coerceBooleanProperty]
      },
      features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS), ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, {
    autoFocus: [{
      type: Input,
      args: [{
        alias: "tuiAutoFocus",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = null;
    this.initialized = false;
    Promise.resolve().then(() => {
      this.initialized = true;
      this.activeElement = tuiGetNativeFocused(this.doc);
      this.el.focus();
    });
  }
  ngOnDestroy() {
    tuiBlurNativeFocused(this.doc);
    Promise.resolve().then(() => {
      if (tuiIsHTMLElement(this.activeElement)) {
        this.activeElement.focus();
      }
    });
  }
  onFocusIn(node) {
    const firstElementChild = this.el.firstElementChild;
    if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
      tuiGetClosestFocusable({
        initial: firstElementChild,
        root: this.el
      })?.focus();
    }
  }
  static {
    this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFocusTrap)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFocusTrap,
      selectors: [["", "tuiFocusTrap", ""]],
      hostAttrs: ["tabIndex", "0"],
      hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
            return ctx.initialized && ctx.onFocusIn($event.target);
          }, false, ɵɵresolveWindow);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)"
      }
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-dialog.mjs
function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 6);
    ɵɵtemplate(1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.header)("polymorpheusOutletContext", ctx_r1.context);
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵelementStart(2, "div", 8)(3, "button", 9);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_4_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (ctx_r1.context.data == null ? null : ctx_r1.context.data.button) || "OK", " ");
  }
}
function TuiDialogComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiDialogComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close$.next());
    })("mousedown.prevent.zoneless", function TuiDialogComponent_button_6_Template_button_mousedown_prevent_zoneless_0_listener() {
      ɵɵrestoreView(_r5);
      return ɵɵresetView(0);
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵproperty("appearance", ctx_r1.isMobile() ? "icon" : "neutral")("iconStart", ctx_r1.icons.close)("size", ctx_r1.isMobile() ? "xs" : "s");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 6, ctx_r1.closeWord$), "\n");
  }
}
function TuiDialogs_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogs_section_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 2);
    ɵɵtemplate(1, TuiDialogs_section_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelement(2, "tui-scroll-controls", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("@tuiHost", void 0);
    ɵɵattribute("aria-labelledby", item_r1.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
var TUI_DIALOGS = tuiCreateToken(new BehaviorSubject([]));
var TUI_DIALOG_DEFAULT_OPTIONS = {
  appearance: "",
  size: "m",
  required: false,
  closeable: true,
  dismissible: true,
  label: "",
  header: "",
  data: void 0
};
var TUI_DIALOGS_CLOSE = tuiCreateToken(EMPTY);
var TUI_DIALOG_OPTIONS = tuiCreateToken(TUI_DIALOG_DEFAULT_OPTIONS);
function tuiDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
var SCROLLBAR_PLACEHOLDER = 17;
var TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return event.key === "Escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target));
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && (!tuiContainsOrAfter(this.el, target) || target === this.el);
  }
  static {
    this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogCloseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogCloseService,
      factory: _TuiDialogCloseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.speed = inject(TUI_ANIMATIONS_SPEED);
    this.animation = {
      value: "",
      params: {
        start: "40px",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.fullscreenAnimation = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.close$ = new Subject();
    this.context = injectContext();
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.slideInTop = computed(() => this.size === "fullscreen" || this.size === "page" || this.isMobile() ? this.fullscreenAnimation : this.animation);
    this.isMobile = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile")));
    merge(this.close$.pipe(switchMap(() => toObservable(this.context.closeable))), inject(TuiDialogCloseService).pipe(switchMap(() => toObservable(this.context.dismissible))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }
  get size() {
    return this.context.size;
  }
  get header() {
    return this.context.header;
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
  static {
    this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogComponent,
      selectors: [["tui-dialog"]],
      hostVars: 6,
      hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.slideInTop())("@tuiFadeIn", ctx.slideInTop());
          ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
          ɵɵclassProp("_centered", ctx.header);
        }
      },
      features: [ɵɵProvidersFeature([TuiDialogCloseService])],
      decls: 7,
      vars: 8,
      consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", "class", "t-close", 3, "appearance", "iconStart", "size", "border-radius", "click", "mousedown.prevent.zoneless", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "mousedown.prevent.zoneless", "appearance", "iconStart", "size"]],
      template: function TuiDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵelement(2, "h2", 2);
          ɵɵelementStart(3, "section");
          ɵɵtemplate(4, TuiDialogComponent_ng_container_4_Template, 5, 2, "ng-container", 3);
          ɵɵelementEnd()();
          ɵɵelement(5, "div", 4);
          ɵɵtemplate(6, TuiDialogComponent_button_6_Template, 3, 8, "button", 5);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.header);
          ɵɵadvance(2);
          ɵɵclassProp("t-heading_closable", ctx.context.closeable && !ctx.header);
          ɵɵproperty("id", ctx.context.id)("textContent", ctx.context.label);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.context.closeable);
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}[data-size=auto][_nghost-%COMP%]{inline-size:auto}[data-size=s][_nghost-%COMP%]{inline-size:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{inline-size:42.5rem}[data-size=l][_nghost-%COMP%]{inline-size:55rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - 22.5rem)}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3)}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}.t-heading[_ngcontent-%COMP%]{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable[_ngcontent-%COMP%]{padding-inline-end:2rem}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons[_ngcontent-%COMP%]{margin-top:1.25rem;text-align:end}'],
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialog",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "[@tuiSlideInTop]": "slideInTop()",
        "[@tuiFadeIn]": "slideInTop()",
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "size",
        "[class._centered]": "header"
      },
      template: `<header
    *ngIf="header"
    class="t-header"
>
    <ng-container *polymorpheusOutlet="header as text; context: context">
        {{ text }}
    </ng-container>
</header>
<div class="t-content">
    <h2
        class="t-heading"
        [class.t-heading_closable]="context.closeable && !header"
        [id]="context.id"
        [textContent]="context.label"
    ></h2>
    <section>
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            <div [innerHTML]="text"></div>
            <div class="t-buttons">
                <button
                    size="m"
                    tuiAutoFocus
                    tuiButton
                    type="button"
                    (click)="context.$implicit.complete()"
                >
                    {{ context.data?.button || 'OK' }}
                </button>
            </div>
        </ng-container>
    </section>
</div>
<div class="t-filler"></div>

<!-- Close button is insensitive to \`context.closeable === Observable<false>\` by design -->
<button
    *ngIf="context.closeable"
    automation-id="tui-dialog__close"
    tuiIconButton
    type="button"
    class="t-close"
    [appearance]="isMobile() ? 'icon' : 'neutral'"
    [iconStart]="icons.close"
    [size]="isMobile() ? 'xs' : 's'"
    [style.border-radius.%]="100"
    (click)="close$.next()"
    (mousedown.prevent.zoneless)="(0)"
>
    {{ closeWord$ | async }}
</button>
`,
      styles: [':host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable{padding-inline-end:2rem}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons{margin-top:1.25rem;text-align:end}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDialogService = class _TuiDialogService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialogService_BaseFactory;
      return function TuiDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogService,
      factory: () => (() => new _TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var TuiDialog = class _TuiDialog extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialog_BaseFactory;
      return function TuiDialog_Factory(__ngFactoryType__) {
        return (ɵTuiDialog_BaseFactory || (ɵTuiDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiDialog)))(__ngFactoryType__ || _TuiDialog);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDialog,
      selectors: [["ng-template", "tuiDialog", ""]],
      inputs: {
        options: [0, "tuiDialogOptions", "options"],
        open: [0, "tuiDialog", "open"]
      },
      outputs: {
        openChange: "tuiDialogChange"
      },
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDialog]",
      inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
      outputs: ["openChange: tuiDialogChange"],
      providers: [tuiAsPopover(TuiDialogService)]
    }]
  }], null, null);
})();
function tuiDialog(component, _a = {}) {
  var _b = _a, {
    injector
  } = _b, options = __objRest(_b, [
    "injector"
  ]);
  if (!injector) {
    assertInInjectionContext(tuiDialog);
    injector = inject(INJECTOR$1);
  }
  const dialogService = injector.get(TuiDialogService);
  return (data) => dialogService.open(new PolymorpheusComponent(component, injector), __spreadProps(__spreadValues({}, options), {
    data
  }));
}
var TuiDialogs = class _TuiDialogs {
  constructor() {
    this.el = tuiInjectElement();
    this.dialogs = toSignal(inject(TUI_DIALOGS), {
      initialValue: []
    });
  }
  static {
    this.ɵfac = function TuiDialogs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogs,
      selectors: [["tui-dialogs"]],
      hostBindings: function TuiDialogs_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.zoneless", function TuiDialogs_keydown_zoneless_HostBindingHandler() {
            return ctx.el.scrollTop = ctx.el.scrollHeight / 2;
          });
        }
      },
      decls: 2,
      vars: 3,
      consts: [[1, "t-overlay"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
      template: function TuiDialogs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
          ɵɵtemplate(1, TuiDialogs_section_1_Template, 3, 4, "section", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-overlay_visible", ctx.dialogs().length);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.dialogs());
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],
      data: {
        animation: [tuiHost]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialogs",
      imports: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiHost],
      host: {
        "(keydown.zoneless)": "el.scrollTop = el.scrollHeight / 2"
      },
      template: '<div\n    class="t-overlay"\n    [class.t-overlay_visible]="dialogs().length"\n></div>\n<section\n    *ngFor="let item of dialogs()"\n    aria-modal="true"\n    role="dialog"\n    tuiFocusTrap\n    tuiScrollRef\n    class="t-dialog"\n    @tuiHost\n    [attr.aria-labelledby]="item.id"\n>\n    <ng-container *polymorpheusOutlet="item.component; context: item" />\n    <tui-scroll-controls class="t-scrollbars" />\n</section>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:before{content:"";display:block;block-size:1000%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating,.t-dialog.ng-animating{overflow:clip}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible{opacity:1;transition-timing-function:ease-out}.t-dialog:last-child{pointer-events:auto;filter:none}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-error.mjs
var _c03 = () => ({});
function TuiError_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiError_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiError_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("@tuiFadeIn", ctx_r1.options)("@tuiHeightCollapse", ctx_r1.options);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.error.message || ctx_r1.default())("polymorpheusOutletContext", ctx_r1.error.context || ɵɵpureFunction0(4, _c03));
  }
}
var TuiError = class _TuiError {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.error = null;
    this.visible = true;
    this.default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
  }
  set errorSetter(error) {
    this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
  }
  onAnimation(visible) {
    this.visible = visible;
  }
  static {
    this.ɵfac = function TuiError_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiError)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiError,
      selectors: [["tui-error"]],
      hostBindings: function TuiError_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel.self", function TuiError_animationcancel_self_HostBindingHandler() {
            return ctx.onAnimation(false);
          })("animationstart.self", function TuiError_animationstart_self_HostBindingHandler() {
            return ctx.onAnimation(true);
          });
        }
      },
      inputs: {
        errorSetter: [0, "error", "errorSetter"]
      },
      decls: 1,
      vars: 1,
      consts: [["automation-id", "tui-error__text", "class", "t-message-text", 4, "ngIf"], ["automation-id", "tui-error__text", 1, "t-message-text"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiError_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiError_div_0_Template, 2, 5, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.error && ctx.visible);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ['[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{white-space:pre-line}.t-message-text[_ngcontent-%COMP%]:before{content:"";line-height:1.5rem;vertical-align:bottom}'],
      data: {
        animation: [tuiHeightCollapse, tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiError, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-error",
      imports: [NgIf, PolymorpheusOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiHeightCollapse, tuiFadeIn],
      host: {
        "(animationcancel.self)": "onAnimation(false)",
        "(animationstart.self)": "onAnimation(true)"
      },
      template: '<div\n    *ngIf="error && visible"\n    automation-id="tui-error__text"\n    class="t-message-text"\n    [@tuiFadeIn]="options"\n    [@tuiHeightCollapse]="options"\n>\n    <ng-container *polymorpheusOutlet="error.message || default() as text; context: error.context || {}">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: [':host{display:block;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text{white-space:pre-line}.t-message-text:before{content:"";line-height:1.5rem;vertical-align:bottom}\n']
    }]
  }], null, {
    errorSetter: [{
      type: Input,
      args: ["error"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-loader.mjs
var _c04 = ["*"];
function TuiLoader_div_2_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiLoader_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiLoader_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-text_horizontal", ctx_r1.isHorizontal);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent);
  }
}
function TuiLoader_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "circle", 4);
    ɵɵelementEnd();
    ɵɵtemplate(3, TuiLoader_div_2_div_3_Template, 2, 3, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-loader_horizontal", ctx_r1.isHorizontal)("t-loader_inherit-color", ctx_r1.inheritColor);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.textContent);
  }
}
var TUI_LOADER_DEFAULT_OPTIONS = {
  size: "m",
  inheritColor: false,
  overlay: false
};
var TUI_LOADER_OPTIONS = tuiCreateToken(TUI_LOADER_DEFAULT_OPTIONS);
function tuiLoaderOptionsProvider(options) {
  return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
var TuiLoader = class _TuiLoader {
  constructor() {
    this.isIOS = inject(TUI_IS_IOS);
    this.options = inject(TUI_LOADER_OPTIONS);
    this.isApple = tuiIsSafari(tuiInjectElement()) || this.isIOS;
    this.size = this.options.size;
    this.inheritColor = this.options.inheritColor;
    this.overlay = this.options.overlay;
    this.loading = true;
  }
  get isHorizontal() {
    return !tuiSizeBigger(this.size);
  }
  static {
    this.ɵfac = function TuiLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLoader)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLoader,
      selectors: [["tui-loader"]],
      hostVars: 3,
      hostBindings: function TuiLoader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_loading", ctx.loading);
        }
      },
      inputs: {
        size: "size",
        inheritColor: "inheritColor",
        overlay: "overlay",
        textContent: "textContent",
        loading: [0, "showLoader", "loading"]
      },
      ngContentSelectors: _c04,
      decls: 3,
      vars: 7,
      consts: [[1, "t-content", 3, "disabled"], ["class", "t-loader", 3, "t-loader_horizontal", "t-loader_inherit-color", 4, "ngIf"], [1, "t-loader"], ["automation-id", "tui-loader__loader", "focusable", "false", "height", "100%", "width", "100%", 1, "t-icon"], ["cx", "50%", "cy", "50%", 1, "t-circle"], ["automation-id", "tui-loader__text", "class", "t-text", 3, "t-text_horizontal", 4, "ngIf"], ["automation-id", "tui-loader__text", 1, "t-text"], [4, "polymorpheusOutlet"]],
      template: function TuiLoader_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "fieldset", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiLoader_div_2_Template, 4, 5, "div", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-content_has-overlay", ctx.overlay && ctx.loading)("t-content_loading", ctx.loading);
          ɵɵproperty("disabled", ctx.loading && !ctx.isApple);
          ɵɵattribute("inert", ctx.loading || null);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.loading);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoader, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-loader",
      imports: [NgIf, PolymorpheusOutlet, PolymorpheusTemplate],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._loading]": "loading",
        "[attr.data-size]": "size"
      },
      template: '<fieldset\n    class="t-content"\n    [attr.inert]="loading || null"\n    [class.t-content_has-overlay]="overlay && loading"\n    [class.t-content_loading]="loading"\n    [disabled]="loading && !isApple"\n>\n    <ng-content />\n</fieldset>\n\n<div\n    *ngIf="loading"\n    class="t-loader"\n    [class.t-loader_horizontal]="isHorizontal"\n    [class.t-loader_inherit-color]="inheritColor"\n>\n    <svg\n        automation-id="tui-loader__loader"\n        focusable="false"\n        height="100%"\n        width="100%"\n        class="t-icon"\n    >\n        <circle\n            cx="50%"\n            cy="50%"\n            class="t-circle"\n        />\n    </svg>\n\n    <div\n        *ngIf="textContent"\n        automation-id="tui-loader__text"\n        class="t-text"\n        [class.t-text_horizontal]="isHorizontal"\n    >\n        <ng-container *polymorpheusOutlet="textContent as text">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n',
      styles: [":host{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}:host._loading{overflow:hidden}:host[data-size=xs]{--t-diameter: .75em}:host[data-size=s]{--t-diameter: 1em}:host[data-size=m]{--t-diameter: 1.5em}:host[data-size=l]{--t-diameter: 2.5em}:host[data-size=xl]{--t-diameter: 3.5em}:host[data-size=xxl]{--t-diameter: 5em}.t-content{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay{opacity:.3}.t-content_loading{pointer-events:none}.t-loader{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal{flex-direction:row}.t-loader.t-loader_inherit-color{color:inherit;stroke:currentColor}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal{margin:0 0 0 1rem}@keyframes tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon{overflow:visible}}@keyframes tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:tuiLoaderDashOffset 4s linear infinite}\n"]
    }]
  }], null, {
    size: [{
      type: Input
    }],
    inheritColor: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    textContent: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: ["showLoader"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c05 = ["wrapper"];
var _c1 = ["*"];
function TuiExpandComponent_ng_container_2_tui_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-loader", 4);
    ɵɵelementContainer(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("overlay", true)("showLoader", ctx_r0.loading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
  }
}
function TuiExpandComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵtemplate(2, TuiExpandComponent_ng_container_2_tui_loader_2_Template, 2, 3, "tui-loader", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.async)("ngIfElse", ctx_r0.content);
  }
}
var TuiExpandContent = class _TuiExpandContent {
  static {
    this.ɵfac = function TuiExpandContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpandContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiExpandContent,
      selectors: [["", "tuiExpandContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiExpandContent]"
    }]
  }], null, null);
})();
var State = {
  Idle: 0,
  Loading: 1,
  Prepared: 2,
  Animated: 3
};
var LOADER_HEIGHT = 48;
var TUI_EXPAND_LOADED = "tui-expand-loaded";
var TuiExpandComponent = class _TuiExpandComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.state = State.Idle;
    this.content = null;
    this.expanded = null;
    this.async = false;
  }
  set expandedSetter(expanded) {
    if (this.expanded === null) {
      this.expanded = expanded;
      return;
    }
    if (this.state !== State.Idle) {
      this.expanded = expanded;
      this.state = State.Animated;
      return;
    }
    this.expanded = expanded;
    this.retrigger(this.async && expanded ? State.Loading : State.Animated);
  }
  get contentVisible() {
    return this.expanded || this.state !== State.Idle;
  }
  get overflow() {
    return this.state !== State.Idle;
  }
  get loading() {
    return !!this.expanded && this.async && this.state === State.Loading;
  }
  get height() {
    const {
      expanded,
      state,
      contentWrapper
    } = this;
    if (expanded && state === State.Prepared || !expanded && state === State.Animated) {
      return 0;
    }
    if (contentWrapper && (!expanded && state === State.Prepared || expanded && state === State.Animated)) {
      return contentWrapper.nativeElement.offsetHeight;
    }
    if (contentWrapper && expanded && state === State.Loading) {
      return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
    }
    return null;
  }
  onTransitionEnd({
    propertyName,
    pseudoElement
  }) {
    if (propertyName === "opacity" && !pseudoElement && this.state === State.Animated) {
      this.state = State.Idle;
    }
  }
  onExpandLoaded(event) {
    event.stopPropagation();
    if (this.state === State.Loading) {
      this.retrigger(State.Animated);
    }
  }
  retrigger(state) {
    this.state = State.Prepared;
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.state !== State.Prepared) {
        return;
      }
      this.state = state;
      this.cdr.markForCheck();
    });
  }
  static {
    this.ɵfac = function TuiExpandComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpandComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiExpandComponent,
      selectors: [["tui-expand"]],
      contentQueries: function TuiExpandComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiExpandContent, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        }
      },
      viewQuery: function TuiExpandComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c05, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
        }
      },
      hostVars: 9,
      hostBindings: function TuiExpandComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("transitionend.self", function TuiExpandComponent_transitionend_self_HostBindingHandler($event) {
            return ctx.onTransitionEnd($event);
          })("tui-expand-loaded", function TuiExpandComponent_tui_expand_loaded_HostBindingHandler($event) {
            return ctx.onExpandLoaded($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.expanded);
          ɵɵstyleProp("height", ctx.height, "px");
          ɵɵclassProp("_loading", ctx.loading)("_overflow", ctx.overflow)("_expanded", ctx.expanded);
        }
      },
      inputs: {
        async: "async",
        expandedSetter: [0, "expanded", "expandedSetter"]
      },
      ngContentSelectors: _c1,
      decls: 3,
      vars: 3,
      consts: [["wrapper", ""], [1, "t-wrapper"], [4, "ngIf"], ["size", "l", 3, "overlay", "showLoader", 4, "ngIf", "ngIfElse"], ["size", "l", 3, "overlay", "showLoader"], [3, "ngTemplateOutlet"]],
      template: function TuiExpandComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵtemplate(2, TuiExpandComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("@tuiParentAnimation", void 0)("@.disabled", ctx.overflow);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.contentVisible);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, TuiLoader],
      styles: ['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],
      data: {
        animation: [tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-expand",
      imports: [NgIf, NgTemplateOutlet, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[style.height.px]": "height",
        "[class._loading]": "loading",
        "[class._overflow]": "overflow",
        "[class._expanded]": "expanded",
        "[attr.aria-expanded]": "expanded",
        "(transitionend.self)": "onTransitionEnd($event)",
        [`(${TUI_EXPAND_LOADED})`]: "onExpandLoaded($event)"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    @tuiParentAnimation\n    [@.disabled]="overflow"\n>\n    <ng-container *ngIf="contentVisible">\n        <ng-content />\n        <tui-loader\n            *ngIf="async; else content"\n            size="l"\n            [overlay]="true"\n            [showLoader]="loading"\n        >\n            <ng-container [ngTemplateOutlet]="content" />\n        </tui-loader>\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:"";display:table}\n']
    }]
  }], null, {
    contentWrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    content: [{
      type: ContentChild,
      args: [TuiExpandContent, {
        read: TemplateRef
      }]
    }],
    async: [{
      type: Input
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }]
  });
})();
var TuiExpand = [TuiExpandComponent, TuiExpandContent];

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = inject(TUI_PLATFORM, {
      skipSelf: true
    });
  }
  static {
    this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPlatform)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPlatform,
      selectors: [["", "tuiPlatform", ""]],
      hostVars: 1,
      hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-platform", ctx.tuiPlatform);
        }
      },
      inputs: {
        tuiPlatform: "tuiPlatform"
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_PLATFORM,
        useFactory: () => inject(_TuiPlatform).tuiPlatform
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform"
      }
    }]
  }], null, {
    tuiPlatform: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var ScreenOrientationService = class _ScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  stream$ = (this.isModern ? fromEvent(this.win.screen.orientation, "change").pipe(startWith(null), map(() => (
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
     * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
     *
     * Browser compatibility:
     * Safari 16.4+, Chrome 38+, Firefox 43+
     */
    this.win.screen.orientation.type
  ))) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
    const angle = parseInt(this.win.orientation, 10);
    switch (angle) {
      case -90:
        return "landscape-secondary";
      case 180:
        return "portrait-secondary";
      case 90:
        return "landscape-primary";
      case 0:
      default:
        return "portrait-primary";
    }
  }))).pipe(shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  get isModern() {
    return !!this.win?.screen?.orientation;
  }
  static ɵfac = function ScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScreenOrientationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScreenOrientationService,
    factory: _ScreenOrientationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ViewportService = class _ViewportService extends Observable {
  visualViewport = inject(WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function ViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ViewportService,
    factory: _ViewportService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.$ = inject(ViewportService).pipe(takeUntilDestroyed()).subscribe(({
      offsetLeft,
      offsetTop,
      height,
      width,
      scale
    }) => {
      this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
      this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
      this.style.setProperty("--tui-viewport-height", tuiPx(height));
      this.style.setProperty("--tui-viewport-width", tuiPx(width));
      this.style.setProperty("--tui-viewport-scale", String(scale));
      this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
      this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
    });
  }
  static {
    this.ɵfac = function TuiVisualViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewport)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVisualViewport,
      selectors: [["", "tuiVisualViewport", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-hint.mjs
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c06 = ["*"];
function TuiHintComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
var _c12 = (a0) => ({
  $implicit: a0
});
function TuiHints_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiHints_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiHints_div_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hint_r1 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0)("tuiActiveZoneParent", hint_r1.activeZone || null);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", hint_r1.component)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c12, hint_r1));
  }
}
var TUI_HINT_COMPONENT = tuiCreateTokenFromFactory(() => TuiHintComponent);
var TuiHintService = class _TuiHintService extends BehaviorSubject {
  constructor() {
    super([]);
  }
  add(directive) {
    this.next(this.value.concat(directive));
  }
  remove(directive) {
    if (this.value.includes(directive)) {
      this.next(this.value.filter((hint) => hint !== directive));
    }
  }
  static {
    this.ɵfac = function TuiHintService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHintService,
      factory: _TuiHintService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiHintDriver = class _TuiHintDriver extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintDriver_BaseFactory;
      return function TuiHintDriver_Factory(__ngFactoryType__) {
        return (ɵTuiHintDriver_BaseFactory || (ɵTuiHintDriver_BaseFactory = ɵɵgetInheritedFactory(_TuiHintDriver)))(__ngFactoryType__ || _TuiHintDriver);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDriver,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriver, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var TUI_HINT_DIRECTIONS = ["bottom-left", "bottom", "bottom-right", "top-left", "top", "top-right", "left-top", "left", "left-bottom", "right-top", "right", "right-bottom"];
var TUI_HINT_DEFAULT_OPTIONS = {
  direction: "bottom-left",
  showDelay: 500,
  hideDelay: 200,
  appearance: "",
  /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
  icon: "@tui.circle-help"
};
var TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);
var tuiHintOptionsProvider = (override) => ({
  provide: TUI_HINT_OPTIONS,
  deps: [[new Optional(), new Self(), TuiHintOptionsDirective], [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS)
});
var TuiHintOptionsDirective = class _TuiHintOptionsDirective {
  constructor() {
    this.options = inject(TUI_HINT_OPTIONS, {
      skipSelf: true
    });
    this.direction = this.options.direction;
    this.appearance = this.options.appearance;
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.icon = this.options.icon;
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function TuiHintOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOptionsDirective,
      selectors: [["", "tuiHintContent", ""]],
      inputs: {
        content: [0, "tuiHintContent", "content"],
        direction: [0, "tuiHintDirection", "direction"],
        appearance: [0, "tuiHintAppearance", "appearance"],
        showDelay: [0, "tuiHintShowDelay", "showDelay"],
        hideDelay: [0, "tuiHintHideDelay", "hideDelay"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_HINT_OPTIONS, _TuiHintOptionsDirective)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintContent]",
      providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)]
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["tuiHintContent"]
    }],
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiHintShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiHintHideDelay"]
    }]
  });
})();
var TuiHintHover = class _TuiHintHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.hovered$ = inject(TuiHoveredService);
    this.options = inject(TUI_HINT_OPTIONS);
    this.visible = false;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$.pipe(switchMap((visible) => this.isMobile ? of(visible) : of(visible).pipe(delay(visible ? 0 : this.tuiHintHideDelay))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((visible) => this.isMobile ? of(visible) : of(visible).pipe(delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && (this.el.hasAttribute("tuiHintPointer") || !tuiIsObscured(this.el))), tap((visible) => {
      this.visible = visible;
    }));
    this.parent = inject(_TuiHintHover, {
      optional: true,
      skipSelf: true
    });
    this.tuiHintShowDelay = this.options.showDelay;
    this.tuiHintHideDelay = this.options.hideDelay;
    this.type = "hint";
    this.enabled = true;
  }
  toggle(visible = !this.visible) {
    this.toggle$.next(visible);
    this.parent?.toggle(visible);
  }
  static {
    this.ɵfac = function TuiHintHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHover,
      inputs: {
        tuiHintShowDelay: "tuiHintShowDelay",
        tuiHintHideDelay: "tuiHintHideDelay"
      },
      exportAs: ["tuiHintHover"],
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintHover), TuiHoveredService]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHover, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
      exportAs: "tuiHintHover"
    }]
  }], function() {
    return [];
  }, {
    tuiHintShowDelay: [{
      type: Input
    }],
    tuiHintHideDelay: [{
      type: Input
    }]
  });
})();
var GAP = 8;
var ARROW_OFFSET = 24;
var TOP = 0;
var LEFT = 1;
var TuiHintPosition = class _TuiHintPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.offset = inject(TUI_IS_MOBILE) ? 16 : 8;
    this.viewport = inject(TUI_VIEWPORT);
    this.accessor = tuiFallbackAccessor("hint")(inject(TuiRectAccessor), inject(TuiHintDirective));
    this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => __spreadProps(__spreadValues({}, acc), {
      [direction]: [0, 0]
    }), {});
    this.direction = inject(TUI_HINT_OPTIONS).direction;
    this.directionChange = new EventEmitter();
    this.type = "hint";
  }
  emitDirection(direction) {
    this.directionChange.emit(direction);
  }
  getPosition(rect, el) {
    const width = el?.clientWidth ?? rect.width;
    const height = el?.clientHeight ?? rect.height;
    const hostRect = this.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
    const leftCenter = hostRect.left + hostRect.width / 2;
    const topCenter = hostRect.top + hostRect.height / 2;
    this.points["top-left"][TOP] = hostRect.top - height - this.offset;
    this.points["top-left"][LEFT] = leftCenter - width + ARROW_OFFSET;
    this.points.top[TOP] = this.points["top-left"][TOP];
    this.points.top[LEFT] = leftCenter - width / 2;
    this.points["top-right"][TOP] = this.points["top-left"][TOP];
    this.points["top-right"][LEFT] = leftCenter - ARROW_OFFSET;
    this.points["bottom-left"][TOP] = hostRect.bottom + this.offset;
    this.points["bottom-left"][LEFT] = this.points["top-left"][LEFT];
    this.points.bottom[TOP] = this.points["bottom-left"][TOP];
    this.points.bottom[LEFT] = this.points.top[LEFT];
    this.points["bottom-right"][TOP] = this.points["bottom-left"][TOP];
    this.points["bottom-right"][LEFT] = this.points["top-right"][LEFT];
    this.points["left-top"][TOP] = topCenter - height + ARROW_OFFSET;
    this.points["left-top"][LEFT] = hostRect.left - width - this.offset;
    this.points.left[TOP] = topCenter - height / 2;
    this.points.left[LEFT] = this.points["left-top"][LEFT];
    this.points["left-bottom"][TOP] = topCenter - ARROW_OFFSET;
    this.points["left-bottom"][LEFT] = this.points["left-top"][LEFT];
    this.points["right-top"][TOP] = this.points["left-top"][TOP];
    this.points["right-top"][LEFT] = hostRect.right + this.offset;
    this.points.right[TOP] = this.points.left[TOP];
    this.points.right[LEFT] = this.points["right-top"][LEFT];
    this.points["right-bottom"][TOP] = this.points["left-bottom"][TOP];
    this.points["right-bottom"][LEFT] = this.points["right-top"][LEFT];
    const priorityDirections = Array.isArray(this.direction) ? this.direction : [this.direction];
    const sortedDirections = priorityDirections.concat(TUI_HINT_DIRECTIONS);
    const direction = sortedDirections.find((direction2) => this.checkPosition(this.points[direction2], width, height)) || this.fallback;
    this.emitDirection(direction);
    return this.points[direction];
  }
  get fallback() {
    return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
  }
  checkPosition([top, left], width, height) {
    const viewport = this.viewport.getClientRect();
    return top > viewport.top + GAP && left > viewport.left + GAP && top + height < viewport.bottom - GAP && left + width < viewport.right - GAP;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPosition_BaseFactory;
      return function TuiHintPosition_Factory(__ngFactoryType__) {
        return (ɵTuiHintPosition_BaseFactory || (ɵTuiHintPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPosition)))(__ngFactoryType__ || _TuiHintPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPosition,
      inputs: {
        direction: [0, "tuiHintDirection", "direction"]
      },
      outputs: {
        directionChange: "tuiHintDirectionChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
__decorate([tuiPure], TuiHintPosition.prototype, "emitDirection", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPosition, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }],
    directionChange: [{
      type: Output,
      args: ["tuiHintDirectionChange"]
    }],
    emitDirection: []
  });
})();
var TuiHintDirective = class _TuiHintDirective {
  constructor() {
    this.service = inject(TuiHintService);
    this.appearance = inject(TUI_HINT_OPTIONS).appearance;
    this.content = signal(null);
    this.component = inject(PolymorpheusComponent);
    this.el = tuiInjectElement();
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.type = "hint";
  }
  set tuiHint(content) {
    this.content.set(content);
    if (!content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    if (show && this.content()) {
      this.service.add(this);
    } else {
      this.service.remove(this);
    }
  }
  static {
    this.ɵfac = function TuiHintDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDirective,
      selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
      inputs: {
        context: [0, "tuiHintContext", "context"],
        appearance: [0, "tuiHintAppearance", "appearance"],
        tuiHint: "tuiHint"
      },
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintDirective), tuiAsVehicle(_TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }]), ɵɵHostDirectivesFeature([TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection", "tuiHintDirection"],
        outputs: ["tuiHintDirectionChange", "tuiHintDirectionChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiHintDirective), tuiAsVehicle(TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }],
      hostDirectives: [TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection"],
        outputs: ["tuiHintDirectionChange"]
      }]
    }]
  }], null, {
    context: [{
      type: Input,
      args: ["tuiHintContext"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    tuiHint: [{
      type: Input
    }]
  });
})();
var TuiHintPointer = class _TuiHintPointer extends TuiHintHover {
  constructor() {
    super(...arguments);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  getClientRect() {
    return this.currentRect;
  }
  onMove({
    clientX,
    clientY
  }) {
    this.currentRect = tuiPointToClientRect(clientX, clientY);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPointer_BaseFactory;
      return function TuiHintPointer_Factory(__ngFactoryType__) {
        return (ɵTuiHintPointer_BaseFactory || (ɵTuiHintPointer_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPointer)))(__ngFactoryType__ || _TuiHintPointer);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPointer,
      selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
      hostBindings: function TuiHintPointer_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.zoneless", function TuiHintPointer_mousemove_zoneless_HostBindingHandler($event) {
            return ctx.onMove($event);
          });
        }
      },
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintPointer), tuiAsDriver(_TuiHintPointer)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointer, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintPointer]",
      providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
      host: {
        "(mousemove.zoneless)": "onMove($event)"
      }
    }]
  }], null, null);
})();
var TuiHintUnstyledComponent = class _TuiHintUnstyledComponent {
  constructor() {
    this.context = injectContext();
  }
  static {
    this.ɵfac = function TuiHintUnstyledComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyledComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintUnstyledComponent,
      selectors: [["ng-component"]],
      hostVars: 1,
      hostBindings: function TuiHintUnstyledComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiParentAnimation", void 0);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiHintUnstyledComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.context.$implicit.content());
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2,
      data: {
        animation: [tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="context.$implicit.content()" />',
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[@tuiParentAnimation]": ""
      }
    }]
  }], null, null);
})();
var TuiHintUnstyled = class _TuiHintUnstyled {
  constructor() {
    const hint = inject(TuiHintDirective);
    hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
    hint.content.set(inject(TemplateRef));
  }
  static {
    this.ɵfac = function TuiHintUnstyled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyled)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintUnstyled,
      selectors: [["ng-template", "tuiHint", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyled, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiHint]"
    }]
  }], function() {
    return [];
  }, null);
})();
var TUI_HINT_PROVIDERS = [TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint", TuiHintPosition), tuiRectAccessorFor("hint", TuiHintDirective)];
var TuiHintComponent = class _TuiHintComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.hover = inject(TuiHintHover);
    this.vvs = inject(TuiVisualViewportService);
    this.desktop = {
      value: "",
      params: {
        end: 1,
        start: 1
      }
    };
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED), "cubic-bezier(0.35, 1.3, 0.25, 1)");
    this.pointer = inject(TuiHintPointer, {
      optional: true
    });
    this.accessor = inject(TuiRectAccessor);
    this.hint = injectContext().$implicit;
    this.isMobile = inject(TUI_IS_MOBILE);
    this.content = this.hint.component.component === TuiHintUnstyledComponent ? signal("") : this.hint.content;
    this.appearance = this.hint.appearance || this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    inject(TuiPositionService).pipe(takeWhile(() => this.hint.el.isConnected), map((point) => this.vvs.correct(point)), takeUntilDestroyed()).subscribe({
      next: ([top, left]) => this.update(top, left),
      complete: () => this.hover.toggle(false)
    });
    inject(TuiHoveredService).pipe(takeUntilDestroyed()).subscribe((hover) => this.hover.toggle(hover));
  }
  onClick(target) {
    if (!target.closest("tui-hint") && !this.hint.el.contains(target) || tuiIsObscured(this.hint.el)) {
      this.hover.toggle(false);
    }
  }
  apply(top, left, beakTop, beakLeft) {
    this.el.style.top = top;
    this.el.style.left = left;
    this.el.style.setProperty("--top", `${beakTop}%`);
    this.el.style.setProperty("--left", `${beakLeft}%`);
    this.el.style.setProperty("--rotate", !beakLeft || Math.ceil(beakLeft) === 100 ? "90deg" : "0deg");
  }
  update(top, left) {
    const {
      clientHeight,
      clientWidth
    } = this.el;
    const rect = this.accessor.getClientRect();
    if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
      return;
    }
    const [beakTop, beakLeft] = this.vvs.correct([rect.top + rect.height / 2 - top, rect.left + rect.width / 2 - left]);
    this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(left)), Math.round(tuiClamp(beakTop, 0, clientHeight) / clientHeight * 100), Math.round(tuiClamp(beakLeft, 0, clientWidth) / clientWidth * 100));
  }
  static {
    this.ɵfac = function TuiHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintComponent,
      selectors: [["tui-hint"]],
      hostVars: 8,
      hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiScaleIn", ctx.isMobile ? ctx.options : ctx.desktop)("@tuiFadeIn", ctx.options);
          ɵɵattribute("data-appearance", ctx.appearance)("tuiTheme", ctx.appearance === "dark" ? "light" : null);
          ɵɵclassProp("_untouchable", ctx.pointer)("_mobile", ctx.isMobile);
        }
      },
      features: [ɵɵProvidersFeature(TUI_HINT_PROVIDERS)],
      ngContentSelectors: _c06,
      decls: 2,
      vars: 2,
      consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
      template: function TuiHintComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.hint.context);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: [`[_nghost-%COMP%]{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}._mobile[_nghost-%COMP%]{font:var(--tui-font-text-m)}._mobile[_nghost-%COMP%]:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-status-negative)}[data-appearance=dark][_nghost-%COMP%]{background:var(--tui-background-elevation-1);color:var(--tui-text-primary);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}`],
      data: {
        animation: [tuiFadeIn, tuiScaleIn]
      },
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiHintComponent.prototype, "apply", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hint",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context"
            [innerHTML]="text"
        ></span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_HINT_PROVIDERS,
      animations: [tuiFadeIn, tuiScaleIn],
      host: {
        "[@tuiScaleIn]": "isMobile ? options : desktop",
        "[@tuiFadeIn]": "options",
        "[class._untouchable]": "pointer",
        "[class._mobile]": "isMobile",
        "[attr.data-appearance]": "appearance",
        "[attr.tuiTheme]": 'appearance === "dark" ? "light" : null',
        "(document:click)": "onClick($event.target)"
      },
      styles: [`:host{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}:host:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}:host._mobile{font:var(--tui-font-text-m)}:host._mobile:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}:host[data-appearance=error]{background:var(--tui-status-negative)}:host[data-appearance=dark]{background:var(--tui-background-elevation-1);color:var(--tui-text-primary);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}
`]
    }]
  }], function() {
    return [];
  }, {
    apply: []
  });
})();
var TuiHintDescribe = class _TuiHintDescribe extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.id$ = new BehaviorSubject("");
    this.stream$ = this.id$.pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, "keydown", {
      capture: true
    }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element, "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3, tuiZonefreeScheduler(this.zone)) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
    this.type = "hint";
  }
  set tuiHintDescribe(id) {
    this.id$.next(id || "");
  }
  get element() {
    return this.doc.getElementById(this.id$.value || "") || this.el;
  }
  get focused() {
    return tuiIsNativeFocused(this.element);
  }
  static {
    this.ɵfac = function TuiHintDescribe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDescribe)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDescribe,
      selectors: [["", "tuiHintDescribe", ""]],
      inputs: {
        tuiHintDescribe: "tuiHintDescribe"
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintDescribe)]), ɵɵInheritDefinitionFeature]
    });
  }
};
__decorate([tuiPure], TuiHintDescribe.prototype, "element", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribe, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintDescribe]",
      providers: [tuiAsDriver(TuiHintDescribe)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintDescribe: [{
      type: Input
    }],
    element: []
  });
})();
var TuiHintHost = class _TuiHintHost extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  getClientRect() {
    return this.tuiHintHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintHost_BaseFactory;
      return function TuiHintHost_Factory(__ngFactoryType__) {
        return (ɵTuiHintHost_BaseFactory || (ɵTuiHintHost_BaseFactory = ɵɵgetInheritedFactory(_TuiHintHost)))(__ngFactoryType__ || _TuiHintHost);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHost,
      selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
      inputs: {
        tuiHintHost: "tuiHintHost"
      },
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintHost)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHost, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintHost]",
      providers: [tuiAsRectAccessor(TuiHintHost)]
    }]
  }], null, {
    tuiHintHost: [{
      type: Input
    }]
  });
})();
var TuiHintManual = class _TuiHintManual extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hover = inject(TuiHintHover);
    this.stream$ = new BehaviorSubject(false);
    this.tuiHintManual = false;
    this.type = "hint";
    this.hover.enabled = false;
  }
  ngOnChanges() {
    this.stream$.next(!!this.tuiHintManual);
    this.hover.enabled = this.tuiHintManual === null;
  }
  static {
    this.ɵfac = function TuiHintManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintManual,
      selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
      inputs: {
        tuiHintManual: "tuiHintManual"
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintManual)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintManual]",
      providers: [tuiAsDriver(TuiHintManual)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintManual: [{
      type: Input
    }]
  });
})();
var TuiHintOverflow = class _TuiHintOverflow {
  constructor() {
    this.hint = inject(TuiHintDirective);
  }
  onMouseEnter({
    scrollWidth,
    clientWidth,
    textContent
  }) {
    this.hint.tuiHint = scrollWidth > clientWidth ? textContent : "";
  }
  static {
    this.ɵfac = function TuiHintOverflow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOverflow)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOverflow,
      selectors: [["", "tuiHintOverflow", ""]],
      hostBindings: function TuiHintOverflow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function TuiHintOverflow_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter($event.currentTarget);
          });
        }
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOverflow, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintOverflow]",
      hostDirectives: [{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance"]
      }],
      host: {
        "(mouseenter)": "onMouseEnter($event.currentTarget)"
      }
    }]
  }], null, null);
})();
var TuiHint = [TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer];
var TuiHints = class _TuiHints {
  constructor() {
    this.hints$ = inject(TuiHintService);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.hints = [];
  }
  ngOnInit() {
    this.hints$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hints) => {
      this.hints = hints;
      this.cdr.detectChanges();
    });
  }
  static {
    this.ɵfac = function TuiHints_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHints)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHints,
      selectors: [["tui-hints"]],
      hostAttrs: ["aria-live", "polite"],
      decls: 1,
      vars: 1,
      consts: [["role", "tooltip", 3, "tuiActiveZoneParent", 4, "ngFor", "ngForOf"], ["role", "tooltip", 3, "tuiActiveZoneParent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiHints_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHints_div_0_Template, 2, 6, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.hints);
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiActiveZone],
      styles: ["[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}"],
      data: {
        animation: [tuiParentAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHints, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hints",
      imports: [NgForOf, PolymorpheusOutlet, PolymorpheusTemplate, TuiActiveZone],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiParentAnimation],
      host: {
        "aria-live": "polite"
      },
      template: '<div\n    *ngFor="let hint of hints"\n    role="tooltip"\n    @tuiParentAnimation\n    [tuiActiveZoneParent]="hint.activeZone || null"\n>\n    <ng-container *polymorpheusOutlet="hint.component; context: {$implicit: hint}" />\n</div>\n',
      styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-popup.mjs
var TuiPopupService = class _TuiPopupService extends TuiPortalService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopupService_BaseFactory;
      return function TuiPopupService_Factory(__ngFactoryType__) {
        return (ɵTuiPopupService_BaseFactory || (ɵTuiPopupService_BaseFactory = ɵɵgetInheritedFactory(_TuiPopupService)))(__ngFactoryType__ || _TuiPopupService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPopupService,
      factory: _TuiPopupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiPopup = class _TuiPopup {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiPopupService);
  }
  set tuiPopup(show) {
    this.viewRef?.destroy();
    if (show) {
      this.viewRef = this.service.addTemplate(this.template);
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
  static {
    this.ɵfac = function TuiPopup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPopup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopup,
      selectors: [["ng-template", "tuiPopup", ""]],
      inputs: {
        tuiPopup: "tuiPopup"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiPopup]"
    }]
  }], null, {
    tuiPopup: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c07 = ["*", [["tuiOverContent"]], [["tuiOverDialogs"]], [["tuiOverAlerts"]], [["tuiOverDropdowns"]], [["tuiOverHints"]]];
var _c13 = ["*", "tuiOverContent", "tuiOverDialogs", "tuiOverAlerts", "tuiOverDropdowns", "tuiOverHints"];
function TuiRoot_tui_scroll_controls_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 3);
  }
}
var TuiRoot = class _TuiRoot extends TuiPortals {
  constructor() {
    super();
    this.reducedMotion = inject(TUI_REDUCED_MOTION);
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    this.isMobileRes = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile"), tuiWatch()), {
      initialValue: false
    });
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.scrollbars = !(this.nativeScrollbar || inject(TUI_IS_MOBILE));
    inject(DOCUMENT).documentElement.setAttribute("data-tui-theme", inject(TUI_THEME).toLowerCase());
    if (!this.nativeScrollbar) {
      inject(DOCUMENT).defaultView?.document.documentElement.classList.add("tui-zero-scrollbar");
    }
    ngDevMode && console.assert(!!inject(EVENT_MANAGER_PLUGINS).find((plugin) => plugin instanceof PreventEventPlugin), "NG_EVENT_PLUGINS is missing from global providers");
  }
  static {
    this.ɵfac = function TuiRoot_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRoot)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRoot,
      selectors: [["tui-root"]],
      hostAttrs: ["data-tui-version", "4.25.0"],
      hostVars: 6,
      hostBindings: function TuiRoot_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--tui-duration", ctx.duration, "ms")("--tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
          ɵɵclassProp("_mobile", ctx.isMobileRes());
        }
      },
      features: [ɵɵProvidersFeature([], [tuiAsPortal(TuiPopupService)]), ɵɵHostDirectivesFeature([TuiPlatform, TuiVisualViewport, TuiFontSize]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c13,
      decls: 14,
      vars: 1,
      consts: [["viewContainer", ""], [1, "t-root-content"], ["class", "t-root-scrollbar", 4, "ngIf"], [1, "t-root-scrollbar"]],
      template: function TuiRoot_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c07);
          ɵɵelementStart(0, "div", 1);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiRoot_tui_scroll_controls_2_Template, 1, 0, "tui-scroll-controls", 2);
          ɵɵelementContainer(3, null, 0);
          ɵɵprojection(5, 1);
          ɵɵelement(6, "tui-dialogs");
          ɵɵprojection(7, 2);
          ɵɵelement(8, "tui-alerts");
          ɵɵprojection(9, 3);
          ɵɵelement(10, "tui-dropdowns");
          ɵɵprojection(11, 4);
          ɵɵelement(12, "tui-hints");
          ɵɵprojection(13, 5);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.scrollbars);
        }
      },
      dependencies: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiScrollControls],
      styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiSkeletonVibe{to{opacity:.5}}.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-root",
      imports: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiScrollControls],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      viewProviders: [tuiAsPortal(TuiPopupService)],
      hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
      host: {
        "data-tui-version": TUI_VERSION,
        "[style.--tui-duration.ms]": "duration",
        "[style.--tui-scroll-behavior]": 'reducedMotion ? "auto" : "smooth"',
        "[class._mobile]": "isMobileRes()",
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        "(touchstart.passive.zoneless)": "0"
      },
      template: '<div class="t-root-content"><ng-content /></div>\n<tui-scroll-controls\n    *ngIf="scrollbars"\n    class="t-root-scrollbar"\n/>\n<ng-container #viewContainer />\n<ng-content select="tuiOverContent" />\n<tui-dialogs />\n<ng-content select="tuiOverDialogs" />\n<tui-alerts />\n<ng-content select="tuiOverAlerts" />\n<tui-dropdowns />\n<ng-content select="tuiOverDropdowns" />\n<tui-hints />\n<ng-content select="tuiOverHints" />\n',
      styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiSkeletonVibe{to{opacity:.5}}.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n']
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-date-format.mjs
var TuiDateFormat = class _TuiDateFormat extends Observable {
  constructor() {
    super((subscriber) => combineLatest([this.parent, this.settings]).pipe(map(([parent, settings]) => __spreadValues(__spreadValues({}, parent), settings))).subscribe(subscriber));
    this.settings = new ReplaySubject(1);
    this.parent = inject(TUI_DATE_FORMAT, {
      skipSelf: true
    });
  }
  set tuiDateFormat(format) {
    this.settings.next(format);
  }
  static {
    this.ɵfac = function TuiDateFormat_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDateFormat)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDateFormat,
      selectors: [["", "tuiDateFormat", ""]],
      inputs: {
        tuiDateFormat: "tuiDateFormat"
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_DATE_FORMAT, _TuiDateFormat)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDateFormat, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDateFormat]",
      providers: [tuiProvide(TUI_DATE_FORMAT, TuiDateFormat)]
    }]
  }], function() {
    return [];
  }, {
    tuiDateFormat: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-group.mjs
var TUI_GROUP_DEFAULT_OPTIONS = {
  size: "l",
  collapsed: false,
  rounded: true,
  orientation: "horizontal"
};
var TUI_GROUP_OPTIONS = tuiCreateToken(TUI_GROUP_DEFAULT_OPTIONS);
function tuiGroupOptionsProvider(options) {
  return tuiProvideOptions(TUI_GROUP_OPTIONS, options, TUI_GROUP_DEFAULT_OPTIONS);
}
var TuiGroupStyles = class _TuiGroupStyles {
  static {
    this.ɵfac = function TuiGroupStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiGroupStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiGroupStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-group"],
      decls: 0,
      vars: 0,
      template: function TuiGroupStyles_Template(rf, ctx) {
      },
      styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask:var(--t-group-mask);mask:var(--t-group-mask);-webkit-mask-clip:no-clip;mask-clip:no-clip}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-mask: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-mask: none}[tuiGroup]>*:has(:focus-visible){z-index:3;--t-group-mask: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-mask: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-mask: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-mask: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[tuiGroup]>*:last-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[tuiGroup]>*:only-child{border-radius:var(--t-group-radius);-webkit-mask:none;mask:none}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroupStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-group"
      },
      styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask:var(--t-group-mask);mask:var(--t-group-mask);-webkit-mask-clip:no-clip;mask-clip:no-clip}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-mask: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-mask: none}[tuiGroup]>*:has(:focus-visible){z-index:3;--t-group-mask: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-mask: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-mask: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-mask: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[tuiGroup]>*:last-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[tuiGroup]>*:only-child{border-radius:var(--t-group-radius);-webkit-mask:none;mask:none}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"]
    }]
  }], null, null);
})();
var TuiGroup = class _TuiGroup {
  constructor() {
    this.options = inject(TUI_GROUP_OPTIONS);
    this.nothing = tuiWithStyles(TuiGroupStyles);
    this.orientation = this.options.orientation;
    this.collapsed = this.options.collapsed;
    this.rounded = this.options.rounded;
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiGroup,
      selectors: [["", "tuiGroup", "", 5, "ng-container"]],
      hostAttrs: ["tuiGroup", "", "role", "group"],
      hostVars: 12,
      hostBindings: function TuiGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation)("data-size", ctx.size);
          ɵɵstyleProp("--t-group-radius", ctx.rounded ? null : 0)("--t-group-margin", ctx.collapsed ? null : 0.125, "rem")("--t-group-mask", ctx.collapsed ? null : "none")("--t-group-mask-start", ctx.collapsed ? null : "none")("--t-group-mask-end", ctx.collapsed ? null : "none");
        }
      },
      inputs: {
        orientation: "orientation",
        collapsed: "collapsed",
        rounded: "rounded",
        size: "size"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiGroup]:not(ng-container)",
      host: {
        tuiGroup: "",
        role: "group",
        "[attr.data-orientation]": "orientation",
        "[attr.data-size]": "size",
        "[style.--t-group-radius]": "rounded ? null : 0",
        "[style.--t-group-margin.rem]": "collapsed ? null : 0.125",
        "[style.--t-group-mask]": 'collapsed ? null : "none"',
        "[style.--t-group-mask-start]": 'collapsed ? null : "none"',
        "[style.--t-group-mask-end]": 'collapsed ? null : "none"'
      }
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-number-format.mjs
var TuiNumberFormat = class _TuiNumberFormat extends Observable {
  constructor() {
    super((subscriber) => combineLatest([this.parent, this.settings]).pipe(map(([parent, settings]) => __spreadValues(__spreadValues({}, parent), settings))).subscribe(subscriber));
    this.settings = new ReplaySubject(1);
    this.parent = inject(TUI_NUMBER_FORMAT, {
      skipSelf: true
    });
  }
  set tuiNumberFormat(format) {
    this.settings.next(format);
  }
  static {
    this.ɵfac = function TuiNumberFormat_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNumberFormat)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNumberFormat,
      selectors: [["", "tuiNumberFormat", ""]],
      inputs: {
        tuiNumberFormat: "tuiNumberFormat"
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_NUMBER_FORMAT, _TuiNumberFormat)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNumberFormat, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNumberFormat]",
      providers: [tuiProvide(TUI_NUMBER_FORMAT, TuiNumberFormat)]
    }]
  }], function() {
    return [];
  }, {
    tuiNumberFormat: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-surface.mjs
var TuiSurfaceStyles = class _TuiSurfaceStyles {
  static {
    this.ɵfac = function TuiSurfaceStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSurfaceStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSurfaceStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-surface-styles"],
      decls: 0,
      vars: 0,
      template: function TuiSurfaceStyles_Template(rf, ctx) {
      },
      styles: ['[data-surface]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--tui-gap: .25rem;position:relative;box-sizing:border-box;background:none no-repeat;background-size:cover;overflow:hidden;isolation:isolate;-webkit-appearance:none;appearance:none;border:0;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background,border-radius,box-shadow,transform,-webkit-backdrop-filter,-webkit-mask!important;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform!important;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform,-webkit-backdrop-filter,-webkit-mask!important}[data-surface]:focus-visible{outline-color:var(--tui-border-focus)}@supports (not (-moz-appearance: none)) and (not (-webkit-hyphens: none)){[data-surface]:before{mix-blend-mode:multiply}}button[data-surface]{cursor:pointer}[data-surface]:before,[data-surface]:after,[tuiSurfaceLayer]:before,[tuiSurfaceLayer]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";z-index:-1;border-radius:inherit;pointer-events:none;background-size:cover;background-repeat:no-repeat;transition-property:opacity,transform,-webkit-backdrop-filter;transition-property:opacity,backdrop-filter,transform;transition-property:opacity,backdrop-filter,transform,-webkit-backdrop-filter}[tuiSurfaceLayer]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;position:absolute!important;z-index:-1;object-fit:cover;border-radius:inherit;box-sizing:border-box;transition-property:box-shadow,filter,padding}input[tuiSurfaceLayer]+[tuiSurfaceLayer]{will-change:padding;background-clip:content-box;overflow:clip;overflow-clip-margin:content-box}input[tuiSurfaceLayer]:checked+[tuiSurfaceLayer]{padding:var(--tui-gap)}input[tuiSurfaceLayer]:focus-visible+[tuiSurfaceLayer]{padding:var(--tui-gap)}@media (hover: hover) and (pointer: fine){[data-surface]:hover input[tuiSurfaceLayer]+[tuiSurfaceLayer]{padding:var(--tui-gap)}}input[tuiSurfaceLayer]{color:var(--tui-background-accent-2);-webkit-appearance:none;appearance:none;margin:0;border-radius:inherit;outline:none;box-shadow:inset 0 0,inset 0 0 var(--tui-background-neutral-1)}input[tuiSurfaceLayer]:checked{box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 var(--tui-background-neutral-1)}input[tuiSurfaceLayer]:focus-visible{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}input[tuiSurfaceLayer]:checked:focus-visible{filter:brightness(.7);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}@media (hover: hover) and (pointer: fine){[data-surface]:hover input[tuiSurfaceLayer]{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}[data-surface]:hover input[tuiSurfaceLayer]:checked{filter:brightness(.9);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}}[tuiSurface][data-surface=elevated],[tuiSurface][data-surface=floating]{box-shadow:var(--tui-shadow-small);background-color:var(--tui-background-elevation-2)}[tuiSurface][data-surface=elevated]:matches(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=floating]:matches(a,button,select,textarea,input,label):not(:disabled):active{box-shadow:var(--tui-shadow-small);transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=elevated]:matches(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=floating]:matches(a,button,select,textarea,input,label):not(:disabled):hover{box-shadow:var(--tui-shadow-small-hover);transform:translate3d(0,-.25rem,0);background:var(--tui-background-elevation-2)}}[tuiSurface][data-surface=elevated]:is(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=floating]:is(a,button,select,textarea,input,label):not(:disabled):active{box-shadow:var(--tui-shadow-small);transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=elevated]:is(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=floating]:is(a,button,select,textarea,input,label):not(:disabled):hover{box-shadow:var(--tui-shadow-small-hover);transform:translate3d(0,-.25rem,0);background:var(--tui-background-elevation-2)}}[tuiSurface][data-surface=flat],[tuiSurface][data-surface=neutral]{background-color:var(--tui-background-neutral-1)}[tuiSurface][data-surface=flat]:matches(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=neutral]:matches(a,button,select,textarea,input,label):not(:disabled):active{transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=flat]:matches(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=neutral]:matches(a,button,select,textarea,input,label):not(:disabled):hover{transform:scale(1.15)}}[tuiSurface][data-surface=flat]:is(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=neutral]:is(a,button,select,textarea,input,label):not(:disabled):active{transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=flat]:is(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=neutral]:is(a,button,select,textarea,input,label):not(:disabled):hover{transform:scale(1.15)}}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSurfaceStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-surface-styles"
      },
      styles: ['[data-surface]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--tui-gap: .25rem;position:relative;box-sizing:border-box;background:none no-repeat;background-size:cover;overflow:hidden;isolation:isolate;-webkit-appearance:none;appearance:none;border:0;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background,border-radius,box-shadow,transform,-webkit-backdrop-filter,-webkit-mask!important;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform!important;transition-property:backdrop-filter,background,border-radius,box-shadow,mask,transform,-webkit-backdrop-filter,-webkit-mask!important}[data-surface]:focus-visible{outline-color:var(--tui-border-focus)}@supports (not (-moz-appearance: none)) and (not (-webkit-hyphens: none)){[data-surface]:before{mix-blend-mode:multiply}}button[data-surface]{cursor:pointer}[data-surface]:before,[data-surface]:after,[tuiSurfaceLayer]:before,[tuiSurfaceLayer]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";z-index:-1;border-radius:inherit;pointer-events:none;background-size:cover;background-repeat:no-repeat;transition-property:opacity,transform,-webkit-backdrop-filter;transition-property:opacity,backdrop-filter,transform;transition-property:opacity,backdrop-filter,transform,-webkit-backdrop-filter}[tuiSurfaceLayer]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;position:absolute!important;z-index:-1;object-fit:cover;border-radius:inherit;box-sizing:border-box;transition-property:box-shadow,filter,padding}input[tuiSurfaceLayer]+[tuiSurfaceLayer]{will-change:padding;background-clip:content-box;overflow:clip;overflow-clip-margin:content-box}input[tuiSurfaceLayer]:checked+[tuiSurfaceLayer]{padding:var(--tui-gap)}input[tuiSurfaceLayer]:focus-visible+[tuiSurfaceLayer]{padding:var(--tui-gap)}@media (hover: hover) and (pointer: fine){[data-surface]:hover input[tuiSurfaceLayer]+[tuiSurfaceLayer]{padding:var(--tui-gap)}}input[tuiSurfaceLayer]{color:var(--tui-background-accent-2);-webkit-appearance:none;appearance:none;margin:0;border-radius:inherit;outline:none;box-shadow:inset 0 0,inset 0 0 var(--tui-background-neutral-1)}input[tuiSurfaceLayer]:checked{box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 var(--tui-background-neutral-1)}input[tuiSurfaceLayer]:focus-visible{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}input[tuiSurfaceLayer]:checked:focus-visible{filter:brightness(.7);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}@media (hover: hover) and (pointer: fine){[data-surface]:hover input[tuiSurfaceLayer]{box-shadow:inset 0 0,inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}[data-surface]:hover input[tuiSurfaceLayer]:checked{filter:brightness(.9);box-shadow:inset 0 0 0 calc(var(--tui-gap) / 2),inset 0 0 0 calc(var(--tui-gap) / 2) var(--tui-background-neutral-1)}}[tuiSurface][data-surface=elevated],[tuiSurface][data-surface=floating]{box-shadow:var(--tui-shadow-small);background-color:var(--tui-background-elevation-2)}[tuiSurface][data-surface=elevated]:matches(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=floating]:matches(a,button,select,textarea,input,label):not(:disabled):active{box-shadow:var(--tui-shadow-small);transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=elevated]:matches(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=floating]:matches(a,button,select,textarea,input,label):not(:disabled):hover{box-shadow:var(--tui-shadow-small-hover);transform:translate3d(0,-.25rem,0);background:var(--tui-background-elevation-2)}}[tuiSurface][data-surface=elevated]:is(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=floating]:is(a,button,select,textarea,input,label):not(:disabled):active{box-shadow:var(--tui-shadow-small);transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=elevated]:is(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=floating]:is(a,button,select,textarea,input,label):not(:disabled):hover{box-shadow:var(--tui-shadow-small-hover);transform:translate3d(0,-.25rem,0);background:var(--tui-background-elevation-2)}}[tuiSurface][data-surface=flat],[tuiSurface][data-surface=neutral]{background-color:var(--tui-background-neutral-1)}[tuiSurface][data-surface=flat]:matches(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=neutral]:matches(a,button,select,textarea,input,label):not(:disabled):active{transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=flat]:matches(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=neutral]:matches(a,button,select,textarea,input,label):not(:disabled):hover{transform:scale(1.15)}}[tuiSurface][data-surface=flat]:is(a,button,select,textarea,input,label):not(:disabled):active,[tuiSurface][data-surface=neutral]:is(a,button,select,textarea,input,label):not(:disabled):active{transform:scale(.95)}@media (hover: hover) and (pointer: fine){[tuiSurface][data-surface=flat]:is(a,button,select,textarea,input,label):not(:disabled):hover,[tuiSurface][data-surface=neutral]:is(a,button,select,textarea,input,label):not(:disabled):hover{transform:scale(1.15)}}\n']
    }]
  }], null, null);
})();
var TuiSurface = class _TuiSurface {
  constructor() {
    this.nothing = tuiWithStyles(TuiSurfaceStyles);
    this.tuiSurface = "";
  }
  static {
    this.ɵfac = function TuiSurface_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSurface)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSurface,
      selectors: [["", "tuiSurface", ""]],
      hostAttrs: ["tuiSurface", ""],
      hostVars: 1,
      hostBindings: function TuiSurface_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-surface", ctx.tuiSurface);
        }
      },
      inputs: {
        tuiSurface: "tuiSurface"
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearance", "tuiSurface"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSurface, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSurface]",
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: tuiSurface"]
      }],
      host: {
        tuiSurface: "",
        "[attr.data-surface]": "tuiSurface"
      }
    }]
  }], null, {
    tuiSurface: [{
      type: Input
    }]
  });
})();

export {
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  tuiNotificationOptionsProvider,
  TuiNotification,
  TuiTitle,
  TuiPopoverDirective,
  TUI_ALERT_DEFAULT_OPTIONS,
  TUI_ALERT_OPTIONS,
  TUI_ALERT_POSITION,
  TUI_ALERTS,
  TUI_ALERTS_GROUPED,
  tuiAlertOptionsProvider,
  TuiAlertComponent,
  TuiAlertService,
  TuiAlert,
  TuiAlerts,
  TuiHovered,
  TuiLet,
  TuiRepeatTimes,
  TuiAutoColorPipe,
  TuiCalendarSheetPipe,
  TuiFallbackSrcPipe,
  TuiFlagPipe,
  TuiFormatDatePipe,
  TuiFormatNumberPipe,
  TuiInitialsPipe,
  TuiMonthPipe,
  TuiOrderWeekDaysPipe,
  TuiSpinButton,
  TUI_CALENDAR_SHEET_DEFAULT_OPTIONS,
  TUI_CALENDAR_SHEET_OPTIONS,
  tuiCalendarSheetOptionsProvider,
  TuiCalendarSheet,
  TuiCalendarSpin,
  TuiCalendarYear,
  TuiCalendar,
  tuiAutoFocusOptionsProvider,
  TuiAutoFocus,
  TUI_DIALOGS,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_OPTIONS,
  tuiDialogOptionsProvider,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogService,
  TuiDialog,
  tuiDialog,
  TuiDialogs,
  TuiError,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  tuiLoaderOptionsProvider,
  TuiLoader,
  TuiExpandContent,
  TUI_EXPAND_LOADED,
  TuiExpandComponent,
  TuiExpand,
  TUI_HINT_COMPONENT,
  TuiHintService,
  TuiHintDriver,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_OPTIONS,
  tuiHintOptionsProvider,
  TuiHintOptionsDirective,
  TuiHintHover,
  TuiHintPosition,
  TuiHintDirective,
  TuiHintPointer,
  TuiHintUnstyledComponent,
  TuiHintUnstyled,
  TUI_HINT_PROVIDERS,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintHost,
  TuiHintManual,
  TuiHintOverflow,
  TuiHint,
  TuiHints,
  TuiPopupService,
  TuiPopup,
  TuiRoot,
  TuiDateFormat,
  TUI_GROUP_DEFAULT_OPTIONS,
  TUI_GROUP_OPTIONS,
  tuiGroupOptionsProvider,
  TuiGroup,
  TuiNumberFormat,
  TuiSurface
};
//# sourceMappingURL=chunk-BWPMIO3Y.js.map
