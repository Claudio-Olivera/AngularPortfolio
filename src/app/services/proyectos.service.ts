import { Projects } from 'src/app/Interfaces/IProjects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private proyectosUrl = environment.supabase.proyectosUrl;
  private $dataProyectos = new BehaviorSubject<Projects[]>([
    {
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      link: '',
      user_id: ''
    }
  ])

  constructor(private http: HttpClient) {
    this.getProyectos()
  }

  /* Este metodo es al cual los componentes solicitan los datos */
  getDataProyectos(): Observable<Projects[]> {
    return this.$dataProyectos.asObservable()
  }

  getProyectos(): void {
    const url = `${this.proyectosUrl}?select=*`
    this.http.get<Projects[]>(url, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(data => {
      this.$dataProyectos.next(data);
      console.log("recibo datos desde fuera")
    })
  }

  postProyecto(data: Projects): void {
    const url = this.proyectosUrl
    this.http.post(url, [data], {
      headers: new HttpHeaders({ 'HeaderInterceptor': 'true' })
    }).subscribe(() => {
      this.getProyectos();
    });
  }

  patchProyecto(id: number, data: Projects): void {
    const url = `${this.proyectosUrl}?id=eq.${id}`;
    this.http.patch(url, [data], {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(
      () => {
        this.getProyectos();
      });
  }

  deleteProyecto(id: number): void {
    const url = `${this.proyectosUrl}?id=eq.${id}`;
    this.http.delete(url, {
      headers: new HttpHeaders({
        'HeaderInterceptor': 'true'
      })
    }).subscribe(() => {
      this.getProyectos();
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




  /* private baseURL = environment.supabase.proyectosUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      apikey: environment.supabase.publickey
    });
  }
  getProyectos(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.baseURL}?select=*`, {
      headers: this.headers
    });
  }

  postProyecto(data: Projects): Observable<any> {
    return this.http.post(this.baseURL, [data], { headers: this.headers });
  }

  patchProyecto(id: number, data: Projects): Observable<any> {
    const url = `${this.baseURL}?id=eq.${id}`;
    return this.http.patch(url, [data], { headers: this.headers });
  }

  deleteProyecto(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}?id=eq.${id}`, { headers: this.headers });
  }

  getProyecto(id: number): Observable<Projects[]> {
    const url = `${this.baseURL}?id=eq.${id}`;
    return this.http.get<Projects[]>(url, { headers: this.headers });
  }
} */
