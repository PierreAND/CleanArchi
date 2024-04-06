export class PostModel {
  id: number;
  content: string;
  CreatedAt: Date;
  UpdateAt: Date;

  constructor(post: Partial<PostModel>) {
    Object.assign(this, post);
  }
}
