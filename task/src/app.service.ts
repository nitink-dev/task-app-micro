import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly tasks = [
    { id: 1, name: 'Painting' },
    { id: 2, name: 'Gardening' },
    { id: 3, name: 'Plumbing' },
  ];

  getTasks(): any {
    return this.tasks;
  }
}
