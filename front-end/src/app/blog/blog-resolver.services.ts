import { BlogAdminDataService } from './blog-admin-data-service.service';
import { Blogpost } from '../blog/blogpost.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BlogResolver implements Resolve< Blogpost > {
    constructor(private blogAdminService: BlogAdminDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blogpost> {
        return this.blogAdminService.getPost(route.params['id']);
    }
}
