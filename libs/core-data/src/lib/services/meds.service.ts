import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Med } from "@med-manager/api-interfaces";
import { MedEnvironment, MED_ENVIRONMENT } from "@med-manager/environment";


@Injectable({
  providedIn: 'root'
})
export class MedsService {
  model = 'meds';

  constructor(
    private httpClient: HttpClient,
    @Inject(MED_ENVIRONMENT) private environment: MedEnvironment
  ) {}

  all() {
    return this.httpClient.get<Med[]>(this.getUrl())
  };

  find(medId: string) {
    return this.httpClient.get<Med>(this.getUrlById(medId))
  };

  create(meds: Med) {
    return this.httpClient.post<Med>(this.getUrl(), meds)
  };

  update(meds: Med) {
    return this.httpClient.patch<Med>(this.getUrlById(meds.id), meds)
  };

  delete({ id }: Med) {
    return this.httpClient.delete<Med>(this.getUrlById(id))
  };

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
