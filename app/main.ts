import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { FooterModule } from "./footer/footer.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
platform.bootstrapModule(FooterModule);
