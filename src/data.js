// data.js

const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 25,
      city: 'New York'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      age: 30,
      city: 'Los Angeles'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      age: 28,
      city: 'Chicago'
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.brown@example.com',
      age: 35,
      city: 'Houston'
    },
    {
      id: 5,
      name: 'William Wilson',
      email: 'william.wilson@example.com',
      age: 22,
      city: 'Miami'
    },
    {
      id: 6,
      name: 'Sarah Anderson',
      email: 'sarah.anderson@example.com',
      age: 27,
      city: 'Seattle'
    },
    {
      id: 7,
      name: 'Daniel Martinez',
      email: 'daniel.martinez@example.com',
      age: 33,
      city: 'Dallas'
    },
    {
      id: 8,
      name: 'Olivia Lopez',
      email: 'olivia.lopez@example.com',
      age: 29,
      city: 'Phoenix'
    },
    {
      id: 9,
      name: 'James Taylor',
      email: 'james.taylor@example.com',
      age: 26,
      city: 'Philadelphia'
    },
    {
      id: 10,
      name: 'Sophia Jackson',
      email: 'sophia.jackson@example.com',
      age: 31,
      city: 'San Francisco'
    },
    {
      id: 11,
      name: 'Liam Turner',
      email: 'liam.turner@example.com',
      age: 29,
      city: 'Portland'
    },
    {
      id: 12,
      name: 'Ava Moore',
      email: 'ava.moore@example.com',
      age: 34,
      city: 'Denver'
    },
    {
      id: 13,
      name: 'Noah Reed',
      email: 'noah.reed@example.com',
      age: 32,
      city: 'Atlanta'
    },
    {
      id: 14,
      name: 'Isabella Harris',
      email: 'isabella.harris@example.com',
      age: 28,
      city: 'Detroit'
    },
    {
      id: 15,
      name: 'Mason Martin',
      email: 'mason.martin@example.com',
      age: 25,
      city: 'Minneapolis'
    },
    {
      id: 16,
      name: 'Charlotte King',
      email: 'charlotte.king@example.com',
      age: 30,
      city: 'Orlando'
    },
    {
      id: 17,
      name: 'Lucas Lewis',
      email: 'lucas.lewis@example.com',
      age: 27,
      city: 'San Antonio'
    },
    {
      id: 18,
      name: 'Amelia Allen',
      email: 'amelia.allen@example.com',
      age: 33,
      city: 'Las Vegas'
    },
    {
      id: 19,
      name: 'Ethan Carter',
      email: 'ethan.carter@example.com',
      age: 29,
      city: 'Salt Lake City'
    },
    {
      id: 20,
      name: 'Ella Perez',
      email: 'ella.perez@example.com',
      age: 26,
      city: 'Austin'
    },
    {
      id: 21,
      name: 'Sophie Harris',
      email: 'sophie.harris@example.com',
      age: 33,
      city: 'New York'
    },
    {
      id: 22,
      name: 'James Miller',
      email: 'james.miller@example.com',
      age: 30,
      city: 'Los Angeles'
    },
    {
      id: 23,
      name: 'Liam Brown',
      email: 'liam.brown@example.com',
      age: 29,
      city: 'Chicago'
    },
    {
      id: 24,
      name: 'Ava Wilson',
      email: 'ava.wilson@example.com',
      age: 26,
      city: 'Houston'
    },
    {
      id: 25,
      name: 'Noah Turner',
      email: 'noah.turner@example.com',
      age: 25,
      city: 'Miami'
    },
    {
      id: 26,
      name: 'Isabella Anderson',
      email: 'isabella.anderson@example.com',
      age: 28,
      city: 'Seattle'
    },
    {
      id: 27,
      name: 'Mason Martinez',
      email: 'mason.martinez@example.com',
      age: 31,
      city: 'Dallas'
    },
    {
      id: 28,
      name: 'Charlotte Lopez',
      email: 'charlotte.lopez@example.com',
      age: 27,
      city: 'Phoenix'
    },
    {
      id: 29,
      name: 'Lucas Taylor',
      email: 'lucas.taylor@example.com',
      age: 32,
      city: 'Philadelphia'
    },
    {
      id: 30,
      name: 'Amelia Jackson',
      email: 'amelia.jackson@example.com',
      age: 30,
      city: 'San Francisco'
    },
    {
      id: 31,
      name: 'Sophia Turner',
      email: 'sophia.turner@example.com',
      age: 29,
      city: 'Portland'
    },
    {
      id: 32,
      name: 'James Moore',
      email: 'james.moore@example.com',
      age: 34,
      city: 'Denver'
    },
    {
      id: 33,
      name: 'Liam Reed',
      email: 'liam.reed@example.com',
      age: 32,
      city: 'Atlanta'
    },
    {
      id: 34,
      name: 'Ava Harris',
      email: 'ava.harris@example.com',
      age: 28,
      city: 'Detroit'
    },
    {
      id: 35,
      name: 'Noah Martin',
      email: 'noah.martin@example.com',
      age: 25,
      city: 'Minneapolis'
    },
    {
      id: 36,
      name: 'Isabella King',
      email: 'isabella.king@example.com',
      age: 30,
      city: 'Orlando'
    },
    {
      id: 37,
      name: 'Mason Lewis',
      email: 'mason.lewis@example.com',
      age: 27,
      city: 'San Antonio'
    },
    {
      id: 38,
      name: 'Charlotte Allen',
      email: 'charlotte.allen@example.com',
      age: 33,
      city: 'Las Vegas'
    },
    {
      id: 39,
      name: 'Lucas Carter',
      email: 'lucas.carter@example.com',
      age: 29,
      city: 'Salt Lake City'
    },
    {
      id: 40,
      name: 'Amelia Perez',
      email: 'amelia.perez@example.com',
      age: 26,
      city: 'Austin'
    },
    {
      id: 41,
      name: 'Sophie Harris',
      email: 'sophie.harris@example.com',
      age: 33,
      city: 'New York'
    },
    {
      id: 42,
      name: 'James Miller',
      email: 'james.miller@example.com',
      age: 30,
      city: 'Los Angeles'
    },
    {
      id: 43,
      name: 'Liam Brown',
      email: 'liam.brown@example.com',
      age: 29,
      city: 'Chicago'
    },
    {
      id: 44,
      name: 'Ava Wilson',
      email: 'ava.wilson@example.com',
      age: 26,
      city: 'Houston'
    },
    {
      id: 45,
      name: 'Noah Turner',
      email: 'noah.turner@example.com',
      age: 25,
      city: 'Miami'
    },
    {
      id: 46,
      name: 'Isabella Anderson',
      email: 'isabella.anderson@example.com',
      age: 28,
      city: 'Seattle'
    },
    {
      id: 47,
      name: 'Mason Martinez',
      email: 'mason.martinez@example.com',
      age: 31,
      city: 'Dallas'
    },
    {
      id: 48,
      name: 'Charlotte Lopez',
      email: 'charlotte.lopez@example.com',
      age: 27,
      city: 'Phoenix'
    },
    {
      id: 49,
      name: 'Lucas Taylor',
      email: 'lucas.taylor@example.com',
      age: 32,
      city: 'Philadelphia'
    },
    {
      id: 50,
      name: 'Amelia Jackson',
      email: 'amelia.jackson@example.com',
      age: 30,
      city: 'San Francisco'
    },
    {
      id: 51,
      name: 'Sophia Turner',
      email: 'sophia.turner@example.com',
      age: 29,
      city: 'Portland'
    },
    {
      id: 52,
      name: 'James Moore',
      email: 'james.moore@example.com',
      age: 34,
      city: 'Denver'
    },
    {
      id: 53,
      name: 'Liam Reed',
      email: 'liam.reed@example.com',
      age: 32,
      city: 'Atlanta'
    },
    {
      id: 54,
      name: 'Ava Harris',
      email: 'ava.harris@example.com',
      age: 28,
      city: 'Detroit'
    },
    {
      id: 55,
      name: 'Noah Martin',
      email: 'noah.martin@example.com',
      age: 25,
      city: 'Minneapolis'
    },
    {
      id: 56,
      name: 'Isabella King',
      email: 'isabella.king@example.com',
      age: 30,
      city: 'Orlando'
    },
    {
      id: 57,
      name: 'Mason Lewis',
      email: 'mason.lewis@example.com',
      age: 27,
      city: 'San Antonio'
    },
    {
      id: 58,
      name: 'Charlotte Allen',
      email: 'charlotte.allen@example.com',
      age: 33,
      city: 'Las Vegas'
    },
    {
      id: 59,
      name: 'Lucas Carter',
      email: 'lucas.carter@example.com',
      age: 29,
      city: 'Salt Lake City'
    },
    {
      id: 60,
      name: 'Amelia Perez',
      email: 'amelia.perez@example.com',
      age: 26,
      city: 'Austin'
    },
    {
      id: 61,
      name: 'Sophie Harris',
      email: 'sophie.harris@example.com',
      age: 33,
      city: 'New York'
    },
    {
      id: 62,
      name: 'James Miller',
      email: 'james.miller@example.com',
      age: 30,
      city: 'Los Angeles'
    },
    {
      id: 63,
      name: 'Liam Brown',
      email: 'liam.brown@example.com',
      age: 29,
      city: 'Chicago'
    },
    {
      id: 64,
      name: 'Ava Wilson',
      email: 'ava.wilson@example.com',
      age: 26,
      city: 'Houston'
    },
    {
      id: 65,
      name: 'Noah Turner',
      email: 'noah.turner@example.com',
      age: 25,
      city: 'Miami'
    },
    {
      id: 66,
      name: 'Isabella Anderson',
      email: 'isabella.anderson@example.com',
      age: 28,
      city: 'Seattle'
    },
    {
      id: 67,
      name: 'Mason Martinez',
      email: 'mason.martinez@example.com',
      age: 31,
      city: 'Dallas'
    },
    {
      id: 68,
      name: 'Charlotte Lopez',
      email: 'charlotte.lopez@example.com',
      age: 27,
      city: 'Phoenix'
    },
    {
      id: 69,
      name: 'Lucas Taylor',
      email: 'lucas.taylor@example.com',
      age: 32,
      city: 'Philadelphia'
    },
    {
      id: 70,
      name: 'Amelia Jackson',
      email: 'amelia.jackson@example.com',
      age: 30,
      city: 'San Francisco'
    },
    {
      id: 71,
      name: 'Sophia Turner',
      email: 'sophia.turner@example.com',
      age: 29,
      city: 'Portland'
    },
    {
      id: 72,
      name: 'James Moore',
      email: 'james.moore@example.com',
      age: 34,
      city: 'Denver'
    },
    {
      id: 73,
      name: 'Liam Reed',
      email: 'liam.reed@example.com',
      age: 32,
      city: 'Atlanta'
    },
    {
      id: 74,
      name: 'Ava Harris',
      email: 'ava.harris@example.com',
      age: 28,
      city: 'Detroit'
    },
    {
      id: 75,
      name: 'Noah Martin',
      email: 'noah.martin@example.com',
      age: 25,
      city: 'Minneapolis'
    },
    {
      id: 76,
      name: 'Isabella King',
      email: 'isabella.king@example.com',
      age: 30,
      city: 'Orlando'
    },
    {
      id: 77,
      name: 'Mason Lewis',
      email: 'mason.lewis@example.com',
      age: 27,
      city: 'San Antonio'
    },
    {
      id: 78,
      name: 'Charlotte Allen',
      email: 'charlotte.allen@example.com',
      age: 33,
      city: 'Las Vegas'
    },
    {
      id: 79,
      name: 'Lucas Carter',
      email: 'lucas.carter@example.com',
      age: 29,
      city: 'Salt Lake City'
    },
    {
      id: 80,
      name: 'Amelia Perez',
      email: 'amelia.perez@example.com',
      age: 26,
      city: 'Austin'
    },
    {
      id: 81,
      name: 'Sophie Harris',
      email: 'sophie.harris@example.com',
      age: 33,
      city: 'New York'
    },
    {
      id: 82,
      name: 'James Miller',
      email: 'james.miller@example.com',
      age: 30,
      city: 'Los Angeles'
    },
    {
      id: 83,
      name: 'Liam Brown',
      email: 'liam.brown@example.com',
      age: 29,
      city: 'Chicago'
    },
    {
      id: 84,
      name: 'Ava Wilson',
      email: 'ava.wilson@example.com',
      age: 26,
      city: 'Houston'
    },
    {
      id: 85,
      name: 'Noah Turner',
      email: 'noah.turner@example.com',
      age: 25,
      city: 'Miami'
    },
    {
      id: 86,
      name: 'Isabella Anderson',
      email: 'isabella.anderson@example.com',
      age: 28,
      city: 'Seattle'
    },
    {
      id: 87,
      name: 'Mason Martinez',
      email: 'mason.martinez@example.com',
      age: 31,
      city: 'Dallas'
    },
    {
      id: 88,
      name: 'Charlotte Lopez',
      email: 'charlotte.lopez@example.com',
      age: 27,
      city: 'Phoenix'
    },
    {
      id: 89,
      name: 'Lucas Taylor',
      email: 'lucas.taylor@example.com',
      age: 32,
      city: 'Philadelphia'
    },
    {
      id: 90,
      name: 'Amelia Jackson',
      email: 'amelia.jackson@example.com',
      age: 30,
      city: 'San Francisco'
    },
    {
      id: 91,
      name: 'Sophia Turner',
      email: 'sophia.turner@example.com',
      age: 29,
      city: 'Portland'
    },
    {
      id: 92,
      name: 'James Moore',
      email: 'james.moore@example.com',
      age: 34,
      city: 'Denver'
    },
    {
      id: 93,
      name: 'Liam Reed',
      email: 'liam.reed@example.com',
      age: 32,
      city: 'Atlanta'
    },
    {
      id: 94,
      name: 'Ava Harris',
      email: 'ava.harris@example.com',
      age: 28,
      city: 'Detroit'
    },
    {
      id: 95,
      name: 'Noah Martin',
      email: 'noah.martin@example.com',
      age: 25,
      city: 'Minneapolis'
    },
    {
      id: 96,
      name: 'Isabella King',
      email: 'isabella.king@example.com',
      age: 30,
      city: 'Orlando'
    },
    {
      id: 97,
      name: 'Mason Lewis',
      email: 'mason.lewis@example.com',
      age: 27,
      city: 'San Antonio'
    },
    {
      id: 98,
      name: 'Charlotte Allen',
      email: 'charlotte.allen@example.com',
      age: 33,
      city: 'Las Vegas'
    },
    {
      id: 99,
      name: 'Lucas Carter',
      email: 'lucas.carter@example.com',
      age: 29,
      city: 'Salt Lake City'
    },
    {
      id: 100,
      name: 'Amelia Perez',
      email: 'amelia.perez@example.com',
      age: 26,
      city: 'Austin'
    }
  ];
  
  export default users;
  