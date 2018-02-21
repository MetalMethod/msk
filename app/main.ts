import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'

//one time bootstrap to have the app running, used for linking the App module to the main html
platformBrowserDynamic().bootstrapModule(AppModule)