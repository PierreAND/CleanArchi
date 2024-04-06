export class PostModel {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;

  constructor(post: Partial<PostModel>) {
    Object.assign(this, post);
  }
}
