System.register(["angular2/platform/browser", 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.apply = function (color, fontSize) {
                    this.color = color;
                    this.fontSize = fontSize;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n    \n    <div>\n    <h3 [ngStyle]=\"{color: colorInput.value} \" >\n        \n        Asslam-0-Alikum\n  \n    </h3>\n    \n    <h3 [style.font-size.px]=\"fontSize.value\" >\n        \n        how r u??\n  \n    </h3>\n    </div>\n    \n    \n    <div>\n        <input type=\"text\" name= \"color\" value=\"{{color}}\" #colorInput>\n        \n        <input type=\"number\" name= \"fontSize\" value=\"{{fontSize}}\" #fontSize>\n        <button (click)=\"apply(color,fontSize)\" >Change</button>\n    </div>\n    \n    <!--<div>\n   <h2   [ngStyle]=\"{color: color}\" [style.font-size.px]=\"size\">\n     Hello</h2>\n    \n        <input type=\"number\" [(ngModel)]=\"size\">  \n        <input type=\"text\" [(ngModel)]=\"color\">  \n        \n        \n        <button (click)= 'size = size + 1'> + </button>\n        <button (click)= 'size = size - 1'> - </button>\n        \n    </div>-->\n    \n    <!--\n    <h2> Enter your Choice: <span *ngIf=\"choice < 5\"> {{choice}}  </span></h2>\n    \n    <input style=\"margin : 200px\" type=\"number\" [(ngModel)]=\"choice\">\n    <div>\n    <ul [ngSwitch] =\"choice\">\n        <li *ngSwitchWhen=\"1\">First Choice</li>\n        <li *ngSwitchWhen=\"2\">Second Choice</li>\n        <li [style.visibility]=\"'hidden'\" *ngSwitchWhen=\"3\">Third Choice</li>\n        <li [style.font-size]=\"'23px'\" *ngSwitchWhen=\"4\">Fourth Choice</li>\n        <li *ngSwitchWhen=\"5\">Fifth Choice</li>\n        <li  *ngIf=\"choice > 5\" >Invalid Choice, please choose your choice only 1 t0 5</li>\n        \n      \n        \n    </ul>\n    </div>\n    -->\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            browser_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map