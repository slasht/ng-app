/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts.component";
/** @type {?} */
var routes = [
    {
        path: 'posts', component: PostsComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    },
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forRoot(routes)
                    ],
                    exports: [
                        RouterModule
                    ]
                },] }
    ];
    return PostsRoutingModule;
}());
export { PostsRoutingModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb3N0cy8iLCJzb3VyY2VzIjpbImxpYi9wb3N0cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFbkQsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFO1lBQ2xELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDO1NBQ3pDO0tBQ0Y7Q0FDRixDQUFDOzs7OztnQkFFRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRjs7NkJBdEJEOztTQXVCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBvc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0LWl0ZW0vcG9zdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vcG9zdHMuY29tcG9uZW50XCI7XHJcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAncG9zdHMnLCBjb21wb25lbnQ6IFBvc3RzQ29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fVxuICAgIF1cbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgICAgXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdHNSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==