import { Component } from '@angular/core';
// import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  title = 'Ruleta Didáctica';

  // constructor(public authService: AuthService, public router: Router, private breakpointObserver: BreakpointObserver) { }
  constructor(public router: Router, private breakpointObserver: BreakpointObserver) { }
}
