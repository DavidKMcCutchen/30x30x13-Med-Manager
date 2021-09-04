import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MED_ENVIRONMENT } from './med.token';
import { MedEnvironment } from "./med.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: MedEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: MED_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
