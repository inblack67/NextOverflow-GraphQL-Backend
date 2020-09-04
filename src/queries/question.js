import { gql } from '@apollo/client';

export const getQuestionsQuery = gql`
query{
  questions{
    title
    description
    _id,
    user
    createdAt
  }
}
`;

export const addQuestionMutation = gql`
mutation{
  addQuestion(title:"oh no", description:"oh no", tags:"nextjs"){
    title
    description
    user
  }
}
`;

export const updateQuestionMutation = gql`
mutation{
  updateQuestion(title:"oh no one", id:"5f523abd443698098a3fe2ee"){
    title
    description
    user
    tags
  }
}
`;

export const deleteQuestionMutation = gql`
mutation{
  deleteQuestion(id:"5f523abd443698098a3fe2ee"){
    title
  }
}
`;