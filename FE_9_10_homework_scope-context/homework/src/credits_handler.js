function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [];
    const tax = 0.5;
    const percent = 100;


    return {
        getCardOptions() {
            return { key, balance, transactionLimit, historyLogs};
        },

        putCredits(amount) {
            balance += amount;

            historyLogs.push({
                operationType: 'Received credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        takeCredits(amount) {
            if (amount < transactionLimit && amount < balance) {
                balance -= amount;
            } else {
                console.log('You can not take credits');
            }
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });

        },

        setTransactionLimit(amount) {
            transactionLimit = amount;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        transferCredits(amount, recipientCard) {
            let creditWithTaxes = amount * tax / percent;
            if (creditWithTaxes > balance || creditWithTaxes > transactionLimit) {
                console.log('You can not transfer credit')
            } else {
                this.takeCredits(creditWithTaxes);
                recipientCard.putCredits(amount);
            }

        }

    };
}

class UserAccount {
    constructor(name){
        this.name = name;
        this.userCards = [];
        this.maxUserCards = 3;
    }
    
    addCard(){
        if(this.userCards.length < this.maxUserCards){
            this.userCards.push(userCard(this.userCards.length +1));
        } else {
            console.log('User should have <= 3 cards');
        }
    }

    getCardByKey(key){
        return this.userCards[key-1];
    }
}



