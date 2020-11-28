import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SpringfxqService {
  private  fxqUrl = 'http://192.168.0.161:4983/FXQ/';
  constructor(private http: HttpClient) {  }

  getAll(): Observable<any> {
    return this.http.get( '${fxqUrl}/slist');
  }

  getById(id: number): Observable<any> {
    return this.http.get( '${fxqUrl}/id/${id}');
  }

  findBySymbol(symbol: string): Observable<any> {
    return this.http.get( '${fxqUrl}/symbols/${symbol}');
  }

  findBySymbolTenor(symbol: string, tenor: string): Observable<any> {
    return this.http.get( '${fxqUrl}/symbols/${symbol}/tenor/${tenor}');
  }

}
