import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      password : '1234',
      bills: [
        { Service: "Water Bill-Apr 2023",Type:"Electricity", amount: 100, date: '2022-01-01' },
        { Service: "Land Line Bill-Apr 2023", Type:"Land Line", amount: 200, date: '2022-02-01' },
        
      ],
      recentPayment: [
        { Service: "Water Bill-Apr 2023",Type:"Electricity", amount: 100, date: '2022-01-01', PaymentType:'Cash' },
        { Service: "Land Line Bill-Apr 2023", Type:"Land Line", amount: 200, date: '2022-02-01',PaymentType:'Cash' },
        
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      password : '1234',

      bills: [
        { Service: "Water Bill-Apr 2023",Type:"Electricity", amount: 100, date: '2022-01-01' },
        { Service: "Land Line Bill-Apr 2023", Type:"Land Line", amount: 200, date: '2022-02-01' },
      ],
      recentPayment: [
        { Service: "Water Bill-Apr 2023",Type:"Electricity", amount: 100, date: '2022-01-01', PaymentType:'Cash' },
        { Service: "Land Line Bill-Apr 2023", Type:"Land Line", amount: 200, date: '2022-02-01',PaymentType:'Cash' },
        
      ]

    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      password : '1234',

      bills: [
        { Service: "Water Bill-Apr 2023",Type:"Electricity", amount: 100, date: '2022-01-01' },
        { Service: "Land Line Bill-Apr 2023", Type:"Land Line", amount: 200, date: '2022-02-01' },
      ],
      recentPayment: [
        { Service: "Water Bill-Apr 2023",Type:"Electricity", amount: 100, date: '2022-01-01', PaymentType:'Cash' },
        { Service: "Land Line Bill-Apr 2023", Type:"Land Line", amount: 200, date: '2022-02-01',PaymentType:'Cash' },
        
      ]

    }
  ];

  constructor() { }
  getUserBills(userId: number) {
    const user = this.getUserById(userId);
    if (user) {
      return user.bills;
    }
    return [];
  }
  getRecentPayment(userId: number) {
    const user = this.getUserById(userId);
    if (user) {
      return user.recentPayment;
    }
    return [];
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  addUser(user: any) {
    this.users.push(user);
  }

  updateUser(user: any) {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }

  
}
}
