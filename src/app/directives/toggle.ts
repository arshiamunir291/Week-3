import { Directive,input,TemplateRef,ViewContainerRef,effect, inject } from '@angular/core';

@Directive({
  selector: '[appToggle]',
})
export class Toggle {
private templateRef=inject(TemplateRef<any>);
private viewContainer=inject(ViewContainerRef);
appToggle=input.required<boolean>();
private toggleEffect=effect(()=>{
  this.viewContainer.clear();
  if(this.appToggle()){
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
});

}
