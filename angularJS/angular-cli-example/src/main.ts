import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// bootstrapModule()함수는 AppModule을 시작해라 라는 의미
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
