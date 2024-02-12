import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.sass',
})
export class LocationComponent {
  // URL to your PDF file, can be local or remote
  url = '/assets/Unterkuenfte_in_der_Region_WDM_mU20.pdf';

  downloadPDF(): void {
    // Create a new link element programmatically
    const link = document.createElement('a');
    // Set the href and download attributes of the link
    link.href = this.url;
    link.download = 'Unterkuenfte_in_der_Region_WDM_mU20.pdf'; // The file name for download
    // Append the link to the body
    document.body.appendChild(link);
    // Simulate a click on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  }
}
