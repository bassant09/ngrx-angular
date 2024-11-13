import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { GET_EI_AMBASSADORS_QUERY } from '../graphql/application.queries.graphql';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private apollo: Apollo) {}

  fetchApplications(): Observable<any> {
    return this.apollo
      .query({
        query: GET_EI_AMBASSADORS_QUERY,
        variables:{
          educational_institution_id:44480,
          page:1,
          per_page:20

        },
        fetchPolicy:'no-cache'
      })
      .pipe(map((result: any) => result.data.eiAmbassadors.data));
  }
}
