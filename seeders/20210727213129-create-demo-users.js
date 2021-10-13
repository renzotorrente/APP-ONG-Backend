'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'User',
      [
        {
          firstName: 'Test',
          lastName: 'Admin',
          email: 'test.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Alphine linux',
          lastName: 'Member',
          email: 'Alphine linux.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Doker',
          lastName: 'Admin',
          email: 'Doker.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Kubernet',
          lastName: 'Member',
          email: 'Kubernet.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Ubuntu',
          lastName: 'Admin',
          email: 'Ubuntu.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Goku',
          lastName: 'Member',
          email: 'Goku.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Gohan',
          lastName: 'Admin',
          email: 'Gohan.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'MajinBu',
          lastName: 'Member',
          email: 'MajinBu.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Lorem',
          lastName: 'Admin',
          email: 'Lorem.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Inuyasha',
          lastName: 'Member',
          email: 'Inuyasha.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Naruto',
          lastName: 'Admin',
          email: 'Naruto.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Sasuke',
          lastName: 'Member',
          email: 'Sasuke.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Kakashi',
          lastName: 'Admin',
          email: 'Kakashi.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Pain',
          lastName: 'Member',
          email: 'Pain.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Madara',
          lastName: 'Admin',
          email: 'Madara.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Vegetta',
          lastName: 'Member',
          email: 'Vegetta.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Sakura',
          lastName: 'Admin',
          email: 'Sakura.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'Hinata',
          lastName: 'Member',
          email: 'Hinata.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'RockLee',
          lastName: 'Admin',
          email: 'RockLee.admin@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'admin',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          firstName: 'MaitoGai',
          lastName: 'Member',
          email: 'MaitoGai.member@gmail.com',
          password:
            '$2b$10$vtXnPAabBmFu.TW1tswCSeanFhci2kPX82EHi.bvp.IOe.0KjdaD.',
          role: 'member',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
