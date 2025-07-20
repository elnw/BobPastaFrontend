import {
  RouterLinkActive
} from "./chunk-OYU4YZWP.js";
import {
  IntersectionObserverService,
  MutationObserverService,
  WA_MUTATION_OBSERVER_INIT,
  tuiAvatarOptionsProvider
} from "./chunk-DW4HK6QV.js";
import {
  MASKITO_DEFAULT_OPTIONS,
  maskitoTransform
} from "./chunk-XJT7JW5O.js";
import {
  TUI_COPY_TEXTS,
  TUI_MORE_WORD,
  TUI_PASSWORD_TEXTS
} from "./chunk-JPTYN7CE.js";
import {
  TuiChevron
} from "./chunk-QA26HAYX.js";
import {
  TuiHintDirective,
  tuiHintOptionsProvider
} from "./chunk-BWPMIO3Y.js";
import {
  ResizeObserverService,
  TUI_APPEARANCE_OPTIONS,
  TuiButton,
  TuiIcon,
  TuiNativeValidator,
  TuiTextfieldComponent,
  TuiWithAppearance,
  TuiWithTextfieldDropdown,
  tuiAppearanceOptionsProvider,
  tuiButtonOptionsProvider,
  tuiLinkOptionsProvider
} from "./chunk-IUPTCE4W.js";
import {
  TUI_DATA_LIST_HOST,
  TuiDataList,
  TuiDataListComponent,
  TuiWithIcons
} from "./chunk-AJND4ZJU.js";
import {
  CHAR_NO_BREAK_SPACE,
  EMPTY_QUERY,
  TUI_ANIMATIONS_SPEED,
  TUI_COMMON_ICONS,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_ICON_START,
  TuiControl,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiValidationError,
  TuiValueTransformer,
  TuiWithDropdownOpen,
  svgNodeFilter,
  takeUntilDestroyed,
  toSignal,
  tuiClamp,
  tuiControlValue,
  tuiCreateOptions,
  tuiCreateToken,
  tuiDirectiveBinding,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider,
  tuiGetClosestFocusable,
  tuiGetDuration,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsNativeFocused,
  tuiIsString,
  tuiMoveFocus,
  tuiPop,
  tuiPreventDefault,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiQueryListChanges,
  tuiToAnimationOptions,
  tuiToInt,
  tuiTypedFromEvent,
  tuiWatch,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-CFYEAHUQ.js";
import {
  PolymorpheusOutlet
} from "./chunk-3TF2NWDZ.js";
import {
  NG_VALIDATORS,
  NgControl,
  RadioControlValueAccessor
} from "./chunk-F4F3CEJY.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformServer
} from "./chunk-VAASPEVA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Injectable,
  Input,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7CG3BBK5.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __decorate,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  identity,
  map,
  merge,
  share,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  tap,
  timer
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge-notification.mjs
var _c0 = ["*"];
var TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS = {
  size: "m"
};
var TUI_BADGE_NOTIFICATION_OPTIONS = tuiCreateToken(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
function tuiBadgeNotificationOptionsProvider(options) {
  return tuiProvideOptions(TUI_BADGE_NOTIFICATION_OPTIONS, options, TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
}
var TuiBadgeNotification = class _TuiBadgeNotification {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.size = inject(TUI_BADGE_NOTIFICATION_OPTIONS).size;
  }
  static {
    this.ɵfac = function TuiBadgeNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgeNotification)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgeNotification,
      selectors: [["tui-badge-notification"]],
      hostVars: 2,
      hostBindings: function TuiBadgeNotification_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiPop", ctx.options);
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TuiBadgeNotification_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["[_nghost-%COMP%]{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-font-text-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}[data-size=m][_nghost-%COMP%]{--t-size: 1.25rem}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-font-text-xs)}[data-size=xs][_nghost-%COMP%]{--t-size: .375rem;padding:0;font-size:0}[_nghost-%COMP%]   [tuiIconButton][_nghost-%COMP%], [tuiIconButton]   [_nghost-%COMP%]{position:absolute;right:25%;top:25%}"],
      data: {
        animation: [tuiPop]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeNotification, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-badge-notification",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiPop],
      host: {
        "[attr.data-size]": "size",
        "[@tuiPop]": "options"
      },
      styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-font-text-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}:host[data-size=m]{--t-size: 1.25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-font-text-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;right:25%;top:25%}\n"]
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-segmented.mjs
var _c02 = ["*"];
var TuiSegmentedDirective = class _TuiSegmentedDirective {
  constructor() {
    this.controls = EMPTY_QUERY;
    this.radios = EMPTY_QUERY;
    this.links = EMPTY_QUERY;
    this.elements = EMPTY_QUERY;
    this.component = inject(TuiSegmented);
    this.el = tuiInjectElement();
  }
  ngAfterContentInit() {
    tuiQueryListChanges(this.controls).pipe(switchMap(() => tuiControlValue(this.controls.first)), map((value) => this.radios.toArray().findIndex((c) => c.value === value))).subscribe((index) => {
      this.component.update(index);
    });
  }
  ngAfterContentChecked() {
    if (this.links.length) {
      this.update(this.elements.get(this.linkIndex)?.nativeElement || null);
    }
  }
  update(target) {
    this.component.update(this.getIndex(target));
  }
  get linkIndex() {
    return this.links.toArray().findIndex((link) => link.isActive);
  }
  getIndex(element) {
    return Array.from(this.el.children).findIndex((tab) => tab.contains(element));
  }
  static {
    this.ɵfac = function TuiSegmentedDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmentedDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSegmentedDirective,
      contentQueries: function TuiSegmentedDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgControl, 5);
          ɵɵcontentQuery(dirIndex, RadioControlValueAccessor, 5);
          ɵɵcontentQuery(dirIndex, RouterLinkActive, 4);
          ɵɵcontentQuery(dirIndex, RouterLinkActive, 4, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.controls = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.radios = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.links = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elements = _t);
        }
      },
      hostBindings: function TuiSegmentedDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiSegmentedDirective_click_HostBindingHandler($event) {
            return ctx.update($event.target);
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmentedDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        "(click)": "update($event.target)"
      }
    }]
  }], null, {
    controls: [{
      type: ContentChildren,
      args: [NgControl, {
        descendants: true
      }]
    }],
    radios: [{
      type: ContentChildren,
      args: [RadioControlValueAccessor, {
        descendants: true
      }]
    }],
    links: [{
      type: ContentChildren,
      args: [RouterLinkActive]
    }],
    elements: [{
      type: ContentChildren,
      args: [RouterLinkActive, {
        read: ElementRef
      }]
    }]
  });
})();
var [TUI_SEGMENTED_OPTIONS, tuiSegmentedOptionsProvider] = tuiCreateOptions({
  size: "s"
});
var TuiSegmented = class _TuiSegmented {
  constructor() {
    this.el = tuiInjectElement();
    this.sub = inject(ResizeObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.size = inject(TUI_SEGMENTED_OPTIONS).size;
    this.activeItemIndex = 0;
    this.activeItemIndexChange = new EventEmitter();
  }
  ngOnChanges() {
    this.refresh();
  }
  update(activeItemIndex) {
    if (activeItemIndex === this.activeItemIndex || activeItemIndex < 0) {
      return;
    }
    this.activeItemIndex = activeItemIndex;
    this.activeItemIndexChange.emit(activeItemIndex);
    this.refresh();
  }
  get activeElement() {
    return this.el.children.item(this.activeItemIndex);
  }
  refresh() {
    const el = this.activeElement;
    if (!tuiIsHTMLElement(el)) {
      return;
    }
    Array.from(this.el.children).forEach((e) => e.classList.remove("tui-segmented_active"));
    el.classList.add("tui-segmented_active");
    const {
      offsetWidth = 0,
      offsetLeft = 0,
      offsetTop = 0
    } = el;
    this.el.style.setProperty("--t-top", tuiPx(offsetTop));
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmented)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSegmented,
      selectors: [["tui-segmented"]],
      hostVars: 1,
      hostBindings: function TuiSegmented_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size",
        activeItemIndex: "activeItemIndex"
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange"
      },
      features: [ɵɵProvidersFeature([ResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiSegmentedDirective]), ɵɵNgOnChangesFeature],
      ngContentSelectors: _c02,
      decls: 1,
      vars: 0,
      template: function TuiSegmented_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['tui-segmented{position:relative;display:flex;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(black,black);mask-image:linear-gradient(#000,#000)}tui-segmented[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-m)}tui-segmented[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-l)}tui-segmented[data-size=l]>*:before{block-size:1.25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media (hover: hover) and (pointer: fine){tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>a.tui-segmented_active:hover,tui-segmented>button.tui-segmented_active:hover,tui-segmented>label.tui-segmented_active:hover,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active:hover{opacity:var(--tui-disabled-opacity)}}tui-segmented>a:active,tui-segmented>button:active,tui-segmented>label:active,tui-segmented>label>input:not([tuiRadio]):active,tui-segmented>a:active+*,tui-segmented>button:active+*,tui-segmented>label:active+*,tui-segmented>label>input:not([tuiRadio]):active+*,tui-segmented>a.tui-segmented_active,tui-segmented>button.tui-segmented_active,tui-segmented>label.tui-segmented_active,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented>a.tui-segmented_active+*,tui-segmented>button.tui-segmented_active+*,tui-segmented>label.tui-segmented_active+*,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:-.125rem;left:-.125rem;right:-.125rem;bottom:-.125rem;background:transparent!important}tui-segmented:before{transition-property:top,left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;left:var(--t-left);top:var(--t-top);block-size:var(--t-height);inline-size:var(--t-width);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}[tuiTheme=dark] tui-segmented,tui-segmented[tuiTheme=dark]{--tui-background-base: var(--tui-background-neutral-1-hover)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmented, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-segmented",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiSegmentedDirective],
      host: {
        "[attr.data-size]": "size"
      },
      styles: ['tui-segmented{position:relative;display:flex;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(black,black);mask-image:linear-gradient(#000,#000)}tui-segmented[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-m)}tui-segmented[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-l)}tui-segmented[data-size=l]>*:before{block-size:1.25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media (hover: hover) and (pointer: fine){tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>a.tui-segmented_active:hover,tui-segmented>button.tui-segmented_active:hover,tui-segmented>label.tui-segmented_active:hover,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active:hover{opacity:var(--tui-disabled-opacity)}}tui-segmented>a:active,tui-segmented>button:active,tui-segmented>label:active,tui-segmented>label>input:not([tuiRadio]):active,tui-segmented>a:active+*,tui-segmented>button:active+*,tui-segmented>label:active+*,tui-segmented>label>input:not([tuiRadio]):active+*,tui-segmented>a.tui-segmented_active,tui-segmented>button.tui-segmented_active,tui-segmented>label.tui-segmented_active,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented>a.tui-segmented_active+*,tui-segmented>button.tui-segmented_active+*,tui-segmented>label.tui-segmented_active+*,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:-.125rem;left:-.125rem;right:-.125rem;bottom:-.125rem;background:transparent!important}tui-segmented:before{transition-property:top,left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;left:var(--t-left);top:var(--t-top);block-size:var(--t-height);inline-size:var(--t-width);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}[tuiTheme=dark] tui-segmented,tui-segmented[tuiTheme=dark]{--tui-background-base: var(--tui-background-neutral-1-hover)}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    activeItemIndex: [{
      type: Input
    }],
    activeItemIndexChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-button-close.mjs
var TuiButtonClose = class _TuiButtonClose {
  static {
    this.ɵfac = function TuiButtonClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonClose)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonClose,
      selectors: [["", "tuiIconButton", "", "tuiButtonClose", ""]],
      hostVars: 4,
      hostBindings: function TuiButtonClose_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-radius", 100, "%")("--tui-height-s", 1.875, "rem");
        }
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        appearance: "neutral",
        size: "s"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonClose, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiIconButton][tuiButtonClose]",
      providers: [tuiButtonOptionsProvider({
        appearance: "neutral",
        size: "s"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }],
      host: {
        "[style.--t-radius.%]": "100",
        "[style.--tui-height-s.rem]": "1.875"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-button-group.mjs
var TuiButtonGroupStyles = class _TuiButtonGroupStyles {
  static {
    this.ɵfac = function TuiButtonGroupStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonGroupStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiButtonGroupStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-button-group-styles"],
      decls: 0,
      vars: 0,
      template: function TuiButtonGroupStyles_Template(rf, ctx) {
      },
      styles: ['[tuiButtonGroup]{display:flex;border-radius:var(--tui-radius-xl);justify-content:center;overflow:hidden}[tuiButtonGroup]>button,[tuiButtonGroup]>a{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;border:none;outline:none;background:transparent;align-items:center;flex:1;flex-direction:column;padding:1.125rem .25rem;gap:.5rem;font:var(--tui-font-text-ui-s);max-inline-size:calc(50% - 1.75rem);cursor:pointer;color:var(--tui-text-action);text-align:center;text-decoration:none;clip-path:inset(0)}[tuiButtonGroup]>button:first-child,[tuiButtonGroup]>a:first-child{clip-path:inset(0 0 0 -10rem)}[tuiButtonGroup]>button:last-child,[tuiButtonGroup]>a:last-child{clip-path:inset(0 -10rem 0 0)}[tuiButtonGroup]>button:active,[tuiButtonGroup]>a:active{background:var(--tui-background-neutral-1)}[tuiButtonGroup]>button:before,[tuiButtonGroup]>a:before,[tuiButtonGroup]>button:after,[tuiButtonGroup]>a:after{position:absolute;top:0;background:inherit;inline-size:1.75rem;block-size:100%}[tuiButtonGroup]>button:first-child:before,[tuiButtonGroup]>a:first-child:before{content:"";left:-1.75rem}[tuiButtonGroup]>button:last-child:after,[tuiButtonGroup]>a:last-child:after{content:"";right:-1.75rem}[tuiButtonGroup]>button tui-icon,[tuiButtonGroup]>a tui-icon{font-size:1.75rem}[tuiButtonGroup]:has(button:only-child){border-radius:1rem}[tuiButtonGroup]>button:only-child,[tuiButtonGroup]>a:only-child{inline-size:100%;flex-direction:row;font:var(--tui-font-text-ui-l);max-inline-size:100%;justify-content:center}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonGroupStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-button-group-styles"
      },
      styles: ['[tuiButtonGroup]{display:flex;border-radius:var(--tui-radius-xl);justify-content:center;overflow:hidden}[tuiButtonGroup]>button,[tuiButtonGroup]>a{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;border:none;outline:none;background:transparent;align-items:center;flex:1;flex-direction:column;padding:1.125rem .25rem;gap:.5rem;font:var(--tui-font-text-ui-s);max-inline-size:calc(50% - 1.75rem);cursor:pointer;color:var(--tui-text-action);text-align:center;text-decoration:none;clip-path:inset(0)}[tuiButtonGroup]>button:first-child,[tuiButtonGroup]>a:first-child{clip-path:inset(0 0 0 -10rem)}[tuiButtonGroup]>button:last-child,[tuiButtonGroup]>a:last-child{clip-path:inset(0 -10rem 0 0)}[tuiButtonGroup]>button:active,[tuiButtonGroup]>a:active{background:var(--tui-background-neutral-1)}[tuiButtonGroup]>button:before,[tuiButtonGroup]>a:before,[tuiButtonGroup]>button:after,[tuiButtonGroup]>a:after{position:absolute;top:0;background:inherit;inline-size:1.75rem;block-size:100%}[tuiButtonGroup]>button:first-child:before,[tuiButtonGroup]>a:first-child:before{content:"";left:-1.75rem}[tuiButtonGroup]>button:last-child:after,[tuiButtonGroup]>a:last-child:after{content:"";right:-1.75rem}[tuiButtonGroup]>button tui-icon,[tuiButtonGroup]>a tui-icon{font-size:1.75rem}[tuiButtonGroup]:has(button:only-child){border-radius:1rem}[tuiButtonGroup]>button:only-child,[tuiButtonGroup]>a:only-child{inline-size:100%;flex-direction:row;font:var(--tui-font-text-ui-l);max-inline-size:100%;justify-content:center}\n']
    }]
  }], null, null);
})();
var TuiButtonGroup = class _TuiButtonGroup {
  constructor() {
    this.nothing = tuiWithStyles(TuiButtonGroupStyles);
  }
  static {
    this.ɵfac = function TuiButtonGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonGroup,
      selectors: [["", "tuiButtonGroup", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiButtonGroup]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-button-select.mjs
var TuiButtonSelect = class _TuiButtonSelect extends TuiControl {
  constructor() {
    super(...arguments);
    this.open = tuiDropdownOpen();
    this.size = "s";
  }
  handleOption(option) {
    this.onChange(option);
    this.open.set(false);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiButtonSelect_BaseFactory;
      return function TuiButtonSelect_Factory(__ngFactoryType__) {
        return (ɵTuiButtonSelect_BaseFactory || (ɵTuiButtonSelect_BaseFactory = ɵɵgetInheritedFactory(_TuiButtonSelect)))(__ngFactoryType__ || _TuiButtonSelect);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonSelect,
      selectors: [["button", "tuiButtonSelect", ""]],
      features: [ɵɵProvidersFeature([
        // TODO: Add checkmark once we properly implement new Select, then add to demo
        tuiProvide(TUI_DATA_LIST_HOST, _TuiButtonSelect),
        tuiDropdownOptionsProvider({
          align: "right"
        })
      ]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonSelect, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "button[tuiButtonSelect]",
      providers: [
        // TODO: Add checkmark once we properly implement new Select, then add to demo
        tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
        tuiDropdownOptionsProvider({
          align: "right"
        })
      ],
      hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-connected.mjs
var TuiConnectedStyles = class _TuiConnectedStyles {
  static {
    this.ɵfac = function TuiConnectedStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiConnectedStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiConnectedStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-connected-styles"],
      decls: 0,
      vars: 0,
      template: function TuiConnectedStyles_Template(rf, ctx) {
      },
      styles: ['[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}tui-accordion[tuiConnected]{--t-image-size: 2rem}[tuiConnected]>[tuiAccordion]:before,[tuiConnected]>[tuiCell]:not(:last-of-type):before,[tuiConnected]>[tuiStep]:not(:last-of-type):before{content:"";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);display:block;block-size:var(--t-connected-height);inline-size:1px;color:var(--tui-border-normal);background:linear-gradient(to bottom,currentColor 75%,transparent 75%) top center / 300% 300%;background-clip:content-box;padding:inherit}[tuiConnected]>[tuiAccordion]{gap:1rem;--t-margin: 0}[tuiConnected]>[tuiAccordion]:before{top:0;left:calc(var(--t-image-size) / 2);block-size:100%;margin:0;background:var(--tui-border-normal);-webkit-mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2),transparent calc(50% + var(--t-image-size) / 2),black calc(50% + var(--t-image-size) / 2));mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2),transparent calc(50% + var(--t-image-size) / 2),black calc(50% + var(--t-image-size) / 2))}[tuiConnected]>[tuiAccordion]:first-of-type:before{-webkit-mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2));mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2))}[tuiConnected]>[tuiAccordion]:last-of-type:before{-webkit-mask:linear-gradient(to bottom,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2));mask:linear-gradient(to bottom,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2))}[tuiConnected]>tui-expand>*{padding:0 0 0 3rem}[tuiConnected]>tui-expand:not(:last-child):before{content:"";position:absolute;top:0;left:calc(var(--t-image-size) / 2);block-size:100%;inline-size:1px;background:var(--tui-border-normal)}[tuiConnected]>[tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiConnectedStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-connected-styles"
      },
      styles: ['[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}tui-accordion[tuiConnected]{--t-image-size: 2rem}[tuiConnected]>[tuiAccordion]:before,[tuiConnected]>[tuiCell]:not(:last-of-type):before,[tuiConnected]>[tuiStep]:not(:last-of-type):before{content:"";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);display:block;block-size:var(--t-connected-height);inline-size:1px;color:var(--tui-border-normal);background:linear-gradient(to bottom,currentColor 75%,transparent 75%) top center / 300% 300%;background-clip:content-box;padding:inherit}[tuiConnected]>[tuiAccordion]{gap:1rem;--t-margin: 0}[tuiConnected]>[tuiAccordion]:before{top:0;left:calc(var(--t-image-size) / 2);block-size:100%;margin:0;background:var(--tui-border-normal);-webkit-mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2),transparent calc(50% + var(--t-image-size) / 2),black calc(50% + var(--t-image-size) / 2));mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2),transparent calc(50% + var(--t-image-size) / 2),black calc(50% + var(--t-image-size) / 2))}[tuiConnected]>[tuiAccordion]:first-of-type:before{-webkit-mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2));mask:linear-gradient(to top,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2))}[tuiConnected]>[tuiAccordion]:last-of-type:before{-webkit-mask:linear-gradient(to bottom,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2));mask:linear-gradient(to bottom,black calc(50% - var(--t-image-size) / 2),transparent calc(50% - var(--t-image-size) / 2))}[tuiConnected]>tui-expand>*{padding:0 0 0 3rem}[tuiConnected]>tui-expand:not(:last-child):before{content:"";position:absolute;top:0;left:calc(var(--t-image-size) / 2);block-size:100%;inline-size:1px;background:var(--tui-border-normal)}[tuiConnected]>[tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n']
    }]
  }], null, null);
})();
var TuiConnected = class _TuiConnected {
  constructor() {
    this.nothing = tuiWithStyles(TuiConnectedStyles);
  }
  static {
    this.ɵfac = function TuiConnected_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiConnected)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiConnected,
      selectors: [["", "tuiConnected", ""]],
      hostAttrs: ["tuiConnected", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiConnected, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiConnected]",
      host: {
        tuiConnected: ""
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-copy.mjs
var [TUI_COPY_OPTIONS, tuiCopyOptionsProvider] = tuiCreateOptions({
  icon: "@tui.copy"
});
var TuiCopy = class _TuiCopy {
  constructor() {
    this.options = inject(TUI_COPY_OPTIONS);
    this.copied$ = new Subject();
    this.doc = inject(DOCUMENT);
    this.textfield = inject(TuiTextfieldComponent);
    this.hint = tuiDirectiveBinding(TuiHintDirective, "tuiHint", toSignal(inject(TUI_COPY_TEXTS).pipe(switchMap(([copy, copied]) => this.copied$.pipe(switchMap(() => timer(3e3).pipe(map(() => copy), startWith(copied))), startWith(copy)))), {
      initialValue: ""
    }));
    this.icons = tuiDirectiveBinding(TuiIcon, "icon", computed((size = this.textfield.options.size()) => tuiIsString(this.options.icon) ? this.options.icon : this.options.icon(size)));
    this.tuiCopy = "";
  }
  get disabled() {
    return !this.textfield.input?.nativeElement.value;
  }
  copy() {
    this.textfield.input?.nativeElement.select();
    this.doc.execCommand("copy");
    this.copied$.next();
  }
  static {
    this.ɵfac = function TuiCopy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCopy)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCopy,
      selectors: [["tui-icon", "tuiCopy", ""]],
      hostAttrs: [2, "cursor", "pointer"],
      hostVars: 6,
      hostBindings: function TuiCopy_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiCopy_click_HostBindingHandler() {
            return ctx.copy();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("pointer-events", ctx.disabled ? "none" : null)("opacity", ctx.disabled ? "var(--tui-disabled-opacity)" : null)("border", ctx.textfield.options.size() === "s" ? "0.25rem solid transparent" : null);
        }
      },
      inputs: {
        tuiCopy: "tuiCopy"
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCopy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiCopy]",
      providers: [{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        style: "cursor: pointer",
        "(click)": "copy()",
        "[style.pointer-events]": 'disabled ? "none" : null',
        "[style.opacity]": 'disabled ? "var(--tui-disabled-opacity)" : null',
        "[style.border]": 'textfield.options.size() === "s" ? "0.25rem solid transparent" : null'
      }
    }]
  }], null, {
    tuiCopy: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-data-list-dropdown-manager.mjs
var TuiDataListDropdownManager = class _TuiDataListDropdownManager {
  constructor() {
    this.dropdowns = EMPTY_QUERY;
    this.els = EMPTY_QUERY;
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    this.right$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((index) => {
      this.tryToFocus(index);
    });
    merge(this.immediate$, this.debounce$).pipe(switchMap((active) => {
      this.dropdowns.forEach((dropdown2, index) => {
        dropdown2.toggle(index === active);
      });
      const element = this.els.get(active);
      const dropdown = this.dropdowns.get(active);
      const ref = dropdown?.ref();
      if (!element || !dropdown || !ref) {
        return EMPTY;
      }
      const {
        nativeElement
      } = ref.location;
      const mouseEnter$ = tuiTypedFromEvent(nativeElement, "mouseenter").pipe(take(1));
      const esc$ = merge(tuiTypedFromEvent(element.nativeElement, "keydown"), tuiTypedFromEvent(nativeElement, "keydown")).pipe(filter(({
        key
      }) => key === "Escape"));
      return merge(mouseEnter$, esc$).pipe(tap((event) => {
        if (dropdown.ref()) {
          event.stopPropagation();
        }
        element.nativeElement.focus();
        dropdown.toggle("offsetX" in event);
      }));
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  get elements$() {
    return tuiQueryListChanges(this.els).pipe(map((array) => array.map(({
      nativeElement
    }) => nativeElement)), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  get right$() {
    return this.elements$.pipe(switchMap((elements) => merge(...elements.map((element, index) => tuiTypedFromEvent(element, "keydown").pipe(filter(({
      key
    }) => key === "ArrowRight"), tuiPreventDefault(), map(() => index))))));
  }
  get immediate$() {
    return this.elements$.pipe(switchMap((elements) => merge(...elements.map((element, index) => tuiTypedFromEvent(element, "click").pipe(map(() => index))))));
  }
  get debounce$() {
    return this.elements$.pipe(switchMap((elements) => merge(...elements.map((element, index) => merge(tuiTypedFromEvent(element, "focus"), tuiTypedFromEvent(element, "blur")).pipe(filter(({
      relatedTarget
    }) => this.notInDropdown(relatedTarget, index)), map(({
      type
    }) => type === "focus" ? index : NaN))))), debounceTime(300));
  }
  notInDropdown(element, index) {
    return !this.dropdowns.get(index)?.ref()?.location.nativeElement.contains(element);
  }
  tryToFocus(index) {
    const content = this.dropdowns.get(index)?.ref()?.location.nativeElement;
    if (!content) {
      return;
    }
    const focusTrap = tuiGetClosestFocusable({
      initial: content,
      root: content
    });
    const item = tuiGetClosestFocusable({
      initial: focusTrap || content,
      root: content
    });
    item?.focus();
  }
  static {
    this.ɵfac = function TuiDataListDropdownManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListDropdownManager)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDataListDropdownManager,
      selectors: [["tui-data-list", "tuiDataListDropdownManager", ""]],
      contentQueries: function TuiDataListDropdownManager_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiDropdownDirective, 5);
          ɵɵcontentQuery(dirIndex, TuiDropdownDirective, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdowns = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.els = _t);
        }
      }
    });
  }
};
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "elements$", null);
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "right$", null);
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "immediate$", null);
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "debounce$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListDropdownManager, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-data-list[tuiDataListDropdownManager]"
    }]
  }], null, {
    dropdowns: [{
      type: ContentChildren,
      args: [TuiDropdownDirective, {
        descendants: true
      }]
    }],
    els: [{
      type: ContentChildren,
      args: [TuiDropdownDirective, {
        read: ElementRef,
        descendants: true
      }]
    }],
    elements$: [],
    right$: [],
    immediate$: [],
    debounce$: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fluid-typography.mjs
var TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS = {
  min: 0.625,
  max: 1.5
};
var TUI_FLUID_TYPOGRAPHY_OPTIONS = tuiCreateToken(TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS);
function tuiFluidTypographyOptionsProvider(options) {
  return tuiProvideOptions(TUI_FLUID_TYPOGRAPHY_OPTIONS, options, TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS);
}
var STEP = 1 / 16;
var TuiFluidTypography = class _TuiFluidTypography {
  constructor() {
    this.changes$ = new Subject();
    this.el = tuiInjectElement();
    this.options = inject(TUI_FLUID_TYPOGRAPHY_OPTIONS);
    this.sub = merge(this.changes$, inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    }), fromEvent(this.el, "input")).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      const min = Number(this.tuiFluidTypography[0] || this.options.min);
      const max = Number(this.tuiFluidTypography[1] || this.options.max);
      for (let i = max; i >= min; i -= STEP) {
        this.el.style.fontSize = `${i}rem`;
        if (this.el.scrollWidth <= this.el.clientWidth) {
          break;
        }
      }
    });
    this.tuiFluidTypography = "";
  }
  ngOnChanges() {
    this.changes$.next();
  }
  static {
    this.ɵfac = function TuiFluidTypography_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFluidTypography)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFluidTypography,
      selectors: [["", "tuiFluidTypography", ""]],
      hostAttrs: ["tuiFluidTypography", ""],
      inputs: {
        tuiFluidTypography: "tuiFluidTypography"
      },
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFluidTypography, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFluidTypography]",
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        tuiFluidTypography: ""
      }
    }]
  }], null, {
    tuiFluidTypography: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-highlight.mjs
var [TUI_HIGHLIGHT_OPTIONS, tuiHighlightOptionsProvider] = tuiCreateOptions({
  highlightColor: "var(--tui-service-selection-background)"
});
var TuiHighlight = class _TuiHighlight {
  constructor() {
    this.el = tuiInjectElement();
    this.renderer = inject(Renderer2);
    this.doc = inject(DOCUMENT);
    this.highlight = this.setUpHighlight();
    this.treeWalker = this.doc.createTreeWalker(this.el, NodeFilter.SHOW_TEXT, svgNodeFilter);
    this.tuiHighlight = "";
    this.tuiHighlightColor = inject(TUI_HIGHLIGHT_OPTIONS).highlightColor;
    inject(ResizeObserverService, {
      self: true
    }).pipe(takeUntilDestroyed()).subscribe(() => this.updateStyles());
  }
  ngOnChanges() {
    this.updateStyles();
  }
  get match() {
    return this.indexOf(this.el.textContent) !== -1;
  }
  updateStyles() {
    this.highlight.style.display = "none";
    if (!this.match) {
      return;
    }
    this.treeWalker.currentNode = this.el;
    do {
      const index = this.indexOf(this.treeWalker.currentNode.nodeValue);
      if (index === -1) {
        continue;
      }
      const range = this.doc.createRange();
      range.setStart(this.treeWalker.currentNode, index);
      range.setEnd(this.treeWalker.currentNode, index + this.tuiHighlight.length);
      const hostRect = this.el.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = range.getBoundingClientRect();
      const {
        style
      } = this.highlight;
      style.background = this.tuiHighlightColor;
      style.left = tuiPx(left - hostRect.left);
      style.top = tuiPx(top - hostRect.top);
      style.width = tuiPx(width);
      style.height = tuiPx(height);
      style.display = "block";
      return;
    } while (this.treeWalker.nextNode());
  }
  indexOf(source) {
    return !source || !this.tuiHighlight ? -1 : source.toLowerCase().indexOf(this.tuiHighlight.toLowerCase());
  }
  setUpHighlight() {
    const highlight = this.renderer.createElement("div");
    const {
      style
    } = highlight;
    style.background = this.tuiHighlightColor;
    style.zIndex = "-1";
    style.position = "absolute";
    this.renderer.appendChild(this.el, highlight);
    return highlight;
  }
  static {
    this.ɵfac = function TuiHighlight_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHighlight)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHighlight,
      selectors: [["", "tuiHighlight", ""]],
      hostVars: 4,
      hostBindings: function TuiHighlight_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("position", "relative")("z-index", 0);
        }
      },
      inputs: {
        tuiHighlight: "tuiHighlight",
        tuiHighlightColor: "tuiHighlightColor"
      },
      features: [ɵɵProvidersFeature([ResizeObserverService]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHighlight, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHighlight]",
      providers: [ResizeObserverService],
      host: {
        "[style.position]": '"relative"',
        "[style.zIndex]": "0"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiHighlight: [{
      type: Input
    }],
    tuiHighlightColor: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-icon-badge.mjs
var TuiIconBadgeStyles = class _TuiIconBadgeStyles {
  static {
    this.ɵfac = function TuiIconBadgeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconBadgeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIconBadgeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-icon-badge"],
      decls: 0,
      vars: 0,
      template: function TuiIconBadgeStyles_Template(rf, ctx) {
      },
      styles: ['[tuiIconBadge]:before{content:"";position:absolute;right:.143em;bottom:.143em;display:var(--t-icon-badge, none);inline-size:.57em;block-size:.57em;transform:translate(50%,50%);-webkit-mask:var(--t-icon-badge) no-repeat center / contain;mask:var(--t-icon-badge) no-repeat center / contain;background:currentColor}[tuiIconBadge][style*="--t-icon-badge:"]:after{-webkit-mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in,xor;mask-composite:intersect}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconBadgeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icon-badge"
      },
      styles: ['[tuiIconBadge]:before{content:"";position:absolute;right:.143em;bottom:.143em;display:var(--t-icon-badge, none);inline-size:.57em;block-size:.57em;transform:translate(50%,50%);-webkit-mask:var(--t-icon-badge) no-repeat center / contain;mask:var(--t-icon-badge) no-repeat center / contain;background:currentColor}[tuiIconBadge][style*="--t-icon-badge:"]:after{-webkit-mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in,xor;mask-composite:intersect}\n']
    }]
  }], null, null);
})();
var TuiIconBadge = class _TuiIconBadge {
  constructor() {
    this.icon = inject(TuiIcon);
    this.nothing = tuiWithStyles(TuiIconBadgeStyles);
    this.badgeSrc = signal(null);
  }
  set badge(icon) {
    this.badgeSrc.set(this.icon.resolve(icon));
  }
  static {
    this.ɵfac = function TuiIconBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconBadge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIconBadge,
      selectors: [["tui-icon", "badge", ""]],
      hostAttrs: ["tuiIconBadge", ""],
      hostVars: 2,
      hostBindings: function TuiIconBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon-badge", ctx.badgeSrc());
        }
      },
      inputs: {
        badge: "badge"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconBadge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[badge]",
      host: {
        tuiIconBadge: "",
        "[style.--t-icon-badge]": "badgeSrc()"
      }
    }]
  }], null, {
    badge: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-lazy-loading.mjs
var TuiLazyLoadingService = class _TuiLazyLoadingService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.src$ = new Subject();
    this.intersections$ = inject(IntersectionObserverService);
    this.stream$ = this.src$.pipe(switchMap((src) => this.intersections$.pipe(filter((entry) => !!entry[0]?.isIntersecting), map(() => src), take(1))), tuiWatch());
  }
  next(src) {
    this.src$.next(src);
  }
  static {
    this.ɵfac = function TuiLazyLoadingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLazyLoadingService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiLazyLoadingService,
      factory: _TuiLazyLoadingService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLazyLoadingService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiImgLazyLoading = class _TuiImgLazyLoading {
  constructor() {
    this.isServer = isPlatformServer(inject(PLATFORM_ID));
    this.loading$ = inject(TuiLazyLoadingService);
    this.supported = "loading" in tuiInjectElement();
    this.src = signal(null);
    this.background = signal(this.isServer ? "" : "var(--tui-background-neutral-2)");
    this.animation = signal(this.isServer ? "" : "tuiSkeletonVibe ease-in-out 1s infinite alternate");
    this.$ = !this.supported && this.loading$.pipe(takeUntilDestroyed()).subscribe((src) => this.src.set(src));
  }
  set srcSetter(src) {
    if (this.supported) {
      this.src.set(src);
    } else {
      this.loading$.next(src);
    }
  }
  unset() {
    this.background.set("");
    this.animation.set("");
  }
  static {
    this.ɵfac = function TuiImgLazyLoading_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiImgLazyLoading)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiImgLazyLoading,
      selectors: [["img", "loading", "lazy"], ["img", "tuiLoading", "lazy"]],
      hostVars: 6,
      hostBindings: function TuiImgLazyLoading_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("load", function TuiImgLazyLoading_load_HostBindingHandler() {
            return ctx.unset();
          })("error", function TuiImgLazyLoading_error_HostBindingHandler() {
            return ctx.unset();
          });
        }
        if (rf & 2) {
          ɵɵattribute("loading", ctx.supported ? "lazy" : null)("src", ctx.src(), ɵɵsanitizeUrl);
          ɵɵstyleProp("animation", ctx.animation())("background", ctx.background());
        }
      },
      inputs: {
        srcSetter: [0, "src", "srcSetter"]
      },
      features: [ɵɵProvidersFeature([TuiLazyLoadingService, IntersectionObserverService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiImgLazyLoading, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: 'img[loading="lazy"],img[tuiLoading="lazy"]',
      providers: [TuiLazyLoadingService, IntersectionObserverService],
      host: {
        "[style.animation]": "animation()",
        "[style.background]": "background()",
        "[attr.loading]": 'supported ? "lazy" : null',
        "[attr.src]": "src()",
        "(load)": "unset()",
        "(error)": "unset()"
      }
    }]
  }], null, {
    srcSetter: [{
      type: Input,
      args: ["src"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-password.mjs
var [TUI_PASSWORD_OPTIONS, tuiPasswordOptionsProvider] = tuiCreateOptions({
  icons: {
    hide: "@tui.eye-off",
    show: "@tui.eye"
  }
});
var TuiPassword = class _TuiPassword {
  constructor() {
    this.options = inject(TUI_PASSWORD_OPTIONS);
    this.texts = toSignal(inject(TUI_PASSWORD_TEXTS), {
      initialValue: ["", ""]
    });
    this.textfield = inject(TuiTextfieldComponent);
    this.hidden = signal(true);
    this.icon = tuiDirectiveBinding(TuiIcon, "icon", computed((size = this.textfield.options.size()) => {
      const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;
      return tuiIsString(icon) ? icon : icon(size);
    }));
    this.hint = tuiDirectiveBinding(TuiHintDirective, "tuiHint", computed(() => this.hidden() ? this.texts()[0] : this.texts()[1]));
  }
  toggle() {
    this.hidden.set(!this.hidden());
    this.textfield.input?.nativeElement.setAttribute("type", this.hidden() ? "password" : "text");
  }
  static {
    this.ɵfac = function TuiPassword_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPassword)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPassword,
      selectors: [["tui-icon", "tuiPassword", ""]],
      hostAttrs: [2, "cursor", "pointer"],
      hostVars: 2,
      hostBindings: function TuiPassword_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiPassword_click_HostBindingHandler() {
            return ctx.toggle();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("border", ctx.textfield.options.size() === "s" ? "0.25rem solid transparent" : null);
        }
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPassword, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiPassword]",
      providers: [{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        style: "cursor: pointer",
        "(click)": "toggle()",
        "[style.border]": 'textfield.options.size() === "s" ? "0.25rem solid transparent" : null'
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-present.mjs
var TuiPresent = class _TuiPresent {
  constructor() {
    this.visibility$ = new BehaviorSubject(false);
    this.tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));
  }
  ngOnDestroy() {
    this.visibility$.next(false);
  }
  onAnimation(visibility) {
    this.visibility$.next(visibility);
  }
  static {
    this.ɵfac = function TuiPresent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPresent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPresent,
      selectors: [["", "tuiPresentChange", ""]],
      hostVars: 2,
      hostBindings: function TuiPresent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel.self", function TuiPresent_animationcancel_self_HostBindingHandler() {
            return ctx.onAnimation(false);
          })("animationstart.self", function TuiPresent_animationstart_self_HostBindingHandler() {
            return ctx.onAnimation(true);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("animation", "tuiPresent 1s infinite");
        }
      },
      outputs: {
        tuiPresentChange: "tuiPresentChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPresent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPresentChange]",
      host: {
        "[style.animation]": '"tuiPresent 1s infinite"',
        "(animationcancel.self)": "onAnimation(false)",
        "(animationstart.self)": "onAnimation(true)"
      }
    }]
  }], null, {
    tuiPresentChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-sensitive.mjs
var rowsInSvg = 3;
var TuiSensitiveStyles = class _TuiSensitiveStyles {
  static {
    this.ɵfac = function TuiSensitiveStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSensitiveStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSensitiveStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-sensitive-styles"],
      decls: 0,
      vars: 0,
      template: function TuiSensitiveStyles_Template(rf, ctx) {
      },
      styles: [`.tui-sensitive{position:relative;line-height:1em;clip-path:inset(0 round .25rem)}.tui-sensitive:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block!important;background:currentColor;border-radius:inherit;-webkit-mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);margin:0!important}.tui-sensitive.tui-sensitive{-webkit-text-fill-color:transparent}span.tui-sensitive,a.tui-sensitive{display:inline-block}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSensitiveStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-sensitive-styles"
      },
      styles: [`.tui-sensitive{position:relative;line-height:1em;clip-path:inset(0 round .25rem)}.tui-sensitive:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block!important;background:currentColor;border-radius:inherit;-webkit-mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);margin:0!important}.tui-sensitive.tui-sensitive{-webkit-text-fill-color:transparent}span.tui-sensitive,a.tui-sensitive{display:inline-block}
`]
    }]
  }], null, null);
})();
var TuiSensitive = class _TuiSensitive {
  constructor() {
    this.nothing = tuiWithStyles(TuiSensitiveStyles);
    this.offset = Math.round(Math.random() * 10) * 10;
    this.height = toSignal(inject(ResizeObserverService, {
      self: true
    }).pipe(map((entry) => {
      const height = entry[0]?.contentRect.height ?? 0;
      return [Math.max(2, Math.floor(height / 16) + 1), height];
    }), map(([rows, height]) => height * (rowsInSvg / rows)), tuiZonefull(), tuiWatch()));
    this.tuiSensitive = false;
  }
  static {
    this.ɵfac = function TuiSensitive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSensitive)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSensitive,
      selectors: [["", "tuiSensitive", ""]],
      hostVars: 6,
      hostBindings: function TuiSensitive_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-offset", ctx.offset, "px")("--t-mask-height", ctx.height(), "px");
          ɵɵclassProp("tui-sensitive", ctx.tuiSensitive);
        }
      },
      inputs: {
        tuiSensitive: "tuiSensitive"
      },
      features: [ɵɵProvidersFeature([ResizeObserverService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSensitive, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSensitive]",
      providers: [ResizeObserverService],
      host: {
        "[style.--t-offset.px]": "offset",
        "[style.--t-mask-height.px]": "height()",
        "[class.tui-sensitive]": "tuiSensitive"
      }
    }]
  }], null, {
    tuiSensitive: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-skeleton.mjs
var FADE = [{
  opacity: 0.06
}, {
  opacity: 1
}];
var TuiSkeletonStyles = class _TuiSkeletonStyles {
  static {
    this.ɵfac = function TuiSkeletonStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSkeletonStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSkeletonStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-skeleton-styles"],
      decls: 0,
      vars: 0,
      template: function TuiSkeletonStyles_Template(rf, ctx) {
      },
      styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSkeletonStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-skeleton-styles"
      },
      styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"]
    }]
  }], null, null);
})();
var TuiSkeleton = class _TuiSkeleton {
  constructor() {
    this.el = tuiInjectElement();
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)) * 2;
    this.nothing = tuiWithStyles(TuiSkeletonStyles);
    this.tuiSkeleton = false;
  }
  ngOnChanges({
    tuiSkeleton
  }) {
    this.animation?.cancel();
    if (!tuiSkeleton?.currentValue && !tuiSkeleton?.firstChange) {
      this.animation = this.el.animate(FADE, this.duration);
    }
  }
  getPlaceholder(value) {
    switch (typeof value) {
      case "number":
        return Array.from({
          length: value
        }).map(() => CHAR_NO_BREAK_SPACE.repeat(getLength())).join(" ");
      case "string":
        return value;
      default:
        return null;
    }
  }
  static {
    this.ɵfac = function TuiSkeleton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSkeleton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSkeleton,
      selectors: [["", "tuiSkeleton", ""]],
      hostAttrs: ["tuiSkeleton", ""],
      hostVars: 3,
      hostBindings: function TuiSkeleton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-tui-skeleton", ctx.getPlaceholder(ctx.tuiSkeleton));
          ɵɵclassProp("_skeleton", ctx.tuiSkeleton);
        }
      },
      inputs: {
        tuiSkeleton: "tuiSkeleton"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
__decorate([tuiPure], TuiSkeleton.prototype, "getPlaceholder", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSkeleton, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSkeleton]",
      host: {
        tuiSkeleton: "",
        "[class._skeleton]": "tuiSkeleton",
        "[attr.data-tui-skeleton]": "getPlaceholder(tuiSkeleton)"
      }
    }]
  }], null, {
    tuiSkeleton: [{
      type: Input
    }],
    getPlaceholder: []
  });
})();
function getLength() {
  return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-unfinished-validator.mjs
function tuiCreateUnfinishedValidator(element, message) {
  return ({
    value
  }) => value === null && element.value !== "" ? {
    unfinished: new TuiValidationError(message)
  } : null;
}
var TuiUnfinishedValidator = class _TuiUnfinishedValidator {
  constructor() {
    this.default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
    this.el = tuiInjectElement();
    this.tuiUnfinishedValidator = "";
    this.validate = tuiCreateUnfinishedValidator(this.el, () => this.tuiUnfinishedValidator || this.default());
  }
  static {
    this.ɵfac = function TuiUnfinishedValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiUnfinishedValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiUnfinishedValidator,
      selectors: [["input", "tuiUnfinishedValidator", ""]],
      inputs: {
        tuiUnfinishedValidator: "tuiUnfinishedValidator"
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiUnfinishedValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiUnfinishedValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiUnfinishedValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)]
    }]
  }], null, {
    tuiUnfinishedValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-unmask-handler.mjs
var TuiUnmaskHandler = class _TuiUnmaskHandler extends TuiValueTransformer {
  constructor() {
    super(...arguments);
    this.tuiUnmaskHandler = identity;
    this.maskito = null;
  }
  fromControlValue(controlValue) {
    return maskitoTransform(String(controlValue ?? ""), this.maskito || MASKITO_DEFAULT_OPTIONS);
  }
  toControlValue(value) {
    return this.tuiUnmaskHandler(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiUnmaskHandler_BaseFactory;
      return function TuiUnmaskHandler_Factory(__ngFactoryType__) {
        return (ɵTuiUnmaskHandler_BaseFactory || (ɵTuiUnmaskHandler_BaseFactory = ɵɵgetInheritedFactory(_TuiUnmaskHandler)))(__ngFactoryType__ || _TuiUnmaskHandler);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiUnmaskHandler,
      selectors: [["", "maskito", "", "tuiUnmaskHandler", ""]],
      inputs: {
        tuiUnmaskHandler: "tuiUnmaskHandler",
        maskito: "maskito"
      },
      features: [ɵɵProvidersFeature([tuiProvide(TuiValueTransformer, _TuiUnmaskHandler)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiUnmaskHandler, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[maskito][tuiUnmaskHandler]",
      providers: [tuiProvide(TuiValueTransformer, TuiUnmaskHandler)]
    }]
  }], null, {
    tuiUnmaskHandler: [{
      type: Input
    }],
    maskito: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-item.mjs
var TuiItem = class _TuiItem {
  static {
    this.ɵfac = function TuiItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItem,
      selectors: [["", "tuiItem", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItem, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiItem]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tabs.mjs
function TuiTabsWithMore_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiTabsWithMore_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelementContainer(1, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const item_r2 = ctx_r2.$implicit;
    const index_r4 = ctx_r2.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("t-overflown", ctx_r4.isOverflown(index_r4));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTabsWithMore_ng_container_3_ng_container_1_Template, 1, 1, "ng-container", 8)(2, TuiTabsWithMore_ng_container_3_ng_template_2_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r4 = ctx.index;
    const hidden_r6 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", index_r4 <= ctx_r4.lastVisibleIndex)("ngIfElse", hidden_r6);
  }
}
function TuiTabsWithMore_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r8 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r8, " ");
  }
}
function TuiTabsWithMore_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_button_4_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_button_4_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtemplate(1, TuiTabsWithMore_button_4_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r9 = ɵɵreference(8);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent || dropdown_r9);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r4.moreContent);
  }
}
function TuiTabsWithMore_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_ng_template_5_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_ng_template_5_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r9 = ɵɵreference(8);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent || dropdown_r9);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 10, ctx_r4.moreWord$), " ");
  }
}
function TuiTabsWithMore_ng_template_7_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiTabsWithMore_ng_template_7_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTabsWithMore_ng_template_7_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r15 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r15);
  }
}
function TuiTabsWithMore_ng_template_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵlistener("tui-tab-activate", function TuiTabsWithMore_ng_template_7_div_2_Template_div_tui_tab_activate_0_listener() {
      const index_r14 = ɵɵrestoreView(_r13).index;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onClick(index_r14));
    });
    ɵɵtemplate(1, TuiTabsWithMore_ng_template_7_div_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r14 = ctx.index;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.shouldShow(index_r14));
  }
}
function TuiTabsWithMore_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14, 3);
    ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsWithMore_ng_template_7_Template_div_keydown_arrowDown_prevent_0_listener($event) {
      ɵɵrestoreView(_r11);
      const element_r12 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r12, false));
    })("keydown.arrowUp.prevent", function TuiTabsWithMore_ng_template_7_Template_div_keydown_arrowUp_prevent_0_listener($event) {
      ɵɵrestoreView(_r11);
      const element_r12 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r12, true));
    });
    ɵɵtemplate(2, TuiTabsWithMore_ng_template_7_div_2_Template, 2, 1, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵattribute("data-size", ctx_r4.size);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r4.items);
  }
}
var TUI_TAB_ACTIVATE = "tui-tab-activate";
var TuiTab = class _TuiTab {
  constructor() {
    this.el = tuiInjectElement();
    this.rla = inject(RouterLinkActive, {
      optional: true
    });
    this.observer = this.rla && inject(MutationObserverService, {
      optional: true
    })?.pipe(filter(() => !!this.rla?.isActive));
    this.sub = merge(this.observer || EMPTY, this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY, this.el.matches("button") ? tuiTypedFromEvent(this.el, "click").pipe(
      // Delaying execution until after all other click callbacks
      switchMap(() => tuiTypedFromEvent(this.el.parentElement, "click").pipe(take(1)))
    ) : EMPTY).pipe(takeUntilDestroyed()).subscribe(() => this.el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, {
      bubbles: true
    })));
  }
  ngOnDestroy() {
    if (tuiIsNativeFocused(this.el)) {
      this.el.blur();
    }
  }
  static {
    this.ɵfac = function TuiTab_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTab)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTab,
      selectors: [["a", "tuiTab", "", 3, "routerLink", ""], ["a", "tuiTab", "", "routerLink", "", "routerLinkActive", ""], ["button", "tuiTab", ""]],
      hostAttrs: ["type", "button"],
      features: [ɵɵHostDirectivesFeature([TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTab, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]",
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button"
      }
    }]
  }], null, null);
})();
var TUI_TABS_DEFAULT_OPTIONS = {
  underline: true,
  exposeActive: true,
  itemsLimit: Infinity,
  minMoreWidth: 0,
  size: "l"
};
var TUI_TABS_OPTIONS = tuiCreateToken(TUI_TABS_DEFAULT_OPTIONS);
function tuiTabsOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABS_OPTIONS, options, TUI_TABS_DEFAULT_OPTIONS);
}
var TuiTabsStyles = class _TuiTabsStyles {
  static {
    this.ɵfac = function TuiTabsStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabsStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-tabs"],
      decls: 0,
      vars: 0,
      template: function TuiTabsStyles_Template(rf, ctx) {
      },
      styles: ['[tuiTab]{transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-left:var(--tui-tab-margin, 24px)}[tuiTab]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]._active{color:var(--tui-text-primary);box-shadow:none}[tuiTab]:focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}tui-tabs._underline [tuiTab]:hover:not(._active),[tuiTabs]._underline [tuiTab]:hover:not(._active){box-shadow:inset 0 -.125rem var(--tui-border-normal)}tui-tabs>[tuiTab]:first-child,[tuiTabs]>[tuiTab]:first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:first-child{margin-left:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:first-child{margin-left:var(--tui-tab-margin, 24px)}[tuiTab][tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab][tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:empty:after,[tuiTab]:empty:before{margin:.5rem}@media (hover: hover) and (pointer: fine){[tuiTab]:hover{color:var(--tui-text-primary)}}[tuiTabs],tui-tabs{scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;font:var(--tui-font-text-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate}[tuiTabs]::-webkit-scrollbar,tui-tabs::-webkit-scrollbar,[tuiTabs]::-webkit-scrollbar-thumb,tui-tabs::-webkit-scrollbar-thumb{display:none}[tuiTabs][data-size=m],tui-tabs[data-size=m]{font:var(--tui-font-text-s);--tui-tab-margin: 16px}[tuiTabs][data-size=l]:not([data-vertical]),tui-tabs[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}[tuiTabs][data-size=m]:not([data-vertical]),tui-tabs[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}[tuiTabs]:before,tui-tabs:before{transition-property:width,left;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:var(--t-left);bottom:0;block-size:.125rem;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms}[tuiTabs]._underline:before,tui-tabs._underline:before{content:""}tui-tabs[data-vertical],[tuiTabs][data-vertical]{flex-direction:column;box-shadow:inset -1px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab],[tuiTabs][data-vertical] [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem .25rem 0}tui-tabs[data-vertical] [tuiTab]:after,[tuiTabs][data-vertical] [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;right:0;display:block;block-size:100%;inline-size:.125rem;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical] [tuiTab]:hover,[tuiTabs][data-vertical] [tuiTab]:hover{box-shadow:inset -.125rem 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab]._active:after,[tuiTabs][data-vertical] [tuiTab]._active:after{transform:none}tui-tabs[data-vertical][data-size=m] [tuiTab],[tuiTabs][data-vertical][data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-font-text-s)}tui-tabs[data-vertical][data-vertical=right],[tuiTabs][data-vertical][data-vertical=right]{box-shadow:inset 1px 0 var(--tui-border-normal)}tui-tabs[data-vertical][data-vertical=right] [tuiTab],[tuiTabs][data-vertical][data-vertical=right] [tuiTab]{text-align:end;padding:.25rem 0 .25rem 1.25rem}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:after,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:after{right:auto;left:0;transform-origin:left}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:hover,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:hover{box-shadow:inset .125rem 0 var(--tui-border-normal)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-tabs"
      },
      styles: ['[tuiTab]{transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-left:var(--tui-tab-margin, 24px)}[tuiTab]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]._active{color:var(--tui-text-primary);box-shadow:none}[tuiTab]:focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}tui-tabs._underline [tuiTab]:hover:not(._active),[tuiTabs]._underline [tuiTab]:hover:not(._active){box-shadow:inset 0 -.125rem var(--tui-border-normal)}tui-tabs>[tuiTab]:first-child,[tuiTabs]>[tuiTab]:first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:first-child{margin-left:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:first-child{margin-left:var(--tui-tab-margin, 24px)}[tuiTab][tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab][tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:empty:after,[tuiTab]:empty:before{margin:.5rem}@media (hover: hover) and (pointer: fine){[tuiTab]:hover{color:var(--tui-text-primary)}}[tuiTabs],tui-tabs{scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;font:var(--tui-font-text-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate}[tuiTabs]::-webkit-scrollbar,tui-tabs::-webkit-scrollbar,[tuiTabs]::-webkit-scrollbar-thumb,tui-tabs::-webkit-scrollbar-thumb{display:none}[tuiTabs][data-size=m],tui-tabs[data-size=m]{font:var(--tui-font-text-s);--tui-tab-margin: 16px}[tuiTabs][data-size=l]:not([data-vertical]),tui-tabs[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}[tuiTabs][data-size=m]:not([data-vertical]),tui-tabs[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}[tuiTabs]:before,tui-tabs:before{transition-property:width,left;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:var(--t-left);bottom:0;block-size:.125rem;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms}[tuiTabs]._underline:before,tui-tabs._underline:before{content:""}tui-tabs[data-vertical],[tuiTabs][data-vertical]{flex-direction:column;box-shadow:inset -1px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab],[tuiTabs][data-vertical] [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem .25rem 0}tui-tabs[data-vertical] [tuiTab]:after,[tuiTabs][data-vertical] [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;right:0;display:block;block-size:100%;inline-size:.125rem;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical] [tuiTab]:hover,[tuiTabs][data-vertical] [tuiTab]:hover{box-shadow:inset -.125rem 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab]._active:after,[tuiTabs][data-vertical] [tuiTab]._active:after{transform:none}tui-tabs[data-vertical][data-size=m] [tuiTab],[tuiTabs][data-vertical][data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-font-text-s)}tui-tabs[data-vertical][data-vertical=right],[tuiTabs][data-vertical][data-vertical=right]{box-shadow:inset 1px 0 var(--tui-border-normal)}tui-tabs[data-vertical][data-vertical=right] [tuiTab],[tuiTabs][data-vertical][data-vertical=right] [tuiTab]{text-align:end;padding:.25rem 0 .25rem 1.25rem}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:after,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:after{right:auto;left:0;transform-origin:left}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:hover,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:hover{box-shadow:inset .125rem 0 var(--tui-border-normal)}\n']
    }]
  }], null, null);
})();
var TuiTabsDirective = class _TuiTabsDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.injector = inject(INJECTOR$1);
    this.nothing = tuiWithStyles(TuiTabsStyles);
    this.size = inject(TUI_TABS_OPTIONS).size;
    this.activeItemIndex = 0;
    this.activeItemIndexChange = new EventEmitter();
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    return this.tabs[this.activeItemIndex] || null;
  }
  moveFocus(current, step) {
    const {
      tabs
    } = this;
    tuiMoveFocus(tabs.indexOf(current), tabs, step);
  }
  ngAfterViewChecked() {
    afterNextRender(() => {
      this.markTabAsActive();
    }, {
      injector: this.injector
    });
  }
  onActivate(event, element) {
    const index = this.tabs.findIndex((tab) => tab === element);
    event.stopPropagation();
    if (index === this.activeItemIndex) {
      return;
    }
    this.activeItemIndexChange.emit(index);
    this.activeItemIndex = index;
  }
  markTabAsActive() {
    const {
      tabs,
      activeElement
    } = this;
    tabs.forEach((nativeElement) => {
      const active = nativeElement === activeElement;
      nativeElement.classList.toggle("_active", active);
      nativeElement.setAttribute("tabIndex", active ? "0" : "-1");
    });
  }
  static {
    this.ɵfac = function TuiTabsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsDirective,
      hostVars: 1,
      hostBindings: function TuiTabsDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-tab-activate", function TuiTabsDirective_tui_tab_activate_HostBindingHandler($event) {
            return ctx.onActivate($event, $event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size",
        activeItemIndex: "activeItemIndex"
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        "[attr.data-size]": "size",
        [`(${TUI_TAB_ACTIVATE})`]: "onActivate($event, $event.target)"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }],
    activeItemIndex: [{
      type: Input
    }],
    activeItemIndexChange: [{
      type: Output
    }]
  });
})();
var TuiTabsHorizontal = class _TuiTabsHorizontal {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_TABS_OPTIONS);
    this.tabs = inject(TuiTabsDirective);
    this.children = EMPTY_QUERY;
    this.sub = inject(MutationObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.underline = this.options.underline;
  }
  ngAfterViewChecked() {
    this.scrollTo(this.tabs.activeItemIndex);
    this.refresh();
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  refresh() {
    const {
      activeElement
    } = this.tabs;
    if (activeElement && !activeElement.isConnected) {
      return;
    }
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = activeElement || {};
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  scrollTo(index) {
    const element = this.tabs.tabs[index];
    if (!element) {
      return;
    }
    const {
      offsetLeft,
      offsetWidth
    } = element;
    if (offsetLeft < this.el.scrollLeft) {
      this.el.scrollLeft = offsetLeft;
    }
    if (offsetLeft + offsetWidth > this.el.scrollLeft + this.el.offsetWidth) {
      this.el.scrollLeft = offsetLeft + offsetWidth - this.el.offsetWidth;
    }
  }
  static {
    this.ɵfac = function TuiTabsHorizontal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsHorizontal)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsHorizontal,
      selectors: [["tui-tabs", 3, "vertical", ""], ["nav", "tuiTabs", "", 3, "vertical", ""]],
      contentQueries: function TuiTabsHorizontal_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTab, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
        }
      },
      hostVars: 4,
      hostBindings: function TuiTabsHorizontal_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationend", function TuiTabsHorizontal_animationend_HostBindingHandler() {
            return ctx.refresh();
          })("keydown.arrowRight.prevent", function TuiTabsHorizontal_keydown_arrowRight_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowLeft.prevent", function TuiTabsHorizontal_keydown_arrowLeft_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-color", ctx.underline === true ? "var(--tui-background-accent-1)" : ctx.underline);
          ɵɵclassProp("_underline", ctx.underline);
        }
      },
      inputs: {
        underline: "underline"
      },
      features: [ɵɵProvidersFeature([MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
__decorate([tuiPure], TuiTabsHorizontal.prototype, "scrollTo", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsHorizontal, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])",
      providers: [MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[class._underline]": "underline",
        "[style.--t-color]": "underline === true ? 'var(--tui-background-accent-1)' : underline",
        "(animationend)": "refresh()",
        "(keydown.arrowRight.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowLeft.prevent)": "onKeyDownArrow($event.target, -1)"
      }
    }]
  }], null, {
    children: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTab)]
    }],
    underline: [{
      type: Input
    }],
    scrollTo: []
  });
})();
var TuiTabsVertical = class _TuiTabsVertical {
  constructor() {
    this.tabs = inject(TuiTabsDirective);
    this.vertical = "left";
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  static {
    this.ɵfac = function TuiTabsVertical_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsVertical)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsVertical,
      selectors: [["tui-tabs", "vertical", ""], ["nav", "tuiTabs", "", "vertical", ""]],
      hostVars: 1,
      hostBindings: function TuiTabsVertical_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsVertical_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiTabsVertical_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-vertical", ctx.vertical);
        }
      },
      inputs: {
        vertical: "vertical"
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsVertical, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-tabs[vertical], nav[tuiTabs][vertical]",
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[attr.data-vertical]": "vertical",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      }
    }]
  }], null, {
    vertical: [{
      type: Input
    }]
  });
})();
var TUI_TABS_REFRESH = tuiCreateToken();
var TUI_TABS_PROVIDERS = [ResizeObserverService, MutationObserverService, tuiDropdownOptionsProvider({
  align: "right"
}), {
  provide: WA_MUTATION_OBSERVER_INIT,
  useValue: {
    childList: true,
    subtree: true,
    characterData: true
  }
}, {
  provide: TUI_TABS_REFRESH,
  deps: [ResizeObserverService, MutationObserverService, DOCUMENT, ElementRef, ChangeDetectorRef],
  useFactory: (resize$, mutations$, {
    body
  }, {
    nativeElement
  }, cdr) => merge(resize$, mutations$.pipe(tap(() => cdr.detectChanges()))).pipe(
    // Ignoring cases when host is detached from DOM
    filter(() => body.contains(nativeElement)),
    debounceTime(0),
    startWith(null),
    takeUntilDestroyed()
  )
}];
var TuiTabsWithMore = class _TuiTabsWithMore {
  constructor() {
    this.options = inject(TUI_TABS_OPTIONS);
    this.refresh$ = inject(TUI_TABS_REFRESH);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.maxIndex = Infinity;
    this.items = EMPTY_QUERY;
    this.moreWord$ = inject(TUI_MORE_WORD);
    this.open = false;
    this.size = this.options.size;
    this.underline = this.options.underline;
    this.itemsLimit = this.options.itemsLimit;
    this.activeItemIndexChange = new EventEmitter();
    this.activeItemIndex = 0;
  }
  set itemIndex(activeItemIndex) {
    this.activeItemIndex = activeItemIndex;
    this.maxIndex = this.getMaxIndex();
  }
  get lastVisibleIndex() {
    if (this.itemsLimit + 1 >= this.items.length) {
      return this.maxIndex;
    }
    const offset = this.itemsLimit - 1 > this.activeItemIndex || !this.options.exposeActive ? 1 : 2;
    return Math.min(this.itemsLimit - offset, this.maxIndex);
  }
  ngAfterViewInit() {
    this.refresh$.pipe(map(() => this.getMaxIndex()), tap(() => this.refresh()), filter((maxIndex) => this.maxIndex !== maxIndex)).subscribe((maxIndex) => {
      this.maxIndex = maxIndex;
      this.cdr.detectChanges();
    });
  }
  ngAfterViewChecked() {
    this.refresh();
  }
  // TODO: Improve performance
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    const {
      tabs
    } = this;
    const safeActiveIndex = tuiClamp(this.activeItemIndex || 0, 0, tabs.length - 2);
    return this.options.exposeActive || this.lastVisibleIndex >= safeActiveIndex ? tabs[safeActiveIndex] || null : this.moreButton?.nativeElement || null;
  }
  get isMoreAlone() {
    return this.lastVisibleIndex < 0 && !this.options.exposeActive;
  }
  get isMoreVisible() {
    return this.lastVisibleIndex < this.items.length - 1;
  }
  get isMoreFocusable() {
    return !!this.moreButton && tuiIsNativeFocused(this.moreButton.nativeElement);
  }
  get isMoreActive() {
    return this.open || !this.options.exposeActive && this.lastVisibleIndex < this.activeItemIndex;
  }
  onActiveItemIndexChange(activeItemIndex) {
    this.updateActiveItemIndex(activeItemIndex);
  }
  onClick(index) {
    this.open = false;
    this.focusMore();
    this.updateActiveItemIndex(index);
  }
  onArrowRight(event) {
    if (tuiIsElement(event.target) && tuiIsNativeFocused(event.target)) {
      this.focusMore();
    }
  }
  onArrowLeft() {
    const {
      tabs
    } = this;
    let index = tabs.length - 2;
    while (index >= 0) {
      tabs[index]?.focus();
      if (tuiIsNativeFocused(tabs[index])) {
        return;
      }
      index--;
    }
  }
  onWrapperArrow(event, wrapper, previous) {
    const button = event.target;
    const target = tuiGetClosestFocusable({
      initial: button,
      root: wrapper,
      previous
    });
    if (target) {
      target.focus();
    }
  }
  isOverflown(index) {
    return index !== this.activeItemIndex || !this.options.exposeActive;
  }
  shouldShow(index) {
    return index > this.lastVisibleIndex && this.isOverflown(index);
  }
  get margin() {
    return this.size === "l" ? 24 : 16;
  }
  focusMore() {
    if (this.moreButton) {
      this.moreButton.nativeElement.focus();
    }
  }
  getMaxIndex() {
    const {
      tabs,
      activeItemIndex,
      margin
    } = this;
    if (tabs.length < 2) {
      return 0;
    }
    const {
      exposeActive,
      minMoreWidth
    } = this.options;
    const {
      clientWidth
    } = this.el;
    const active = tabs[activeItemIndex];
    const activeWidth = active?.scrollWidth ?? 0;
    const moreWidth = Math.max(tabs[tabs.length - 1]?.scrollWidth ?? 0, minMoreWidth);
    let maxIndex = tabs.length - 2;
    let total = tabs.reduce((acc, {
      scrollWidth
    }) => acc + scrollWidth, 0) + maxIndex * margin - (tabs[tabs.length - 1]?.scrollWidth ?? 0);
    if (Number.isNaN(total) || total <= clientWidth) {
      return Infinity;
    }
    while (maxIndex) {
      total -= (tabs[maxIndex]?.scrollWidth ?? 0) + margin;
      maxIndex--;
      const activeDisplaced = exposeActive && activeItemIndex > maxIndex;
      const activeOffset = activeDisplaced ? activeWidth + margin : 0;
      const currentWidth = total + activeOffset + moreWidth + margin;
      const safetyOffset = tuiToInt(this.maxIndex === maxIndex - 1);
      if (currentWidth + safetyOffset < clientWidth) {
        return maxIndex;
      }
    }
    return -1;
  }
  updateActiveItemIndex(activeItemIndex) {
    this.itemIndex = activeItemIndex;
    this.activeItemIndexChange.emit(activeItemIndex);
  }
  refresh() {
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = this.activeElement || {};
    this.dir?.nativeElement.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.dir?.nativeElement.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiTabsWithMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsWithMore)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabsWithMore,
      selectors: [["tui-tabs-with-more"], ["nav", "tuiTabsWithMore", ""]],
      contentQueries: function TuiTabsWithMore_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      viewQuery: function TuiTabsWithMore_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiTab, 5, ElementRef);
          ɵɵviewQuery(TuiTabsHorizontal, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.moreButton = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dir = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiTabsWithMore_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size",
        moreContent: "moreContent",
        dropdownContent: "dropdownContent",
        underline: "underline",
        itemsLimit: "itemsLimit",
        itemIndex: [0, "activeItemIndex", "itemIndex"]
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange"
      },
      features: [ɵɵProvidersFeature(TUI_TABS_PROVIDERS)],
      decls: 9,
      vars: 9,
      consts: [["chevron", ""], ["dropdown", ""], ["hidden", ""], ["element", ""], [4, "ngIf"], [1, "t-tabs", 3, "activeItemIndexChange", "keydown.arrowRight", "activeItemIndex", "size", "underline"], [4, "ngFor", "ngForOf"], ["tuiTab", "", "type", "button", "class", "t-more", 3, "_active", "t-no-margin", "t-overflown", "tabIndex", "tuiDropdown", "tuiDropdownOpen", "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [1, "t-flex"], ["tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [4, "polymorpheusOutlet"], ["tuiChevron", "", "tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [1, "t-dropdown", 3, "keydown.arrowDown.prevent", "keydown.arrowUp.prevent"], ["class", "t-dropdown-item", 3, "tui-tab-activate", 4, "ngFor", "ngForOf"], [1, "t-dropdown-item", 3, "tui-tab-activate"]],
      template: function TuiTabsWithMore_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, TuiTabsWithMore_ng_container_0_Template, 1, 0, "ng-container", 4);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "tui-tabs", 5);
          ɵɵlistener("activeItemIndexChange", function TuiTabsWithMore_Template_tui_tabs_activeItemIndexChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveItemIndexChange($event));
          })("keydown.arrowRight", function TuiTabsWithMore_Template_tui_tabs_keydown_arrowRight_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onArrowRight($event));
          });
          ɵɵtemplate(3, TuiTabsWithMore_ng_container_3_Template, 4, 2, "ng-container", 6);
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiTabsWithMore_button_4_Template, 2, 10, "button", 7)(5, TuiTabsWithMore_ng_template_5_Template, 3, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, TuiTabsWithMore_ng_template_7_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const chevron_r16 = ɵɵreference(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 7, ctx.items.changes));
          ɵɵadvance(2);
          ɵɵproperty("activeItemIndex", ctx.activeItemIndex)("size", ctx.size)("underline", ctx.underline);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.moreContent)("ngIfElse", chevron_r16);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, AsyncPipe, PolymorpheusOutlet, TuiChevron, TuiDropdownDirective, TuiDropdownOpen, TuiTab, TuiTabsHorizontal],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}[data-size=m][_nghost-%COMP%]{font:var(--tui-font-text-s)}.t-tabs[_ngcontent-%COMP%]{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex[_ngcontent-%COMP%]{display:flex}.t-overflown[_ngcontent-%COMP%]{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:-.25rem;vertical-align:bottom}.t-icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.t-dropdown[_ngcontent-%COMP%]{padding:.25rem 0}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;line-height:1.5rem;border-radius:var(--tui-radius-s);font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:before{display:none}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:hover, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:focus, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m][_ngcontent-%COMP%]     *[tuiTab]{block-size:2.25rem;font:var(--tui-font-text-s)}.t-dropdown-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.t-no-margin[_ngcontent-%COMP%]{margin-left:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsWithMore, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tabs-with-more, nav[tuiTabsWithMore]",
      imports: [CommonModule, PolymorpheusOutlet, TuiChevron, TuiDropdown, TuiTab, TuiTabsHorizontal],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_TABS_PROVIDERS,
      host: {
        "[attr.data-size]": "size"
      },
      template: '<ng-container *ngIf="items.changes | async" />\n<tui-tabs\n    class="t-tabs"\n    [activeItemIndex]="activeItemIndex"\n    [size]="size"\n    [underline]="underline"\n    (activeItemIndexChange)="onActiveItemIndexChange($event)"\n    (keydown.arrowRight)="onArrowRight($event)"\n>\n    <ng-container *ngFor="let item of items; let index = index">\n        <ng-container\n            *ngIf="index <= lastVisibleIndex; else hidden"\n            [ngTemplateOutlet]="item"\n        />\n        <ng-template #hidden>\n            <div\n                class="t-flex"\n                [class.t-overflown]="isOverflown(index)"\n            >\n                <ng-container [ngTemplateOutlet]="item" />\n            </div>\n        </ng-template>\n    </ng-container>\n</tui-tabs>\n\n<button\n    *ngIf="moreContent; else chevron"\n    tuiTab\n    type="button"\n    class="t-more"\n    [class._active]="isMoreActive"\n    [class.t-no-margin]="isMoreAlone"\n    [class.t-overflown]="!isMoreVisible"\n    [tabIndex]="isMoreFocusable ? 0 : -1"\n    [tuiDropdown]="dropdownContent || dropdown"\n    [(tuiDropdownOpen)]="open"\n    (keydown.arrowLeft.prevent)="onArrowLeft()"\n>\n    <ng-container *polymorpheusOutlet="moreContent as text">\n        {{ text }}\n    </ng-container>\n</button>\n<ng-template #chevron>\n    <button\n        tuiChevron\n        tuiTab\n        type="button"\n        class="t-more"\n        [class._active]="isMoreActive"\n        [class.t-no-margin]="isMoreAlone"\n        [class.t-overflown]="!isMoreVisible"\n        [tabIndex]="isMoreFocusable ? 0 : -1"\n        [tuiDropdown]="dropdownContent || dropdown"\n        [(tuiDropdownOpen)]="open"\n        (keydown.arrowLeft.prevent)="onArrowLeft()"\n    >\n        {{ moreWord$ | async }}\n    </button>\n</ng-template>\n<ng-template #dropdown>\n    <div\n        #element\n        class="t-dropdown"\n        [attr.data-size]="size"\n        (keydown.arrowDown.prevent)="onWrapperArrow($event, element, false)"\n        (keydown.arrowUp.prevent)="onWrapperArrow($event, element, true)"\n    >\n        <div\n            *ngFor="let item of items; let index = index"\n            class="t-dropdown-item"\n            (tui-tab-activate)="onClick(index)"\n        >\n            <ng-container *ngIf="shouldShow(index)">\n                <ng-container *polymorpheusOutlet="item" />\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n',
      styles: [":host{position:relative;display:flex;font:var(--tui-font-text-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}:host[data-size=m]{font:var(--tui-font-text-s)}.t-tabs{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex{display:flex}.t-overflown{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:-.25rem;vertical-align:bottom}.t-icon_rotated{transform:rotate(180deg)}.t-dropdown{padding:.25rem 0}.t-dropdown ::ng-deep *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;line-height:1.5rem;border-radius:var(--tui-radius-s);font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-dropdown ::ng-deep *[tuiTab]:before{display:none}.t-dropdown ::ng-deep *[tuiTab]:hover,.t-dropdown ::ng-deep *[tuiTab]:focus,.t-dropdown ::ng-deep *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m] ::ng-deep *[tuiTab]{block-size:2.25rem;font:var(--tui-font-text-s)}.t-dropdown-item{display:flex;flex-direction:column}.t-no-margin{margin-left:0}\n"]
    }]
  }], null, {
    moreButton: [{
      type: ViewChild,
      args: [TuiTab, {
        read: ElementRef
      }]
    }],
    dir: [{
      type: ViewChild,
      args: [TuiTabsHorizontal, {
        read: ElementRef
      }]
    }],
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef
      }]
    }],
    size: [{
      type: Input
    }],
    moreContent: [{
      type: Input
    }],
    dropdownContent: [{
      type: Input
    }],
    underline: [{
      type: Input
    }],
    itemsLimit: [{
      type: Input
    }],
    activeItemIndexChange: [{
      type: Output
    }],
    itemIndex: [{
      type: Input,
      args: ["activeItemIndex"]
    }]
  });
})();
var TuiTabs = [TuiItem, TuiTab, TuiTabsDirective, TuiTabsHorizontal, TuiTabsVertical, TuiTabsWithMore];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-items-with-more.mjs
var _c03 = (a0) => ({
  $implicit: a0
});
function TuiItemsWithMoreComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiItemsWithMoreComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiItemsWithMoreComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiItemsWithMoreComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("t-item_hidden", ctx_r3.isHidden(index_r3));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiItemsWithMoreComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelementContainer(1, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.more || null)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c03, ctx_r3.lastIndex()));
  }
}
function TuiItemsWithMoreComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiItemsWithMoreComponent_ng_template_5_span_0_Template, 2, 4, "span", 7);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r3.isMoreHidden);
  }
}
var TuiItemsWithMoreDirective = class _TuiItemsWithMoreDirective {
  constructor() {
    this.itemsLimit = Infinity;
    this.required = -1;
    this.side = "end";
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function TuiItemsWithMoreDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsWithMoreDirective,
      inputs: {
        itemsLimit: "itemsLimit",
        required: "required",
        side: "side"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    itemsLimit: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    side: [{
      type: Input
    }]
  });
})();
var TuiItemsWithMoreService = class _TuiItemsWithMoreService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.directive = inject(TuiItemsWithMoreDirective);
    this.stream$ = merge(this.directive.change$, inject(MutationObserverService, {
      self: true
    }), inject(ResizeObserverService, {
      self: true
    })).pipe(debounceTime(0, tuiZonefreeScheduler()), map(() => this.getOverflowIndex()), distinctUntilChanged(), tuiZoneOptimized(), share());
  }
  getOverflowIndex() {
    const {
      side,
      itemsLimit
    } = this.directive;
    const {
      clientWidth,
      children
    } = this.el;
    const items = Array.from(children, ({
      clientWidth: clientWidth2
    }) => clientWidth2);
    const index = side === "start" ? 0 : items.length - 1;
    const more = children[index]?.tagName === "SPAN" ? items[index] ?? 0 : 0;
    const total = items.reduce((sum, width) => sum + width, 0) - more;
    if (total <= clientWidth && itemsLimit >= items.length) {
      return side === "end" ? itemsLimit : 0;
    }
    return side === "start" ? this.getIndexStart(items, total, more) : this.getIndexEnd(items, total, more);
  }
  getIndexStart(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const min = Number.isFinite(itemsLimit) ? items.length - itemsLimit - 1 : 0;
    const last = items.length - 1;
    const mandatory = required === -1 ? last : required;
    for (let i = 1; i < last; i++) {
      if (i === mandatory + 1) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i, mandatory < min ? min + 1 : min, items.length);
      }
    }
    return items.length;
  }
  getIndexEnd(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const max = itemsLimit > required ? itemsLimit - 1 : itemsLimit - 2;
    const last = items.length - 1;
    const mandatory = required === -1 ? 0 : required;
    for (let i = last - 1; i > 0; i--) {
      if (i === mandatory) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i - 1, -1, max);
      }
    }
    return -1;
  }
  static {
    this.ɵfac = function TuiItemsWithMoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiItemsWithMoreService,
      factory: _TuiItemsWithMoreService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiMore = class _TuiMore {
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMore)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiMore,
      selectors: [["", "tuiMore", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMore, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiMore]"
    }]
  }], null, null);
})();
var TuiItemsWithMoreComponent = class _TuiItemsWithMoreComponent {
  constructor() {
    this.items = EMPTY_QUERY;
    this.directive = inject(TuiItemsWithMoreDirective);
    this.lastIndex = toSignal(inject(TuiItemsWithMoreService), {
      initialValue: 0
    });
  }
  get isMoreHidden() {
    const {
      side
    } = this.directive;
    return this.lastIndex() >= this.items.length - 1 && side === "end" || !this.lastIndex() && side === "start";
  }
  isHidden(index) {
    const {
      side,
      required
    } = this.directive;
    return index > this.lastIndex() && index !== required && side === "end" || index < this.lastIndex() && index !== required && side === "start";
  }
  static {
    this.ɵfac = function TuiItemsWithMoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiItemsWithMoreComponent,
      selectors: [["tui-items-with-more"]],
      contentQueries: function TuiItemsWithMoreComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiMore, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.more = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      features: [ɵɵProvidersFeature([MutationObserverService, ResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "itemsLimit", "required", "required", "side", "side"]
      }])],
      decls: 7,
      vars: 6,
      consts: [["template", ""], [4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "t-item", 3, "t-item_hidden", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], [1, "t-item"], [4, "ngTemplateOutlet"], ["class", "t-item", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TuiItemsWithMoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiItemsWithMoreComponent_ng_container_0_Template, 1, 0, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiItemsWithMoreComponent_ng_container_2_Template, 1, 1, "ng-container", 2)(3, TuiItemsWithMoreComponent_div_3_Template, 2, 3, "div", 3)(4, TuiItemsWithMoreComponent_ng_container_4_Template, 1, 1, "ng-container", 2)(5, TuiItemsWithMoreComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 4, ctx.items.changes));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.directive.side === "start");
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.directive.side === "end");
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item[_ngcontent-%COMP%]{flex:0 0 auto}.t-item_hidden[_ngcontent-%COMP%]{position:absolute;visibility:hidden}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-items-with-more",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MutationObserverService, ResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "required", "side"]
      }],
      template: `<ng-container *ngIf="items.changes | async" />
<ng-container
    *ngIf="directive.side === 'start'"
    [ngTemplateOutlet]="template"
/>
<div
    *ngFor="let item of items; let index = index"
    class="t-item"
    [class.t-item_hidden]="isHidden(index)"
>
    <ng-container *ngTemplateOutlet="item" />
</div>
<ng-container
    *ngIf="directive.side === 'end'"
    [ngTemplateOutlet]="template"
/>
<ng-template #template>
    <span
        *ngIf="!isMoreHidden"
        class="t-item"
    >
        <ng-container
            [ngTemplateOutlet]="more || null"
            [ngTemplateOutletContext]="{$implicit: lastIndex()}"
        />
    </span>
</ng-template>
`,
      styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item{flex:0 0 auto}.t-item_hidden{position:absolute;visibility:hidden}\n"]
    }]
  }], null, {
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef,
        descendants: true
      }]
    }],
    more: [{
      type: ContentChild,
      args: [TuiMore, {
        read: TemplateRef
      }]
    }]
  });
})();
var TuiItemsWithMore = [TuiItemsWithMoreComponent, TuiItemsWithMoreDirective, TuiMore, TuiItem];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-breadcrumbs.mjs
function TuiBreadcrumbs_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 9)(2, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.items.first);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    ɵɵnextContext(5);
    const separator_r2 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 9);
    ɵɵtemplate(2, TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 1, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const item_r4 = ctx_r2.$implicit;
    const last_r5 = ctx_r2.last;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r5);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4 !== ctx_r0.items.first || ctx_r0.itemsLimit === 2);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵelementContainer(1, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r6);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_span_1_Template, 2, 1, "span", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const index_r8 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r7 + ctx_r0.offset && i_r7 <= index_r8 && item_r6 !== ctx_r0.items.last);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 14);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12)(1, "button", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainer(3, 9);
    ɵɵelementEnd();
    ɵɵtemplate(4, TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const dropdown_r9 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("iconStart", ctx_r0.icons.ellipsis)("tuiDropdown", dropdown_r9);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.more(), " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 4);
    ɵɵelementStart(2, "tui-items-with-more", 6);
    ɵɵtemplate(3, TuiBreadcrumbs_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 7)(4, TuiBreadcrumbs_ng_container_2_ng_template_4_Template, 6, 4, "ng-template", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.itemsLimit !== 2);
    ɵɵadvance();
    ɵɵproperty("itemsLimit", ctx_r0.itemsLimit - 2)("required", ctx_r0.items.length + ctx_r0.offset - 2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
function TuiBreadcrumbs_ng_template_3_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 18);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiBreadcrumbs_ng_template_3_tui_icon_0_Template, 1, 1, "tui-icon", 17)(1, TuiBreadcrumbs_ng_template_3_ng_template_1_Template, 2, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const char_r10 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.options.icon.length > 1)("ngIfElse", char_r10);
  }
}
function TuiBreadcrumbs_ng_template_5_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const separator_r2 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 9);
    ɵɵtemplate(2, TuiBreadcrumbs_ng_template_5_ng_container_0_ng_container_2_Template, 1, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r11);
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r12);
  }
}
function TuiBreadcrumbs_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiBreadcrumbs_ng_template_5_ng_container_0_Template, 3, 2, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
var TUI_BREADCRUMBS_DEFAULT_OPTIONS = {
  icon: "@tui.chevron-right",
  size: "m",
  itemsLimit: 0
};
var TUI_BREADCRUMBS_OPTIONS = tuiCreateToken(TUI_BREADCRUMBS_DEFAULT_OPTIONS);
function tuiBreadcrumbsOptionsProvider(options) {
  return tuiProvideOptions(TUI_BREADCRUMBS_OPTIONS, options, TUI_BREADCRUMBS_DEFAULT_OPTIONS);
}
var TuiBreadcrumbs = class _TuiBreadcrumbs {
  constructor() {
    this.items = EMPTY_QUERY;
    this.options = inject(TUI_BREADCRUMBS_OPTIONS);
    this.icons = inject(TUI_COMMON_ICONS);
    this.more = toSignal(inject(TUI_MORE_WORD), {
      initialValue: ""
    });
    this.size = this.options.size;
    this.itemsLimit = this.options.itemsLimit;
  }
  get limit() {
    return this.itemsLimit ? this.itemsLimit - 2 : Infinity;
  }
  get offset() {
    return this.itemsLimit === 2 ? 1 : 0;
  }
  static {
    this.ɵfac = function TuiBreadcrumbs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBreadcrumbs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBreadcrumbs,
      selectors: [["tui-breadcrumbs"]],
      contentQueries: function TuiBreadcrumbs_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      hostVars: 1,
      hostBindings: function TuiBreadcrumbs_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size",
        itemsLimit: "itemsLimit"
      },
      features: [ɵɵProvidersFeature([tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })])],
      decls: 7,
      vars: 5,
      consts: [["separator", ""], ["plain", ""], ["dropdown", ""], ["char", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["side", "start", 3, "itemsLimit", "required"], [4, "ngFor", "ngForOf"], ["tuiMore", ""], [3, "ngTemplateOutlet"], [4, "tuiItem"], [3, "ngTemplateOutlet", 4, "ngIf"], [1, "t-more"], ["appearance", "flat", "size", "xs", "tuiDropdownOpen", "", "tuiIconButton", "", "type", "button", 3, "iconStart", "tuiDropdown"], ["size", "s"], ["tuiOption", "", "class", "t-option", 4, "ngIf"], ["tuiOption", "", 1, "t-option"], ["class", "t-icon", 3, "icon", 4, "ngIf", "ngIfElse"], [1, "t-icon", 3, "icon"], [1, "t-char"]],
      template: function TuiBreadcrumbs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiBreadcrumbs_ng_container_0_Template, 1, 0, "ng-container", 4);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiBreadcrumbs_ng_container_2_Template, 5, 4, "ng-container", 5)(3, TuiBreadcrumbs_ng_template_3_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TuiBreadcrumbs_ng_template_5_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const plain_r13 = ɵɵreference(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 3, ctx.items.changes));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.itemsLimit > 1)("ngIfElse", plain_r13);
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiButton, TuiDataListComponent, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiItemsWithMoreComponent, TuiMore, TuiItem],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}[data-size=m][_nghost-%COMP%]{font:var(--tui-font-text-s);line-height:1.5rem;block-size:1.5rem}[data-size=l][_nghost-%COMP%]{font:var(--tui-font-text-m);line-height:2.5rem;block-size:2.5rem}.t-more[_ngcontent-%COMP%]{display:flex;align-items:center}.t-option[_ngcontent-%COMP%]    >*{color:var(--tui-text-primary)!important;background:transparent!important}.t-icon[_ngcontent-%COMP%]{margin:0 .5rem;font-size:1rem}.t-char[_ngcontent-%COMP%]{margin:0 .375rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreadcrumbs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-breadcrumbs",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiItemsWithMore],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })],
      host: {
        "[attr.data-size]": "size"
      },
      template: '<ng-container *ngIf="items.changes | async" />\n<ng-container *ngIf="itemsLimit > 1; else plain">\n    <ng-container *ngIf="itemsLimit !== 2">\n        <ng-container [ngTemplateOutlet]="items.first" />\n        <ng-container [ngTemplateOutlet]="separator" />\n    </ng-container>\n    <tui-items-with-more\n        side="start"\n        [itemsLimit]="itemsLimit - 2"\n        [required]="items.length + offset - 2"\n    >\n        <ng-container *ngFor="let item of items; let last = last">\n            <ng-container *ngIf="item !== items.first || itemsLimit === 2">\n                <ng-container *tuiItem>\n                    <ng-container [ngTemplateOutlet]="item" />\n                    <ng-container\n                        *ngIf="!last"\n                        [ngTemplateOutlet]="separator"\n                    />\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template\n            let-index\n            tuiMore\n        >\n            <span class="t-more">\n                <button\n                    appearance="flat"\n                    size="xs"\n                    tuiDropdownOpen\n                    tuiIconButton\n                    type="button"\n                    [iconStart]="icons.ellipsis"\n                    [tuiDropdown]="dropdown"\n                >\n                    {{ more() }}\n                </button>\n                <ng-container [ngTemplateOutlet]="separator" />\n            </span>\n            <ng-template #dropdown>\n                <tui-data-list size="s">\n                    <ng-container *ngFor="let item of items; let i = index">\n                        <span\n                            *ngIf="i + offset && i <= index && item !== items.last"\n                            tuiOption\n                            class="t-option"\n                        >\n                            <ng-container [ngTemplateOutlet]="item" />\n                        </span>\n                    </ng-container>\n                </tui-data-list>\n            </ng-template>\n        </ng-template>\n    </tui-items-with-more>\n</ng-container>\n<ng-template #separator>\n    <tui-icon\n        *ngIf="options.icon.length > 1; else char"\n        class="t-icon"\n        [icon]="options.icon"\n    />\n    <ng-template #char>\n        <span class="t-char">{{ options.icon }}</span>\n    </ng-template>\n</ng-template>\n<ng-template #plain>\n    <ng-container *ngFor="let item of items; let last = last">\n        <ng-container [ngTemplateOutlet]="item" />\n        <ng-container\n            *ngIf="!last"\n            [ngTemplateOutlet]="separator"\n        />\n    </ng-container>\n</ng-template>\n',
      styles: [":host{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}:host[data-size=m]{font:var(--tui-font-text-s);line-height:1.5rem;block-size:1.5rem}:host[data-size=l]{font:var(--tui-font-text-m);line-height:2.5rem;block-size:2.5rem}.t-more{display:flex;align-items:center}.t-option ::ng-deep>*{color:var(--tui-text-primary)!important;background:transparent!important}.t-icon{margin:0 .5rem;font-size:1rem}.t-char{margin:0 .375rem}\n"]
    }]
  }], null, {
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef
      }]
    }],
    size: [{
      type: Input
    }],
    itemsLimit: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-block.mjs
var TUI_BLOCK_DEFAULT_OPTIONS = {
  appearance: "outline-grayscale",
  size: "l"
};
var TUI_BLOCK_OPTIONS = tuiCreateToken(TUI_BLOCK_DEFAULT_OPTIONS);
function tuiBlockOptionsProvider(options) {
  return tuiProvideOptions(TUI_BLOCK_OPTIONS, options, TUI_BLOCK_DEFAULT_OPTIONS);
}
var TuiBlockStyles = class _TuiBlockStyles {
  static {
    this.ɵfac = function TuiBlockStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBlockStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-block"],
      decls: 0,
      vars: 0,
      template: function TuiBlockStyles_Template(rf, ctx) {
      },
      styles: ['[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=""]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-block"
      },
      styles: ['[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=""]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n']
    }]
  }], null, null);
})();
var TuiBlock = class _TuiBlock {
  constructor() {
    this.nothing = tuiWithStyles(TuiBlockStyles);
    this.size = inject(TUI_BLOCK_OPTIONS).size;
  }
  static {
    this.ɵfac = function TuiBlock_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlock)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlock,
      selectors: [["label", "tuiBlock", ""], ["input", "tuiBlock", ""]],
      contentQueries: function TuiBlock_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
        }
      },
      hostAttrs: ["tuiBlock", ""],
      hostVars: 3,
      hostBindings: function TuiBlock_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size || "l");
          ɵɵclassProp("_disabled", !!(ctx.control == null ? null : ctx.control.disabled));
        }
      },
      inputs: {
        size: [0, "tuiBlock", "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlock, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "label[tuiBlock],input[tuiBlock]",
      providers: [tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
      host: {
        tuiBlock: "",
        "[attr.data-size]": 'size || "l"',
        "[class._disabled]": "!!this.control?.disabled"
      }
    }]
  }], null, {
    control: [{
      type: ContentChild,
      args: [NgControl]
    }],
    size: [{
      type: Input,
      args: ["tuiBlock"]
    }]
  });
})();

export {
  TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_BADGE_NOTIFICATION_OPTIONS,
  tuiBadgeNotificationOptionsProvider,
  TuiBadgeNotification,
  TuiSegmentedDirective,
  TUI_SEGMENTED_OPTIONS,
  tuiSegmentedOptionsProvider,
  TuiSegmented,
  TuiItem,
  TuiButtonClose,
  TuiButtonGroup,
  TuiButtonSelect,
  TuiConnected,
  TUI_COPY_OPTIONS,
  tuiCopyOptionsProvider,
  TuiCopy,
  TuiDataListDropdownManager,
  TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS,
  TUI_FLUID_TYPOGRAPHY_OPTIONS,
  tuiFluidTypographyOptionsProvider,
  TuiFluidTypography,
  TUI_HIGHLIGHT_OPTIONS,
  tuiHighlightOptionsProvider,
  TuiHighlight,
  TuiIconBadge,
  TuiLazyLoadingService,
  TuiImgLazyLoading,
  TUI_PASSWORD_OPTIONS,
  tuiPasswordOptionsProvider,
  TuiPassword,
  TuiPresent,
  TuiSensitive,
  TuiSkeleton,
  tuiCreateUnfinishedValidator,
  TuiUnfinishedValidator,
  TuiUnmaskHandler,
  TUI_TAB_ACTIVATE,
  TuiTab,
  TUI_TABS_DEFAULT_OPTIONS,
  TUI_TABS_OPTIONS,
  tuiTabsOptionsProvider,
  TuiTabsDirective,
  TuiTabsHorizontal,
  TuiTabsVertical,
  TUI_TABS_REFRESH,
  TUI_TABS_PROVIDERS,
  TuiTabsWithMore,
  TuiTabs,
  TuiItemsWithMoreDirective,
  TuiItemsWithMoreService,
  TuiMore,
  TuiItemsWithMoreComponent,
  TuiItemsWithMore,
  TUI_BREADCRUMBS_DEFAULT_OPTIONS,
  TUI_BREADCRUMBS_OPTIONS,
  tuiBreadcrumbsOptionsProvider,
  TuiBreadcrumbs,
  TUI_BLOCK_DEFAULT_OPTIONS,
  TUI_BLOCK_OPTIONS,
  tuiBlockOptionsProvider,
  TuiBlock
};
//# sourceMappingURL=chunk-ENULDTBQ.js.map
