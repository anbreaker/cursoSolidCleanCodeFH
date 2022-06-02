import { PostService } from './05-dependency-b';
import {
  JsonDatabaseService,
  LocalDataBaseService,
  WebApiPostService,
} from './05-dependency-c';

// Main
(async () => {
  // const provider = new JsonDatabaseService();
  const provider = new LocalDataBaseService();
  const providerWeb = new WebApiPostService();

  const postServiceLocal = new PostService(provider);
  const postServiceWeb = new PostService(providerWeb);

  const postsLocal = await postServiceLocal.getPosts();
  const postsWeb = await postServiceWeb.getPosts();

  console.log({ posts: postsLocal });
  console.log({ posts: postsWeb });
})();
