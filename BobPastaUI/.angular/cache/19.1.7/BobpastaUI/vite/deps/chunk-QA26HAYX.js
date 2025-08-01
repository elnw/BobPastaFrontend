import {
  TUI_ICON_END,
  TuiDropdownDirective,
  tuiCreateToken,
  tuiInjectElement,
  tuiProvide,
  tuiWithStyles
} from "./chunk-CFYEAHUQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective
} from "./chunk-7CG3BBK5.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-chevron.mjs
var TUI_CHEVRON = tuiCreateToken("@tui.chevron-down");
var TuiChevronStyles = class _TuiChevronStyles {
  static {
    this.ɵfac = function TuiChevronStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevronStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiChevronStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-chevron"],
      decls: 0,
      vars: 0,
      template: function TuiChevronStyles_Template(rf, ctx) {
      },
      styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevronStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chevron"
      },
      styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"]
    }]
  }], null, null);
})();
var TuiChevron = class _TuiChevron {
  constructor() {
    this.el = tuiInjectElement();
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.nothing = tuiWithStyles(TuiChevronStyles);
    this.toggle = effect(() => this.el.classList.toggle("_chevron-rotated", this.chevron() || this.chevron() === "" && !!this.dropdown?.ref()));
    this.chevron = signal("");
  }
  set tuiChevron(chevron) {
    this.chevron.set(chevron);
  }
  static {
    this.ɵfac = function TuiChevron_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevron)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChevron,
      selectors: [["", "tuiChevron", ""]],
      hostAttrs: ["tuiChevron", ""],
      inputs: {
        tuiChevron: "tuiChevron"
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ICON_END, TUI_CHEVRON)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevron, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiChevron]",
      providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
      host: {
        tuiChevron: ""
      }
    }]
  }], null, {
    tuiChevron: [{
      type: Input
    }]
  });
})();

export {
  TUI_CHEVRON,
  TuiChevron
};
//# sourceMappingURL=chunk-QA26HAYX.js.map
