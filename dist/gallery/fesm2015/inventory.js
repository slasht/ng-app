import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GalleryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery',
                template: `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" [routerLink]="['home']">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['item-list']">Inventory Items</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<!-- Page Content  -->
<div id="content">

  <router-outlet></router-outlet>

</div>
`,
                styles: []
            },] },
];
/** @nocollapse */
GalleryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GalleryItemComponent {
    constructor() { }
}
GalleryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-item',
                template: `<p>
  Gallery Item!
</p>
`,
                styles: []
            },] },
];
/** @nocollapse */
GalleryItemComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HomeComponent {
    constructor() { }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-home',
                template: `<p>
  Welcome to the Inventory of the CDBooStore application
</p>
`,
                styles: []
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: 'inv', component: GalleryComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'gallery-item', component: GalleryItemComponent },
        ]
    },
];
class GalleryRoutingModule {
}
GalleryRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GalleryModule {
}
GalleryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GalleryComponent,
                    HomeComponent,
                    GalleryItemComponent
                ],
                imports: [
                    GalleryRoutingModule,
                    NgbModule.forRoot()
                ],
                exports: [GalleryComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { GalleryComponent, GalleryModule, GalleryItemComponent as ɵb, GalleryRoutingModule as ɵc, HomeComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9pbnZlbnRvcnkvbGliL2dhbGxlcnkuY29tcG9uZW50LnRzIiwibmc6Ly9pbnZlbnRvcnkvbGliL2dhbGxlcnktaXRlbS9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9pbnZlbnRvcnkvbGliL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJuZzovL2ludmVudG9yeS9saWIvZ2FsbGVyeS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vaW52ZW50b3J5L2xpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5JyxcbiAgdGVtcGxhdGU6IGA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctcHJpbWFyeVwiPlxuICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgPC9idXR0b24+XG5cbiAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJ2hvbWUnXVwiPkhvbWUgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPjwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiWydpdGVtLWxpc3QnXVwiPkludmVudG9yeSBJdGVtczwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8Zm9ybSBjbGFzcz1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhcmlhLWxhYmVsPVwiU2VhcmNoXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXktMiBteS1zbS0wXCIgdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L25hdj5cblxuPCEtLSBQYWdlIENvbnRlbnQgIC0tPlxuPGRpdiBpZD1cImNvbnRlbnRcIj5cblxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxwPlxuICBHYWxsZXJ5IEl0ZW0hXG48L3A+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJdGVtQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1ob21lJyxcbiAgdGVtcGxhdGU6IGA8cD5cbiAgV2VsY29tZSB0byB0aGUgSW52ZW50b3J5IG9mIHRoZSBDREJvb1N0b3JlIGFwcGxpY2F0aW9uXG48L3A+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IoKSB7IH0gXG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7R2FsbGVyeUNvbXBvbmVudH0gZnJvbSBcIi4vZ2FsbGVyeS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhbGxlcnlJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vZ2FsbGVyeS1pdGVtL2dhbGxlcnktaXRlbS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnaW52JywgY29tcG9uZW50OiBHYWxsZXJ5Q29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcbiAgICAgIHtwYXRoOiAnZ2FsbGVyeS1pdGVtJywgY29tcG9uZW50OiBHYWxsZXJ5SXRlbUNvbXBvbmVudH0sXG4gICAgXVxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Um91dGluZ01vZHVsZSB7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgR2FsbGVyeUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2dhbGxlcnktaXRlbS9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9nYWxsZXJ5LXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2dhbGxlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIEdhbGxlcnlJdGVtQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBHYWxsZXJ5Um91dGluZ01vZHVsZSxcbiAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IFtHYWxsZXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUFvQ0UsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQlg7Z0JBQ0MsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDakNEO0lBWUUsaUJBQWlCOzs7WUFWbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7OztDQUdYO2dCQUNDLE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1REO0lBWUUsaUJBQWlCOzs7WUFWbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7OztDQUdYO2dCQUNDLE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1REO0FBTUEsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUU7WUFDbEQsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFDcEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBQztTQUN4RDtLQUNGO0NBQ0YsQ0FBQztBQU1GOzs7WUFKQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCOzs7Ozs7O0FDbkJEOzs7WUFPQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7In0=