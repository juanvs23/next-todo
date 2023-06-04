import { Entry } from './../models/context';

interface EntriesModel {
  entries: Entry[];
}

export const seedData: EntriesModel = {
  entries: [
    {
      title: 'Este es mi nuevo titulo',
      description: 'Leer un libro',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Leer nuevo titulo',
      description: 'Estudiar un libro',
      status: 'inProgress',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Pensar en el nuevo titulo',
      description: 'Programar algo',
      status: 'Completed',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
