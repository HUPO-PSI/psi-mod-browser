declare const window: any;

export interface FilterProperties {
  leafOnly: boolean;
  hasSmilesOnly: boolean;
  selectedOrigin: string[];
  selectedTermSpec: string[];
  diffMonoMin: number;
  diffMonoMax: number;
  massMonoMin: number;
  massMonoMax: number;
}

export default class AnalyticsManager {
  public logViewMod(psiModId: string, filterProperties: FilterProperties) {
    this.logEvent('view_mod', {
      mod_id: psiModId,
      ...filterProperties
    });
  }

  public logApplicationStart() {
    this.logEvent('application_start');
  }

  private logEvent(event_name: string, event_params?: any) {
    // // @ts-ignore
    // if (process.env.NODE_ENV !== 'production') {
    //   // We are running the app in development mode and we don't want to log any requests...
    //   return;
    // }

    // Use Umami's tracking function
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(event_name, event_params);
    }
  }
}
