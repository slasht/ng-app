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
const routes = [
    {
        path: 'gallery', component: GalleryComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'gallery-item', component: GalleryItemComponent },
        ]
    },
];
export class GalleryRoutingModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvZ2FsbGVyeS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUV0RCxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRTtZQUN0RCxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUNwQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFDO1NBQ3hEO0tBQ0Y7Q0FDRixDQUFDO0FBVUYsTUFBTTs7O1lBUkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgR2FsbGVyeUl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9nYWxsZXJ5LWl0ZW0vZ2FsbGVyeS1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSBcIi4vZ2FsbGVyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdnYWxsZXJ5JywgY29tcG9uZW50OiBHYWxsZXJ5Q29tcG9uZW50LCBjaGlsZHJlbjogW1xuICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICAgICAge3BhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcbiAgICAgIHtwYXRoOiAnZ2FsbGVyeS1pdGVtJywgY29tcG9uZW50OiBHYWxsZXJ5SXRlbUNvbXBvbmVudH0sXG4gICAgXVxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyAgICBcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Um91dGluZ01vZHVsZSB7XG59XG4iXX0=