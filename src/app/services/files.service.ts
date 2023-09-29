import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';
import { environment } from '../environments/environments';

interface File {
  originalName: string;
  fileName: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.API_URL}/api/files`;

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((content) => {
        const blob = new Blob([content], { type });
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<File>(`${this.apiUrl}/upload`, dto, {
      // headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
