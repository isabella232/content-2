import type * as Types from './types';

import type { EmailListPartsFragment } from './EmailListParts';
import { gql } from '@apollo/client';
import { EmailListPartsFragmentDoc } from './EmailListParts';
import * as Apollo from '@apollo/client';
export type EmailListsBySlugQueryVariables = Types.Exact<{
  slug: Array<Types.Maybe<Types.Scalars['String']>>;
}>;


export type EmailListsBySlugQuery = { __typename?: 'RootQuery', emailLists?: Types.Maybe<{ __typename?: 'RootQueryToEmailListConnection', nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'EmailList', emails?: Types.Maybe<{ __typename?: 'EmailListToEmailConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Email', emailId: number }>>> }> }
      & EmailListPartsFragment
    )>>> }> };


export const EmailListsBySlugDocument = /*#__PURE__*/ gql`
    query EmailListsBySlug($slug: [String]!) {
  emailLists(where: {slug: $slug}) {
    nodes {
      ...EmailListParts
      emails(first: 1) {
        nodes {
          emailId
        }
      }
    }
  }
}
    ${EmailListPartsFragmentDoc}`;

/**
 * __useEmailListsBySlugQuery__
 *
 * To run a query within a React component, call `useEmailListsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmailListsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmailListsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useEmailListsBySlugQuery(baseOptions: Apollo.QueryHookOptions<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>) {
        return Apollo.useQuery<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>(EmailListsBySlugDocument, baseOptions);
      }
export function useEmailListsBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>) {
          return Apollo.useLazyQuery<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>(EmailListsBySlugDocument, baseOptions);
        }
export type EmailListsBySlugQueryHookResult = ReturnType<typeof useEmailListsBySlugQuery>;
export type EmailListsBySlugLazyQueryHookResult = ReturnType<typeof useEmailListsBySlugLazyQuery>;
export type EmailListsBySlugQueryResult = Apollo.QueryResult<EmailListsBySlugQuery, EmailListsBySlugQueryVariables>;