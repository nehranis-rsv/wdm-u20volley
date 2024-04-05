import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-twitch-stream',
  standalone: true,
  imports: [],
  templateUrl: './twitch-stream.component.html',
  styleUrl: './twitch-stream.component.sass',
})
export class TwitchStreamComponent implements OnInit, OnChanges, OnDestroy {
  @Input() channel: string = 'RSVFeld1';

  ngOnInit(): void {
    this.loadTwitchEmbedScript();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['channel'] && !changes['channel'].isFirstChange()) {
      this.loadTwitchEmbedScript(); // Assuming this method sets up the Twitch stream
    }
  }

  ngOnDestroy(): void {
    // Clean up logic here
    const container = document.getElementById('twitch-embed');
    if (container) {
      container.innerHTML = '';
    }
  }

  loadTwitchEmbedScript(): void {
    // Clear the container
    const container = document.getElementById('twitch-embed');
    if (container) {
      container.innerHTML = '';
    }

    const script = document.createElement('script');
    script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
    script.addEventListener('load', () => {
      this.initializeTwitchEmbed();
    });
    document.body.appendChild(script);
  }

  initializeTwitchEmbed(): void {
    new Twitch.Embed('twitch-embed', {
      width: '100%',
      height: '600',
      channel: this.channel, // Replace with the actual channel name
      // additional options as needed
    });
  }
}
