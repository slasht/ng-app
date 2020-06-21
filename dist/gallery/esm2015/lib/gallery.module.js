/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home/home.component';
import { GalleryService } from './services/gallery.service';
import { TopComponent } from './top/top.component';
export class GalleryModule {
}
GalleryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GalleryComponent,
                    HomeComponent,
                    TopComponent,
                    GalleryItemComponent
                ],
                imports: [
                    CommonModule,
                    GalleryRoutingModule,
                    HttpClientModule,
                    NgbModule.forRoot()
                ],
                exports: [
                    GalleryComponent,
                    TopComponent
                ],
                providers: [
                    GalleryService
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LyIsInNvdXJjZXMiOlsibGliL2dhbGxlcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUF1Qm5ELE1BQU07OztZQXJCTCxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixZQUFZO29CQUNaLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGNBQWM7aUJBQ2Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZ2FsbGVyeS1pdGVtL2dhbGxlcnktaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL2dhbGxlcnktcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vZ2FsbGVyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZSc7XHJcbmltcG9ydCB7IFRvcENvbXBvbmVudCB9IGZyb20gJy4vdG9wL3RvcC5jb21wb25lbnQnO1xyXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdhbGxlcnlDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBUb3BDb21wb25lbnQsXG4gICAgR2FsbGVyeUl0ZW1Db21wb25lbnQgICAgXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgR2FsbGVyeVJvdXRpbmdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHYWxsZXJ5Q29tcG9uZW50LFxuICAgIFRvcENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBHYWxsZXJ5U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlNb2R1bGUgeyB9XG4iXX0=