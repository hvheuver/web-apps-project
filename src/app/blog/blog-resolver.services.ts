import { BlogAdminDataService } from '../admin-panel/blog-admin-data-service.service';
import { BlogDataService } from '../blog/blog-data-service.service';
import { Blogpost } from '../blog/blogpost.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlogResolver implements Resolve< Blogpost > {
    constructor(private blogService: BlogDataService,
         private blogAdminDataService: BlogAdminDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blogpost> {
        return this.blogService.getPost(route.params['id']);
    }
}
