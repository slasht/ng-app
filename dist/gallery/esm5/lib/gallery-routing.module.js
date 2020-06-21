/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { GalleryComponent } from "./gallery.component";
import { HomeComponent } from "./home/home.component";
/** @type {?} */
var routes = [
    {
        path: 'gallery', component: GalleryComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'gallery-item', component: GalleryItemComponent },
        ]
    },
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forRoot(routes)
                    ],
                    exports: [
                        RouterModule
                    ]
                },] }
    ];
    return GalleryRoutingModule;
}());
export { GalleryRoutingModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvZ2FsbGVyeS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUV0RCxJQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRTtZQUN0RCxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUNwQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFDO1NBQ3hEO0tBQ0Y7Q0FDRixDQUFDOzs7OztnQkFFRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRjs7K0JBdkJEOztTQXdCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdhbGxlcnlJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vZ2FsbGVyeS1pdGVtL2dhbGxlcnktaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gXCIuL2dhbGxlcnkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnZ2FsbGVyeScsIGNvbXBvbmVudDogR2FsbGVyeUNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcbiAgICAgIHtwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG4gICAgICB7cGF0aDogJ2dhbGxlcnktaXRlbScsIGNvbXBvbmVudDogR2FsbGVyeUl0ZW1Db21wb25lbnR9LFxuICAgIF1cbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgICAgXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeVJvdXRpbmdNb2R1bGUge1xufVxuIl19