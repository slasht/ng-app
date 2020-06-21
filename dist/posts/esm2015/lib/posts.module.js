/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './post-item/create/create.component';
import { DeleteComponent } from './post-item/delete/delete.component';
import { PostItemComponent } from './post-item/post-item.component';
import { UpdateComponent } from './post-item/update/update.component';
import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from './posts.component';
import { PostsService } from './services/posts.service';
import { TopComponent } from './top/top.component';
export class PostsModule {
}
PostsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PostsComponent,
                    HomeComponent,
                    TopComponent,
                    PostItemComponent,
                    CreateComponent,
                    UpdateComponent,
                    DeleteComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    PostsRoutingModule,
                    HttpClientModule,
                    NgbModule.forRoot()
                ],
                exports: [
                    PostsComponent,
                    TopComponent
                ],
                providers: [
                    NgbActiveModal,
                    PostsService
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcG9zdHMvIiwic291cmNlcyI6WyJsaWIvcG9zdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUEyQm5ELE1BQU07OztZQXpCTCxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLFlBQVk7aUJBQUM7Z0JBQ2YsU0FBUyxFQUFFO29CQUNULGNBQWM7b0JBQ2QsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsLCBOZ2JNb2R1bGUgfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcG9zdC1pdGVtL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0LWl0ZW0vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3N0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcG9zdC1pdGVtL3Bvc3QtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGRhdGVDb21wb25lbnQgfSBmcm9tICcuL3Bvc3QtaXRlbS91cGRhdGUvdXBkYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3RzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3Bvc3RzLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBvc3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3N0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Bvc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb3BDb21wb25lbnQgfSBmcm9tICcuL3RvcC90b3AuY29tcG9uZW50JztcclxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQb3N0c0NvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIFRvcENvbXBvbmVudCxcbiAgICBQb3N0SXRlbUNvbXBvbmVudCxcbiAgICBDcmVhdGVDb21wb25lbnQsXG4gICAgVXBkYXRlQ29tcG9uZW50LFxuICAgIERlbGV0ZUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFBvc3RzUm91dGluZ01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5nYk1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFBvc3RzQ29tcG9uZW50LFxuICAgIFRvcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5nYkFjdGl2ZU1vZGFsLFxuICAgIFBvc3RzU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RzTW9kdWxlIHsgfVxuIl19