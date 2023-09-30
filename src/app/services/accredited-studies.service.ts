import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccreditedStudies } from '../Interfaces/AccreditedStudies';

@Injectable({
  providedIn: 'root'
})
export class AccreditedStudiesService {

  /*   private http = inject(HttpClient); */
  private estudiosUrl = environment.supabase.estudiosUrl;
  private $dataEstudios = new BehaviorSubject<AccreditedStudies[]>([
    {
      id: 0,
      estudio: '',
      imagen: '',
      user_id: ''
    }
  ])

  constructor(private http: HttpClient) {
    this.getEstudios()
  }

  /* Este metodo es al cual los componentes solicitan los datos */
  getDataEstudios(): Observable<AccreditedStudies[]> {
    return this.$dataEstudios.asObservable()
  }

  getEstudios(): void {
    const url = `${this.estudiosUrl}?select=*`
    this.http.get<AccreditedStudies[]>(url, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(data => {
      this.$dataEstudios.next(data);
      console.log("recibo datos desde fuera")
    })
  }

  postEstudio(data: AccreditedStudies): void {
    const url = this.estudiosUrl
    this.http.post(url, [data], {
      headers: new HttpHeaders({ 'HeaderInterceptor': 'true' })
    }).subscribe(() => {
      this.getEstudios();
    });
  }

  patchEstudio(id: number, data: AccreditedStudies): void {
    const url = `${this.estudiosUrl}?id=eq.${id}`;
    this.http.patch(url, [data], {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(
      () => {
        this.getEstudios();
      });
  }

  deleteEstudio(id: number): void {
    const url = `${this.estudiosUrl}?id=eq.${id}`;
    this.http.delete(url, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(() => {
      this.getEstudios();
    });
  }

/*  Para pedir uno solo, pero no se si sera utilizado

  getEstudio(id: number): void {
    const url = `${this.estudiosUrl}?id=eq.${id}`;
    this.http.get<AccreditedStudies[]>(url, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(() => {
      this.getEstudios();
    });
  }

*/
}
