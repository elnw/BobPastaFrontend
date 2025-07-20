import { Component } from '@angular/core';
import { TuiButton, tuiDialog, TuiIcon } from '@taiga-ui/core';
import { AddPastaModalComponent } from '../add-pasta-modal/add-pasta-modal.component';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-toolbar',
  imports: [TuiIcon, TuiButton],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private sharedService: SharedService) {}

  private readonly addPastaDialog = tuiDialog(AddPastaModalComponent, {
    size: 'page',
    closeable: true,
    dismissible: true
  })
  onAddClick = () => {
    this.addPastaDialog().subscribe(() => {
      this.sharedService.triggerReloadPastas();
    });
  }
}
