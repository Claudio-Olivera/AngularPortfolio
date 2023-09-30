import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Certifications } from '../Interfaces/Certifications';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  private certificadosUrl = environment.supabase.certificadosUrl;
  private $dataCertificados = new BehaviorSubject <Certifications[]>([
  {
  id: 0,
  certificado: '',
  imagen: '',
  user_id: ''
  }])

  constructor(private http: HttpClient) {
    this.getCertificados();
  }

  /* Este metodo es al cual los componentes solicitan los datos */
  getDataCertificados(): Observable<Certifications[]> {
    return this.$dataCertificados.asObservable();
  }

  getCertificados(): void {
    this.http.get<Certifications[]>(`${this.certificadosUrl}?select=*`, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(data => {
      this.$dataCertificados.next(data);
      console.log("recibo datos desde fuera")
    })
  }

  postCertificado(data: Certifications):void{
    const url = this.certificadosUrl
    this.http.post(url, [data], {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(() => {
        this.getCertificados();
      }
    );
  }

  patchCertificado(id: number, data: Certifications):void {
    const url = `${this.certificadosUrl}?id=eq.${id}`;
    this.http.patch(url, [data], {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(()=>{
      this.getCertificados();
    })
    ;
  }

  deleteCertificado(id: number):void {
    const url = `${this.certificadosUrl}?id=eq.${id}`
    this.http.delete(url, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(()=>{
      this.getCertificados();
    });
  }

/* Para pedir uno solo, pero no se si sera utilizado,y no tiene el subscribe aun

  getCertificado(id: number): void {
    const url = `${this.certificadosUrl}?id=eq.${id}`;
    this.http.get(url, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(() => {
      this.getCertificados();
    });
  }

*/
}
