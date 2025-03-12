import { DataTypes, Model } from 'sequelize';
export class Ticket extends Model {
}
export function TicketFactory(sequelize) {
    Ticket.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignedUserId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 'tickets',
        sequelize,
    });
    sequelize.sync({ force: false }) // This ensures the tables are created or updated if needed
        .then(() => {
        console.log("User table synced!");
    })
        .catch((error) => {
        console.error("Error syncing user table:", error);
    });
    return Ticket;
}
