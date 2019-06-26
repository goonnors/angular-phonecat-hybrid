// Import these globally to bring in their @types
import 'angular';
import 'angular-resource';
import 'angular-route';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd';
import { AppModule } from './app/app.module';

// And import our AngularJS module
import './app-ajs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    // Use the upgrade module to bootstrap the hybrid
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  });
  // .catch(err => console.error(err));
