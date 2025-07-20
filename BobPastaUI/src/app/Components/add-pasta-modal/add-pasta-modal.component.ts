import { Component, inject } from '@angular/core';
import {TuiComboBoxModule, TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {
  TuiDataListWrapper,
  TuiFilterByInputPipe,
  TuiStringifyContentPipe,
  TuiFieldErrorPipe
} from '@taiga-ui/kit';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButton, TuiTextfield, TuiError, TuiAlertService, TuiDialogContext } from '@taiga-ui/core';
import { BobpastoService } from '../../Services/bobpasto-service.service';
import {AsyncPipe} from '@angular/common';
import { Bobpasto } from '../../Models/Bobpasto';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-add-pasta-modal',
  imports: [TuiComboBoxModule, TuiDataListWrapper, TuiStringifyContentPipe, TuiFilterByInputPipe, 
    TuiTextfieldControllerModule, ReactiveFormsModule, TuiTextfield, TuiTextareaModule, TuiButton,TuiError, TuiFieldErrorPipe, AsyncPipe],
  templateUrl: './add-pasta-modal.component.html',
  styleUrl: './add-pasta-modal.component.css'
})
export class AddPastaModalComponent {
  constructor(private bobPastoService: BobpastoService){}
  private readonly alerts = inject(TuiAlertService);

  protected pastaControl: FormGroup = new FormGroup({
    pastaNameControl: new FormControl<string | null>(null, [
      Validators.required
    ]),
    pastaTypeControl: new FormControl<{name: string; value: number}>(
      { name: "Text", value: 1 },
      [
        Validators.required
      ]
    ),
    pastaTextContentControl: new FormControl<string | null>(null),
  });
  private readonly context = injectContext<TuiDialogContext<boolean>>();

  protected PastaContent: File | null = null;
  
  protected readonly PastaTypes = [
    {
      name: "Text",
      value: 1
    },
    {
      name: "File",
      value: 2
    }
  ];

  protected readonly stringify = (item: {name: string; value: number}) => item.name;

  protected onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDropSuccess(event: DragEvent) {
    event.preventDefault();
    this.onFileUpload(event.dataTransfer?.files!);
    (document.getElementById('inputFile') as HTMLInputElement).value = "";
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.onFileUpload(target.files!);
  }

  onFileUpload(files: FileList) {
    const file = files![0];
    if (file) {
      this.PastaContent = file;
    }
  }

  protected close(): void {
    this.context.completeWith(false);
  }


  OnSavePasta(){
    
    try{
      if(this.pastaControl.valid && (this.PastaContent !== null || this.pastaControl.get("pastaTextContentControl")?.value !== null)){
       
        const pasta: Bobpasto = {
          name: this.pastaControl.get("pastaNameControl")?.value,
          type: this.pastaControl.get("pastaTypeControl")?.value.value,
          content: ""
        }
  
        if(pasta.type === 2){
          const reader = new FileReader();
          reader.readAsDataURL(this.PastaContent!);
          reader.onload = () => {
            pasta.content = reader.result as string;
            this.bobPastoService.createBobpasta(pasta).subscribe({ 
              complete: () => {
                this.alerts.open("Pasto saved successfully").subscribe();
                this.close();
              }
            });
          }
        }else{
          pasta.content = this.pastaControl.get("pastaTextContentControl")?.value;
          this.bobPastoService.createBobpasta(pasta).subscribe({ 
            complete: () => {
              this.alerts.open("Pasto saved successfully")
              .subscribe();
              this.close();
            }
          });
        }
                

      }else{
        this.alerts.open("Please fill all the fields", {
          appearance: 'warning'
        })
        .subscribe();
      }
    }catch(e){
      this.alerts.open("An error occurred while saving the pasta: " + e, {
        appearance: 'error'
      })
      .subscribe();
    }
    
  }

}
