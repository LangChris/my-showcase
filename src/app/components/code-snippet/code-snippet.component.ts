import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent {
  @Input() header?: string;
  @Input() title!: string;
  @Input() language!: string;
  @Input() code!: string;

  copyText = 'Copy';

  copyCode() {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copyText = 'Copied!';
      setTimeout(() => {
        this.copyText = 'Copy';
      }, 3000);
    });
  }
}
