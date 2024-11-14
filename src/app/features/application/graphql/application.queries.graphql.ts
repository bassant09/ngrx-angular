import gql from 'graphql-tag';

export const GET_EI_AMBASSADORS_QUERY = gql`
  query GetEIAmbassadors(
    $educational_institution_id: Int!
    $page: Int!
    $per_page: Int!
    $filter_params: UserFilterInput
    $searchUserNames: String
    $sort_by: String
  ) {
    eiAmbassadors(
      educational_institution_id: $educational_institution_id
      page: $page
      per_page: $per_page
      filter_params: $filter_params
      searchUserNames: $searchUserNames
      sort_by: $sort_by
    ) {
      data {
        id
        online
        about_me
        name
        current_level {
          id
          name
        }
        profile_picture {
          id
          url
        }
        cover_picture {
          id
          url
        }
        nationality
        user_preference {
          disciplines {
            name
          }
        }
        user_languages {
          id
          language {
            id
            name
          }
        }
        educational_qualifications {
          edges {
            node {
              id
              level {
                id
                name
              }
              majors {
                id
                name
              }
              institution_logo {
                id
                url
              }
              educational_institution {
                id
                name
              }
              from_year
              to_year
            }
          }
        }
        ambassador {
          id
          conversations_count
          messages_count
        }
        latest_qualification {
          from_year
          to_year
        }
      }
      paging {
        total_items
        total_pages
        current_page
      }
    }
  }
`;
export const USER_LOGIN = gql`
    mutation UserLogin($email: String, $password: String, $educational_institution_id: Int) {
      userLogin(email: $email, password: $password, educational_institution_id: $educational_institution_id) {
        access_token
      }
    }
  `;