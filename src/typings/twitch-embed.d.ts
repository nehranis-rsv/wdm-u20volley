// twitch-embed.d.ts
declare namespace Twitch {
  export interface EmbedOptions {
    width: string | number;
    height: string | number;
    channel: string;
    // Add more options as required
  }

  export class Embed {
    constructor(containerId: string, options: EmbedOptions);
    // Add any methods you need to use
  }
}
