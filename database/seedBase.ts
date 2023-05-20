import { Entry } from "./../models/context";

interface EntriesModel {
  entries: Entry[];
}

export const seedData: EntriesModel = {
  entries: [
    {
      title: "Este es mi nuevo titulo",
      description: "Leer un libro",
      status: "pending",
      createAt: new Date(),
      updateAt: new Date(),
    },
    {
      title: "Leer nuevo titulo",
      description: "Estudiar un libro",
      status: "inProgress",
      createAt: new Date(),
      updateAt: new Date(),
    },
    {
      title: "Pensar en el nuevo titulo",
      description: "Programar algo",
      status: "Completed",
      createAt: new Date(),
      updateAt: new Date(),
    },
  ],
};
