import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteRestService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient,
  ) { }

  getClients()
  {
    return this.http.get(environment.baseURI + 'cliente/' );
  }

  getAppointmentsPaciente()
  {
    return this.http.get(environment.baseURI + 'appointment/getAppointmentsPaciente' );
  }

  saveClient(params:{})
  {
    return this.http.post(environment.baseURI + 'Cliente/GuardarCliente', params );
  }

  getAppointment(id:string)
  {
    return this.http.get(environment.baseURI + 'appointment/getAppointment/' + id );
  }

  updateAppointment(id:string, params:{})
  {
    return this.http.put(environment.baseURI + 'appointment/updateAppointment/' + id, params );
  }

  deleteAppointment(id:string)
  {
    return this.http.delete(environment.baseURI + 'appointment/deleteAppointment/' + id );
  }

  getAppointmentName(params:{})
  {
    return this.http.post(environment.baseURI + 'appointment/getAppointmentByName', params);
  }
}