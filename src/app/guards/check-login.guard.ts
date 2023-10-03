import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AurhService } from '../auth/services/aurh.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard  {

  constructor(private authService: AurhService, private router: Router) { }

  canActivate(): Observable<boolean>{
    return this.authService.isLogged.pipe(
      take(1),
      map( (isLogged: boolean) => !isLogged )
    );
  }
  
}
