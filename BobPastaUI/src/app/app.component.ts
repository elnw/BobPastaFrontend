import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPastasTableComponent } from "./list-pastas-table/list-pastas-table.component";
import { HeaderComponent } from "./Components/header/header.component";
import { ToolbarComponent } from "./Components/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, ListPastasTableComponent, HeaderComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BobpastaUI';
}
