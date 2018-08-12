import { Component, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-child',
  template: `<div>
  <label >ID:</label>
  <input type="text" class="form-control" id="stock-id">
</div><br>
<button type="submit" class="btn-primary" style="font-size :1.5em; padding: 0px 7px 0px 7px;">Update</button>
`,
})
export class ChildComponent {
  title = 'stock-updater';
  @Output() myEvent = new EventEmitter();

 /* childfunction() {
      this.myEvent.emit();
  }*/

}
