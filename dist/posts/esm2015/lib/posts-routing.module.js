/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts.component";
/** @type {?} */
const routes = [
    {
        path: 'posts', component: PostsComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent }
        ]
    },
];
export class PostsRoutingModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wb3N0cy8iLCJzb3VyY2VzIjpbImxpYi9wb3N0cy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFbkQsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFO1lBQ2xELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDO1NBQ3pDO0tBQ0Y7Q0FDRixDQUFDO0FBVUYsTUFBTTs7O1lBUkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUG9zdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3Bvc3QtaXRlbS9wb3N0LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdHNDb21wb25lbnQgfSBmcm9tIFwiLi9wb3N0cy5jb21wb25lbnRcIjtcclxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwb3N0cycsIGNvbXBvbmVudDogUG9zdHNDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG4gICAgICB7cGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9XG4gICAgXVxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyAgICBcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0c1JvdXRpbmdNb2R1bGUge1xufVxuIl19