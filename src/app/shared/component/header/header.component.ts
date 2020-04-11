import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> =new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void { }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
    setTimeout(()=> {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }

  logOut(){
this.router.navigate(['']);
  }
}
