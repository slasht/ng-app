(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@ng-bootstrap/ng-bootstrap')) :
    typeof define === 'function' && define.amd ? define('inventory', ['exports', '@angular/core', '@angular/router', '@ng-bootstrap/ng-bootstrap'], factory) :
    (factory((global.inventory = {}),global.ng.core,global.ng.router,null));
}(this, (function (exports,core,router,ngBootstrap) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GalleryComponent = (function () {
        function GalleryComponent() {
        }
        /**
         * @return {?}
         */
        GalleryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        GalleryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gallery',
                        template: "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['home']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['item-list']\">Inventory Items</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<!-- Page Content  -->\n<div id=\"content\">\n\n  <router-outlet></router-outlet>\n\n</div>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        GalleryComponent.ctorParameters = function () { return []; };
        return GalleryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GalleryItemComponent = (function () {
        function GalleryItemComponent() {
        }
        GalleryItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gallery-item',
                        template: "<p>\n  Gallery Item!\n</p>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        GalleryItemComponent.ctorParameters = function () { return []; };
        return GalleryItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HomeComponent = (function () {
        function HomeComponent() {
        }
        HomeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gallery-home',
                        template: "<p>\n  Welcome to the Inventory of the CDBooStore application\n</p>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        HomeComponent.ctorParameters = function () { return []; };
        return HomeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: 'inv', component: GalleryComponent, children: [
                { path: '', component: HomeComponent },
                { path: 'home', component: HomeComponent },
                { path: 'gallery-item', component: GalleryItemComponent },
            ]
        },
    ];
    var GalleryRoutingModule = (function () {
        function GalleryRoutingModule() {
        }
        GalleryRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forRoot(routes)],
                        exports: [router.RouterModule]
                    },] },
        ];
        return GalleryRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GalleryModule = (function () {
        function GalleryModule() {
        }
        GalleryModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            GalleryComponent,
                            HomeComponent,
                            GalleryItemComponent
                        ],
                        imports: [
                            GalleryRoutingModule,
                            ngBootstrap.NgbModule.forRoot()
                        ],
                        exports: [GalleryComponent]
                    },] },
        ];
        return GalleryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.GalleryComponent = GalleryComponent;
    exports.GalleryModule = GalleryModule;
    exports.ɵb = GalleryItemComponent;
    exports.ɵc = GalleryRoutingModule;
    exports.ɵa = HomeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW52ZW50b3J5L2xpYi9nYWxsZXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vaW52ZW50b3J5L2xpYi9nYWxsZXJ5LWl0ZW0vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vaW52ZW50b3J5L2xpYi9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibmc6Ly9pbnZlbnRvcnkvbGliL2dhbGxlcnktcm91dGluZy5tb2R1bGUudHMiLCJuZzovL2ludmVudG9yeS9saWIvZ2FsbGVyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeScsXG4gIHRlbXBsYXRlOiBgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gIDwvYnV0dG9uPlxuXG4gIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiWydob21lJ11cIj5Ib21lIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj48L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnaXRlbS1saXN0J11cIj5JbnZlbnRvcnkgSXRlbXM8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGZvcm0gY2xhc3M9XCJmb3JtLWlubGluZSBteS0yIG15LWxnLTBcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC9uYXY+XG5cbjwhLS0gUGFnZSBDb250ZW50ICAtLT5cbjxkaXYgaWQ9XCJjb250ZW50XCI+XG5cbiAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgR2FsbGVyeSBJdGVtIVxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5SXRlbUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktaG9tZScsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIFdlbGNvbWUgdG8gdGhlIEludmVudG9yeSBvZiB0aGUgQ0RCb29TdG9yZSBhcHBsaWNhdGlvblxuPC9wPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9IFxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZSwgUm91dGVzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0dhbGxlcnlDb21wb25lbnR9IGZyb20gXCIuL2dhbGxlcnkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHYWxsZXJ5SXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2dhbGxlcnktaXRlbS9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2ludicsIGNvbXBvbmVudDogR2FsbGVyeUNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcbiAgICAgIHtwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG4gICAgICB7cGF0aDogJ2dhbGxlcnktaXRlbScsIGNvbXBvbmVudDogR2FsbGVyeUl0ZW1Db21wb25lbnR9LFxuICAgIF1cbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeVJvdXRpbmdNb2R1bGUge1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IEdhbGxlcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nYWxsZXJ5LWl0ZW0vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZ2FsbGVyeS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9nYWxsZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdhbGxlcnlDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBHYWxsZXJ5SXRlbUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgR2FsbGVyeVJvdXRpbmdNb2R1bGUsXG4gICAgTmdiTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBleHBvcnRzOiBbR2FsbGVyeUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJOZ01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIk5nYk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBb0NFO1NBQWlCOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUNDOztvQkFyQ0ZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLHdtQ0EyQlg7d0JBQ0MsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7K0JBakNEOzs7Ozs7O0FDQUE7UUFZRTtTQUFpQjs7b0JBVmxCQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSw4QkFHWDt3QkFDQyxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzttQ0FURDs7Ozs7OztBQ0FBO1FBWUU7U0FBaUI7O29CQVZsQkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsdUVBR1g7d0JBQ0MsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7NEJBVEQ7Ozs7Ozs7QUNBQTtJQU1BLElBQU0sTUFBTSxHQUFXO1FBQ3JCO1lBQ0UsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFO2dCQUNsRCxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQztnQkFDcEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUM7Z0JBQ3hDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUM7YUFDeEQ7U0FDRjtLQUNGLENBQUM7Ozs7O29CQUVEQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLG1CQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN2QyxPQUFPLEVBQUUsQ0FBQ0EsbUJBQVksQ0FBQztxQkFDeEI7O21DQW5CRDs7Ozs7OztBQ0FBOzs7O29CQU9DRCxhQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFOzRCQUNaLGdCQUFnQjs0QkFDaEIsYUFBYTs0QkFDYixvQkFBb0I7eUJBQ3JCO3dCQUNELE9BQU8sRUFBRTs0QkFDUCxvQkFBb0I7NEJBQ3BCRSxxQkFBUyxDQUFDLE9BQU8sRUFBRTt5QkFDcEI7d0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQzVCOzs0QkFsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==