import {environment} from "../../environments/environment";

const {API:baseUrl} = environment;

export const urls = {
  comments: `${baseUrl}/comments`,
  posts: `${baseUrl}/posts`,
  users: `${baseUrl}/users`,
}
