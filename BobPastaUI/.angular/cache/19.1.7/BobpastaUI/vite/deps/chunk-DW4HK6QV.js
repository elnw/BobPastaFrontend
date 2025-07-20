import {
  ResizeObserverService,
  TuiAppearance,
  TuiNativeValidator,
  TuiWithAppearance,
  tuiAppearanceOptionsProvider
} from "./chunk-IUPTCE4W.js";
import {
  TuiIcons,
  TuiWithIcons
} from "./chunk-AJND4ZJU.js";
import {
  WA_WINDOW,
  takeUntilDestroyed,
  tuiCreateToken,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsString,
  tuiProvideOptions,
  tuiPure,
  tuiWatch,
  tuiWithStyles,
  tuiZonefree
} from "./chunk-CFYEAHUQ.js";
import {
  NgControl
} from "./chunk-F4F3CEJY.js";
import {
  NgForOf,
  NgIf
} from "./chunk-VAASPEVA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵhostProperty,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7CG3BBK5.js";
import {
  Observable,
  __decorate,
  fromEvent,
  merge,
  share
} from "./chunk-D5M5KKRG.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge.mjs
var TUI_BADGE_DEFAULT_OPTIONS = {
  appearance: "",
  size: "l"
};
var TUI_BADGE_OPTIONS = tuiCreateToken(TUI_BADGE_DEFAULT_OPTIONS);
function tuiBadgeOptionsProvider(options) {
  return tuiProvideOptions(TUI_BADGE_OPTIONS, options, TUI_BADGE_DEFAULT_OPTIONS);
}
var TuiBadgeStyles = class _TuiBadgeStyles {
  static {
    this.ɵfac = function TuiBadgeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-badge"],
      decls: 0,
      vars: 0,
      template: function TuiBadgeStyles_Template(rf, ctx) {
      },
      styles: ['tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin-inline-end:-.25rem}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[tuiStatus][data-appearance=error]:before,[tuiBadge][tuiStatus][data-appearance=error]:before,tui-badge[tuiStatus][data-appearance=success]:before,[tuiBadge][tuiStatus][data-appearance=success]:before,tui-badge[tuiStatus][data-appearance=negative]:before,[tuiBadge][tuiStatus][data-appearance=negative]:before,tui-badge[tuiStatus][data-appearance=positive]:before,[tuiBadge][tuiStatus][data-appearance=positive]:before,tui-badge[tuiStatus][data-appearance=warning]:before,[tuiBadge][tuiStatus][data-appearance=warning]:before,tui-badge[tuiStatus][data-appearance=info]:before,[tuiBadge][tuiStatus][data-appearance=info]:before,tui-badge[tuiStatus][data-appearance=neutral]:before,[tuiBadge][tuiStatus][data-appearance=neutral]:before{content:"";display:block;margin:0}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-badge"
      },
      styles: ['tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));border-radius:6rem;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin-inline-end:-.25rem}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[tuiStatus][data-appearance=error]:before,[tuiBadge][tuiStatus][data-appearance=error]:before,tui-badge[tuiStatus][data-appearance=success]:before,[tuiBadge][tuiStatus][data-appearance=success]:before,tui-badge[tuiStatus][data-appearance=negative]:before,[tuiBadge][tuiStatus][data-appearance=negative]:before,tui-badge[tuiStatus][data-appearance=positive]:before,[tuiBadge][tuiStatus][data-appearance=positive]:before,tui-badge[tuiStatus][data-appearance=warning]:before,[tuiBadge][tuiStatus][data-appearance=warning]:before,tui-badge[tuiStatus][data-appearance=info]:before,[tuiBadge][tuiStatus][data-appearance=info]:before,tui-badge[tuiStatus][data-appearance=neutral]:before,[tuiBadge][tuiStatus][data-appearance=neutral]:before{content:"";display:block;margin:0}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n']
    }]
  }], null, null);
})();
var TuiBadge = class _TuiBadge {
  constructor() {
    this.nothing = tuiWithStyles(TuiBadgeStyles);
    this.size = inject(TUI_BADGE_OPTIONS).size;
  }
  static {
    this.ɵfac = function TuiBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBadge,
      selectors: [["tui-badge"], ["", "tuiBadge", ""]],
      hostVars: 1,
      hostBindings: function TuiBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-badge,[tuiBadge]",
      providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
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

// node_modules/@ng-web-apis/mutation-observer/fesm2022/ng-web-apis-mutation-observer.mjs
var SafeObserver = typeof MutationObserver !== "undefined" ? MutationObserver : class {
  observe() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_MUTATION_OBSERVER_INIT = new InjectionToken("[WA_MUTATION_OBSERVER_INIT]");
var MUTATION_OBSERVER_INIT = WA_MUTATION_OBSERVER_INIT;
function booleanAttribute(element, attribute) {
  return element.getAttribute(attribute) !== null || void 0;
}
function mutationObserverInitFactory() {
  const {
    nativeElement
  } = inject(ElementRef);
  const attributeFilter = nativeElement.getAttribute("attributeFilter");
  return {
    attributeFilter: attributeFilter?.split(",").map((attr) => attr.trim()),
    attributeOldValue: booleanAttribute(nativeElement, "attributeOldValue"),
    attributes: booleanAttribute(nativeElement, "attributes"),
    characterData: booleanAttribute(nativeElement, "characterData"),
    characterDataOldValue: booleanAttribute(nativeElement, "characterDataOldValue"),
    childList: booleanAttribute(nativeElement, "childList"),
    subtree: booleanAttribute(nativeElement, "subtree")
  };
}
var WaMutationObserver = class _WaMutationObserver extends SafeObserver {
  nativeElement = inject(ElementRef).nativeElement;
  config = inject(MUTATION_OBSERVER_INIT);
  attributeFilter = "";
  attributeOldValue = "";
  attributes = "";
  characterData = "";
  characterDataOldValue = "";
  childList = "";
  subtree = "";
  waMutationObserver = new EventEmitter();
  constructor() {
    super((records) => {
      this.waMutationObserver.emit(records);
    });
    this.observe(this.nativeElement, this.config);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaMutationObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaMutationObserver,
    selectors: [["", "waMutationObserver", ""]],
    inputs: {
      attributeFilter: "attributeFilter",
      attributeOldValue: "attributeOldValue",
      attributes: "attributes",
      characterData: "characterData",
      characterDataOldValue: "characterDataOldValue",
      childList: "childList",
      subtree: "subtree"
    },
    outputs: {
      waMutationObserver: "waMutationObserver"
    },
    exportAs: ["MutationObserver"],
    features: [ɵɵProvidersFeature([{
      provide: MUTATION_OBSERVER_INIT,
      useFactory: mutationObserverInitFactory
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserver, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waMutationObserver]",
      providers: [{
        provide: MUTATION_OBSERVER_INIT,
        useFactory: mutationObserverInitFactory
      }],
      exportAs: "MutationObserver"
    }]
  }], function() {
    return [];
  }, {
    attributeFilter: [{
      type: Input
    }],
    attributeOldValue: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    characterData: [{
      type: Input
    }],
    characterDataOldValue: [{
      type: Input
    }],
    childList: [{
      type: Input
    }],
    subtree: [{
      type: Input
    }],
    waMutationObserver: [{
      type: Output
    }]
  });
})();
var MutationObserverService = class _MutationObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const config = inject(MUTATION_OBSERVER_INIT);
    super((subscriber) => {
      const observer = new SafeObserver((records) => {
        subscriber.next(records);
      });
      observer.observe(nativeElement, config);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function MutationObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MutationObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MutationObserverService,
    factory: _MutationObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
var TuiFadeStyles = class _TuiFadeStyles {
  static {
    this.ɵfac = function TuiFadeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFadeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFadeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-fade-styles"],
      decls: 0,
      vars: 0,
      template: function TuiFadeStyles_Template(rf, ctx) {
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFadeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fade-styles"
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"]
    }]
  }], null, null);
})();
var TuiFade = class _TuiFade {
  constructor() {
    this.lineHeight = null;
    this.size = "1.5em";
    this.offset = "0em";
    this.orientation = "horizontal";
    const el = tuiInjectElement();
    tuiWithStyles(TuiFadeStyles);
    merge(inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_start", !!el.scrollLeft || !!el.scrollTop);
      el.classList.toggle("_end", this.isEnd(el));
    });
  }
  isEnd(el) {
    if (this.orientation === "vertical") {
      return Math.round(el.scrollTop) < el.scrollHeight - el.clientHeight - BUFFER;
    }
    return Math.round(el.scrollLeft) < el.scrollWidth - el.clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    el.scrollHeight > el.clientHeight + 4 * BUFFER;
  }
  static {
    this.ɵfac = function TuiFade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFade)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFade,
      selectors: [["", "tuiFade", ""]],
      hostVars: 9,
      hostBindings: function TuiFade_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation);
          ɵɵstyleProp("line-height", ctx.lineHeight)("--line-height", ctx.lineHeight)("--fade-size", ctx.size)("--fade-offset", ctx.offset);
        }
      },
      inputs: {
        lineHeight: [0, "tuiFadeHeight", "lineHeight"],
        size: [0, "tuiFadeSize", "size"],
        offset: [0, "tuiFadeOffset", "offset"],
        orientation: [0, "tuiFade", "orientation"]
      },
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFade]",
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        "[style.line-height]": "lineHeight",
        "[style.--line-height]": "lineHeight",
        "[style.--fade-size]": "size",
        "[style.--fade-offset]": "offset",
        "[attr.data-orientation]": "orientation"
      }
    }]
  }], function() {
    return [];
  }, {
    lineHeight: [{
      type: Input,
      args: ["tuiFadeHeight"]
    }],
    size: [{
      type: Input,
      args: ["tuiFadeSize"]
    }],
    offset: [{
      type: Input,
      args: ["tuiFadeOffset"]
    }],
    orientation: [{
      type: Input,
      args: ["tuiFade"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c0 = ["*"];
function TuiAvatar_img_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.value, ɵɵsanitizeUrl);
  }
}
function TuiAvatar_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
function TuiAvatarLabeled_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1, " ");
  }
}
function TuiAvatarLabeled_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_span_1_Template, 2, 1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.split(ctx_r1.label));
  }
}
var TUI_AVATAR_DEFAULT_OPTIONS = {
  appearance: "",
  round: true,
  size: "l"
};
var TUI_AVATAR_OPTIONS = tuiCreateToken(TUI_AVATAR_DEFAULT_OPTIONS);
function tuiAvatarOptionsProvider(options) {
  return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}
var TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.size = this.options.size;
    this.round = this.options.round;
  }
  get value() {
    return this.src || "";
  }
  get svg() {
    return tuiIsString(this.value) && this.value.endsWith(".svg");
  }
  get type() {
    if (this.value && !tuiIsString(this.value)) {
      return "img";
    }
    if (this.value.startsWith("@tui.")) {
      return "icon";
    }
    if (this.value.length > 0 && this.value.length < 3) {
      return "text";
    }
    return this.value.length ? "img" : "content";
  }
  static {
    this.ɵfac = function TuiAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatar,
      selectors: [["tui-avatar"], ["button", "tuiAvatar", ""], ["a", "tuiAvatar", ""]],
      hostVars: 6,
      hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("data-type", ctx.type);
          ɵɵclassProp("_round", ctx.round)("_svg", ctx.svg);
        }
      },
      inputs: {
        size: "size",
        round: "round",
        src: "src"
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart", "src"]
      }])],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 2,
      consts: [["alt", "", "loading", "lazy", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "", "loading", "lazy", 3, "src"]],
      template: function TuiAvatar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiAvatar_img_0_Template, 1, 1, "img", 0)(1, TuiAvatar_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵprojection(2);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.type === "img");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.type === "text");
        }
      },
      dependencies: [NgIf],
      styles: ['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type][_nghost-%COMP%]:before{display:none}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);content:"";display:block;inline-size:60%;block-size:60%}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar,button[tuiAvatar],a[tuiAvatar]",
      imports: [NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiIcons,
        inputs: ["iconStart: src"]
      }],
      host: {
        "[attr.data-size]": "size",
        "[attr.data-type]": "type",
        "[class._round]": "round",
        "[class._svg]": "svg"
      },
      template: `<img
    *ngIf="type === 'img'"
    alt=""
    loading="lazy"
    [src]="value"
/>
<ng-container *ngIf="type === 'text'">{{ value }}</ng-container>
<ng-content />
`,
      styles: [':host{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}:host[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}:host[data-size=xs][data-type=content]{font:var(--tui-font-text-m);font-size:.5625rem}:host[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}:host[data-size=s][data-type=content]{font:var(--tui-font-text-xs);font-weight:700}:host[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}:host[data-size=m][data-type=content]{font:var(--tui-font-text-m);font-weight:700}:host[data-size=l]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}:host[data-size=l][data-type=content]{font:var(--tui-font-text-l);font-weight:700}:host[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}:host[data-size=xl][data-type=content]{font:var(--tui-font-heading-4)}:host[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}:host[data-size=xxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}:host[data-size=xxxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-type]:before{display:none}:host[data-type=img]:not(._svg){background:transparent}:host[data-type=icon]:before{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);content:"";display:block;inline-size:60%;block-size:60%}:host._round{--t-radius: calc(var(--t-size) / 2)}:host._svg img{padding:20%;object-fit:contain}:host ::ng-deep img,:host ::ng-deep picture,:host ::ng-deep video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box;border-radius:inherit}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    round: [{
      type: Input
    }],
    src: [{
      type: Input
    }]
  });
})();
var TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = "";
  }
  split(label) {
    return label.split(" ");
  }
  static {
    this.ɵfac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarLabeled)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarLabeled,
      selectors: [["tui-avatar-labeled"]],
      inputs: {
        label: "label"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[4, "ngIf"], ["tuiFade", "", 4, "ngFor", "ngForOf"], ["tuiFade", ""]],
      template: function TuiAvatarLabeled_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.label.length);
        }
      },
      dependencies: [NgForOf, NgIf, TuiFade],
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-bottom:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiAvatarLabeled.prototype, "split", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-labeled",
      imports: [NgForOf, NgIf, TuiFade],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-bottom:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    split: []
  });
})();
var TuiAvatarOutlineStyles = class _TuiAvatarOutlineStyles {
  static {
    this.ɵfac = function TuiAvatarOutlineStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutlineStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarOutlineStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-avatar-outline"],
      decls: 0,
      vars: 0,
      template: function TuiAvatarOutlineStyles_Template(rf, ctx) {
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutlineStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-avatar-outline"
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(TuiAvatarOutlineStyles);
    this.tuiAvatarOutline = "";
  }
  get value() {
    return this.tuiAvatarOutline === "" ? "var(--tui-background-accent-1)" : this.tuiAvatarOutline;
  }
  static {
    this.ɵfac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutline)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatarOutline,
      selectors: [["", "tuiAvatarOutline", ""]],
      hostVars: 4,
      hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-fill", ctx.value);
          ɵɵclassProp("_outline", ctx.value);
        }
      },
      inputs: {
        tuiAvatarOutline: "tuiAvatarOutline"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAvatarOutline]",
      host: {
        "[style.--t-fill]": "value",
        "[class._outline]": "value"
      }
    }]
  }], null, {
    tuiAvatarOutline: [{
      type: Input
    }]
  });
})();
var TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = "right";
  }
  static {
    this.ɵfac = function TuiAvatarStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarStack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarStack,
      selectors: [["tui-avatar-stack"]],
      hostVars: 1,
      hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.direction);
        }
      },
      inputs: {
        direction: "direction"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TuiAvatarStack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--t-x: 100%}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round{--t-x: 0}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}tui-avatar-stack tui-avatar:not(:last-child){margin-right:calc(var(--t-size) / -2)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-stack",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-direction]": "direction"
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--t-x: 100%}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round{--t-x: 0}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}tui-avatar-stack tui-avatar:not(:last-child){margin-right:calc(var(--t-size) / -2)}\n"]
    }]
  }], null, {
    direction: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-switch.mjs
var _c02 = ["type", "checkbox", "tuiSwitch", ""];
var TUI_SWITCH_DEFAULT_OPTIONS = {
  showIcons: true,
  size: "m",
  icon: "@tui.check",
  appearance: (el) => el.checked ? "primary" : "secondary"
};
var TUI_SWITCH_OPTIONS = tuiCreateToken(TUI_SWITCH_DEFAULT_OPTIONS);
function tuiSwitchOptionsProvider(options) {
  return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}
var TuiSwitch = class _TuiSwitch {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.resolver = tuiInjectIconResolver();
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.options = inject(TUI_SWITCH_OPTIONS);
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = this.options.size;
    this.showIcons = this.options.showIcons;
  }
  ngOnInit() {
    this.control?.valueChanges?.pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = this.options.appearance(this.el);
  }
  get icon() {
    const {
      options,
      resolver,
      size
    } = this;
    const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);
    return this.showIcons && icon ? `url(${resolver(icon)})` : null;
  }
  static {
    this.ɵfac = function TuiSwitch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwitch)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSwitch,
      selectors: [["input", "type", "checkbox", "tuiSwitch", ""]],
      hostAttrs: ["role", "switch"],
      hostVars: 6,
      hostBindings: function TuiSwitch_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.icon);
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size",
        showIcons: "showIcons"
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }, TuiNativeValidator])],
      attrs: _c02,
      decls: 0,
      vars: 0,
      template: function TuiSwitch_Template(rf, ctx) {
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}[tuiSwitch]:invalid:not([data-mode]),[tuiSwitch][data-mode~=invalid]{color:#fff}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwitch, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiSwitch]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        role: "switch",
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": "icon"
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}[tuiSwitch]:invalid:not([data-mode]),[tuiSwitch][data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    showIcons: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver2 = typeof IntersectionObserver !== "undefined" ? IntersectionObserver : class {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_INTERSECTION_ROOT = new InjectionToken("[WA_INTERSECTION_ROOT]");
var INTERSECTION_ROOT = WA_INTERSECTION_ROOT;
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var INTERSECTION_ROOT_MARGIN_DEFAULT = WA_INTERSECTION_ROOT_MARGIN_DEFAULT;
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken("[WA_INTERSECTION_ROOT_MARGIN]", {
  providedIn: "root",
  factory: () => INTERSECTION_ROOT_MARGIN_DEFAULT
});
var INTERSECTION_ROOT_MARGIN = WA_INTERSECTION_ROOT_MARGIN;
function rootMarginFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || INTERSECTION_ROOT_MARGIN_DEFAULT;
}
var WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
var INTERSECTION_THRESHOLD_DEFAULT = WA_INTERSECTION_THRESHOLD_DEFAULT;
var WA_INTERSECTION_THRESHOLD = new InjectionToken("[WA_INTERSECTION_THRESHOLD]", {
  providedIn: "root",
  factory: () => INTERSECTION_THRESHOLD_DEFAULT
});
var INTERSECTION_THRESHOLD = WA_INTERSECTION_THRESHOLD;
function thresholdFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(parseFloat) || INTERSECTION_THRESHOLD_DEFAULT;
}
var WaIntersectionObserverDirective = class _WaIntersectionObserverDirective extends SafeObserver2 {
  callbacks = /* @__PURE__ */ new Map();
  margin = "";
  threshold = "";
  constructor() {
    const root = inject(INTERSECTION_ROOT, {
      optional: true
    });
    super((entries) => {
      this.callbacks.forEach((callback, element) => {
        const filtered = entries.filter(({
          target
        }) => target === element);
        return filtered.length && callback(filtered, this);
      });
    }, {
      root: root?.nativeElement,
      rootMargin: rootMarginFactory(),
      threshold: thresholdFactory()
    });
  }
  observe(target, callback = () => {
  }) {
    super.observe(target);
    this.callbacks.set(target, callback);
  }
  unobserve(target) {
    super.unobserve(target);
    this.callbacks.delete(target);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObserverDirective,
    selectors: [["", "waIntersectionObserver", ""]],
    inputs: {
      margin: [0, "waIntersectionRootMargin", "margin"],
      threshold: [0, "waIntersectionThreshold", "threshold"]
    },
    exportAs: ["IntersectionObserver"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObserver]",
      inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
      exportAs: "IntersectionObserver"
    }]
  }], function() {
    return [];
  }, null);
})();
var IntersectionObserveeService = class _IntersectionObserveeService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const observer = inject(WaIntersectionObserverDirective);
    super((subscriber) => {
      observer.observe(nativeElement, (entries) => {
        subscriber.next(entries);
      });
      return () => {
        observer.unobserve(nativeElement);
      };
    });
    return this.pipe(share());
  }
  static ɵfac = function IntersectionObserveeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserveeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserveeService,
    factory: _IntersectionObserveeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserveeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WaIntersectionObservee = class _WaIntersectionObservee {
  waIntersectionObservee = inject(IntersectionObserveeService);
  static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObservee)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObservee,
    selectors: [["", "waIntersectionObservee", ""]],
    outputs: {
      waIntersectionObservee: "waIntersectionObservee"
    },
    features: [ɵɵProvidersFeature([IntersectionObserveeService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObservee]",
      outputs: ["waIntersectionObservee"],
      providers: [IntersectionObserveeService]
    }]
  }], null, null);
})();
var WaIntersectionRoot = class _WaIntersectionRoot {
  static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionRoot,
    selectors: [["", "waIntersectionRoot", ""]],
    features: [ɵɵProvidersFeature([{
      provide: INTERSECTION_ROOT,
      useExisting: ElementRef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionRoot]",
      providers: [{
        provide: INTERSECTION_ROOT,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var WaIntersectionObserver = [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot];
var IntersectionObserverModule = class _IntersectionObserverModule {
  static ɵfac = function IntersectionObserverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IntersectionObserverModule,
    imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
    exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverModule, [{
    type: NgModule,
    args: [{
      imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
      exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
    }]
  }], null, null);
})();
var IntersectionObserverService = class _IntersectionObserverService extends Observable {
  nativeElement = inject(ElementRef).nativeElement;
  rootMargin = inject(INTERSECTION_ROOT_MARGIN);
  threshold = inject(INTERSECTION_THRESHOLD);
  root = inject(INTERSECTION_ROOT, {
    optional: true
  })?.nativeElement ?? null;
  constructor() {
    super((subscriber) => {
      const observer = new SafeObserver2((entries) => {
        subscriber.next(entries);
      }, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      observer.observe(this.nativeElement);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function IntersectionObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserverService,
    factory: _IntersectionObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken("[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]", {
  providedIn: "root",
  factory: () => !!inject(WA_WINDOW).IntersectionObserver
});

export {
  WA_MUTATION_OBSERVER_INIT,
  WaMutationObserver,
  MutationObserverService,
  WA_INTERSECTION_ROOT_MARGIN,
  WA_INTERSECTION_THRESHOLD,
  WaIntersectionObserverDirective,
  WaIntersectionObservee,
  WaIntersectionObserver,
  IntersectionObserverService,
  TUI_BADGE_DEFAULT_OPTIONS,
  TUI_BADGE_OPTIONS,
  tuiBadgeOptionsProvider,
  TuiBadge,
  TuiFade,
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  tuiAvatarOptionsProvider,
  TuiAvatar,
  TuiAvatarLabeled,
  TuiAvatarOutline,
  TuiAvatarStack,
  TUI_SWITCH_DEFAULT_OPTIONS,
  TUI_SWITCH_OPTIONS,
  tuiSwitchOptionsProvider,
  TuiSwitch
};
//# sourceMappingURL=chunk-DW4HK6QV.js.map
