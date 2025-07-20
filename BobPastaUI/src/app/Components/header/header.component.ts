import { Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import {TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  imports: [TuiHeader, TuiNavigation, TuiIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
