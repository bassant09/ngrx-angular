import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { USER_LOGIN } from '../../../features/application/graphql/application.queries.graphql';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo:Apollo) { }
  userLogin(email: string, password: string, educationalInstitutionId: number) {
    return this.apollo.mutate({
      mutation: USER_LOGIN,
      variables: {
        email: email,
        password: password,
        educational_institution_id: educationalInstitutionId,
      },
    });
  }
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
}
