import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;

  constructor() {
    this.sqlite = new SQLiteConnection(Capacitor);
  }

  async initializeDatabase(): Promise<void> {
    try {
      // Removed isAvailable check as it is not available on CapacitorSQLitePlugin
      this.db = await this.sqlite.createConnection('quickbite.db', false, 'no-encryption', 1, false);
      await this.db.open();

      await this.createTables();
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) {
      throw new Error('Database not initialized.');
    }

    // Example schema: categories, products, sellers tables
    const createCategoriesTable = `
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        image TEXT
      );
    `;

    const createProductsTable = `
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        category_id INTEGER,
        price REAL,
        image TEXT,
        FOREIGN KEY (category_id) REFERENCES categories(id)
      );
    `;

    const createSellersTable = `
      CREATE TABLE IF NOT EXISTS sellers (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        rating REAL
      );
    `;

    await this.db.execute(createCategoriesTable);
    await this.db.execute(createProductsTable);
    await this.db.execute(createSellersTable);
  }

  // Add more CRUD methods as needed
}
