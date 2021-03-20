import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private apollo: Apollo) { }

  getItems(slug: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query Organization($slug: String!) {
          organization(slug: $slug) {
            items{
              id
              imageUrl
              name
              price
              description
              category{
                id
                name
              }    
            }
            categories{
              id
              name
            }
          }
        }
      `,
      variables: {slug: slug,},
    }).valueChanges;
  }

  getItem(id: number): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query Item($id: ID!) {
          item(id: $id){
            imageUrl
            name
            price
            description
            category{
              name
            }    
          }
        }
      `,
      variables: {id: id,},
    }).valueChanges;
  }

  getOrganization(slug: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query Organization($slug: String!) {
          organization(slug: $slug) {
            id
            name
            address
            phone
            imageUrl
          }
        }
      `,
      variables: {slug: slug,},
    }).valueChanges;
  }
}
