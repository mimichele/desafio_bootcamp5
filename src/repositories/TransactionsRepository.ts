import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO{
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];
 // private balance: Balance ={income: 0,outcome: 0, total: 0};

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {   
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    var incomes = this.transactions.filter(transaction => transaction.type ==='income'); 

    var somai = incomes.reduce((soma, income) =>{
        return soma +income.value;
    }, 0 );

    var outcomes = this.transactions.filter(transaction => transaction.type ==='outcome');

    var somao = outcomes.reduce((soma, outcome) =>{
        return soma +outcome.value;
    }, 0 );

     const total = somai-somao;

     const balance = {
      income: somai,
      outcome: somao,
      total: total
     };

     return  balance;
  }

  public create({title, value, type}: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({title, value, type});

    this.transactions.push(transaction);

    return transaction;
  }

}

export default TransactionsRepository;
