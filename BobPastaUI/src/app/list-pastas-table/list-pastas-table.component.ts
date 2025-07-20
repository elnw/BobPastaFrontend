import { Component, OnInit, afterNextRender } from '@angular/core';
import {TuiTable} from '@taiga-ui/addon-table';
import { Bobpasto } from '../Models/Bobpasto';
import { BobpastoService } from '../Services/bobpasto-service.service';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-list-pastas-table',
  imports: [TuiTable,  TuiButton, TuiIcon],
  templateUrl: './list-pastas-table.component.html',
  styleUrl: './list-pastas-table.component.css'
})
export class ListPastasTableComponent implements OnInit{
  constructor(private bobPastoService: BobpastoService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.bobPastoService.getBobpasta().subscribe((data) => this.rows = data);

    this.sharedService.reloadPastasObservable.subscribe(() => {
      this.bobPastoService.getBobpasta().subscribe((data) => this.rows = data);
    });
  }

  protected readonly columns = [ "element", "content", "actions"];
  protected rows: Bobpasto[] = [];

  copyContentToClipboard = (content: string): void => {
    navigator.clipboard.writeText(content);
  }

  downloadFile = (content: string, name: string): void => {
    const type: string = content.split(';')[0].split(':')[1];

    const trimmedContent = content.split("base64,")[1];
    const byteCharacters = atob(trimmedContent);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], { type: type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href= url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  }

}
